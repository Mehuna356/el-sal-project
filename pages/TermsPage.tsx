import React from 'react';
import { motion } from 'framer-motion';

export const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    Terms & Conditions
                </h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                        <p className="text-white/60 leading-relaxed">
                            By accessing and using the Endpoint Group website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Use of Website</h2>
                        <p className="text-white/60 leading-relaxed">
                            This website is provided for informational purposes only. The content on this site does not constitute financial, legal, or investment advice. All investment decisions should be made after consulting with qualified professionals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                        <p className="text-white/60 leading-relaxed">
                            All content on this website, including text, graphics, logos, and images, is the property of Endpoint Group and is protected by intellectual property laws. Unauthorized use of this content is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                        <p className="text-white/60 leading-relaxed">
                            Endpoint Group shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to or use of this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                        <p className="text-white/60 leading-relaxed">
                            These Terms and Conditions shall be governed by and construed in accordance with the laws of El Salvador, without regard to its conflict of law provisions.
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
