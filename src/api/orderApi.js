function getAuthHeaders() {
  const accessToken = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function placeOrder(userDeliveryDetails) {
  const address = `${userDeliveryDetails.street_address}, ${userDeliveryDetails.city}, ${userDeliveryDetails.ZIP_code}`;
  const paymentMethod = userDeliveryDetails.paymentMethod;

  const response = await fetch("http://localhost:8080/api/orders", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      address: address,
      paymentMethod: paymentMethod,
    }),
  });

  const data = await response.json();

  console.log(data);

  return data;
}

export async function getUserOrders() {

  const response = await fetch("http://localhost:8080/api/orders", {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  console.log(data);

  return data;
  
}
