import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";
import { ProductType } from "@/types/productTypes";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Corrected GROQ query to match 'slug' in 'tags' array
  const products: ProductType[] = await client.fetch(
    `*[_type == 'products' && $slug in tags]`,
    { slug }
  );
  console.log(products);

  return (
    <div>
        <h2 className="text-center font-bold text-3xl my-10">All products of {slug.toUpperCase()}</h2>
    <div className="flex justify-center gap-10">
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
    </div>
  );
}
