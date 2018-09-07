document.addEventListener('DOMContentLoaded', function () {

  var feedback = document.querySelector('.feedback');
  var writeus = document.querySelector('.modal-write-us');
  var close = writeus.querySelector('.modal-close');
  feedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeus.classList.add('modal-show');
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeus.classList.remove('modal-show');
  });
})
