import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, MapPin, MessageCircle, Phone, Send } from "lucide-react";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage("");

        try {
            await emailjs.send(
                "service_kpd9zyg",
                "template_qr98mih",
                formData,
                "il8hkCNJNWNeBB6sZ"
            );
            setStatusMessage("✅ Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatusMessage("❌ Failed to send. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <motion.section
            id="contact"
            className="min-h-screen pt-20 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 py-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="relative">
                <div className="absolute bg-blue-500/10 top-20  left-10 w-40 h-40 rounded-full blur-xl"></div>
                <div className="absolute top-50 right-20 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>

            </div>

            <header className="text-center">
                <span className="w-fit mx-auto border-green-400/50 text-green-400 bg-green-400/10 mb-4 rounded-full px-3 py-1 text-sm flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Let's Work Together</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Have a project in mind? I'd love to hear about it. Send me a message and let's bring it to life.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="w-full md:col-span-2 border bg-slate-800/30 border-slate-600 rounded-md backdrop-blur-sm p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-slate-300">Name *</label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-400 rounded-md px-3 py-2 w-full"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-slate-300">Email *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-400 rounded-md px-3 py-2 w-full"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="title" className="text-slate-300">Subject *</label>
                            <input
                                id="title"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-400 rounded-md px-3 py-2 w-full"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-slate-300">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-slate-900/50 border border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-400 resize-none rounded-md px-3 py-2 w-full"
                                placeholder="Tell me about your project, timeline, and any specific requirements..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg px-4 py-2 rounded-md transition-all duration-200 group flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                            ) : (
                                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            )}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {statusMessage && (
                            <p className={`text-center text-sm ${statusMessage.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
                                {statusMessage}
                            </p>
                        )}
                    </form>
                </div>

                <div className="space-y-8">
                    <div className="border bg-slate-800/30 border-slate-600 rounded-md backdrop-blur-sm h-[600px] md:h-[450px] p-8">
                        <header className=" mt-2 font-bold text-2xl mb-6">
                            <h3>Contact Information</h3>
                        </header>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p className="text-slate-400">joshua.datinguinoo@email.com</p>
                                    <p className="text-sm text-slate-500 mt-1">I'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <p className="text-slate-400">(+63) 967-421-2991</p>
                                    <p className="text-sm text-slate-500 mt-1">Available Mon-Fri, 8AM-5PM Manila Time</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Location</h4>
                                    <p className="text-slate-400">Batangas City, Batangas</p>
                                    <p className="text-sm text-slate-500 mt-1">Willing to Work Remotely</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default Contact;
