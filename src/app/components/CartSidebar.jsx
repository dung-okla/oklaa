'use client';
import { useShoppingCart } from 'use-shopping-cart';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { ScrollArea } from '@radix-ui/react-scroll-area';
import CartItem from './CartItem';

import CheckOutBtn from './CheckOutBtn'



const CartSidebar = () => {
    const {cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice}= useShoppingCart();

    return <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()} >
        <SheetContent>
            <SheetHeader>
                <SheetTitle  className='text-left mb-12'>gio hang({cartCount})</SheetTitle>
            </SheetHeader>
            <>
            {cartCount == 0 ?(<div>ban chua dat hang</div> ) : (
                 <ScrollArea className='h-[70vh] xl:h-[74vh] pr-4 mb-4 overflow-auto' >
                {cartDetails && Object.entries(cartDetails).map(([key, item]) =>{
                  return  <CartItem item={item} key={key} />;
                })}
                </ScrollArea>)}
            </>
{cartCount >0 &&(
    <div>
        <div className='flex justify-between font-semibold'>
            <div className='uppercase mb-5'>Total</div>
            <div>${totalPrice}</div>
        </div>
        <CheckOutBtn/>
    </div>
)}

        </SheetContent>
    </Sheet>
}
export default CartSidebar