import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img
            src="logo.png"
            alt="foodnmood"
            width={80}
            height={80}
            className="mb-4"
          />

          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Fresh burgers, authentic pasta, parma & handcrafted pizza. Elevated
            casual dining in the heart of the city.
          </p>
          <p className="label-text mt-6">50+ Menu Items . 100% Fresh Daily</p>
        </div>
        <div>
          <p className="label-text mb-4">Navigation</p>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/order", label: "Order Online" },
              { to: "/reserve", label: "Reservations" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          {/* Social Medias */}
          {/* <p className="label-text mb-4">Connect</p>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              X (Twitter)
            </a>
          </div> */}
          <p className="label-text mb-2">Hours</p>
          <p className="text-sm text-bold">Dine In</p>
          <p className="text-sm text-muted-foreground">
            Mon - Sat: 5:30 Pm - 9:30 Pm
          </p>
          <p className="text-sm text-bold">Pickup/Delivery</p>
          <p className="text-sm text-muted-foreground">
            Mon - Sat: 10:30 Am-3:00 AM
          </p>

          <p className="text-sm text-bold mt-2">Sun: Closed</p>
        </div>
      </div>
      <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          All rights reserved. Powered by Food n Mood
        </p>

        <img src="payments.svg" alt="payment" width={240} height={240} />
      </div>
    </div>
  </footer>
);

export default Footer;
