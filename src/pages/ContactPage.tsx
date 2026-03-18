import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "Shop 2/96 Greville St, Prahran VIC 3181",
  },
  { icon: Phone, label: "Phone", value: "0370 180 294" },
  { icon: Mail, label: "Email", value: "hello@FoodnMood.com" },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Thurs 10am-3am · Fri-Sat 10am-4am · Sun Closed",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!form.name || !form.email || !form.message) {
  //     toast.error("Please fill in all fields.");
  //     return;
  //   }
  //   setSent(true);
  //   toast.success("Message sent! We'll get back to you soon.");
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      setIsSubmitting(true);
      // const res = await fetch("http://localhost:4000/api/contact", {
      const apiUrl = import.meta.env.VITE_API_URL;
      // const res = await fetch(`${apiUrl}/api/contact`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      const res = await fetch(
        "https://foodnmood-server.vercel.app/api/reserve",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();
      if (data.success) {
        setSent(true);
        toast.success("Message sent!");
      } else {
        toast.error("Server error.");
      }
    } catch (error) {
      toast.error("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-center mb-16"
          >
            <p className="label-text mb-3">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold">
              Contact Us
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <div className="space-y-8 mb-12">
                {info.map((item) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={transition}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="label-text mb-1">{item.label}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] border border-border bg-muted overflow-hidden">
                <iframe
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74076797932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.472150886332!2d144.9878813760673!3d-37.84924147196663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6695466eadb13%3A0x1cec17ae5358b28e!2sFood%20N%20Mood!5e0!3m2!1sen!2sau!4v1773662810814!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center">
                    <h2 className="font-serif text-3xl font-bold mb-4">
                      Message Sent
                    </h2>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll respond within 24 hours.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  aria-busy={isSubmitting}
                >
                  <div>
                    <label className="label-text block mb-3">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-input py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-text block mb-3">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-input py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-text block mb-3">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="How can we help?"
                      required
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-input py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      {isSubmitting && (
                        <span
                          aria-hidden="true"
                          className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground"
                        />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
