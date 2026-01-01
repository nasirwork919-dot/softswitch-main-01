"use client";

import React from 'react';
import ModulePage from '../../components/common/ModulePage';
import { ShieldAlert } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <ModulePage
            title="Privacy Policy"
            description="Understand how we collect, use, and protect your data within the admin panel."
            icon={ShieldAlert}
        >
            <div className="p-6 sm:p-8 space-y-8 text-[var(--color-text)]">
                <div className="bg-[var(--color-card-background)] rounded-xl shadow-sm border border-[var(--color-border)] p-6 space-y-6">
                    <h2 className="text-2xl font-bold mb-4">Privacy Policy for SoftSwift Admin Panel</h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                        **Last Updated:** July 25, 2024
                    </p>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
                        <p className="text-sm leading-relaxed">
                            This Privacy Policy describes how [Your Company Name] ("we," "us," or "our") collects, uses, and discloses your personal information when you, as an administrator, access and use the [Your App Name] Admin Panel (the "Panel"). This policy specifically addresses data related to administrators and their activities within the Panel, separate from the data of end-users managed by the Panel.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">2. Information We Collect</h3>
                        <p className="text-sm leading-relaxed">
                            We collect various types of information to provide, maintain, and improve the Panel:
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                            <li>
                                <strong>Account Information:</strong> When you create or manage an administrator account, we collect personal details such as your name, email address, role, and contact information.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We automatically collect information about your interactions with the Panel, including login times, features accessed, actions performed (e.g., user modifications, content approvals), IP addresses, device information, browser type, and operating system. This data is crucial for security, auditing, and performance monitoring.
                            </li>
                            <li>
                                <strong>Communication Data:</strong> Records of any communications between you and our support team regarding your use of the Panel.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">3. How We Use Your Information</h3>
                        <p className="text-sm leading-relaxed">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                            <li>
                                <strong>To Provide and Maintain the Panel:</strong> To ensure the Panel functions correctly, authenticate your access, and manage your administrative privileges.
                            </li>
                            <li>
                                <strong>Security and Auditing:</strong> To monitor for unauthorized access, detect and prevent fraudulent activities, and maintain comprehensive audit trails of all administrative actions for accountability.
                            </li>
                            <li>
                                <strong>Troubleshooting and Support:</strong> To assist you with any technical issues or inquiries you may have while using the Panel.
                            </li>
                            <li>
                                <strong>Improvement of the Panel:</strong> To analyze usage patterns and feedback to enhance the Panel's features, usability, and overall performance.
                            </li>
                            <li>
                                <strong>Compliance:</strong> To fulfill our legal obligations, comply with applicable laws and regulations, and enforce our internal policies.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">4. Disclosure of Your Information</h3>
                        <p className="text-sm leading-relaxed">
                            We may disclose your information in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                            <li>
                                <strong>Internal Sharing:</strong> Your data may be shared with other internal teams (e.g., IT, security, management) within [Your Company Name] for operational, security, and auditing purposes.
                            </li>
                            <li>
                                <strong>Service Providers:</strong> We may engage third-party service providers (e.g., for hosting, analytics, security) who may have access to your data to perform services on our behalf, under strict confidentiality agreements.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> If required by law, court order, or governmental regulation, we may disclose your information.
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">5. Data Security</h3>
                        <p className="text-sm leading-relaxed">
                            We implement robust technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. These measures include data encryption, access controls, and regular security audits. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">6. Data Retention</h3>
                        <p className="text-sm leading-relaxed">
                            We retain your personal information for as long as your administrator account is active and for a reasonable period thereafter for audit purposes, legal compliance, and to resolve disputes. Usage data and audit logs may be retained for longer periods as required by law or internal security policies.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">7. Your Rights</h3>
                        <p className="text-sm leading-relaxed">
                            As an administrator, you have certain rights regarding your personal data, including the right to access, correct, or request deletion of your information. To exercise these rights, please contact us using the details provided below.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">8. Changes to This Privacy Policy</h3>
                        <p className="text-sm leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3">9. Contact Us</h3>
                        <p className="text-sm leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <p className="text-sm leading-relaxed mt-2">
                            Email: [Your Support Email Address]
                            <br />
                            Address: [Your Company Address, if applicable]
                        </p>
                    </section>
                </div>
            </div>
        </ModulePage>
    );
};

export default PrivacyPolicy;