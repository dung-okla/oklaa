import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'aa0dxaue',
    dataset: 'production',
    apiVersion: '2024-06-04',
    useCdn: true,
});
const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source)
}