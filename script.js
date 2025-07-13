
const user = JSON.parse(localStorage.getItem("shopdigoUser"));
if (user && user.name) {
  document.getElementById("userGreeting").textContent = "Hi, " + user.name;
  document.getElementById("authBtn").textContent = "Logout";
  document.getElementById("authBtn").addEventListener("click", () => {
    localStorage.removeItem("shopdigoUser");
    location.reload();
  });
}
