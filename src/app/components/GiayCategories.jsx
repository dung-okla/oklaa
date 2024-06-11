'use client'
import { useState, useEffect } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label';
import{ Slider}  from './ui/slider';
import Giay from './Giay';



const GiayCategories = ({ giays }) => {
    const [category, setCategory] = useState('all');
    const [filteredGiays, setFilteredGiays] = useState([])
    const [price, setPrice] = useState(900);
   useEffect(() => {
const filtered = giays.filter((giay) => {
    const categoryMatch = category == 'all' ? giays : giay.categories.some((categ)=>categ.name ==category) ;
    const priceMath = giay.price <= price;
    return categoryMatch && priceMath;
});
setFilteredGiays(filtered);

   },[category, price , giays]);

console.log(filteredGiays)


    return (
        <section className='min-h-[1200px] py-10'>
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <aside className=' w-full p-4  mb-8 xl:w-[270px] xl:h-[84vh] xl:fixed' >
                        <RadioGroup
                            defaultValue='all'
                            className='flex flex-col gap-6 mb-12'


                        >
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='all' id='all'
                                  onClick={()=>setCategory('all')}
                                 />
                                <label htmlFor="all">all</label>

                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='adidas' id='adidas'  onClick={()=>setCategory('adidas')}/>
                                <label htmlFor="adidas">adidas</label>

                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='nike' id='nike'  onClick={()=>setCategory('nike')} />
                                <label htmlFor="nike">nike</label>

                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='bitit' id='bitit'  onClick={()=>setCategory('bitit')} />
                                <label htmlFor="bitit">bitit</label>

                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='vans' id='vans'  onClick={()=>setCategory('vans')} />
                                <label htmlFor="vans">vans</label>

                            </div>
                        </RadioGroup>

<div>
    <div  className='text-red-700 mb-4 font-medium'>
        max price: <span>{price}</span>
    <span className='ml-2'>
        {filteredGiays.length > 1
        ? `${filteredGiays.length} items`
        : filteredGiays ==0
        ? `${filteredGiays.length} items`
        : `${filteredGiays.length} items`
        
        
        
        }

    </span>
    </div>
    <Slider 
    defaultValue={[900]} 
        max={1000}
        step={1}
    onValueChange = {(val)=>setPrice(val[0])}
    />
</div>



                    </aside>

                    <div className=' w-full xl:w-[1050px] ml-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grip-cols-3 gap-[30px]'>
                        {filteredGiays.map(giay=>{
                        return <Giay giay={giay} key={giay.price_id}/>
                    })}
                        </div>
                   
                    </div>
                </div>

            </div>

        </section>
    )
};

export default GiayCategories;