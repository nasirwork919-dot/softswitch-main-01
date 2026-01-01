"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key, Search, Plus, Activity, Edit2, Trash2 } from 'lucide-react';
import Table from '../../components/common/Table';
import HeroSection from '../../components/licence/HeroSection';

const LicencePage = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const columns = [
        { header: "Licence Key", accessor: "licenceKey" },
        { header: "Product", accessor: "product" },
        {
            header: "Status",
            accessor: "status",
            render: (row) => (
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${row.status === 'Active' ? 'bg-green-100 text-green-700' :
                        row.status === 'Inactive' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {row.status}
                </span>
            )
        },
        { header: "Expiry Date", accessor: "expiryDate" },
    ];

    // Mock data for Licences
    const [licences, setLicences] = useState([
        { id: 1, licenceKey: "VPN-PREM-XYZ123", product: "Premium VPN Access", status: "Active", expiryDate: "2025-12-31" },
        { id: 2, licenceKey: "DATA-BOOST-ABC456", product: "Data Booster Pack", status: "Inactive", expiryDate: "2024-06-30" },
        { id: 3, licenceKey: "THEME-CUST-DEF789", product: "Custom Theme Pack", status: "Active", expiryDate: "2026-01-15" },
        { id: 4, licenceKey: "SEC-SUITE-GHI012", product: "Security Suite", status: "Active", expiryDate: "2025-10-01" },
    ]);

    const filteredLicences = licences.filter(licence =>
        licence.licenceKey.toLowerCase().includes(searchText.toLowerCase()) ||
        licence.product.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this licence?")) {
            setLicences(licences.filter(licence => licence.id !== id));
            // In a real app, you'd also make an API call to delete the licence
        }
    };

    const handleEdit = (id) => {
        // In a real app, you'd navigate to an edit page with pre-filled data
        console.log(`Editing licence ${id}`);
        // navigate(`/licence/edit/${id}`);
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
            <HeroSection />

            {/* STATUS LEGEND */}
            <div className="mt-8 mb-4">
                <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-indigo-600" />
                        <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Licence Status:</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">ACTIVE</span>
                            <span>- Currently in use</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">INACTIVE</span>
                            <span>- Not active or expired</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">PENDING</span>
                            <span>- Awaiting activation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEARCH & FILTER CARD */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Licence Keys</h2>
                    <button
                        onClick={() => navigate('/licence/add')}
                        className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
                    >
                        <Plus className="h-5 w-5" />
                        Add Licence
                    </button>
                </div>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search licence keys or products..."
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-200 transition-all"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 overflow-hidden">
                <Table
                    title=""
                    columns={columns}
                    data={filteredLicences}
                    actions={(row) => (
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(row.id)}
                                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                title="Edit"
                            >
                                <Edit2 className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => handleDelete(row.id)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                            >
                                <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                />
                {filteredLicences.length === 0 && (
                    <div className="text-center py-12 text-gray-400 text-sm italic">
                        No licences found.
                    </div>
                )}
            </div>
        </div>
    );
};
export default LicencePage;