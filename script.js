document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to Nelly's portfolio");
  const CurrentYear = new Date().getElementById("year");
  if (yearElement) {
    yearElement.textContent = CurrentYear;
  }
});
