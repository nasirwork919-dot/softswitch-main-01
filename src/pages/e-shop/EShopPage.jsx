"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Plus, Activity } from 'lucide-react';
import Table from '../../components/common/Table';
import HeroSection from '../../components/e-shop/HeroSection'; // Import the new HeroSection

const EShopPage = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const columns = [
        { header: "Product Name", accessor: "productName" },
        { header: "Category", accessor: "category" },
        { header: "Price", accessor: "price" },
        { header: "Stock", accessor: "stock" },
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
    ];

    // Mock data for E-Shop products
    const products = [
        { id: 1, productName: "Premium VPN Access", category: "Subscription", price: "$9.99", stock: "Unlimited", status: "Active" },
        { id: 2, productName: "Data Booster Pack", category: "Add-on", price: "$4.99", stock: "500", status: "Active" },
        { id: 3, productName: "Custom Theme Pack", category: "Customization", price: "$19.99", stock: "100", status: "Inactive" },
        { id: 4, productName: "Security Suite", category: "Software", price: "$29.99", stock: "200", status: "Active" },
    ];

    const filteredProducts = products.filter(product =>
        product.productName.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
            <HeroSection /> {/* Use the new E-Shop HeroSection */}

            {/* STATUS LEGEND */}
            <div className="mt-8 mb-4">
                <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Activity className="h-5 w-5 text-indigo-600" />
                        <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Product Status:</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-600">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">ACTIVE</span>
                            <span>- Available for purchase</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">INACTIVE</span>
                            <span>- Not visible to users</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">LOW STOCK</span>
                            <span>- Running low on inventory</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEARCH & FILTER CARD */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Product Listings</h2>
                    <button
                        onClick={() => navigate('/e-shop/add')}
                        className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
                    >
                        <Plus className="h-5 w-5" />
                        Add Product
                    </button>
                </div>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
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
                    data={filteredProducts}
                    actions={() => { }}
                />
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12 text-gray-400 text-sm italic">
                        No products found.
                    </div>
                )}
            </div>
        </div>
    );
};
export default EShopPage;