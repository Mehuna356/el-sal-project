import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/fashoid.official@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          topic: '',
          message: ''
        });
      } else {
        alert("Submission failed, please try again");
        setFormState('idle');
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed, please try again");
      setFormState('idle');
    }
  };

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden font-sans text-white">
      {/* --- INJECTED CSS --- */}
      <style>{`
        .bg-cyber-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .messageBox {
          width: 100%;
          height: 48px;
          display: flex;
          align-items: center;
          background-color: rgba(10, 10, 10, 0.6);
          padding: 0 16px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .messageBox:focus-within {
          border-color: rgba(16, 185, 129, 0.5);
          background-color: rgba(16, 185, 129, 0.05);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
        }
        .inputField {
          width: 100%;
          height: 100%;
          background-color: transparent;
          outline: none;
          border: none;
          color: white;
          font-size: 14px;
        }
        .inputField::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }

        /* Loader Animation */
        .loader {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bar {
          display: inline-block;
          width: 3px;
          height: 18px;
          background-color: rgba(16, 185, 129, .5);
          border-radius: 10px;
          animation: scale-up4 1s linear infinite;
        }
        .bar:nth-child(2) {
          height: 30px;
          margin: 0 4px;
          animation-delay: .25s;
          background-color: rgba(16, 185, 129, .8);
        }
        .bar:nth-child(3) {
          animation-delay: .5s;
        }
        @keyframes scale-up4 {
          20% {
            background-color: #34d399;
            transform: scaleY(1.5);
          }
          40% {
            transform: scaleY(1);
          }
        }
      `}</style>

      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0 bg-[#020402]">
        <div className="absolute inset-0 bg-cyber-grid opacity-50 animate-[pulse_10s_ease-in-out_infinite]" />
        
        {/* Subtle moving orb */}
        <motion.div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
            animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"
            animate={{ 
                x: [0, -100, 0],
                y: [0, 50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Open for Partnerships</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-[0.95]">
              Connect <br/>
              <span className="text-white/40">with us.</span>
            </h1>
            
            <p className="text-lg text-white/60 font-light leading-relaxed mb-10 max-w-md">
              Ready to explore partnerships or learn more about our global development capabilities?
            </p>

            <div className="space-y-8">
              {/* Headquarters */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300">
                  <MapPin className="text-white/70 group-hover:text-emerald-400 w-5 h-5 transition-colors" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white mb-1">Headquarters</h3>
                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">San Salvador, El Salvador</p>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:timgoltz@endpoint-group.com" className="flex items-start gap-4 group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300">
                  <Mail className="text-white/70 group-hover:text-emerald-400 w-5 h-5 transition-colors" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white mb-1">Email</h3>
                    <p className="text-sm text-white/50 group-hover:text-emerald-400 transition-colors">timgoltz@endpoint-group.com</p>
                </div>
              </a>

              {/* Tags */}
              <div className="pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Industrial Deployment",
                    "Government & Infra",
                    "Greenfield Sites",
                    "Tokenization"
                  ].map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] uppercase font-bold text-white/40 hover:text-white/80 hover:border-white/20 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Form Card Container with Halo Effect */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-[24px] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-[#080808] border border-white/10 rounded-[22px] p-6 md:p-8 shadow-2xl">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
                        <p className="text-white/40 text-xs">We typically respond within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider ml-1">First Name</label>
                                <div className="messageBox">
                                    <input 
                                      type="text" 
                                      name="firstName" 
                                      value={formData.firstName}
                                      onChange={handleChange}
                                      placeholder="John" 
                                      required 
                                      className="inputField" 
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider ml-1">Last Name</label>
                                <div className="messageBox">
                                    <input 
                                      type="text" 
                                      name="lastName" 
                                      value={formData.lastName}
                                      onChange={handleChange}
                                      placeholder="Doe" 
                                      required 
                                      className="inputField" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider ml-1">Email</label>
                            <div className="messageBox">
                                <input 
                                  type="email" 
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="john@company.com" 
                                  required 
                                  className="inputField" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider ml-1">Topic</label>
                            <div className="messageBox relative">
                                <select 
                                  name="topic"
                                  value={formData.topic}
                                  onChange={handleChange}
                                  className="inputField appearance-none cursor-pointer bg-transparent"
                                  required
                                >
                                    <option value="" disabled className="text-gray-500 bg-[#0A0A0A]">Select an option</option>
                                    <option value="industrial" className="bg-[#0A0A0A] text-white">Industrial Deployment</option>
                                    <option value="invest" className="bg-[#0A0A0A] text-white">Investment & Tokenization</option>
                                    <option value="general" className="bg-[#0A0A0A] text-white">General Inquiry</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                                    <ArrowRight className="rotate-90 w-3 h-3" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider ml-1">Message</label>
                            <div className="messageBox !h-auto py-3">
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help?" 
                                    rows={3}
                                    className="inputField resize-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={formState !== 'idle'}
                                className="w-full relative group overflow-hidden rounded-xl bg-white text-black font-bold text-sm py-4 transition-transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {formState === 'submitting' ? 'Sending...' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CONFIRMATION POPUP */}
      <AnimatePresence>
        {formState !== 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center relative overflow-hidden shadow-2xl"
            >
              {formState === 'submitting' ? (
                <div className="flex flex-col items-center gap-6 py-4">
                  <div className="loader">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-widest">Processing...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                   <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring" }}
                    className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/50 mb-2"
                   >
                     <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                   </motion.div>
                   
                   <div>
                     <h3 className="text-lg font-bold text-white mb-1">Message Sent</h3>
                     <p className="text-white/50 text-sm">We'll get back to you shortly.</p>
                   </div>

                   <button 
                    onClick={() => setFormState('idle')}
                    className="mt-2 text-xs text-white hover:text-emerald-400 font-bold uppercase tracking-widest border-b border-transparent hover:border-emerald-400/50 pb-0.5 transition-all"
                   >
                     Close
                   </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};