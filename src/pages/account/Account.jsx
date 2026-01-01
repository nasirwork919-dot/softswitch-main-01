import React from 'react';
import ModulePage from '../../components/common/ModulePage';
import { UserCircle, Users, Key, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const navigate = useNavigate();
    // Mock data for account stats
    const stats = [
        { label: "Total Staff", value: "12", trend: "up", change: "2" },
    ];

    return (
        <ModulePage
            title="Account"
            description="Manage super admin and staff account settings."
            icon={UserCircle}
            stats={stats}
        >
            <div className="p-6 sm:p-8 space-y-8">
                {/* Staff Accounts Section */}
                <div className="bg-[var(--color-card-background)] rounded-xl shadow-sm border border-[var(--color-border)] p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--color-text)]">Staff Accounts</h2>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                Manage access and permissions for administrative staff.
                            </p>
                        </div>
                        <button 
                            onClick={() => navigate('/account/add')}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
                        >
                            <UserCircle className="w-4 h-4" />
                            Add Staff
                        </button>
                    </div>

                    {/* Staff Table Placeholder - Replace with actual table if data exists */}
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                            <Users className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No staff accounts yet</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Get started by adding a new staff member.
                        </p>
                    </div>
                </div>

                {/* Security Settings Section */}
                <div className="bg-[var(--color-card-background)] rounded-xl shadow-sm border border-[var(--color-border)] p-6">
                    <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Security Settings</h2>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                        Configure authentication and access policies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Two-Factor Authentication */}
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <Shield className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Add an extra layer of security to staff accounts.
                                </p>
                                <button className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                                    Configure
                                </button>
                            </div>
                        </div>

                        {/* Password Policy */}
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                <Key className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-900">Password Policy</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Set requirements for staff account passwords.
                                </p>
                                <button className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                                    Configure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModulePage>
    );
};

export default Account;