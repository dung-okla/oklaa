import { useShoppingCart } from "use-shopping-cart";

const CheckOutBtn =   ()=>{
const handleCheckout = async()=>{
    try{
const res = await redirectToCheckout();
if (res?.error) {
    console.log(res);
}
    }
    catch(error){
        console.log(error);

    }
}


 const {redirectToCheckout} =  useShoppingCart()
return <button  onClick={handleCheckout}
  className="flex justify-center items-center h-[50px] px-8 bg-black mb-5 transition-all w-full hover:bg-pink-800  text-white font-semibold uppercase">
    Proced TO CheckOut</button>
}
export default CheckOutBtn;