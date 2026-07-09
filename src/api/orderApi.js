const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

  const response = await fetch(`${API_BASE_URL}/orders`, {
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

  const response = await fetch(`${API_BASE_URL}/orders`, {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  console.log(data);

  return data;
  
}
