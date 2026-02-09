import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface PdfModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

                    {/* Modal */}
                    <motion.div
                        className="relative z-10 w-[95vw] h-[90vh] max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                        initial={{ scale: 0.9, y: 30 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 30 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080808]">
                            <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
                            <div className="flex items-center gap-3">
                                <a
                                    href={pdfUrl}
                                    download
                                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-emerald-400 border border-emerald-400/30 rounded-lg hover:bg-emerald-400/10 transition-colors"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    Download
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF iframe */}
                        <div className="flex-1 bg-white">
                            <iframe
                                src={pdfUrl}
                                className="w-full h-full"
                                title={title}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
