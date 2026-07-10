const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function getAuthHeaders() {
  const accessToken = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function getCartItems() {
  
  const response = await fetch(`${API_BASE_URL}/cart/items`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    console.log(response);
  }

  return response;
}

export async function postCartItems(productId, quantity) {
  const response = await fetch(`${API_BASE_URL}/cart/items`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      productId,
      quantity
    }),
  });

  return response;
}

export async function deleteCartItem(cartItemId) {
  const response = await fetch(`${API_BASE_URL}/cart/items/${cartItemId}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  })

  return response;

}

export async function updateCartItemQuantity(id, quantity) {

  const response = await fetch(`${API_BASE_URL}/cart/items/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      quantity: quantity
    })
  })

  return response;

}
