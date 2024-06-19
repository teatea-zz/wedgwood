// Splash Animation - Wedgwood Hero

window.scrollTo(0, 0);

//기준 설정

//screen and (min-width: 1440px)에 해당한다.

ScrollTrigger.saveStyles('.mobile, .desktop');

// Splash 눈꽃송이 애니메이션 시작 set_method---------------------

var ani00 = gsap.timeline({
  scrollTrigger: {
    trigger: '.splash',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    markers: false,
    // scrub: true, 마지막 애니메이션 실행되고 스크롤 엔드포인트 끝나기 전까지 고정된 화면으로 보여진다.
    toggleActions: 'play none restart none',
  },
});

gsap.set('.spsnowStar01', {
  opacity: 0,
});

gsap.to('.spsnowStar01', {
  opacity: 0.3,
  duration: 1.5,
  delay: 4,
  y: 60,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

gsap.set('.spsnowStar02', {
  opacity: 0,
});

gsap.to('.spsnowStar02', {
  opacity: 0.6,
  duration: 1.5,
  delay: 4.1,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar03', {
  opacity: 0,
});

gsap.to('.spsnowStar03', {
  opacity: 1,
  duration: 1.5,
  delay: 4.2,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar04', {
  opacity: 0,
});

gsap.to('.spsnowStar04', {
  opacity: 1,
  duration: 1.5,
  delay: 4.3,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar05', {
  opacity: 0,
});

gsap.to('.spsnowStar05', {
  opacity: 0.3,
  duration: 1.5,
  delay: 4.3,
  y: 60,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

gsap.set('.spsnowStar06', {
  opacity: 0,
});

gsap.to('.spsnowStar06', {
  opacity: 0.6,
  duration: 1.5,
  delay: 4.4,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar07', {
  opacity: 0,
});

gsap.to('.spsnowStar07', {
  opacity: 1,
  duration: 1.5,
  delay: 4.5,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar08', {
  opacity: 0,
});

gsap.to('.spsnowStar08', {
  opacity: 1,
  duration: 1.5,
  delay: 4.6,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar09', {
  opacity: 0,
});

gsap.to('.spsnowStar09', {
  opacity: 0.3,
  duration: 1.5,
  delay: 5.8,
  y: 60,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

gsap.set('.spsnowStar10', {
  opacity: 0,
});

gsap.to('.spsnowStar10', {
  opacity: 0.6,
  duration: 1.5,
  delay: 5.9,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar11', {
  opacity: 0,
});

gsap.to('.spsnowStar11', {
  opacity: 1,
  duration: 1.5,
  delay: 6,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar12', {
  opacity: 0,
});

gsap.to('.spsnowStar12', {
  opacity: 1,
  duration: 1.5,
  delay: 6.1,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar13', {
  opacity: 0,
});

gsap.to('.spsnowStar13', {
  opacity: 0.3,
  duration: 1.5,
  delay: 8,
  y: 60,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

gsap.set('.spsnowStar14', {
  opacity: 0,
});

gsap.to('.spsnowStar14', {
  opacity: 0.6,
  duration: 1.5,
  delay: 8.1,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar15', {
  opacity: 0,
});

gsap.to('.spsnowStar15', {
  opacity: 1,
  duration: 1.5,
  delay: 8.2,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar16', {
  opacity: 0,
});

gsap.to('.spsnowStar16', {
  opacity: 1,
  duration: 1.5,
  delay: 8.3,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar17', {
  opacity: 0,
});

gsap.to('.spsnowStar17', {
  opacity: 0.3,
  duration: 1.5,
  delay: 11.3,
  y: 60,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

gsap.set('.spsnowStar18', {
  opacity: 0,
});

gsap.to('.spsnowStar18', {
  opacity: 0.6,
  duration: 1.5,
  delay: 11.4,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar19', {
  opacity: 0,
});

gsap.to('.spsnowStar19', {
  opacity: 1,
  duration: 1.5,
  delay: 11.5,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar20', {
  opacity: 0,
});

gsap.to('.spsnowStar20', {
  opacity: 1,
  duration: 1.5,
  delay: 11.6,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar21', {
  opacity: 0,
});

gsap.to('.spsnowStar21', {
  opacity: 0.3,
  duration: 1.5,
  delay: 12.5,
  y: 60,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

gsap.set('.spsnowStar22', {
  opacity: 0,
});

gsap.to('.spsnowStar22', {
  opacity: 0.6,
  duration: 1.5,
  delay: 12.6,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar23', {
  opacity: 0,
});

gsap.to('.spsnowStar23', {
  opacity: 1,
  duration: 1.5,
  delay: 12.7,
  y: 60,
  repeat: -1,
  yoyo: true,
});

gsap.set('.spsnowStar24', {
  opacity: 0,
});

gsap.to('.spsnowStar24', {
  opacity: 1,
  duration: 1.5,
  delay: 12.8,
  y: 60,
  repeat: -1,
  yoyo: true,
});

var ani01 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section01', // ScrollTrigger 지점
    start: 'top top', // 에니메이션 시작 지점 (트리거 상단 지점이, 화면의 중간 높이 지점일 때)
    // end: "bottom top", // 에니메이션 끝 지점 (트리거 하단 지점이, 화면의 Top 지점일 때)
    pin: true,
    markers: false, // Scroll Trigger 영역 표시
    scrub: true,
    toggleActions: 'play none restart none', // 기본값 (onEnter, onLeave, OnEnterBack, onLeaveBack)
    // pin: true,   // pin the trigger element while active
    // start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
  },
});

ani01.fromTo(
  '#overviewText01',
  { y: 60, opacity: 0, blur: 1 },
  { y: 0, opacity: 1, blur: 0, duration: 1 },
  0
);

ani01.fromTo(
  '.englandlogo',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani01.fromTo(
  '#overviewText02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani01.fromTo(
  '#overviewText03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani01.fromTo(
  '.mainImg',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 2 },
  0
);

var ani02 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section02',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

// ani02.fromTo(
//   '#overviewText01',
//   { y: 60, opacity: 0, blur: 1},
//   { y: 0, opacity: 1, blur:0, duration: 1},
//   0
// );

// section03~06 히스토리-------------------------------

var ani02 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section03',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani02.fromTo(
  '#s03t01',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani02.fromTo(
  '#s03t02',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani02.fromTo(
  '#s03t03',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani02.fromTo(
  '#s03t04',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani02.fromTo(
  '#s03t05',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

ani02.fromTo(
  '#s03t06',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.8 },
  0
);

ani02.fromTo(
  '#s03t07',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2 },
  0
);

var ani04 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section04',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani04.fromTo(
  '#s04t01',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

ani04.fromTo(
  '#s04t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani04.fromTo(
  '#s04t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani04.fromTo(
  '.s04Img01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani04.fromTo(
  '.s04Img02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani04.fromTo(
  '.s04Img03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

var ani05 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section05',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani05.fromTo(
  '.s05Img01',
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

ani05.fromTo(
  '#s05t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani05.fromTo(
  '#s05t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani05.fromTo(
  '#s05t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

var ani06 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section06',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani06.fromTo(
  '.s06Img01',
  { y: 80, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani06.fromTo(
  '#s06t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani06.fromTo(
  '#s06t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani06.fromTo(
  '#s06t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani06.fromTo(
  '#s06t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

// Section07~10 시그니처 컬러-------------------------------

var ani07 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section07',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    markers: false,
    // scrub: true, 마지막 애니메이션 실행되고 스크롤 엔드포인트 끝나기 전까지 고정된 화면으로 보여진다.
    toggleActions: 'play none restart none',
  },
});

ani07.fromTo(
  '#s07t01',
  { y: -30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.0001, delay: 1 },
  0
);

ani07.fromTo(
  '.s07Img01',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 3 },
  0
);

ani07.fromTo(
  '#s07t02',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.0001, delay: 2 },
  0
);

// 섹션8 재스퍼웨어 블루 시퀀스 화면전환-------------------------
var ani08 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section08',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani08.fromTo(
  '#s08t01',
  { y: -60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani08.fromTo(
  '.s08Img01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani08.fromTo(
  '#s08t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani08.fromTo(
  '#s08t01',
  { opacity: 1 },
  { opacity: 0, duration: 0.0001, delay: 2 },
  0
);

ani08.fromTo(
  '#s08t02',
  { opacity: 1 },
  { opacity: 0, duration: 0.0001, delay: 2 },
  0
);

ani08.fromTo(
  '#s09t01',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 2 },
  0
);

ani08.fromTo(
  '.bluebg',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 2 },
  0
);

ani08.fromTo(
  '#s09t02',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 2 },
  0
);

ani08.fromTo(
  '.s08Img01',
  { opacity: 1 },
  { opacity: 0, duration: 0.0001, delay: 3 },
  0
);

ani08.fromTo(
  '.s09Img01',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 3 },
  0
);

ani08.fromTo(
  '.s09Img01',
  { opacity: 1 },
  { opacity: 0, duration: 0.0001, delay: 4 },
  0
);

ani08.fromTo(
  '.s10Img01',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 4 },
  0
);

// Section11~14 매그놀리아 블라썸-------------------------------

var ani11 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section11',
    start: 'top top',
    end: 'bottom top',
    pin: true,
    markers: false,
    // scrub: true, 마지막 애니메이션 실행되고 스크롤 엔드포인트 끝나기 전까지 고정된 화면으로 보여진다.
    toggleActions: 'play none restart none',
  },
});

ani11.fromTo(
  '#s11t01',
  { y: -30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.0001, delay: 1 },
  0
);

ani11.fromTo(
  '.s11Img01',
  { opacity: 0 },
  { opacity: 1, duration: 0.0001, delay: 3 },
  0
);

ani11.fromTo(
  '#s11t02',
  { y: 30, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.0001, delay: 2 },
  0
);

var ani12 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section12',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani12.fromTo(
  '.s12Img01',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

ani12.fromTo(
  '#s12t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani12.fromTo(
  '#s12t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani12.fromTo(
  '#s12t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

var ani13 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section13',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani13.fromTo(
  '.s13Img01',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

ani13.fromTo(
  '#s13t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani13.fromTo(
  '#s13t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani13.fromTo(
  '#s13t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani13.fromTo(
  '#s13t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

var ani14 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section14',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani14.fromTo(
  '.s14Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani14.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani14.fromTo(
  '#s14t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

ani14.fromTo(
  '#s14t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.6 },
  0
);

ani14.fromTo(
  '#s14t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.9 },
  0
);

ani14.fromTo(
  '#s14t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani14.fromTo(
  '#s14t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.5 },
  0
);

ani14.fromTo(
  '#s14t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3 },
  0
);

ani14.fromTo(
  '#s14t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3.3 },
  0
);

ani14.fromTo(
  '#s14t03s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3.6 },
  0
);

// Section15~17 퀸즈웨어---------------------------------
var ani15 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section15',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani15.fromTo(
  '.s15Img01',
  { scale: 2, opacity: 0, rotation: 2 },
  { scale: 1, opacity: 1, rotation: 0, duration: 3 },
  0
);

ani15.fromTo(
  '.s15Img02',
  { scaleY: 0 },
  { scaleY: 1, duration: 3, delay: 3 },
  0
);

ani15.fromTo(
  '.s15Img03',
  { scaleX: 0, opacity: 0 },
  { scaleX: 1, opacity: 1, duration: 3, delay: 6 },
  0
);

ani15.fromTo(
  '#s15t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 9 },
  0
);

ani15.fromTo(
  '#s15t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 9.3 },
  0
);

ani15.fromTo(
  '#s15t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 9.6 },
  0
);

ani15.fromTo(
  '#s15t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 9.9 },
  0
);

ani15.fromTo(
  '#s15t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 10.2 },
  0
);

var ani16 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section16',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani16.fromTo(
  '.s16Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani16.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani16.fromTo(
  '#s16t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

ani16.fromTo(
  '#s16t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.6 },
  0
);

ani16.fromTo(
  '#s16t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.9 },
  0
);

ani16.fromTo(
  '#s16t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani16.fromTo(
  '#s16t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.5 },
  0
);

ani16.fromTo(
  '#s16t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3 },
  0
);

ani16.fromTo(
  '#s16t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3.3 },
  0
);

var ani17 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section17',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani17.fromTo(
  '.s17Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani17.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani17.fromTo(
  '#s17t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

ani17.fromTo(
  '#s17t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.6 },
  0
);

ani17.fromTo(
  '#s17t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.9 },
  0
);

ani17.fromTo(
  '#s17t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3 },
  0
);

ani17.fromTo(
  '#s17t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3.3 },
  0
);

// Section18~22 터콰이즈-------------------------------
var ani18 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section18',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani18.fromTo(
  '.s18Img01',
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani18.fromTo(
  '.s18Img02',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani18.fromTo(
  '#s18t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

var ani19 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section19',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani19.fromTo(
  '.s19Img01',
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani19.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani19.fromTo(
  '#s19t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

ani19.fromTo(
  '#s19t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.6 },
  0
);

ani19.fromTo(
  '#s19t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.9 },
  0
);

ani19.fromTo(
  '#s19t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani19.fromTo(
  '#s19t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.5 },
  0
);

ani19.fromTo(
  '#s19t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3 },
  0
);

ani19.fromTo(
  '#s19t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3.3 },
  0
);

var ani20 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section20',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani20.fromTo(
  '.s20Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani20.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani20.fromTo(
  '#s20t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

ani20.fromTo(
  '#s20t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.6 },
  0
);

ani20.fromTo(
  '#s20t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.9 },
  0
);

ani20.fromTo(
  '#s20t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani20.fromTo(
  '#s20t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.5 },
  0
);

ani20.fromTo(
  '#s20t06',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.8 },
  0
);

ani20.fromTo(
  '#s20t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3 },
  0
);

ani20.fromTo(
  '#s20t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 3.3 },
  0
);

var ani21 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section21',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani21.fromTo(
  '.s21Img01',
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani21.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani21.fromTo(
  '#s21t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.3 },
  0
);

ani21.fromTo(
  '#s21t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.6 },
  0
);

ani21.fromTo(
  '#s21t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.9 },
  0
);

ani21.fromTo(
  '#s21t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani21.fromTo(
  '#s21t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.5 },
  0
);

ani21.fromTo(
  '#s21t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.8 },
  0
);

var ani22 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section22',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani22.fromTo('.s22Img02', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani22.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani22.fromTo(
  '#s22t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

ani22.fromTo(
  '#s22t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.8 },
  0
);

ani22.fromTo(
  '#s22t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.1 },
  0
);

ani22.fromTo(
  '.s22Img01',
  { y: -60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 3 },
  0
);

// Section23~28 르네상스 골드----------------------
var ani23 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section23',
    start: 'top top',
    end: () => '+=' + document.querySelector('#s23t01').offsetWidth,
    pin: true,
    markers: false,
    scrub: 1.8,
    toggleActions: 'play none restart none',
  },
});

ani23.to('#s23t01', {
  opacity: 1,
  duration: 1,
});

console.log(document.querySelector('#s23t01').offsetWidth);

ani23.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani23.fromTo(
  '#s23t01',
  { x: 2400, opacity: 0 },
  { x: -5700, opacity: 1, duration: 30 },
  0
);

ani23.fromTo(
  '.s23Img01',
  { x: 2400, opacity: 1 },
  { x: -5460, opacity: 1, duration: 60, delay: 0.2 },
  0
);

// ani23.fromTo(
//   '.s23Img01-1',
//   { x: 2400, opacity: 1 },
//   { x: -5460, opacity: 1, duration: 60, delay: 0.2 },
//   0
// );

ani23.fromTo(
  '.s23Img02',
  { y: 1400, opacity: 0 },
  { y: 0, opacity: 1, duration: 60, delay: 22 },
  0
);

ani23.fromTo(
  '.s23Img03',
  { y: 1400, opacity: 0 },
  { y: 0, opacity: 1, duration: 60, delay: 32 },
  0
);

// 르네상스 골드 가로 스크롤 시작----------------------

// 메인 섹션 왼쪽 옵셋 간격 맞춤
// $(function () {

// const offsetLeft = document.querySelector('.section23').offsetLeft; // 첫번째 섹션 브라우저로부터 떨어진 왼쪽 간격
// $('.rg_horscroll').css('left', offsetLeft); // 첫번째 섹션 왼쪽 간격만큼 왼쪽으로 이동
// // });

gsap.registerPlugin(ScrollTrigger); // scroll trigger 플러그인 등록

let sections = gsap.utils.toArray('.horpanel'); // panenl 클래스를 가진 모든 요소를 배열로 반환
// console.log(sections);

gsap.to('.horpanel', {
  xPercent: -100 * (sections.length - 1),
  ease: 'none', // https://gsap.com/docs/v3/Eases/
  scrollTrigger: {
    trigger: '.rg_horscroll',
    start: 'top top',
    end: () => document.querySelector('.rg_horscroll').offsetWidth,
    markers: false,
    pin: true, // trigger에 지정된 요소의 시작점과 끝점 사이에 브라우저 고정
    scrub: 10,
    // 스크롤 속도에 따라 애니메이션 속도가 변경됨
    // containerAnimation: horscroll,
  },
});

var ani24 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section24',
    start: 'top bottom',
    // end: 'right left',
    scrub: false,
    // containerAnimation: horscroll,
    markers: false,
  },
});

