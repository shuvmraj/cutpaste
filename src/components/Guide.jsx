import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { ArrowLeft, Share2, Key, Send, Shield, Lock } from 'lucide-react';
import Footer from './Footer';

function Guide() {
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-black">
                <div className="container mx-auto px-4 py-8 relative">
                    <div className="flex flex-col items-center justify-center text-white">
                        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            How to Use CutPaste
                        </h1>

                        <div className="max-w-xl w-full bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-gray-800">
                            <div className="flex items-center gap-2 mb-6">
                                <Shield className="w-5 h-5 text-blue-400" />
                                <p className="text-sm text-gray-300">
                                    CutPaste is a real-time text-sharing React Vite app designed for quick and secure text transfers.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start group transition-all duration-300 hover:bg-gray-800/50 p-3 rounded-lg">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300">1</span>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <Share2 className="w-4 h-4 text-blue-400" />
                                            <p className="text-sm text-gray-300">Click "Type & Share Now" and type your text in the provided box.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start group transition-all duration-300 hover:bg-gray-800/50 p-3 rounded-lg">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300">2</span>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <Key className="w-4 h-4 text-blue-400" />
                                            <p className="text-sm text-gray-300">Share your unique 4-digit code with the intended recipient.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start group transition-all duration-300 hover:bg-gray-800/50 p-3 rounded-lg">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300">2</span>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <Send className="w-4 h-4 text-blue-400" />
                                            <p className="text-sm text-gray-300">The receiver enters the code to instantly access the shared text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                <div className="flex items-center justify-center gap-2 text-gray-400">
                                    <Lock className="w-4 h-4" />
                                    <p className="text-sm">
                                        Enjoy seamless text sharing with no storage or traces left behind!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fixed position back button */}
                    <div className="fixed bottom-24 right-8">
                        <Link
                            to="/"
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:w-48 hover:scale-110"
                        >
                            <ArrowLeft className="w-5 h-5 text-white rotate-30 group-hover:scale-0 transition-transform duration-300" />
                            <span className="absolute scale-0 group-hover:scale-100 text-white text-sm whitespace-nowrap transition-transform duration-300">
                                Back to Main Page
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Guide;