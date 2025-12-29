"use client";

import React, { useState, useEffect } from 'react';
import { CreditCard, Key, Lock, DollarSign, Eye, EyeOff, Banknote, Landmark } from 'lucide-react'; // Added Banknote and Landmark icons
import axios from 'axios';
import { API_BASE_URL } from '../../api';
import ModulePage from '../../components/common/ModulePage';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'; // Import react-tabs components
import 'react-tabs/style/react-tabs.css'; // Import default styles for react-tabs

const GatewaySettingsForm = () => {
    const [settings, setSettings] = useState(null);
    const [activeTab, setActiveTab] = useState(0); // 0 for Auto, 1 for Manual

    // Auto Gateway States
    const [provider, setProvider] = useState('Stripe');
    const [apiKey, setApiKey] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [showSecretKey, setShowSecretKey] = useState(false);
    const [currency, setCurrency] = useState('USD');
    const [webhookUrl, setWebhookUrl] = useState('');

    // Manual Gateway States
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [iban, setIban] = useState('');
    const [swiftCode, setSwiftCode] = useState('');
    const [manualCurrency, setManualCurrency] = useState('USD'); // Separate currency for manual

    useEffect(() => {
        const fetchSettings = async () => {
            try {
              const response = await axios.get(`${API_BASE_URL}/settings`);
              setSettings(response.data);

              const gatewaySettings = response.data.gateway || {};
              // Auto settings
              setProvider(gatewaySettings.provider || "Stripe");
              setApiKey(gatewaySettings.apiKey || "");
              setSecretKey(gatewaySettings.secretKey || "");
              setCurrency(gatewaySettings.currency || "USD");
              setWebhookUrl(gatewaySettings.webhookUrl || "");
              // Manual settings
              setBankName(gatewaySettings.bankName || "");
              setAccountNumber(gatewaySettings.accountNumber || "");
              setIban(gatewaySettings.iban || "");
              setSwiftCode(gatewaySettings.swiftCode || "");
              setManualCurrency(gatewaySettings.manualCurrency || "USD");

            } catch (error) {
                console.error('Failed to fetch Gateway settings:', error);
            }
        };
        fetchSettings();
    }, []);

    const handleSaveSettings = async () => {
        try {
            const gatewayData = {
                // Auto settings
                provider: provider,
                apiKey: apiKey,
                secretKey: secretKey,
                currency: currency,
                webhookUrl: webhookUrl,
                // Manual settings
                bankName: bankName,
                accountNumber: accountNumber,
                iban: iban,
                swiftCode: swiftCode,
                manualCurrency: manualCurrency,
            };
            if (!settings) return alert("Settings not loaded yet.");

            const payload = {
              ...settings,        // keeps theme + smtp
              gateway: gatewayData,
            };

            const res = await axios.put(`${API_BASE_URL}/settings`, payload);
            setSettings(res.data);
            alert("Gateway settings saved successfully!");

        } catch (error) {
            console.error('Failed to save Gateway settings:', error);
            alert('Failed to save Gateway settings. Please check console for details.');
        }
    };

    return (
        <ModulePage
            title="Payment Gateway"
            description="Configure your payment gateway for secure transactions."
            icon={CreditCard}
        >
            <div className="p-6 sm:p-8 space-y-8">
                <div className="bg-[var(--color-card-background)] rounded-xl shadow-sm border border-[var(--color-border)] p-6">
                    <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Gateway Configuration</h2>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                        Set up your preferred payment gateway and API credentials.
                    </p>

                    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                        <TabList className="flex border-b border-gray-200 mb-6">
                            <Tab className="px-4 py-2 -mb-px text-sm font-medium text-gray-600 border-b-2 border-transparent cursor-pointer hover:text-blue-600 hover:border-blue-300 ui-selected:text-blue-600 ui-selected:border-blue-600">
                                Auto Gateway
                            </Tab>
                            <Tab className="px-4 py-2 -mb-px text-sm font-medium text-gray-600 border-b-2 border-transparent cursor-pointer hover:text-blue-600 hover:border-blue-300 ui-selected:text-blue-600 ui-selected:border-blue-600">
                                Manual Gateway
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Provider */}
                                <div>
                                    <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-2">
                                        Payment Provider
                                    </label>
                                    <select
                                        id="provider"
                                        value={provider}
                                        onChange={(e) => setProvider(e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'right 1rem center'
                                        }}
                                    >
                                        <option value="Stripe">Stripe</option>
                                        <option value="PayPal">PayPal</option>
                                        <option value="Square">Square</option>
                                    </select>
                                </div>

                                {/* API Key */}
                                <div>
                                    <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
                                        API Key
                                    </label>
                                    <div className="relative">
                                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="apiKey"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            placeholder="Enter API Key"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Secret Key */}
                                <div>
                                    <label htmlFor="secretKey" className="block text-sm font-medium text-gray-700 mb-2">
                                        Secret Key
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type={showSecretKey ? 'text' : 'password'}
                                            id="secretKey"
                                            value={secretKey}
                                            onChange={(e) => setSecretKey(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowSecretKey(!showSecretKey)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showSecretKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Currency */}
                                <div>
                                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                                        Default Currency
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <select
                                            id="currency"
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 1rem center'
                                            }}
                                        >
                                            <option value="USD">USD - United States Dollar</option>
                                            <option value="EUR">EUR - Euro</option>
                                            <option value="GBP">GBP - British Pound</option>
                                            <option value="PKR">PKR - Pakistani Rupee</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Webhook URL */}
                                <div className="md:col-span-2">
                                    <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-700 mb-2">
                                        Webhook URL (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="webhookUrl"
                                        value={webhookUrl}
                                        onChange={(e) => setWebhookUrl(e.target.value)}
                                        placeholder="e.g., https://yourdomain.com/webhook"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                    />
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                        Endpoint for receiving payment notifications.
                                    </p>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Bank Name */}
                                <div>
                                    <label htmlFor="bankName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Bank Name
                                    </label>
                                    <div className="relative">
                                        <Landmark className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="bankName"
                                            value={bankName}
                                            onChange={(e) => setBankName(e.target.value)}
                                            placeholder="e.g., Bank of America"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Account Number */}
                                <div>
                                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                        Account Number
                                    </label>
                                    <div className="relative">
                                        <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="accountNumber"
                                            value={accountNumber}
                                            onChange={(e) => setAccountNumber(e.target.value)}
                                            placeholder="e.g., 1234567890"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* IBAN */}
                                <div>
                                    <label htmlFor="iban" className="block text-sm font-medium text-gray-700 mb-2">
                                        IBAN (International Bank Account Number)
                                    </label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="iban"
                                            value={iban}
                                            onChange={(e) => setIban(e.target.value)}
                                            placeholder="e.g., DE89370400440532013000"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* SWIFT/BIC Code */}
                                <div>
                                    <label htmlFor="swiftCode" className="block text-sm font-medium text-gray-700 mb-2">
                                        SWIFT/BIC Code
                                    </label>
                                    <div className="relative">
                                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            id="swiftCode"
                                            value={swiftCode}
                                            onChange={(e) => setSwiftCode(e.target.value)}
                                            placeholder="e.g., CHASUS33"
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Manual Currency */}
                                <div className="md:col-span-2">
                                    <label htmlFor="manualCurrency" className="block text-sm font-medium text-gray-700 mb-2">
                                        Manual Payment Currency
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <select
                                            id="manualCurrency"
                                            value={manualCurrency}
                                            onChange={(e) => setManualCurrency(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'right 1rem center'
                                            }}
                                        >
                                            <option value="USD">USD - United States Dollar</option>
                                            <option value="EUR">EUR - Euro</option>
                                            <option value="GBP">GBP - British Pound</option>
                                            <option value="PKR">PKR - Pakistani Rupee</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>

                    {/* Save Button */}
                    <div className="flex justify-end mt-8">
                        <button
                            onClick={handleSaveSettings}
                            className="px-8 py-3 bg-[var(--color-primary)] text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-[var(--color-primary-hover)] transition-all active:scale-95"
                        >
                            Save Gateway Settings
                        </button>
                    </div>
                </div>
            </div>
        </ModulePage>
    );
};

export default GatewaySettingsForm;