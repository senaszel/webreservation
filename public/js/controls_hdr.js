function showNhideControls() {
  var here = document.getElementById('here');
  here.style.display =
    (here.style.display.toString() == 'none')
      ? 'block'
      : 'none';
  console.log(here.style.display);

var option = document.getElementById('option');
  option.onmouseover = () => {
    console.log('option onmouseover= '+option.style.background);
    console.log('option onmouseover typeof= '+typeof(option.style.background));
    option.style.background = 'var(--white-bg)';
    }
    option.onmouseout = () => {
      console.log('option onmouseout= '+option.style.background);
      console.log('option onmouseout typeof= '+typeof(option.style.background));
      option.style.background = 'var(--black-bg)';
    }
  };

var bg = document.getElementById('bg');
bg.addEventListener("dblclick", showNhideControls);
