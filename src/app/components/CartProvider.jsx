'use client'
import { CartProvider as CProvider, useShoppingCart } from "use-shopping-cart"

const CartProvider = ({ children }) => {
    return (
        <CProvider
            mode="payment" 
            cartMode="client-only" 
            stripe="" 
            successUrl="succes" 
            cancelUrl="error" 
            language="en-US" 
            currency="USD"
            billingAddressCollection={true} 
            shouldPersist={true} 
        >
            {children}
        </CProvider>
    )
}
export default CartProvider





