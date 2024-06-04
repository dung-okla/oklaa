'use client'
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from 'react-icons/cg'
import AddCardBtn from "./AddCardBtn";





const Giay = ({ giay }) => {

    const popularGiayCat = giay.categories.find(
        (giay) => giay.name == 'popular'
    );
    console.log(popularGiayCat);

    return (
        <div className="group">
            <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
                <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-100 flex justify-center items-center">
                    {popularGiayCat && <div className="absolute top-8 left-8   bg-sky-500  px-3 text-sm uppercase font-medium">popular

                    </div>}
                    <Image
                        src={urlFor(giay.images[0]).url()}
                        width={240}
                        height={147}
                        alt=""

                    />
                </div>

                <div className=" absolute top-8 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all">
                    <AddCardBtn 
                    name={giay.name}  
                    description ={giay.description} 
                    images={giay.images}
                    price={giay.price}
                    icon={<CgShoppingBag />}
                        className='flex justify-center items-center w-[50px] h-[50px] text-2xl text-white;'
                    />
                    <Link href={`product/${giay.slug}`}>
                        <button className="flex justify-center items-center w-[50ps] h-[50px] text-2xl text-black   transition-all">
                            <CgEye />
                        </button>
                    </Link>
                </div>


            </div>
            <h5>{giay.categories[0].name}</h5>
            <h4 className="mb-1">{giay.name}</h4>
            <div className="text-lg font-bold text-red-800">${giay.price}</div>
        </div>
    )
};
export default Giay;