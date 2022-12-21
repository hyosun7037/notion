let picker;
let color = '#ffffff';
const defaults = {
  color: color,
  container: document.getElementById('color_picker'),
  onChange: function(color) {
    updateColor(color);
    document.querySelector('.input-text').style.color = color;
    document.querySelector('in')
  },
  swatchColors: ['#E9ACAC', '#D86C6C', '#B73232', '#AD0707', '#611B1B'],
};

function initPicker(options) {
  options = Object.assign(defaults, options);
  picker = new EasyLogicColorPicker(options);
}

function updateColor(value) {
  color = value;
  const $color = document.querySelector('.sample__color');
  const $code = document.querySelector('.sample__code');
  $code.innerText = color;
  $color.style.setProperty('--color', color);
  
}

function onChangeType(e) {
  picker.setType(e.value);
}

 function copyText(){
  const colorValue = document.querySelector('.sample__code').innerText;
  console.log(colorValue)
  const textValue = document.querySelector('.input-text').value;
  // const colorTextChangeResult = `\\color{${colorValue}}\\Huge{${textValue}}`;
  const colorTextChangeResult = `\\color{${colorValue}}\\textsf{${textValue}}`;
    // const bgValue = document.querySelector('.sample__code').innerText;
    // const colorTextAndBgChangeResult = `\\color{${colorValue}}\\colorbox{${bgValue}}{${textValue}}`
    const el = document.createElement("textarea");
    el.value = colorTextChangeResult;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);  
}


function blindOpacity(){
  const opacity = document.querySelector('.el-cp-slider--alpha');
  opacity.style.display = 'none';
}


const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
formatter.format(1, 'day'); // tomorrow
formatter.format(2, 'day'); // in 2 days
formatter.format(-1, 'day'); // yesterday
formatter.format(-2, 'day'); // 2 datys ago


window.onload = function() {
  initPicker();
  updateColor(color);
  blindOpacity();
};

