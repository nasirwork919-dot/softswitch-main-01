"use client";

import React, { useState } from 'react';
import ModulePage from '../../components/common/ModulePage';
import { ShoppingCart, Plus, Tag, DollarSign, Package, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        price: '',
        stock: '',
        status: 'Active',
        description: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.productName || !formData.category || !formData.price || !formData.stock) {
            toast.error('Please fill in all required fields.');
            return;
        }
        
        console.log('New Product Data:', formData);
        toast.success('Product added successfully!');
        navigate('/e-shop'); // Navigate back to the E-Shop list after submission
    };

    return (
        <ModulePage
            title="Add New Product"
            description="Create a new digital product for your E-Shop."
            icon={ShoppingCart}
        >
            <div className="max-w-3xl mx-auto p-6 sm:p-10">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">Product Details</h3>
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <ShoppingCart className="h-5 w-5" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Product Name */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Product Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                placeholder="e.g., Premium VPN Access"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 appearance-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center'
                                    }}
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="Subscription">Subscription</option>
                                    <option value="Add-on">Add-on</option>
                                    <option value="Customization">Customization</option>
                                    <option value="Software">Software</option>
                                </select>
                            </div>
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Price <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="e.g., $9.99"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Stock <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    placeholder="e.g., Unlimited or 500"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Status
                            </label>
                            <div className="relative">
                                <Activity className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 appearance-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center'
                                    }}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Draft">Draft</option>
                                </select>
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Image URL (Optional)
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    placeholder="e.g., https://example.com/product.jpg"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Description (Optional)
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Add a detailed description for the product..."
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 resize-y"
                            ></textarea>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6">
                            <button
                                type="submit"
                                className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Plus className="h-5 w-5" />
                                Add Product
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/e-shop')}
                                className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ModulePage>
    );
};

export default AddProduct;