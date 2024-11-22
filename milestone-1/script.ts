const toggleButtton = document.getElementById(
  "toggle-btn"
) as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;
toggleButtton.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
