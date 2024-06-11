'use client'
import { useShoppingCart } from "use-shopping-cart"
import { useToast } from './ui/use-toast'

const AddCardBtn = ({ text, icon, id, name, description, images, price,
   price_id,


}) => {

   const { addItem } = useShoppingCart()
   const { toast } = useToast()

   const giay = {
      id: id,
      name: name,
      description: description,
      images: images,
      price: price,
      price_id: price_id,
   }



   return (
      <button
         onClick={() => {
            addItem(giay);
            toast({
               title: `${name} da them vao gio hang`
            })
         }}


         className="bg-sky-500 hover:bg-sky-700 flex justify-center items-center h-[50px] px-8 text-white font-semibold uppercase ">
         <h5> {icon}</h5>
      </button>

   )
}
export default AddCardBtn