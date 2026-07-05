function getAuthHeaders() {
  const accessToken = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}


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
  if (!response.ok) {
    return null;
  }

  console.log(data);
  localStorage.setItem("accessToken", data.accessToken);
  return data.accessToken;
}

export async function validateToken(token) {
  const response = await fetch("http://localhost:8080/api/users/validate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function getUserDetails() {
  const response = await fetch("http://localhost:8080/api/users", {
    method: "GET",
    headers: getAuthHeaders()
  });

  console.log(response);
  return response;
}
