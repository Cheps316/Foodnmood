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
            Fresh burgers, authentic pasta & handcrafted pizza. Elevated casual
            dining in the heart of the city.
          </p>
          <p className="label-text mt-6">
            Est. 2024 · 425°F Ovens · 24hr Dough
          </p>
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
          <p className="label-text mb-4">Connect</p>
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
          </div>
          <p className="label-text mt-8 mb-2">Hours</p>
          <p className="text-sm text-muted-foreground">Mon-Thurs: 10am - 3am</p>
          <p className="text-sm text-muted-foreground">Fri-Sat: 10am - 4am</p>
          <p className="text-sm text-muted-foreground">Sun: Closed</p>
        </div>
      </div>
      <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © 2024. All rights reserved.
        </p>

        <img src="payments.svg" alt="payment" width={240} height={240} />
      </div>
    </div>
  </footer>
);

export default Footer;
