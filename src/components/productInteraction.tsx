"use client";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from 'react';
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";




const ProductInteraction = (
    { product, selectedSize, selectedColor

    }: {
        product: ProductType,
        selectedSize: string,
        selectedColor: string
    }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] = useState(1); 
    const {addToCart} = useCartStore();

    const handleTypeChange = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`)
    }

    const handleQuantityChange = (type: "decrement" | "increment") => {
        if (type === "increment") {
            setQuantity(prev => prev + 1)
        } else {
            if (quantity > 1) {
                setQuantity(prev => prev - 1)
            }

        }
    }

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity,
            selectedSize,
            selectedColor
        });
        toast.success("Product added to cart");
    }

    return (
        <div className='flex flex-col gap-4'>
            {/* Size */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500 ">Size</span>
                <div className="flex items-center gap-2">
                    {product.sizes.map(size => (
                        <div
                            onClick={() => handleTypeChange("size", size)}
                            key={size} className={`cursor-pointer border-1 p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300"
                                }`}>
                            <div className={`w-6 h-6 text-center flex items-center justify-center  ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                                }`}>{size.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Color */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500 ">Color</span>
                <div className="flex items-center gap-2">
                    {product.colors.map(color => (
                        <div
                            onClick={() => handleTypeChange("color", color)}
                            key={color} className={`cursor-pointer border-1 p-[2px] ${selectedColor === color ? "border-gray-300" : "border-white"
                                }`}>
                            <div className={`w-6 h-6 `}
                                style={{ backgroundColor: color }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Quantity */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Quantity</span>
                <div className="flex items-center gap-2">
                    <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={() => handleQuantityChange("decrement")}>
                        <Minus className="w-4 h-4" />
                    </button>
                    {quantity}
                    <button className="cursor-pointer border-1 border-gray-300 p-1" onClick={() => handleQuantityChange("increment")}>
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>
            {/* Buttons */}
            <button onClick={handleAddToCart} className="bg-gray-800 text-white py-2 px-4 flex items-center justify-center gap-2 rounded-md shadow-lg cursor-pointer text-sm font-medium">
                <Plus className="w-4 h-4" />
                Add to Cart
            </button>
            <button className="ring-1 ring-gray-400 text-gray-800 py-2 px-4 flex items-center justify-center gap-2 rounded-md shadow-lg cursor-pointer text-sm font-medium ">
                <ShoppingCart className="w-4 h-4" />
                Buy this Product
            </button>
        </div>
    )
}

export default ProductInteraction