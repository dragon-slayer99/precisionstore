export async function getProducts(id) {
  const URL = id
    ? `http://localhost:8080/api/products/${id}`
    : `http://localhost:8080/api/products`;

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Cannot process the request");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
