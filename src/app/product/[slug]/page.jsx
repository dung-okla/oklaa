
import Image from 'next/image';

import Link from 'next/link';
import {  Clock, PackageCheck, RefreshCw, ChevronLeft, Bike } from 'lucide-react'


import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url'
import { CgShoppingBag } from 'react-icons/cg';





const client = createClient({
    projectId: 'aa0dxaue',
    dataset: 'production',
    apiVersion: '2024-06-04',
    useCdn: true,
});
const imgBuilder = ImageUrlBuilder(client);
const urlFor = (source) => {
    return imgBuilder.image(source)
}

const getData = async (slug) => {
    const query = `*[_type == 'Product' && slug.current =='${slug}'][0] {
        _id,
        images,
        price,
        price_id,
        name,
        description,
        "slug": slug.current,
        "category": categories->{name}
    }`;
    const data = await client.fetch(query);
    return data;
};


const ProducDetai = async ({ params }) => {
    const giays = await getData(params.slug);
    return <section className='pt-24 pb-32'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-14'>
                <div className='xl:flex-1 h-max-[460px] bg-primary/5 xl:w-max-[700px] xl:h-[540px] flex justify-center items-center gap-3'>
                    <Image src={urlFor(giays.images[0]).url()}
                        width={473}
                        height={290}
                        priority
                        alt=''

                    />
                </div>
                <div className=' flex-1 flex-col justify-center items-start gap-10'>
                    <Link href='/' className='flex items-center gap-2 font-semibold'>
                        <ChevronLeft />
                        tro ve trang chu
                    </Link>
                    <div className='flex flex-col gap-6 items-start'> 
                        <h3>{giays.name}</h3>
                        <p>{giays.description}</p>
                        <p className='text-lg font-semibold'>${giays.price}</p>
                        <button className="bg-sky-500 hover:bg-sky-700 flex justify-center items-center h-[50px] px-8 text-white font-semibold uppercase ">
                      <h5><CgShoppingBag/></h5>  
        </button>
                    </div>
                    <div className='flex gap-2'>
                        <PackageCheck size={20} className='text-#dc2626'/>
                        <p>mien phi ship don hang 130$</p>
                    </div>
                    <div className='flex gap-2'>
                        <RefreshCw size={20} className='text-#dc2626'/>
                        <p>tra lai hang trong vong 30 ngay</p>
                    </div>
                    <div className='flex gap-2'>
                        <Bike size={20} className='text-#dc2626'/>
                        <p>giao hang trong 3-5 ngay</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default ProducDetai;