"use client";

import React, { useState } from 'react';
import ModulePage from '../../components/common/ModulePage';
import { FileCode, Plus, FileText, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddJson = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fileName: '',
        type: '',
        status: 'Active',
        content: '',
        description: ''
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
        if (!formData.fileName || !formData.type || !formData.content) {
            toast.error('Please fill in all required fields.');
            return;
        }
        
        // Attempt to parse JSON content to validate
        try {
            JSON.parse(formData.content);
        } catch (error) {
            toast.error('Invalid JSON content. Please check your syntax.');
            return;
        }

        console.log('New JSON File Data:', formData);
        toast.success('JSON file added successfully!');
        navigate('/json'); // Navigate back to the JSON list after submission
    };

    return (
        <ModulePage
            title="Add New JSON File"
            description="Create and manage system JSON configuration files."
            icon={FileCode}
        >
            <div className="max-w-3xl mx-auto p-6 sm:p-10">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">JSON File Details</h3>
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <FileCode className="h-5 w-5" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* File Name */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                File Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fileName"
                                value={formData.fileName}
                                onChange={handleChange}
                                placeholder="e.g., config.json"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                            />
                        </div>

                        {/* Type */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Type <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 appearance-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem center'
                                    }}
                                >
                                    <option value="" disabled>Select Type</option>
                                    <option value="Configuration">Configuration</option>
                                    <option value="Data">Data</option>
                                    <option value="Settings">Settings</option>
                                </select>
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

                        {/* Content (JSON) */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Content (JSON) <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows="10"
                                placeholder='Enter JSON content here, e.g., { "key": "value" }'
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 resize-y font-mono"
                            ></textarea>
                            <p className="text-xs text-gray-500 mt-1.5">
                                Ensure valid JSON format.
                            </p>
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
                                placeholder="Add a brief description for this JSON file..."
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
                                Add JSON File
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/json')}
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

export default AddJson;