ani24.fromTo(
  '#s24t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

ani24.fromTo(
  '.s24Img01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

var ani25 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section25',
    start: 'top top',
    // end: 'right left',
    scrub: false,
    // containerAnimation: horscroll,
    markers: false,
  },
});

ani25.from('.section25', { scale: 1, opacity: 1 });

var ani26 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section26',
    start: 'top top',
    // end: 'right left',
    scrub: false,
    // containerAnimation: horscroll,
    markers: false,
  },
});
ani26.from('.section26', { scale: 1, opacity: 1 });

var ani27 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section27',
    start: 'top top',
    // end: 'right left',
    scrub: false,
    // containerAnimation: horscroll,
    markers: false,
  },
});
ani27.from('.section27', { scale: 1, opacity: 1 });

// Section28~32 옐로우 리본 ----------------------
var ani28 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section28',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani28.fromTo(
  '.s28Img02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0
);

ani28.fromTo(
  '.s28Img03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani28.fromTo(
  '.s28Img01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani28.fromTo(
  '.s28Img04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani28.fromTo(
  '.s28Img05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani28.fromTo(
  '#s28t01',
  { opacity: 0 },
  { opacity: 1, duration: 2, delay: 1.2 },
  0
);

var ani29 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section29',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani29.fromTo(
  '.s29Img01',
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani29.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani29.fromTo(
  '#s29t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani29.fromTo(
  '#s29t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani29.fromTo(
  '#s29t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani29.fromTo(
  '#s29t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani29.fromTo(
  '#s29t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani29.fromTo(
  '#s29t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.5 },
  0
);

