const accessToken = localStorage.getItem("accessToken");

export async function placeOrder(userDeliveryDetails) {
  const address = `${userDeliveryDetails.street_address}, ${userDeliveryDetails.city}, ${userDeliveryDetails.ZIP_code}`;
  const paymentMethod = userDeliveryDetails.paymentMethod;

  const response = await fetch("http://localhost:8080/api/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}` 
    },
    body: {
        address: address,
        paymentMethod: paymentMethod
    }
  })

  const data = await response.json();

  console.log(data);

  return data;

}
