import { Clock, Mail, MapPin, MessageSquareIcon, Phone, Send } from "lucide-react";
import { useState } from "react";
import location from '../assets/location.jpg'
// import MapLocation from "./MapLocation";

function Contacts() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 smLpx-6 lg:px-8 py-12">
            <div className="text-center mb-16 mt-8">
                <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Get in Touch
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Have a question or want to place an order?
                    We'd love to hear from you!
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="backdrop-blur-md bg-white/30 rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <MessageSquareIcon className="text-purple-600" size={32} />
                        <h2 className="text-3xl font-semibold">Send a Message</h2>
                    </div>
                    <form action="https://formspree.io/f/xpqbaljz" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="flex align-left font-semibold text-sm mb-2 text-gray-900">Your Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="text-gray-900 w-full px-4 py-3 backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="flex align-left font-semibold text-sm mb-2 text-gray-900">Email Address</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-gray-900 w-full px-4 py-3 backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="johndoe@gmail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="flex align-left font-semibold text-sm mb-2 text-gray-900">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="text-gray-900 w-full px-4 py-3 backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="+254 712345678"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="flex align-left font-semibold text-sm mb-2 text-gray-900">Your Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="text-gray-900 w-full px-4 py-3 backdrop-blur-sm bg-white/40 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Tell us about your order or  inquiry..."
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 backdrop-blur-md bg-gradient-to-r from-purple-500/40 to-pink-500/40 hover:to-purple-500/60 hover:to-pink-500/60 transition-all shadow-lg hover:shadow-xl border border-white/20 rounded-xl text-gray-900"
                        >
                            Send Message
                            <Send size={20} />
                        </button>
                    </form>
                </div>
                <div className="space-y-8">
                    <div className="backdrop-blur-md bg-white/20 rounded-3xl border border-white/20 shadow-xl px-4 py-4">
                        <h2 className="text-3xl mb-6 font-semibold">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    <MapPin className="text-purple-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="flex align-left text-lg mb-1 text-gray-900 font-semibold">Address</h3>
                                    <p className="text-gray-700">
                                        Ting'ang'a, Kiambu
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-pink-500/20 flex items-center justify-center">
                                    <Phone className="text-pink-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="flex align-left text-lg mb-1 text-gray-900 font-semibold">Phone</h3>
                                    <p className="text-gray-700">+254 794663928</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-orange-500/20 flex items-center justify-center">
                                    <Mail className="text-orange-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="flex align-left text-lg mb-1 text-gray-900 font-semibold">Email</h3>
                                    <p className="text-gray-700">shierag04@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-yellow-500/20 flex items-center justify-center">
                                    <Clock className="text-yellow-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="flex align-left text-lg mb-1 text-gray-900 font-semibold">Business Hours</h3>
                                    <div className="text-gray-700 space-y-1">
                                        <p>Monday-Friday: 7:00 AM - 7:00 PM</p>
                                        <p className="flex align-left">Saturday: 8:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="backdrop-blur-md bg-white/20 border border-white/20 rounded-3xl shadow-xl px-4 py-3">
                            <h2 className="text-gray-900 text-3xl text-left ">Find Us</h2>
                            <img src={location} alt="bakery-location" className="rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                <div className="backdrop-white/20 border border-white/20 bg-white/20 rounded-3xl px-3 py-12 shadow-xl">
                    <h2 className="font-semibold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-text-clip bg-transparent">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mt-3 py-2">
                        <div>
                            <h3 className="text-xl text-gray-900 mb-3 font-semibold text-left">
                                How far in advance should I order?
                            </h3>
                            <p className="text-left">
                                For custom cakes and large orders, we recommend placing your order at least 2 weeks in advance. 
                                For standard items, 48 hours notice is appreciated.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl text-gray-900 mb-3 font-semibold text-left">
                                Do you offer delivery?
                            </h3>
                            <p className="text-left">
                                Yes! We offer local delivery within 5 miles. 
                                Delivery fees vary based on distance and order size.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl text-gray-900 mb-3 font-semibold text-left">
                                Can I customize products?
                            </h3>
                            <p className="text-left">
                               Absolutely! We love creating custom orders. 
                               Contact us to discuss your vision and we'll bring it to life.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl text-gray-900 mb-3 font-semibold text-left">
                                Do you accommodate dietary restrictions?
                            </h3>
                            <p className="text-left">
                               Yes, we offer gluten-free, vegan, and sugar-free options. 
                               Please mention your requirements when ordering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;