var ani30 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section30',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani30.fromTo(
  '.s30Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani30.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani30.fromTo(
  '#s30t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani30.fromTo(
  '#s30t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani30.fromTo(
  '#s30t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani30.fromTo(
  '#s30t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani30.fromTo(
  '#s30t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

ani30.fromTo(
  '#s30t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2 },
  0
);

ani30.fromTo(
  '#s30t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.3 },
  0
);

var ani31 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section31',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani31.fromTo('.s31Img01', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani31.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani31.fromTo(
  '#s31t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani31.fromTo(
  '#s31t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani31.fromTo(
  '#s31t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani31.fromTo(
  '#s31t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani31.fromTo(
  '.s31Img02',
  { y: -60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.8 },
  0
);

// Section32~37 윈터 화이트 ----------------------
var ani32 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section32',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani32.fromTo(
  '.s32Img03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.5 },
  0
);

ani32.fromTo(
  '.s32Img02',
  { x: -60, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 1 },
  0
);

ani32.fromTo(
  '.s32Img01',
  { y: -60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

ani32.fromTo(
  '.s32Img04',
  { x: -60, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 2 },
  0
);

ani32.fromTo(
  '.s32Img05',
  { x: 60, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 2.5 },
  0
);

ani32.fromTo(
  '.s32Img06',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 3 },
  0
);

ani32.fromTo(
  '.s32Img07',
  { opacity: 0 },
  { opacity: 1, duration: 4, delay: 3 },
  0
);

ani32.fromTo(
  '.s32t04-ani1',
  {
    y: -60,
    skewY: 25,
    blur: 5,
    opacity: 0,
    filter: `blur(${5}px)`,
  },
  {
    y: 0,
    skewY: 0,
    blur: 0,
    opacity: 1,
    duration: 2,
    delay: 2.5,
    filter: `blur(${0}px)`,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani2',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 2.8,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani3',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.1,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani4',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.2,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani5',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.5,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani6',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.8,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani7',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 4.1,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani8',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 4.4,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani9',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 4.7,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani10',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani11',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5.3,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani12',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5.6,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani13',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5.9,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani14',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 6.2,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani15',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 6.5,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani16',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 6.8,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani17',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 7.1,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani18',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 7.4,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani19',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 7.7,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani20',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 8,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani21',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 8.3,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani22',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 8.6,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani23',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 8.9,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani24',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 9.2,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani25',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 9.5,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani26',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 9.8,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani27',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 10.1,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani28',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 10.4,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani29',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 10.7,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani30',
  { y: -60, skewY: 25, blur: 8, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    blur: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 11,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani31',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 11.3,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani32',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 11.6,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani33',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 11.9,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani34',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 12.2,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani35',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 12.5,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani36',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 12.8,
  },
  0
);

ani32.fromTo(
  '.s32t04-ani37',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 13.1,
  },
  0
);

ani32.fromTo(
  '.s32Img08',
  { y: -200, opacity: 0, rotationY: -180 },
  { y: 0, opacity: 1, rotationY: 0, duration: 4, delay: 13.1 },
  0
);

var ani33 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section33',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani33.fromTo(
  '#s33t01',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani33.fromTo(
  '#s33t02',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani33.fromTo(
  '#s33t03',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani33.fromTo(
  '#s33t04',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani33.fromTo(
  '#s33t05',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.5 },
  0
);

var ani34 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section34',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani34.fromTo(
  '.s34t01-ani1',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 0.3,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani2',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 0.3,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani3',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 0.6,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani4',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 0.9,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani5',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 1.2,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani6',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 1.5,
  },
  0
);

ani34.fromTo(
  '#s34t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.8 },
  0
);

ani34.fromTo(
  '#s34t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.1 },
  0
);

ani34.fromTo(
  '#s34t04',
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.4 },
  0
);

