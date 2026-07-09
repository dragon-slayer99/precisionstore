const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts(id) {
  const URL = id
    ? `${API_BASE_URL}/products/${id}`
    : `${API_BASE_URL}/products`;

  // const URL = `${API_BASE_URL}/products${id && `/${id}`}`

  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Cannot process the request");
  }

  const data = await response.json();
  // console.log(data);
  return data;
}
