const articleBtn=document.getElementsByClassName("article-btn")[0],closeBtn=document.getElementsByClassName("close-btn")[0],alertWin=document.getElementsByClassName("alert")[0],alertWinContent=document.getElementsByClassName("content")[0],clickN=document.getElementById("nOfClicks"),resetBtn=document.getElementsByClassName("setNull-btn")[0];resetBtn.addEventListener("click",()=>{localStorage.setItem("clicked",0),clickN.innerHTML=0,resetBtn.style.display="none"}),articleBtn.addEventListener("click",()=>{alertWin.style.display="block",localStorage.setItem("clicked",Number(localStorage.getItem("clicked"))+1||1),clickN.innerHTML=localStorage.getItem("clicked")||1,5<Number(localStorage.getItem("clicked"))?resetBtn.style.display="block":resetBtn.style.display="none"}),closeBtn.addEventListener("click",()=>{alertWin.style.display="none"}),alertWin.addEventListener("click",function(e){alertWinContent.contains(e.target)||(alertWin.style.display="none")});