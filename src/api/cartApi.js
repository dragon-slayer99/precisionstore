function getAuthHeaders() {
  const accessToken = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function getCartItems() {
  
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "GET",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    console.log(response);
  }

  return response;
}

export async function postCartItems(productId, quantity) {
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      // productId: productId,
      // quantity: quantity,  This is also valid
      productId,
      quantity
    }),
  });

  return response;
}

export async function deleteCartItem(cartItemId) {
  const response = await fetch(`http://localhost:8080/api/cart/items/${cartItemId}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  })

  return response;

}

export async function updateCartItemQuantity(id, quantity) {

  const response = await fetch(`http://localhost:8080/api/cart/items/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      quantity: quantity
    })
  })

  return response;

}
