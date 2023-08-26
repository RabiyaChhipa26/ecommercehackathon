import { client } from './client';

export default async function DataFetching() {
    const res = await client.fetch(`*[_type=="products"]`)
    return res
}
