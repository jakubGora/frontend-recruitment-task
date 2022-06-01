const articleBtn = document.getElementsByClassName("article-btn")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
const alertWin = document.getElementsByClassName("alert")[0];
const alertWinContent = document.getElementsByClassName("content")[0];
const clickN = document.getElementById("nOfClicks");
const zerowanieBtn = document.getElementsByClassName("setNull-btn")[0];

zerowanieBtn.addEventListener("click", () => {
  localStorage.setItem("clicked", 0);
  clickN.innerHTML = 0;
  zerowanieBtn.style.display = "none";
});

articleBtn.addEventListener("click", () => {
  alertWin.style.display = "block";
  localStorage.setItem(
    "clicked",
    Number(localStorage.getItem("clicked")) + 1 || 1
  );
  clickN.innerHTML = localStorage.getItem("clicked")?.toString() || 1;
  if (Number(localStorage.getItem("clicked")) > 5) {
    zerowanieBtn.style.display = "block";
  } else zerowanieBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  alertWin.style.display = "none";
});

alertWin.addEventListener("click", function (event) {
  var isClickInsideElement = alertWinContent.contains(event.target);
  if (!isClickInsideElement) {
    alertWin.style.display = "none";
  }
});
