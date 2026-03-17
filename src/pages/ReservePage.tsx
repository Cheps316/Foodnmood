import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { toast } from "sonner";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const ReservePage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    request: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.guests || !form.date || !form.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Reservation submitted successfully!");
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mx-auto mb-8">
            <Check className="text-accent" size={32} />
          </div>
          <h1 className="font-serif text-4xl font-bold mb-4">Reservation Confirmed</h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you, {form.name}. We've received your reservation for {form.guests} guests on {form.date} at {form.time}. A confirmation has been sent to {form.email}.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="text-center mb-16">
              <p className="label-text mb-3">Join Us for Dinner</p>
              <h1 className="font-serif text-5xl md:text-6xl font-bold">Reserve a Table</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", required: true },
              ].map((field) => (
                <div key={field.name}>
                  <label className="label-text block mb-3">{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-input py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
                  />
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <label className="label-text block mb-3">Guests</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-input py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label-text block mb-3">Date</label>
                  <input
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-input py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="label-text block mb-3">Time</label>
                  <input
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-input py-3 text-foreground focus:border-foreground focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="label-text block mb-3">Special Requests</label>
                <textarea
                  name="request"
                  placeholder="Allergies, celebrations, seating preferences..."
                  value={form.request}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-b border-input py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors"
              >
                Confirm Reservation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReservePage;
