import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/order", label: "Order" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
          <img src="logo.png" alt="foodnmood" width={80} height={80} />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs uppercase tracking-[0.15em] transition-colors hover:text-foreground ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/reserve"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-xs uppercase tracking-[0.15em] border border-primary hover:bg-primary/90 transition-colors"
          >
            Reserve
          </Link>
          <Link
            to="/order"
            className="border border-primary px-5 py-2.5 text-xs uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Order Online
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-0 right-0 bg-background border-b border-border md:hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-xs uppercase tracking-[0.15em] py-2 ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reserve"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.15em] text-center mt-2"
              >
                Reserve a Table
              </Link>
              <Link
                to="/order"
                onClick={() => setOpen(false)}
                className="border border-primary px-5 py-3 text-xs uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Order Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
