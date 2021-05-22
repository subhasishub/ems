export default function getAuthHeaders() {
  const jwtToken = localStorage.getItem("token");

  if (jwtToken) {
    console.log("auth: " + jwtToken);
    return "bearer " + jwtToken;
  } else {
    return false;
  }
}
