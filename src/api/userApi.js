export async function loginUser(userLoginDetails) {
  const response = await fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userLoginDetails.userEmail,
      password: userLoginDetails.password,
    }),
  });

  const data = await response.json();
  if (response.status === 400) {
    return true;
  }

  console.log(data);
  localStorage.setItem("accessToken", data.accessToken);
  return;
}
