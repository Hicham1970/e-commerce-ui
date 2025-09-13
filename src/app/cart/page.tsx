"use client";

import PaymentForm from "@/components/paymentForm";
import ShippingForm from "@/components/shippingForm";
import { CartItemsType } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";

const steps = [
  { id: 1, title: "Shopping cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
];

const cartItems: CartItemsType = [
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
    quantity: 1,
    selectedSize: "m",
    selectedColor: "green",
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
    quantity: 1,
    selectedSize: "xl",
    selectedColor: "gray",
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
    quantity: 1,
    selectedSize: "s",
    selectedColor: "black",
  },
];

const CartContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState(null);

  const activeStep = parseInt(searchParams.get("step") || "1");

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* Title */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-3 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                step.id === activeStep
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              } `}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* Steps & Details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* Steps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-4 rounded-lg flex flex-col gap-8 ">
          {activeStep === 1 ? (
            cartItems.map((item) => (
              // Single cart item
              <div className="flex justify-between items-center py-4" key={item.id}>
                {/* Image & Details */}
                <div className=" flex gap-8">
                  {/* Image */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Items Details */}
                  <div className=" flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs font-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs font-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs font-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>

                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* Delete Button */}
                <button className="rounded-full w-8 h-8 bg-red-100  text-red-400 flex items-center justify-center cursor-pointer hover:bg-red-200 transition-all duration-300 ">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please fill in the shipping form to continue
            </p>
          )}
        </div>
        {/* Details */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max ">
          <h1 className="font-semibold">Cart Details</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className=" text-gray-500">Subtotal</p>
              <p className=" font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className=" text-gray-500">Discount(10%)</p>
              <p className=" font-medium">$10</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className=" text-gray-500">Shipment Fee</p>
              <p className=" font-medium">$10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className=" text-gray-800 font-semibold">Total</p>
              <p className=" font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className=" w-full bg-gray-700 text-white rounded-lg p-2 cursor-pointer flex flex-row items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  );
};

export default CartPage;
