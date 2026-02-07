import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    Privacy Policy
                </h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                        <p className="text-white/60 leading-relaxed">
                            Endpoint Group collects information you provide directly to us, such as when you contact us through our website, subscribe to our newsletter, or engage with our services. This may include your name, email address, and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                        <p className="text-white/60 leading-relaxed">
                            We use the information we collect to communicate with you, provide and improve our services, and comply with legal obligations. We do not sell your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                        <p className="text-white/60 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                        <p className="text-white/60 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at{' '}
                            <a href="mailto:timgoltz@endpoint-group.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                timgoltz@endpoint-group.com
                            </a>
                        </p>
                    </section>

                    <p className="text-white/40 text-sm pt-8 border-t border-white/10">
                        Last updated: February 2026
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
