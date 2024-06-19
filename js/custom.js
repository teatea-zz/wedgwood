// Menu 페이지 보이기
// function toggleMenu() {
//   var menu = document.getElementById('menu');
//   var body = document.querySelector('body');
//   this.classList.toggle('on');
//   // 디스플레이 속성: 토글(메뉴 표시/숨기기)
//   if (menu.style.display === 'block') {
//     menu.style.display = 'none';
//     body.style.overflow = 'hidden';
//   } else {
//     menu.style.display = 'block';
//     body.style.overflow = 'auto';
//   }
// }

var menu = document.getElementById('menuIcon');
menu.addEventListener('click', function () {
  this.classList.toggle('on');
  var menu = document.getElementById('menu');
  var body = document.querySelector('body');

  if (this.classList.contains('on')) {
    menu.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    menu.style.display = 'none';
    body.style.overflow = 'auto';
  }
});

// 헤더 스크롤에 따라 보이거나 숨기거나

var prevScrollTop = 0;

document.addEventListener('scroll', function () {
  var nowScrollTop = window.scrollY; //현재 스크롤 위치를 nowScrollTop 에 저장

  if (nowScrollTop > prevScrollTop) {
    document.querySelector('header').classList.add('active');
  }
  // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
  else {
    document.querySelector('header').classList.remove('active');
  } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
  prevScrollTop = nowScrollTop; // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
});
