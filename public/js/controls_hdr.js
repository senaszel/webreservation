function showNhideControls() {
  var here = document.getElementById('here');
  here.style.display =
    (here.style.display.toString() == 'none')
      ? 'block'
      : 'none';
  var here2 = document.getElementById('here2');
  here2.style.display =
    (here2.style.display.toString() == 'none')
      ? 'block'
      : 'none';

var option = document.getElementById('option');
  option.onmouseover = () => {
    option.style.background = 'var(--white-bg)';
    }
    option.onmouseout = () => {
      option.style.background = 'var(--black-bg)';
    }
  };

var bg = document.getElementById('bg');
bg.addEventListener("click", showNhideControls);
