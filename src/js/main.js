const articleBtn = document.getElementsByClassName("article-btn")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
const alertWin = document.getElementsByClassName("alert")[0];
const alertWinContent = document.getElementsByClassName("content")[0];
const clickN = document.getElementById("nOfClicks");
const resetBtn = document.getElementsByClassName("setNull-btn")[0];

resetBtn.addEventListener("click", () => {
  localStorage.setItem("clicked", 0);
  clickN.innerHTML = 0;
  resetBtn.style.display = "none";
});

articleBtn.addEventListener("click", () => {
  alertWin.style.display = "block";
  localStorage.setItem(
    "clicked",
    Number(localStorage.getItem("clicked")) + 1 || 1
  );
  clickN.innerHTML = localStorage.getItem("clicked") || 1;
  if (Number(localStorage.getItem("clicked")) > 5)
    resetBtn.style.display = "block";
  else resetBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  alertWin.style.display = "none";
});

alertWin.addEventListener("click", function (event) {
  let isClickInsideElement = alertWinContent.contains(event.target);
  if (!isClickInsideElement) {
    alertWin.style.display = "none";
  }
});
