import zod from "zod";


export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};

export type ProductsType = ProductType[];


export type CartType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
}

export type CartItemsType = CartType[]


export const ShippingFormSchema = zod.object({
    name: zod.string().min(3, "Name is required !"),
    email: zod.email().min(1, "Email is required !"),
    phone: zod.string().min(7, "Phone number must be at least 7 characters !").max(10, "Phone number must be at most 10 characters !").regex(/^\d+$/, "Phone number must contain only numbers !"),
    address: zod.string().min(3, "Address is required !"),
    city: zod.string().min(3, "City is required !"),

})
export type ShippingFormInputs = zod.infer<typeof ShippingFormSchema>


export const PaymentFormSchema = zod.object({
    cardHolder: zod.string().min(3, "Card Holder is required !"),
    cardNumber: zod.string().min(16, "Card Number is required !").max(16, "Card Number is required !"),
    expirationDate: zod.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration Date must be in the format MM/YY !"),
    cvv: zod.string().min(3, "cvv is required !").max(3, "cvv is required !"),
})
export type PaymentFormInputs = zod.infer<typeof PaymentFormSchema>