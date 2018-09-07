document.addEventListener('DOMContentLoaded', function () {
  try {
    var feedback = document.querySelector('.feedback');
    var writeus = document.querySelector('.modal-write-us');
    var close = writeus.querySelector('.modal-close');
    var name = writeus.querySelector("[name=name]");
    var comment = writeus.querySelector("[name=comment]");

    feedback.addEventListener("click", function (evt) {
      evt.preventDefault();
      writeus.classList.add('modal-show');
      name.focus();
    });
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      writeus.classList.remove('modal-show');
      writeus.classList.remove("modal-error");

    });

    writeus.addEventListener("submit", function (evt) {
      if (!name.value && !comment.value) {
        evt.preventDefault();
        writeus.classList.remove("modal-error");
        writeus.offsetWidth = writeus.offsetWidth;
        writeus.classList.add("modal-error");
      } else {
        writeus.classList.remove("modal-error");
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (writeus.classList.contains("modal-show")) {
          writeus.classList.remove("modal-show");
          writeus.classList.remove("modal-error");
        }
      }
    });
  } catch (e) {

  }
  try {
    var bigmap = document.querySelector('.big-map');
    var footermap = document.querySelector('.footer-map');
    var map = document.querySelector('.modal-map');
    var mapclose = map.querySelector('.about .modal-close');
    bigmap.style.display =  'none'
    footermap.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.add('modal-show');
    });
    mapclose.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.remove('modal-show');
    });

  } catch (e) {

  }
  try {

    var buy = document.querySelectorAll('.buy');
    var productadd = document.querySelector('.modal-product-add');
    var productclose = productadd.querySelector('.modal-product-add .modal-close');
    buy.forEach(function (b) {
      b.addEventListener("click", function (evt) {
        evt.preventDefault();
        productadd.classList.add('modal-show');
      });
    });

    productclose.addEventListener("click", function (evt) {
      evt.preventDefault();
      productadd.classList.remove('modal-show');
    });

  } catch (e) {

  }

})
