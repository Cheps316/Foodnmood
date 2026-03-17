import { useState } from "react";
import { menuItems, categories } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";

const OrderPage = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <p className="label-text mb-3">At Your Door</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold">Order Online</h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Browse our menu and click "Order Online" to be redirected to our delivery partners.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-xs uppercase tracking-[0.15em] pb-2 border-b-2 transition-colors whitespace-nowrap ${
                  active === cat.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
