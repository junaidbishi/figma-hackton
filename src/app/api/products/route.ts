import { client } from '@/sanity/lib/client';


export const fetchProducts = async () => {
  const query = `
    *[_type == "product"]{
      "id": _id,
      "slug": slug.current,
      name,
      description,
      price,
      "originalPrice": priceWithoutDiscount,
      "discount": discountPercentage,
      rating,
      stockLevel,
      tags,
      sizes,
      colors,
      "images": images[].asset->url,
      reviews[]{
        _key,
        id,
        name,
        review,
        rating,
        date,
      }
    }
  `;
  return await client.fetch(query);
};


export async function GET(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
  
      // Fetch all products from Sanity
      const productData = await fetchProducts();
  
      // Handle "id" parameter
      const id = searchParams.get("id");
      if (id) {
        const productById = productData.find((product: { id: string }) => product.id === id);
        if (productById) {
          return new Response(JSON.stringify(productById), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
          });
        } else {
          return new Response(JSON.stringify({ message: "Product not found by ID." }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        }
      }
  
      // Handle "slug" parameter
      const slug = searchParams.get("slug");
      console.log(`Received slug: ${slug}`);
      if (slug) {
        const productBySlug = productData.find((product: { slug: string }) => product.slug === slug);
        if (productBySlug) {
          return new Response(JSON.stringify(productBySlug), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-store",
            },
          });
        } else {
          return new Response(JSON.stringify({ message: "Product not found by slug." }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
          });
        }
      }
  
      // Default: Return all products if no parameters are provided
      return new Response(JSON.stringify(productData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error handling request:", error.message, error.stack);
      } else {
        console.error("Error handling request:", error);
      }
      return new Response(JSON.stringify({ message: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }