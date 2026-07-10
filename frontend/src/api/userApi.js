const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function getAuthHeaders() {
  const accessToken = localStorage.getItem("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}


export async function loginUser(userLoginDetails) {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
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
  const response = await fetch(`${API_BASE_URL}/users/validate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}

export async function getUserDetails() {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "GET",
    headers: getAuthHeaders()
  });

  return response;
}

export async function updateUserDetails(name, email) {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      name,
      email
    })
  });

  return response;
}