ani34.fromTo(
  '#s34t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.7 },
  0
);

ani34.fromTo(
  '.s34t01-ani7',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani8',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.3,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani9',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.6,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani10',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 3.9,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani11',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 4.2,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani12',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 4.5,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani13',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 4.8,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani14',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5.1,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani15',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5.4,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani16',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 5.7,
  },
  0
);

ani34.fromTo(
  '.s34t01-ani17',
  { y: -60, skewY: 25, opacity: 0, filter: `blur(${5}px)` },
  {
    y: 0,
    skewY: 0,
    opacity: 1,
    filter: `blur(${0}px)`,
    duration: 2,
    delay: 6,
  },
  0
);

ani34.fromTo(
  '.s34Img01',
  { opacity: 0, filter: `blur(${5}px)` },
  { opacity: 1, filter: `blur(${0}px)`, duration: 4, delay: 5 },
  0
);

var ani35 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section35',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani35.fromTo(
  '.s35Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani35.fromTo(
  '.s35Img02',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani35.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani35.fromTo(
  '#s35t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani35.fromTo(
  '#s35t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani35.fromTo(
  '#s35t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani35.fromTo(
  '#s35t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani35.fromTo(
  '#s35t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani35.fromTo(
  '#s35t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.5 },
  0
);

