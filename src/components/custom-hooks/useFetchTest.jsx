import useFetch from "./useFetch";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {loading ? <h3>Loading</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((prodItem) => (
            <p key={prodItem.key}>{prodItem.title}</p>
          ))
        : null}
    </div>
  );
}
