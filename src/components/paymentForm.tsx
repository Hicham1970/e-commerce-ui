"use client"

import {PaymentFormInputs, PaymentFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"

const PaymentForm = () => {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm<PaymentFormInputs>({
            resolver: zodResolver(PaymentFormSchema),
        })
    const router = useRouter();
    
    const handlePaymentForm : SubmitHandler<PaymentFormInputs> = (data) => {
       
        
    }    

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>
            <div className="flex flex-col gap1">
                <label htmlFor="cardHolder" className="text-xs text-gray500 font-medium">Name on Card</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="cardHolder" placeholder="John Do" {...register("cardHolder")} />
                {errors.cardHolder && <span className=" text-xs text-red-500">{errors.cardHolder.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="cardNumber" className="text-xs text-gray500 font-medium">Card Number</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="cardNumber" placeholder="5555-5555-55553" {...register("cardNumber")} />
                {errors.cardNumber && <span className=" text-xs text-red-500">{errors.cardNumber.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="expirationDate" className="text-xs text-gray500 font-medium">Expiration Date</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="phone" placeholder="08/28" {...register("expirationDate")} />
                {errors.expirationDate && <span className=" text-xs text-red-500">{errors.expirationDate.message}</span>}

            </div>
            <div className="flex flex-col gap1">
                <label htmlFor="cvv" className="text-xs text-gray500 font-medium">CVV</label>
                <input className="border-b border-gray-200 py-2 outline-none text-sm" type="text" id="cvv" placeholder="054" {...register("cvv")} />
                {errors.cvv && <span className=" text-xs text-red-500">{errors.cvv.message}</span>}

            </div>
            <div className="flex items-center gap-2 mt-4">
                <Image src="/Klarna.png" width={50} height={25} alt="Klarna" className="rounded-md" />

                <Image src="/stripe.png" width={50} height={25} alt="stripe" className="rounded-md" />

                <Image src="/cards.png" width={50} height={25} alt="cards" className="rounded-md" />
            </div>
            <button
                type="submit"
                className=" w-full bg-gray-700 text-white rounded-lg p-2 cursor-pointer flex flex-row items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
                Checkout
                <ShoppingCart className="w-3 h-3" />
            </button>

        </form>
    )
}

export default PaymentForm