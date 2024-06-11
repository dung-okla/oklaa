
import { client } from "../components/sanity";
import GiayCategories from '../components/GiayCategories';
const getData = async ()=>{
    const query =`*[_type == 'Product'] {
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[]-> {
          name
          }
      }`
      const data = await client.fetch(query);
      return data;
}



const OurGiay= async()=>{
    const giays =await getData()
    
    return (
        <div>
            <GiayCategories giays={giays}/>
        </div>
    )
}
export default OurGiay;