import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"



// creating connection to the backend
const client = createClient({
    projectId: "wpn75len",
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
})


// Allows to retrieve urls on images uploaded on sanity
const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)


export default client