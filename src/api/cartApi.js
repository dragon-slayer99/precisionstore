const accessToken = localStorage.getItem("accessToken");

export async function getCartItems() {
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    console.log(response);
  }

  return response;
}

export async function postCartItems(productId, productCnt) {
  const response = await fetch("http://localhost:8080/api/cart/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      productId: productId,
      quantity: productCnt,
    }),
  });


  return response;
}

export async function deleteCartItem(cartItemId) {
  const response = await fetch(`http://localhost:8080/api/cart/items/${cartItemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    }
  })

  const data = await response.json();
  console.log(data);

  return response;

}

export async function updateCartItemQuantity(quantity) {

  const response = await fetch("http://localhost:8080/api/cart/item", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      quantity: quantity
    })
  })

  return response;
  
}
