import { useShoppingCart } from "use-shopping-cart"


const AddCardBtn = ({text, icon, id,name,description,images,price}) => {
   
   const {addItem}= useShoppingCart()
   const giay={
    id:id,
    name:name,
    description:description,
    images: images,
    price: price
   }
   
   
   
    return (
        <button
         onClick={()=>{
            addItem(giay);
         }}
        
        
        className="bg-sky-500 hover:bg-sky-700 flex justify-center items-center h-[50px] px-8 text-white font-semibold uppercase ">
           <h5> {icon}</h5>
        </button>
        
    )
}
export default AddCardBtn