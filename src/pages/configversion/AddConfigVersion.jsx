"use client";

import React, { useState } from 'react';
import ModulePage from '../../components/common/ModulePage';
import { HardDrive, Plus, FileText, Activity, Calendar, UploadCloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddConfigVersion = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        version: '',
        description: '',
        releaseDate: '',
        status: 'Draft',
        configFile: null // For file upload
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.version || !formData.description || !formData.releaseDate || !formData.configFile) {
            toast.error('Please fill in all required fields, including uploading a config file.');
            return;
        }
        
        console.log('New Config Version Data:', formData);
        toast.success('Config version added successfully!');
        navigate('/config-version'); // Navigate back to the list after submission
    };

    return (
        <ModulePage
            title="Add New Config Version"
            description="Upload and manage new versions of application configurations."
            icon={HardDrive}
        >
            <div className="max-w-3xl mx-auto p-6 sm:p-10">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="bg-gray-50/50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">Version Details</h3>
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <HardDrive className="h-5 w-5" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        {/* Version Number */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Version Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="version"
                                value={formData.version}
                                onChange={handleChange}
                                placeholder="e.g., 1.0.0"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="e.g., Initial release with core features"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Release Date */}
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Release Date <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="date"
                                    name="releaseDate"
                                    value={formData.releaseDate}
                                    onChange={handleChange}
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
                                    <option value="Draft">Draft</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                        {/* Config File Upload */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                                Config File <span className="text-red-500">*</span>
                            </label>
                            <label className="flex cursor-pointer group">
                                <div className="px-4 py-3 bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl text-sm text-gray-500 flex-1 truncate group-hover:bg-gray-100 transition-colors">
                                    {formData.configFile ? formData.configFile.name : 'Choose file...'}
                                </div>
                                <input
                                    type="file"
                                    name="configFile"
                                    onChange={handleChange}
                                    className="hidden"
                                    accept=".json,.xml,.yaml,.txt"
                                />
                                <div className="px-6 bg-blue-600 text-white font-bold rounded-r-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                                    <UploadCloud className="h-5 w-5 mr-2" /> Browse
                                </div>
                            </label>
                            <p className="text-xs text-gray-500 mt-1.5">
                                Upload your configuration file (e.g., .json, .xml, .yaml).
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-6">
                            <button
                                type="submit"
                                className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Plus className="h-5 w-5" />
                                Add Config Version
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/config-version')}
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

export default AddConfigVersion;