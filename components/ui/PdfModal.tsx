import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Loader2, CheckCircle } from 'lucide-react';

interface PdfModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
    const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'downloaded'>('idle');
    const [progress, setProgress] = useState(0);

    const handleDownload = useCallback(async () => {
        if (downloadStatus !== 'idle') return;
        setDownloadStatus('downloading');
        setProgress(0);

        try {
            const response = await fetch(pdfUrl);
            const contentLength = response.headers.get('content-length');
            const total = contentLength ? parseInt(contentLength, 10) : 0;

            if (!response.body) {
                // Fallback: direct download
                const blob = await response.blob();
                triggerSave(blob);
                return;
            }

            const reader = response.body.getReader();
            const chunks: Uint8Array[] = [];
            let received = 0;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                received += value.length;
                if (total > 0) {
                    setProgress(Math.round((received / total) * 100));
                } else {
                    // If no content-length, simulate progress
                    setProgress((prev) => Math.min(prev + 5, 95));
                }
            }

            const blob = new Blob(chunks, { type: 'application/pdf' });
            triggerSave(blob);
        } catch {
            // Fallback: open in new tab
            window.open(pdfUrl, '_blank');
            setDownloadStatus('idle');
            setProgress(0);
        }
    }, [pdfUrl, downloadStatus]);

    const triggerSave = (blob: Blob) => {
        setProgress(100);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = title.replace(/[^a-zA-Z0-9\s-]/g, '').trim().replace(/\s+/g, '-') + '.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setDownloadStatus('downloaded');
        setTimeout(() => {
            setDownloadStatus('idle');
            setProgress(0);
        }, 3000);
    };

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Reset state when modal closes
    React.useEffect(() => {
        if (!isOpen) {
            setDownloadStatus('idle');
            setProgress(0);
        }
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
                                {/* Premium Download Button */}
                                <button
                                    onClick={handleDownload}
                                    disabled={downloadStatus !== 'idle'}
                                    className={`relative overflow-hidden flex items-center justify-center gap-2 px-4 py-1.5 text-xs font-medium rounded-xl border transition-all duration-300 min-w-[130px] ${downloadStatus === 'idle'
                                            ? 'text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/10 cursor-pointer'
                                            : downloadStatus === 'downloading'
                                                ? 'text-white border-emerald-500/50 cursor-wait'
                                                : 'text-emerald-400 border-emerald-400/30 cursor-default'
                                        }`}
                                >
                                    {/* Progress bar fill */}
                                    {downloadStatus === 'downloading' && (
                                        <div
                                            className="absolute inset-0 bg-emerald-500/20 transition-all duration-200 ease-in-out"
                                            style={{ width: `${progress}%` }}
                                        />
                                    )}

                                    {/* Content */}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {downloadStatus === 'idle' && (
                                            <>
                                                <Download className="w-3.5 h-3.5" />
                                                Download
                                            </>
                                        )}
                                        {downloadStatus === 'downloading' && (
                                            <>
                                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                                {progress}%
                                            </>
                                        )}
                                        {downloadStatus === 'downloaded' && (
                                            <>
                                                <CheckCircle className="w-3.5 h-3.5" />
                                                Downloaded
                                            </>
                                        )}
                                    </span>
                                </button>

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
