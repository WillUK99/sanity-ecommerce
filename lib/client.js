import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ofb6i33d",
  dataset: "production",
  apiVersion: "2022-04-26",
  useCdn: true,
  token: process.env.NEXT_PUBLICSANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)