var ani36 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section36',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani36.fromTo(
  '.s36Img01',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  0
);

ani36.fromTo(
  '.s36Img02',
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani36.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani36.fromTo(
  '#s36t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani36.fromTo(
  '#s36t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani36.fromTo(
  '#s36t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani36.fromTo(
  '#s36t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani36.fromTo(
  '#s36t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.2 },
  0
);

ani36.fromTo(
  '#s36t02s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2.5 },
  0
);

var ani37 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section37',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

ani37.fromTo('.s37Img01', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani37.fromTo('#Collection-tw', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ani37.fromTo(
  '#s37t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.3 },
  0
);

ani37.fromTo(
  '#s37t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.6 },
  0
);

ani37.fromTo(
  '#s37t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 0.9 },
  0
);

ani37.fromTo(
  '#s37t01s',
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 1.2 },
  0
);

ani37.fromTo(
  '.s37Img02',
  { x: 60, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, delay: 1.8 },
  0
);

// Section40 Outro 캘린더 라인 시작 --------------------
var ani40 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section40',
    start: 'top top',
    pin: true,
    markers: false,
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

// ani40.fromTo(
//   '.outro-lineNew',
//   { scaleY: 0 },
//   { scaleY: 500, duration: 3, delay: 0.3 },
//   0
// );

ani40.to(
  '.outro-lineNew1',
  1,
  {
    clipPath: 'circle(141.2% at 0 100%)',
    scale: 1,
    ease: 'expo.in',
    stagger: {
      each: 0.5, // 각 요소의 지연 시간
      start: 0.3, // 첫 번째 요소의 초기 지연 시간
    },
  },
  '-=1'
);

ani40.to(
  '.outro-lineNew2',
  1,
  {
    clipPath: 'circle(140.9% at 0 0)',
    scale: 1,
    delay: 1,
    ease: 'expo.in',
    stagger: {
      each: 0.5, // 각 요소의 지연 시간
      start: 0.3, // 첫 번째 요소의 초기 지연 시간
    },
  },
  '-=1'
);

ani40.fromTo(
  '#s40t01',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2 },
  0
);

ani40.fromTo(
  '#s40t02',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.3 },
  0
);

