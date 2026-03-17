import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menuData";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

const MenuCard = ({ item, index = 0 }: { item: MenuItem; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ ...transition, delay: index * 0.08 }}
    whileHover={{ y: -8 }}
    className="group relative border border-border bg-card"
  >
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start gap-4">
        <h3 className="font-serif text-xl md:text-2xl italic leading-tight">{item.name}</h3>
        <span className="font-sans text-sm font-medium tabular-nums border border-border px-2 py-0.5 shrink-0">
          ${item.price}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
      <a
        href={item.orderLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block w-full border border-primary py-3 text-xs uppercase tracking-[0.15em] text-center bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      >
        Order Online
      </a>
    </div>
  </motion.div>
);

export default MenuCard;
