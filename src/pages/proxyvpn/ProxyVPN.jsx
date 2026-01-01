import React from 'react';
import ModulePage from '../../components/common/ModulePage';
import { ShieldCheck, Plus, Activity } from 'lucide-react';

const ProxyVPN = () => {
    // Mock data for proxy VPN stats
    const stats = [
        { label: "Active Tunnels", value: "4,251", trend: "up", change: "210" },
    ];

    return (
        <ModulePage
            title="Proxy VPN"
            description="Configure and manage proxy and VPN endpoints."
            icon={ShieldCheck}
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
                            Security
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">Proxy & VPN Management</h1>
                        <p className="text-sm sm:text-base text-purple-100/90 font-medium max-w-lg leading-relaxed">
                            Configure and manage secure proxy and VPN endpoints for your network.
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
                                <span>- Tunnel is operational</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">PENDING</span>
                                <span>- Configuration in progress</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">ERROR</span>
                                <span>- Connection failed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH & FILTER CARD */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <h2 className="text-xl font-bold text-gray-900 tracking-tight">VPN Endpoints</h2>
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
                            <Plus className="h-5 w-5" />
                            Add Endpoint
                        </button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search endpoints..."
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-200 transition-all"
                        />
                    </div>
                </div>

                {/* TABLE PLACEHOLDER */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 overflow-hidden">
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No VPN endpoints configured</h3>
                        <p className="text-sm text-gray-400 mt-1">
                            Get started by adding a new VPN endpoint.
                        </p>
                    </div>
                </div>
            </div>
        </ModulePage>
    );
};

export default ProxyVPN;