ani40.fromTo(
  '#s40t03',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.6 },
  0
);

ani40.fromTo(
  '#s40t04',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 2.9 },
  0
);

ani40.fromTo(
  '#s40t05',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 3.2 },
  0
);

ani40.fromTo(
  '#s40t06',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 3.5 },
  0
);

ani40.fromTo(
  '#s40t07',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 3.8 },
  0
);

ani40.fromTo(
  '#s40t08',
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, delay: 4.1 },
  0
);

// Section42 Outro gift Box----------------------
ScrollTrigger.matchMedia({
  '(min-width: 1640px)': function () {
    var ani42 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section42',
        start: 'top top',
        pin: true,
        markers: false,
        scrub: true,
        toggleActions: 'play none restart none',
      },
    });

    ani42.fromTo('.outbox', { opacity: 0 }, { opacity: 1, duration: 1 });

    ani42.fromTo('.inbox', { opacity: 0 }, { opacity: 1, duration: 2 });

    ani42.to(
      '.inbox_line01',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0.5, // 각 요소의 지연 시간
          start: 0.3, // 첫 번째 요소의 초기 지연 시간
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line02',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line03',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line04',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line05',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line06',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line07',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line08',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line09',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line10',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line11',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line12',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line13',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line14',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line15',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line16',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line17',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line18',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line19',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line20',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line21',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line22',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line23',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line24',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line25',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    ani42.to(
      '.inbox_line26',
      2,
      {
        clipPath: 'circle(141.2% at 0 0)',
        scale: 1,
        ease: 'expo.in',
        stagger: {
          each: 0,
          start: 0.3,
        },
      },
      '-=1'
    );

    // 눈꽃송이 애니메이션 시작 set_method-----------------
    gsap.set('.snowStar_wh01', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh01', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh02', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh02', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh03', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh03', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh04', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh04', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh05', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh05', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh06', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh06', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh07', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh07', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh08', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh08', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh09', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh09', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh10', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh10', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh11', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh11', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh12', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh12', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh13', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh13', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh14', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh14', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh15', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh15', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh16', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh16', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh17', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh17', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh18', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh18', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh19', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh19', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh20', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh20', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh21', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh21', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh22', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh22', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh23', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh23', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh24', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh24', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh25', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh25', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh26', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh26', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh27', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh27', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh28', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh28', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh29', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh29', {
      opacity: 0.3,
      duration: 2,
      delay: 4,
      y: 60,
      repeat: -1, // 무한반복
      yoyo: true, // 반복되는 애니메이션을 역재생
    });

    gsap.set('.snowStar_wh30', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh30', {
      opacity: 0.6,
      duration: 2,
      delay: 4.1,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh31', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh31', {
      opacity: 1,
      duration: 2,
      delay: 4.2,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    gsap.set('.snowStar_wh32', {
      opacity: 0,
    });

    gsap.to('.snowStar_wh32', {
      opacity: 1,
      duration: 2,
      delay: 4.3,
      y: 60,
      repeat: -1,
      yoyo: true,
    });

    // ani42.to(
    //   '.giftImg',
    //   2,
    //   {
    //     clipPath: 'circle(70.7% at 50% 50%)',
    //     scale: 1,
    //     ease: 'expo.in',
    //     stagger: {
    //       each: 0,
    //       start: 0.3
    //     },
    //   },
    //   '-=1'
    // );

    ani42.fromTo(
      '.wrapping_l',
      { scaleX: 0 },
      { scaleX: 1, duration: 3, delay: 30 },
      0
    );

    ani42.fromTo(
      '.wrapping_s',
      { scaleY: 0 },
      { scaleY: 1, duration: 3, delay: 33 },
      0
    );

    ani42.fromTo(
      '.ribbon_left',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 36 },
      0
    );

    ani42.fromTo(
      '.ribbon_right',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 37 },
      0
    );

    // ani42.fromTo(
    //   '.ending_circle',
    //   { scale:0 },
    //   { scale: 700, duration: 2, delay: 40 },
    //   0
    // );
  },
});
