import { ProductsType } from "@/types";

import Categories from "./categories";
import ProductCard from "./productCard";
import Link from "next/link";


//Temporal file for product list component
const products : ProductsType= [
    {
        id: 1,
        name: "Adidas CoreFit T-Shirt",
        shortDescription:
            "Breathable and lightweight T-shirt designed for optimal comfort during workouts.",
        description:
            "The Adidas CoreFit T-Shirt features moisture-wicking fabric that keeps you dry and comfortable. Its ergonomic design ensures a perfect fit, making it ideal for both casual wear and intense training sessions.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
    },
    {
        id: 2,
        name: "Puma Ultra Warm Zip",
        shortDescription:
            "High-performance zip-up jacket providing exceptional warmth and style.",
        description:
            "The Puma Ultra Warm Zip jacket combines advanced insulation technology with a sleek design. Perfect for chilly mornings or evening runs, it offers comfort without compromising on mobility.",
        price: 59.9,
        sizes: ["s", "m", "l", "xl"],
        colors: ["gray", "green"],
        images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    },
    {
        id: 3,
        name: "Nike Air Essentials Pullover",
        shortDescription:
            "Classic pullover with soft fabric for everyday comfort and style.",
        description:
            "Nike Air Essentials Pullover is crafted from premium cotton blend material, providing warmth and breath-ability. Its timeless design makes it a versatile addition to your wardrobe.",
        price: 69.9,
        sizes: ["s", "m", "l"],
        colors: ["green", "blue", "black"],
        images: {
            green: "/products/3gr.png",
            blue: "/products/3b.png",
            black: "/products/3bl.png",
        },
    },
    {
        id: 4,
        name: "Nike Dri Flex T-Shirt",
        shortDescription:
            "Lightweight and flexible T-shirt designed to keep you dry and comfortable.",
        description:
            "The Nike Dri Flex T-Shirt features Dri-FIT technology that wicks sweat away from your skin. Its flexible fabric allows for a full range of motion, making it perfect for active lifestyles.",
        price: 29.9,
        sizes: ["s", "m", "l"],
        colors: ["white", "pink"],
        images: { white: "/products/4w.png", pink: "/products/4p.png" },
    },
    {
        id: 5,
        name: "Under Armour StormFleece",
        shortDescription:
            "Durable fleece jacket designed to protect against wind and rain.",
        description:
            "Under Armour StormFleece offers water-resistant protection with a soft fleece interior for warmth. Ideal for outdoor activities, it combines functionality with comfort.",
        price: 49.9,
        sizes: ["s", "m", "l"],
        colors: ["red", "orange", "black"],
        images: {
            red: "/products/5r.png",
            orange: "/products/5o.png",
            black: "/products/5bl.png",
        },
    },
    {
        id: 6,
        name: "Nike Air Max 270",
        shortDescription:
            "Stylish sneakers featuring responsive cushioning for all-day comfort.",
        description:
            "Nike Air Max 270 combines modern design with Max Air technology to provide superior cushioning. These sneakers are perfect for casual wear and light athletic activities.",
        price: 59.9,
        sizes: ["40", "42", "43", "44"],
        colors: ["gray", "white"],
        images: { gray: "/products/6g.png", white: "/products/6w.png" },
    },
    {
        id: 7,
        name: "Nike Ultra-boost Pulse ",
        shortDescription:
            "High-performance running shoes with energy-returning cushioning.",
        description:
            "Nike Ultra-boost Pulse offers exceptional comfort and support with its Boost mid-sole technology. Designed for runners seeking both style and performance.",
        price: 69.9,
        sizes: ["40", "42", "43"],
        colors: ["gray", "pink"],
        images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    },
    {
        id: 8,
        name: "Levi’s Classic Denim",
        shortDescription:
            "Timeless denim jeans with a comfortable fit and durable fabric.",
        description:
            "Levi’s Classic Denim jeans are crafted from high-quality cotton denim, offering both style and durability. Perfect for everyday wear, they provide a flattering fit and long-lasting comfort.",
        price: 59.9,
        sizes: ["s", "m", "l"],
        colors: ["blue", "green"],
        images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    },
];


const ProductList = ({category}:{category:string}) => {
 return (
     <div className='w-full'>
         <Categories />
         <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-12 ">
             {products.map(product => (
                    <ProductCard key={product.id} product={product} />
             ))}
             
         </div>
         <Link
             href={category ? `/products/?category=${category}` : "/products"}
             className="flex justify-end mt-4 underline text-sm text-gray-500"
         >
             View all products
         </Link>
         
 </div>
 )
}

export default ProductList