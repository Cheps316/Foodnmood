import heroBurger from "@/assets/hero-burger.png";
import pizza from "@/assets/pizza.jpg";
import pasta from "@/assets/pasta.jpg";
import bread from "@/assets/bread.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "burgers" | "pizza" | "pasta" | "breads" | "other";
  image: string;
  orderLink: string;
};

export const categories = [
  { id: "all", label: "All" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
  { id: "breads", label: "Breads" },
  { id: "other", label: "Other" },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "The Classic Smash",
    description: "Double patty, aged cheddar, house pickles, brioche bun",
    price: 16,
    category: "burgers",
    image: heroBurger,
    orderLink: "#",
  },
  {
    id: "2",
    name: "Truffle Burger",
    description: "Wagyu beef, truffle aioli, gruyère, caramelized onions",
    price: 22,
    category: "burgers",
    image: heroBurger,
    orderLink: "#",
  },
  {
    id: "3",
    name: "Margherita DOP",
    description: "San Marzano tomatoes, fior di latte, fresh basil, EVOO",
    price: 18,
    category: "pizza",
    image: pizza,
    orderLink: "#",
  },
  {
    id: "4",
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, fontina, parmigiano-reggiano",
    price: 20,
    category: "pizza",
    image: pizza,
    orderLink: "#",
  },
  {
    id: "5",
    name: "Cacio e Pepe",
    description: "Tonnarelli, pecorino romano, Tellicherry black pepper",
    price: 19,
    category: "pasta",
    image: pasta,
    orderLink: "#",
  },
  {
    id: "6",
    name: "Bolognese Ragu",
    description: "Slow-cooked beef & pork ragu, pappardelle, 24-month parmigiano",
    price: 21,
    category: "pasta",
    image: pasta,
    orderLink: "#",
  },
  {
    id: "7",
    name: "Sourdough Loaf",
    description: "72-hour ferment, stone-milled flour, sea salt crust",
    price: 8,
    category: "breads",
    image: bread,
    orderLink: "#",
  },
  {
    id: "8",
    name: "Focaccia Rosemary",
    description: "Ligurian olive oil, flaked salt, fresh rosemary",
    price: 10,
    category: "breads",
    image: bread,
    orderLink: "#",
  },
  {
    id: "9",
    name: "Burrata Salad",
    description: "Heirloom tomatoes, burrata, aged balsamic, micro basil",
    price: 16,
    category: "other",
    image: pasta,
    orderLink: "#",
  },
  {
    id: "10",
    name: "Tiramisu",
    description: "Espresso-soaked savoiardi, mascarpone, Valrhona cocoa",
    price: 12,
    category: "other",
    image: bread,
    orderLink: "#",
  },
];
