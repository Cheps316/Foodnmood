import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ConciergeBell } from "lucide-react";
import heroBurger from "@/assets/hero-burger.png";
import restaurantInterior from "@/assets/hero.png";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menuData";
import { FAQ } from "@/components/custom/faq";
import { TestimonialCarousel } from "@/components/custom/testimonial-carousel";
import { Utensils, Leaf, Wine, Award, Smile } from "lucide-react";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };
const featured = menuItems.slice(0, 4);

const testimonials = [
  {
    name: "Sarah M.",
    text: "The best burger I've had in this city. The attention to every ingredient is remarkable.",
  },
  {
    name: "James K.",
    text: "Their pasta rivals anything I've had in Rome. An absolute gem of a restaurant.",
  },
  {
    name: "Elena R.",
    text: "Perfect for date night — stunning atmosphere and every dish is crafted with precision.",
  },
];
const features = [
  {
    icon: Utensils,
    title: "Culinary Excellence",
    description:
      "Our master chefs create extraordinary dishes using time-honored techniques and innovative approaches.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source the finest local and seasonal ingredients to ensure every dish bursts with natural flavor.",
  },
  {
    icon: Smile,
    title: "Happy Customers",
    description: "Loved by guests who keep coming back.",
  },
  {
    icon: ConciergeBell,
    title: "Top-Rated Experience",
    description: "Quality, taste, and hospitality you can trust.",
  },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[90svh] flex items-center pt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <p className="label-text mb-6">Premium Casual Dining</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              Fresh Burgers. <span className="italic">Authentic</span> Pasta,
              Perma & Pizza.
            </h1>
            <p className="text-muted-foreground mt-6 text-lg max-w-md leading-relaxed">
              Whether you're looking for a light bite or the full foodie
              experience, explore the dishes at Food N Mood and experience
              authentic Australian Italian food in Prahran, Melbourne.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/reserve"
                className="bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Reserve a Table <ArrowRight size={14} />
              </Link>
              <Link
                to="/order"
                className="border border-primary px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Order Online
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition, delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={heroBurger}
              alt="Foodnmood with fresh ingredients"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center transition-all duration-700"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className=" text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-black leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured */}
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="label-text mb-3">From the Kitchen</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Featured Dishes
            </h2>
          </div>
          <Link
            to="/menu"
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            View Full Menu <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
        <Link
          to="/menu"
          className="md:hidden mt-8 block text-center text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
        >
          View Full Menu →
        </Link>
      </div>
    </section>

    {/* About teaser */}
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <p className="label-text mb-3">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Where Craft Meets <span className="italic">Comfort</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born from a belief that casual dining deserves the same care as
              fine dining, we focus on quality in every detail. From
              thoughtfully sourced ingredients to recipes perfected over time,
              everything we create reflects our passion for honest food.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach blends craftsmanship with comfort—bringing together
              rich flavors, warm hospitality, and an experience that feels both
              elevated and welcoming.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, duration: 0.8 }}
            className="aspect-[4/3] overflow-hidden border border-border"
          >
            <img
              src={restaurantInterior}
              alt="Restaurant interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    {/* <section className="section-padding">
      <p className="label-text mb-3 text-center">What Our Guests Say</p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
        Testimonials
      </h2>
      <TestimonialCarousel />
    </section> */}

    {/* CTA */}
    <section className="section-padding-lg bg-primary text-primary-foreground">
      <div className="container text-center">
        <p className="label-text mb-4 text-primary-foreground/60">
          Join Us for Dinner
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
          Your Table <span className="italic">Awaits</span>
        </h2>
        <p className="text-primary-foreground/70 max-w-md mx-auto mb-10">
          Whether it's a weeknight escape or a special occasion, we'd love to
          have you.
        </p>
        <Link
          to="/reserve"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-xs uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
        >
          Reserve a Table <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding">
      <FAQ />
    </section>
  </div>
);

export default Index;
