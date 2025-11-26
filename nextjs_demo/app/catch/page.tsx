'use cache';

import { unstable_cacheLife as cacheLife } from "next/cache";

export default async function CachedProductCard({producId}: {producId: string}) {
    cacheLife("hours");
    const product = await fetch(`https://api.example.com/products/${producId}`).
    then(res => res.json());

    return (
        <div className="p-4 bg-white shadow-xl rounded-lg">
            {product.map((product: {id: number; title: string}) => (
                <>
                <h2>{product.id}</h2>
                <p>Price: ${product.title}</p></>
            ))}
            
        </div>
    );
}

//Need to fix the fetch URL to a working API endpoint

//CatchLife => when to clear the cache... revalidate()
//CachTag => What to clear from the cache... revalidateTag()