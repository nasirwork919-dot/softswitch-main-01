import React from 'react';
import ModulePage from '../../components/common/ModulePage';
import { Box, Plus, Activity, Search, Edit2, Trash2 } from 'lucide-react';

const Payload = () => {
    // Mock data for payload stats
    const stats = [
        { label: "Total Payloads", value: "156", trend: "up", change: "5" },
    ];

    // Mock data for payloads
    const payloads = [
        { id: 1, name: "Web Auth Payload", type: "Authentication", status: "Active", lastModified: "2024-07-20" },
        { id: 2, name: "API Data Payload", type: "Data Transfer", status: "Active", lastModified: "2024-07-18" },
        { id: 3, name: "Config Payload", type: "Configuration", status: "Inactive", lastModified: "2024-07-15" },
    ];

    return (
        <ModulePage
            title="Payload"
            description="Manage data payloads and configuration strings."
            icon={Box}
            stats={stats}
        >
            <div className="p-6 sm:p-8 space-y-8">
                {/* HERO SECTION */}
                <div className="rounded-[2rem] bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-900 px-6 sm:px-10 lg:px-12 py-8 sm:py-12 flex items-center min-h-[160px] sm:min-h-[200px] shadow-2xl shadow-indigo-200/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />
                    <div className="text-left text-white max-w-2xl relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-wider mb-4 border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            Data Management
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">Payload Management</h1>
                        <p className="text-sm sm:text-base text-purple-100/90 font-medium max-w-lg leading-relaxed">
                            Create, edit, and manage data payloads for your applications and services.
                        </p>
                    </div>
                </div>

                {/* STATUS LEGEND */}
                <div className="mt-8 mb-4">
                    <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Activity className="h-5 w-5 text-indigo-600" />
                            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Status Indicator:</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-600">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">ACTIVE</span>
                                <span>- Payload is in use</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-500" />
                                <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-bold">INACTIVE</span>
                                <span>- Payload is not active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH & FILTER CARD */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Payloads</h2>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
                            <Plus className="h-5 w-5" />
                            Create Payload
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search payloads..."
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-200 transition-all"
                        />
                    </div>
                </div>

                {/* PAYLOADS TABLE */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 overflow-hidden">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Payload List</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-wider">Type</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-gray-400 uppercase tracking-wider">Last Modified</th>
                                    <th className="px-6 py-4 text-right text-[11px] font-black text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {payloads.map((payload) => (
                                    <tr key={payload.id} className="group hover:bg-blue-50/30 transition-colors">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-600">{payload.name}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-600">{payload.type}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                                payload.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                            }`}>
                                                {payload.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-600">{payload.lastModified}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                    <Edit2 className="h-4 w-4" />
                                                </button>
                                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {payloads.length === 0 && (
                        <div className="text-center py-12">
                            <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Box className="h-8 w-8 text-indigo-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">No Payloads Found</h3>
                            <p className="text-gray-500 text-sm mt-1">Get started by creating a new payload.</p>
                        </div>
                    )}
                </div>
            </div>
        </ModulePage>
    );
};

export default Payload;