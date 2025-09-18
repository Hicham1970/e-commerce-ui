import ProductInteraction from "@/components/productInteraction";
import { ProductType } from "@/types"
import Image from "next/image"



//Temporary
const product: ProductType = {
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
}; 

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
    // TODO : get the product from the DB
    // Temporary
    return {
        title: product.name,
        description: product.description,
    }
}

const ProductPage = async ({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ color: string; size: string }> }) => {

    const { size, color } = await searchParams
    const selectedSize = (size || product.sizes[0] as string)
    const selectedColor = (color || product.colors[0] as string)
    return (
        <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12'>
            {/* Image */}
            <div className="w-full lg:w-5/12 relative aspect-[2/3]">
                <Image src={product.images[selectedColor]} alt={product.name} fill className="object-contain rounded-md" />
            </div>
            {/* Details */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">
                <h1 className="text-2xl font-medium">{product.name}</h1>
                <p className="text-gray-500">{product.description}</p>
                <h2 className="text-2xl font-semibold">${product.price}</h2>
                <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
                {/* Card Infos */}
                <div className="flex items-center gap-2 mt-4">
                     <Image src="/Klarna.png" width={50} height={25} alt="Klarna" className="rounded-md" />
                    <Image src="/stripe.png" width={50} height={25} alt="stripe" className="rounded-md" />
                    <Image src="/cards.png" width={50} height={25} alt="cards" className="rounded-md" />
                </div>
                <p className="text-gray-500 text-xs">
                    By clicking Pay Now, you agree to our {" "}
                    <span className="underline hover:text-black">Terms & Conditions</span>{" "}
                    and {" " }<span className="underline hover:text-black">Privacy Policy. </span>
                    You authorize us to charge your selected payment method for the total amount shown. All
                    sales are subject to our return and {" "}
                    <span className="underline hover:text-black">Refund Policies</span>.

                </p>
            </div>
        </div>
    )
}

export default ProductPage
