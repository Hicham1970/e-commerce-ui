"use client"

import { ShippingFormInputs, ShippingFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"

const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm<ShippingFormInputs>({
            resolver: zodResolver(ShippingFormSchema),
        })
    const router = useRouter();
    
    const handleShippingForm : SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data);
        router.push("/cart?step=3")
        
    }    

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>
            <div className="flex flex-col gap1">
                <label htmlFor="name" className="text-xs text-gray500 font-medium">Name</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="name" placeholder="John Do" {...register("name")} />
                {errors.name && <span className=" text-xs text-red-500">{errors.name.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="email" className="text-xs text-gray500 font-medium">Email</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="email" id="email" placeholder="John-Do@gmail.com" {...register("email")} />
                {errors.email && <span className=" text-xs text-red-500">{errors.email.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="phone" className="text-xs text-gray500 font-medium">Phone Number</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="phone" placeholder="555-555-5555" {...register("phone")} />
                {errors.phone && <span className=" text-xs text-red-500">{errors.phone.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="address" className="text-xs text-gray500 font-medium">Address</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="address" placeholder="123 Main Street, Casablanca" {...register("address")} />
                {errors.address && <span className=" text-xs text-red-500">{errors.address.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="city" className="text-xs text-gray500 font-medium">City</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="city" placeholder="Casablanca" {...register("city")} />
                {errors.city && <span className=" text-xs text-red-500">{errors.city.message}</span>}

            </div>
            <button
                type="submit"
                className=" w-full bg-gray-700 text-white rounded-lg p-2 cursor-pointer flex flex-row items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
                Continue
                <ArrowRight className="w-3 h-3" />
            </button>

        </form>
    )
}

export default ShippingForm