import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"
import { FaPlus, FaMinus, FaX } from 'react-icons/fa6'


import { urlFor } from "./sanity"


const CartItem = ({ item }) => {
    const { removeItem, incrementItem, decrementItem } = useShoppingCart();
    return (
        <div className="flex w-full justify-between  mb-4 items-center h-[120px] border-b">

            <div className="w-[110px] h-[110px] relative object-contain">
                <Image
                    src={urlFor(item.images[0]).url()}
                    fill
                    priority
                    sizes="(max-width:110) 110px ,110px"
                    className="object-contain"
                    alt=""
                />
            </div>
            <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
                <div className="flex items-center justify-between" >
                    <h5>{item.name}</h5>
                    <button onClick={() => removeItem(item.id)}>
                        <FaX />
                    </button>
                </div>
                {/* +- */}
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <button onClick={() => decrementItem(item.id)}>
                            <FaMinus className="text-[10px]" />
                        </button>
                        <div className="m-2">{item.quantity}</div>
                        <button onClick={() => incrementItem(item.id)}>
                            <FaPlus className="text-[10px]" />
                        </button>
                    </div>
                    <div>{item.price * item.quantity}</div>
                </div>
            </div>
        </div>)
}
export default CartItem