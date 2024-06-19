function toggleMenu() {
  var menu = document.getElementById("menu");
   // 디스플레이 속성: 토글(메뉴 표시/숨기기)
   if (menu.style.display === "block") {
       menu.style.display = "none";
   } else {
       menu.style.display = "block";
   }
}