import { motion } from "framer-motion";
import restaurantInterior from "@/assets/hero.png";
import kitchen from "@/assets/about.png";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const AboutPage = () => (
  <div className="pt-20">
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-center mb-16"
        >
          <p className="label-text mb-3">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            About FoodnMood
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Born from a <span className="italic">Simple Belief</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Life's too short to wait for food ! Food N Mood, Prahran makes
              ordering quick and hassle-free, ensuring you get fresh, delicious
              meals without the wait. Whether it’s a solo treat, a family feast,
              or a last-minute dinner, we’ve got you covered with speedy service
              and bold flavours. Enjoy Pizza, Burger, and more—freshly made,
              expertly packed, and ready for pickup or fast delivery straight to
              your door founded on the idea that casual dining deserves the same
              precision, ingredient quality, and care as the finest restaurants.
              We source our flour from heritage mills, our tomatoes from San
              Marzano, and our beef from local farms that share our values.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              This isn't just food — it's the result of obsessive attention to
              craft, served in an atmosphere where everyone belongs.
            </p>
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
              alt="FoodnMood restaurant interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, duration: 0.8 }}
            className="aspect-[4/3] overflow-hidden border border-border order-2 lg:order-1"
          >
            <img
              src={kitchen}
              alt="FoodnMood kitchen"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our <span className="italic">Mission</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Looking for the best takeaway in Prahran? At Food N Mood, we’re
              here to serve you delicious food, whether you need a quick bite,
              or a family meal with fresh ingredients and fast service, we never
              turn down a hungry customer!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're building a community around food that respects both the
              ingredient and the person eating it. No shortcuts, no compromises,
              no excuses.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 border-t border-border pt-10">
              {[
                { value: "425°F", label: "Stone Ovens" },
                { value: "24hr", label: "Dough Ferment" },
                { value: "100%", label: "Fresh Daily" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-serif text-2xl font-bold">{s.value}</p>
                  <p className="label-text mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
