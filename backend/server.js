const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");

dotenv.config();

const sequelize = require("./db");
const Settings = require("./models/Settings");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ---------- Helpers ----------
function safeJsonParse(value, fallback = {}) {
  if (value == null) return fallback;
  if (typeof value === "object") return value; // already an object
  if (typeof value !== "string") return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function normalizeSettingsRow(row) {
  const data = row?.toJSON ? row.toJSON() : row;

  // Convert DB values to objects consistently
  data.theme = safeJsonParse(data.theme, { mode: "light", primaryColor: "#2563eb" });
  data.smtp = safeJsonParse(data.smtp, {});
  data.gateway = safeJsonParse(data.gateway, {});

  return data;
}

function serializeSettingsBody(body) {
  const out = { ...body };

  // Convert objects to JSON strings when saving (works whether MySQL column is JSON or TEXT)
  if (out.theme && typeof out.theme === "object") out.theme = JSON.stringify(out.theme);
  if (out.smtp && typeof out.smtp === "object") out.smtp = JSON.stringify(out.smtp);
  if (out.gateway && typeof out.gateway === "object") out.gateway = JSON.stringify(out.gateway);

  return out;
}

// ---------- Connect DB ----------
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("MySQL connected");
  } catch (err) {
    console.error("DB error:", err.message);
  }
})();

// ---------- Routes ----------

// GET /api/settings
app.get("/api/settings", async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});

    return res.json(normalizeSettingsRow(settings));
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PUT /api/settings
app.put("/api/settings", async (req, res) => {
  try {
    // Make sure we do not wipe other sections if frontend sends partial updates
    // Read current row first and merge
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});

    const current = normalizeSettingsRow(settings);

    // Merge current + incoming
    const merged = {
      ...current,
      ...req.body,
      theme: req.body.theme ?? current.theme,
      smtp: req.body.smtp ?? current.smtp,
      gateway: req.body.gateway ?? current.gateway,
    };

    const toSave = serializeSettingsBody(merged);

    await settings.update(toSave);

    // Re-fetch fresh and return normalized
    const fresh = await Settings.findOne();
    return res.json(normalizeSettingsRow(fresh));
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

// POST /api/settings/test-smtp
app.post("/api/settings/test-smtp", async (req, res) => {
  const { recipientEmail } = req.body;
  if (!recipientEmail) return res.status(400).json({ message: "recipientEmail is required" });

  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});

    const normalized = normalizeSettingsRow(settings);
    const smtp = normalized.smtp || {};

    if (!smtp.host || !smtp.port || !smtp.user || !smtp.pass) {
      return res.status(400).json({ message: "SMTP settings are incomplete. Save SMTP settings first." });
    }

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: Number(smtp.port),
      secure: String(smtp.encryption || "").toUpperCase() === "SSL",
      auth: { user: smtp.user, pass: smtp.pass },
    });

    await transporter.sendMail({
      from: `"${smtp.fromName || "Admin Panel"}" <${smtp.fromEmail || smtp.user}>`,
      to: recipientEmail,
      subject: "Test Email",
      text: "This is a test email from your SMTP configuration.",
    });

    return res.json({ message: "Test email sent successfully!" });
  } catch (err) {
    return res.status(500).json({ message: "Failed to send test email", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/api/settings/gateway", async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});
    const normalized = normalizeSettingsRow(settings);
    res.json(normalized.gateway || {});
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.put("/api/settings/gateway", async (req, res) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});
    const current = normalizeSettingsRow(settings);

    const merged = {
      ...current,
      gateway: req.body || current.gateway,
    };

    await settings.update(serializeSettingsBody(merged));

    const fresh = await Settings.findOne();
    res.json(normalizeSettingsRow(fresh).gateway || {});
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
