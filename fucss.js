var watch = 5000;

var seps = {
  'value': '_',
  'space': '-',
}

var media = {
  mbl: 480,
  tbt: 768,
  lpt: 1024,
  dsk: 1280,
}

var states = {
  hov: 'hover',
  act: 'active',
  foc: 'focus',
}

var properties = {
  bs: 'box-sizing',
  pdg: 'padding',
  mrg: 'margin',
  clr: 'color',
  bg: 'background',
  txt: 'text-align',
  brd: 'border',
  dsp: 'display',
  pos: 'position',
  h: 'height',
  w: 'width',
  fnt: 'font',
  flt:  'float',
  vlgn: 'vertical-align',
  hlgn: 'text-align',
  col: 'width',
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  of: 'overflow',
  lh: 'line-height',
  crs: 'cursor',
  dec: 'text-decoration',
  tb: 'table',
   // added by me
  idx: 'z-index',
  op: 'opacity',
  tran: 'text-transform',
};

var ignore = ['fa', 'fix', 'trans', 'cursor', 'wrap'];


var addons = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  pos: 'position',
  rad: 'radius',
  fml: 'family',
   // added by me
  sz: 'size',
  rd: 'radius',
  w: 'width',
  clr: 'color',
  stl: 'style',
  lyt: 'layout',
  wg: 'weight',
};


var values = {
  bb: 'border-box',
  greyd1: '#ffcb05',
  blackl3: '#f24543',
  bot: 'bottom',
  c: 'center',
  r: 'right',
  l: 'left',
  t: 'top',
  b: 'bottom',
  m: 'middle',
  clr: 'color',
  rel: 'relative',
  abs: 'absolute',
  fix: 'fixed',
  inh: 'inherit',
  tc: 'table-cell',
  td: 'table-cell',
  tr: 'table-row',
  tb: 'table',
  no: 0,
  hid: 'hidden',
  vis: 'visible',
  pnt: 'pointer',
  // added by me
  ib: 'inline-block',
};


window.onload=function(){
  generateStyling() && watch && setInterval(generateStyling, watch);
}

function generateStyling(){
  
  var cssString = '';
  var cssMediaQueries = {};
  var cssMissing = [];
  
  harvestClassesFromOneFile(document.body.outerHTML)
    .forEach(function(className){
  
      var splitedClassName = className.split(seps.value);
      
      var props = splitedClassName.shift().split(seps.space);
      var mediaQuery = extractMediaQuery(props);
      var state = extractState(props);
      
      var value = splitedClassName.pop();
      var prop = props.shift();
      
      console.log(prop, props, state, value);
      
      if(!prop || !value){return}
      if(ignore.indexOf(prop) !== -1){return}
      if(!properties[prop]){cssMissing.concat([prop])}
      
      
      value = modifyValue(value, prop);
      props = modifyProps(props);
      prop = combineProps(prop, props);
      
      var cssRule = generateCssRule(className, prop, value, state);
      
      mediaQuery
        ? cssMediaQueries[mediaQuery] = cssMediaQueries[mediaQuery] ? (cssMediaQueries[mediaQuery] + cssRule) : cssRule
        : cssString += cssRule;
      
    });
  
  //sets media queries at the end
  Object.keys(cssMediaQueries).length 
    && Object.keys(cssMediaQueries).forEach(function(mediaName){
      cssString += '@media only screen and (min-width: ' + media[mediaName] + 'px) {\n' + cssMediaQueries[mediaName] + '}'
    });
  
  console.log(cssString);
  document.getElementsByTagName("style")[0].innerHTML = cssString;
  
  return true;
}

function harvestClassesFromOneFile(string){
  
  var myRegexp = (/class="(.*?)"/gi);
  var myArray;
  var allHarvestedClassNames = [];
  
  while ((myArray = myRegexp.exec(string)) !== null) {
    var harvestedClassNames = myArray[0].split('"')[1].split(' ');
    allHarvestedClassNames = allHarvestedClassNames.concat(harvestedClassNames);
  }
  
  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}


// from class to css rule

function extractMediaQuery(props){
  var mediaValue = props.length && props[0];
  if(Object.keys(media).indexOf(mediaValue) !== -1){
    return props.shift();
  }
}

function extractState(props){
  var stateValue = props.length && props[0];
  if(Object.keys(states).indexOf(stateValue) !== -1){
    return states[props.shift()];
  }
}

function modifyValue(value, prop){
  
  
  if(new RegExp(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test('#' + value)){ return '#' + value }
  
  if(values[value]){ return values[value] }
  if(value.indexOf('pc') !== -1 ){ return value.replace('pc', '%') }
  
  return value;
}

function modifyProps(props){
  var combinedProps = [];
  props.forEach(function(prop){
    combinedProps.push(addons[prop] || prop)
  });
  
  return combinedProps;
}

function combineProps(prop, props){
  prop = properties[prop] || prop;
  prop = [prop].concat(props);
  return prop.join('-');
}

function generateCssRule(className, prop, value, state){
  state ? className += (':' + state) : false;
  return '.' + className+ '{' + prop + ':' + value + ';}\n';
}