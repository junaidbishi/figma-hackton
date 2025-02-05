import { fetchProducts } from "@/sanity/lib/fetchProducts";


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productData = await fetchProducts();

    // Fetch by ID
    const id = searchParams.get("id");
    if (id) {
      const productById = productData.find((product: { id: string }) => product.id === id);
      if (productById) {
        return Response.json(productById, { status: 200 });
      }
      return Response.json({ message: "Product not found by ID." }, { status: 404 });
    }

    // Fetch by Slug
    const slug = searchParams.get("slug");
    if (slug) {
      const productBySlug = productData.find((product: { slug: string }) => product.slug === slug);
      if (productBySlug) {
        return Response.json(productBySlug, { status: 200 });
      }
      return Response.json({ message: "Product not found by slug." }, { status: 404 });
    }

    // Return all products
    return Response.json(productData, { status: 200 });
  } catch (error) {
    console.error("Error handling request:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
