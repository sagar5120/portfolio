import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

function InputField({ id, label, type = 'text', placeholder, value, onChange, error, icon: Icon }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div className={`flex items-center rounded-xl border bg-white dark:bg-slate-800 transition duration-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent ${error ? 'border-rose-400 dark:border-rose-500' : 'border-slate-200 dark:border-slate-700'}`}>
        {Icon && (
          <span className="flex-shrink-0 pl-3 text-slate-400">
            <Icon className="w-4 h-4" />
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 min-w-0 px-3 py-3 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none text-sm"
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-xs text-rose-500 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setStatus('loading');
    // Simulate async send (replace with real API call)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/8 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-desc mx-auto">
            Whether you have a project in mind, an idea to explore, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10">
            {/* Contact email hint */}
            <div className="flex items-center gap-2 mb-8 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
              <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              <span className="text-sm text-indigo-700 dark:text-indigo-300">
                Or email me directly at{' '}
                <a href={`mailto:${portfolio.email}`} className="font-semibold hover:underline">
                  {portfolio.email}
                </a>
              </span>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary text-sm">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      id="name"
                      label="Full Name"
                      placeholder="Sagar Bhandari"
                      value={form.name}
                      onChange={handleChange('name')}
                      error={errors.name}
                      icon={User}
                    />
                    <InputField
                      id="email"
                      label="Email Address"
                      type="email"
                      placeholder="hello@example.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                      icon={Mail}
                    />
                  </div>

                  <InputField
                    id="subject"
                    label="Subject (optional)"
                    placeholder="Project inquiry, collaboration..."
                    value={form.subject}
                    onChange={handleChange('subject')}
                    error={errors.subject}
                    icon={MessageSquare}
                  />

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={form.message}
                      onChange={handleChange('message')}
                      className={`form-input resize-none ${errors.message ? 'border-rose-400 dark:border-rose-500 focus:ring-rose-400' : ''}`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-1 text-xs text-rose-500 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
