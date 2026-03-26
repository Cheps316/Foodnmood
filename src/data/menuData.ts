import heroBurger from "@/assets/double-cheese-burger.jpeg";
import prawnPizza from "@/assets/prawn-pizza.jpeg";
import carbonara from "@/assets/carbonara.jpeg";
import margherrita from "@/assets/margherita.jpeg";
import dynamicBeefBurger from "@/assets/dynamic-beef-burger.jpeg";
import eggBurger from "@/assets/egg-factor.jpeg";
import schnitzelBurger from "@/assets/schnitzel-burger.jpeg";
import bolognese from "@/assets/balognese.jpeg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "burgers" | "pizza" | "pasta";
  image: string;
  orderLink: string;
};

export const categories = [
  { id: "all", label: "All" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pasta" },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Double Cheese Burger",
    description:
      "Double Beef pattie 200gm each, tomato sauce, aioli and cheese.",
    price: 18,
    category: "burgers",
    image: heroBurger,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "2",
    name: "Carbonara",
    description:
      "Bacon, garlic, egg cooked in a cream sauce topped with parmesan cheese.",
    price: 18,
    category: "pasta",
    image: carbonara,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "3",
    name: "Prawn Pizza",
    description:
      "Napoli, tiger prawn, red onion, basil, chilli, mozzarella topped W rocket & lemon",
    price: 22,
    category: "pizza",
    image: prawnPizza,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "4",
    name: "Margherita",
    description: "Napoli, basil, oregano, & mozzarella",
    price: 16,
    category: "pizza",
    image: margherrita,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "5",
    name: "Dynamic Beef Burger",
    description:
      "Beef pattie 200gm, lettuce, jalapenos, tomato, red onion, cheese and Hello burger sauce.",
    price: 15,
    category: "burgers",
    image: dynamicBeefBurger,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "6",
    name: "Schnitzel Burger",
    description: "Chicken schnitzel, lettuce, tomato, bacon, cheese and aioli",
    price: 15,
    category: "burgers",
    image: schnitzelBurger,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "7",
    name: "Egg Factor",
    description:
      "Beef pattie 200 gm, cheese, lettuce, tomato, bacon, Egg and aioli.",
    price: 17,
    category: "burgers",
    image: eggBurger,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
  {
    id: "8",
    name: "Bolognese",
    description:
      "Slow cooked beef cooked in red sauce topped with parmesan cheese.",
    price: 18,
    category: "pasta",
    image: bolognese,
    orderLink: "https://foodnmoodonline.com.au/order-now",
  },
];
