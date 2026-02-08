// default -> fetch() -> caches responses automatically
// cache -> reload, no-store, force-cache

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

async function getProducts(): Promise<ProductsResponse> {
  // const response = await fetch("https://dummyjson.com/products");
  const response = await fetch("https://dummyjson.com/products", {
    // cache : "no-store" // never cache ur response, always going to fetch fresh response
    // cache : "force-cache"
    cache : "reload" // fetches fresh response, update the cache
  });

  // vvi -> till all u need based on ur requirement -> u need to apply cache strategy

  if (!response.ok) {
    throw new Error("Failed to fetch products!");
  }

  return response.json();
}

async function ServerSideFetchExample() {
  const products = await getProducts();
  return (
    <div>
      <h1>Server Side Data Fetching</h1>
      <h3>{products?.total} no of products</h3>
      <div className="flex flex-col gap-2">
        {products?.products?.map((product) => (
          <div key={product.id} className="bg-blue-400 text-black gap-2">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerSideFetchExample;
