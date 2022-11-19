let picker;
let color = '#ffffff';
const defaults = {
  color: color,
  container: document.getElementById('color_picker'),
  onChange: function(color) {
    updateColor(color);
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

async function copy(colorType)  {
  const colorValue = document.querySelector('.sample__code').innerText;
  const textValue = document.querySelector('.inputText').value;
  if(colorType == 'text'){
    const colorTextChangeResult = `\\color{${colorValue}}\\textsf{${textValue}}`;
    const el = document.createElement("textarea");
    el.value = colorTextChangeResult;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    // await navigator.clipboard.writeText(colorTextChangeResult);
    console.log(colorTextChangeResult);
  }
}

window.onload = function() {
  initPicker();
  updateColor(color);
};
