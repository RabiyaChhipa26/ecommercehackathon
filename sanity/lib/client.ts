import { createClient } from 'next-sanity'
import { SanityClient } from 'sanity'

export const client: SanityClient = createClient({
  apiVersion: "2023-07-21",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
})
