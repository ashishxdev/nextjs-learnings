export default async function OptionalProductFilters({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h1>Optional Product Filters</h1>
    </div>
  );
}