const onmBtn = document.querySelectorAll('.cmn-btn');
// console.log(onmBtn);

//   // 동적으로 생성된 이미지가 24개라고 가정할 경우
let imageList = '';
for (let i = 0; i < 24; i++) {
  imageList += `<img src="img/section 41/img${i}.png" alt="Image ${i + 1}">`;
}

const modalImg = document.querySelector('.modal > img');
const modalL = document.querySelector('.modal-img-left');
// const modalImgR = document.querySelector('.modal-img-right > img');
const modalR = document.querySelector('.modal-img-right');

onmBtn.forEach(function (btn) {
  btn.addEventListener('mouseenter', function () {
    const thisEl = this.querySelector('img');
    thisEl.setAttribute('src', 'img/section 41/btn_hover_bg.svg');
  });

  btn.addEventListener('mouseleave', function () {
    const thisEl = this.querySelector('img');
    thisEl.setAttribute('src', 'img/section 41/btn_default_bg.svg');
  });

  btn.addEventListener('click', function (e) {
    e.preventDefault();

    const thisEl = this.querySelector('img');
    const thisIdx = this.getAttribute('data');
    const modals = document.querySelectorAll('.modal');

    modals.forEach((modal) => {
      modal.style.display = 'none';
    });

    if (this.classList.contains('l')) {
      modalR.style.display = 'block';
      modalL.style.display = 'none';
    } else {
      modalR.style.display = 'none';
      modalL.style.display = 'block';
    }

    modals.forEach((modal) => {
      let img = modal.querySelector('img');
      if (img) {
        img.setAttribute('src', `img/section 41/modal/left_${thisIdx}.png`);
      }
    });
  });
});

const closeL = document.querySelector('.close-l');
const closeR = document.querySelector('.close-r');

closeL.addEventListener('click', function () {
  modalL.style.display = 'none';
});

closeR.addEventListener('click', function () {
  modalR.style.display = 'none';
});
