async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  console.log(slug, "slug");

  return <h1>Product Details</h1>;
}

export default ProductDetails;


