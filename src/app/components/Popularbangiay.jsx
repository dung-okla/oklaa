import { client } from "../../lib/sanity"
import Link from 'next/link'
import PopularGiaychuyen from "./PopularGiaychuyen";
const getdata = async () => {
    const query = `*[_type == 'Product' && references(*[_type =='category' && name == 'popular']._id, categories)] {
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
    return data
}

const PopularBangiay = async () => {
    const bangiay = await getdata();

    return (
        <section className="py-24">
            <div className="container mx-auto">
                <h2 className="text-center">giay pho bien</h2>
                <p className="text-center">the gioi giay viet nam</p>
                <PopularGiaychuyen bangiay={bangiay} />
                <Link href="/our-giay">
                    <button className="flex justify-center items-center h-[50px] px-8 text-white font-semibold uppercase bg-sky-500 hover:bg-sky-700 mx-auto">ban tat ca giay</button>
                </Link>
            </div>
        </section>
    )
}
export default PopularBangiay