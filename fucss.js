var watch = 0;

var seps = {
  'value': ':',
  'space': '-',
  'target': '_',
};

var media = {
  mbl: 480,
  tbt: 768,
  lpt: 1024,
  dsk: 1280,
  
  sm: 480,
  md: 768,
  lg: 1024,
};

var states = {
  hov: 'hover',
  act: 'active',
  foc: 'focus',
  
  hv: 'hover',
  ac: 'active',
  fc: 'focus',
};

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
  flt: 'float',
  vlgn: 'vertical-align',
  hlgn: 'text-align',
  col: 'width',
  lh: 'line-height',
  crs: 'cursor',
  dec: 'text-decoration',
  tb: 'table',
   // added by me
  idx: 'z-index',
  op: 'opacity',
  tran: 'text-transform',
  mh: 'min-height',
  mxw: 'max-width',
  mxh: 'max-height',
  mnw: 'min-width',
  mnh: 'min-height',
  
  ls: 'list-style',
  ltrs: 'letter-spacing',
  ws: 'white-space',
  
  //version 4
  ff: 'font-family',
  ta: 'text-align',
  fs: 'font-size',
  dp: 'display',
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  of: 'overflow',
  br: 'border-radius',
  bd: 'border',
  fw: 'font-weight',
  c: 'color',
  p: 'padding',
  m: 'margin',
  va: 'vertical-align',
  ps: 'position',
  xw: 'max-width',
  nw: 'min-width',
  td: 'text-decoration',
  z: 'z-index',
  fl: 'float',
  cl: 'clear',
  sh: 'box-shadow',
  tr: 'text-transform',
};

var ignore = ['fa', 'fix', 'trans', 'cursor', 'wrap', 'owlServices', 'owl', 'gm'];

//version 4
var colorazable = [
  'color', 
  'background', 
  'background-color', 
  'border', 
  'border-color', 
  'border-bottom',
  'border-top',,
  'border-left',
  'border-right',
  'border-right-color',
  'border-left-color',
  'border-top-color',
  'border-bottom-color',
];

var units = ['px', 'em', 'pc', 'vh', 'vw']; 

var groups = ['tb', 'rl'];


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
  upc: 'uppercase',
  //version 4
  c: 'color',
  s: 'style',
  rp: 'repeat',
  ps: 'position',
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
  n: 'none',
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
  sld: 'solid',
  // added by me
  ib: 'inline-block',
  blk: 'block',
  cl: 'clear',
  
  //version 4
  hd: 'hidden',
  vs: 'visible',
  bk: 'block',
  pt: 'pointer',
  rl: 'relative',
  ab: 'absolute',
  sd: 'solid',
  ts: 'transparent',
  np: 'nowrap',
  bt: 'both',
  fx: 'fixed',
  cv: 'cover',
  uc: 'uppercase',
  rp: 'no-repeat',
  nrp: 'no-repeat',
};


window.onload=function(){
  generateStyling() && watch && setInterval(generateStyling, watch);
};

function generateStyling(){
  
  var cssString = '';
  var cssMediaQueries = {
    mbl: [],
    tbt: [],
    lpt: [],
    dsk: [],
  };
  var cssMissing = [];
  
  harvestClassesFromOneFile(document.body.outerHTML)
    .forEach(function(className){
      
      var target = className.split(seps.target);
      
      var splitedClassName = target.shift().split(seps.value);
      
      //props
      var props = splitedClassName.shift().split(seps.space);
      var mediaQuery = extractMediaQuery(props);
      var state = extractState(props);
      
      //values
      
      var value = splitedClassName.pop();
      var prop = props.shift();
      
      //console.log(prop, props, state, value);
      if(Object.keys(properties).indexOf(prop) === -1 && prop.indexOf(',') === -1){return}
      //if(ignore.indexOf(prop) !== -1){return}
      if(!value){return console.warn('No value specified. Use value seperator ' + seps.value + ' for "' + className + '"')}
      if(!prop){return console.warn('No prop specified. Use prop seperator ' + seps.space + ' for "' + className + '"')}
      if(!properties[prop]){cssMissing = cssMissing.concat([prop])}
      
      prop = combineProps(prop, props);
      props = modifyProps(props);
      value = modifyValue(value.split(seps.space), prop);
      
      var cssRule = generateCssRule(className, prop, props, value, state, target);
      
      mediaQuery
        ? cssMediaQueries[mediaQuery] = cssMediaQueries[mediaQuery] ? (cssMediaQueries[mediaQuery] + cssRule) : cssRule
        : cssString += cssRule;
      
    });
  
  //sets media queries at the end
  Object.keys(cssMediaQueries).length 
    && Object.keys(cssMediaQueries).forEach(function(mediaName){
      cssString += '@media only screen and (min-width: ' + media[mediaName] + 'px) {\n' + cssMediaQueries[mediaName] + '}\n';
    });
  
  //console.log(cssString);
  document.getElementsByTagName("style")[0].innerHTML = cssString + document.getElementsByTagName("style")[0].innerHTML;
  
  if(cssMissing.length){console.warn('Used as full prop [ ' + cssMissing + ' ]')}
  
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

function modifyValue(valueList, prop){
  //console.log(prop, value);
  
  //console.log(prop, );
  valueList = valueList.map(function(value){
    if(colorazable.indexOf(prop) !== -1){
      
      //alpha hunter
      var alpha = 1;
      var length = value.length;
      if((length === 5 || length === 8) && (value.lastIndexOf('a') === 3 || value.lastIndexOf('a') === 6)){
        alpha = value.substring(length-2);
        value = value.replace(alpha, '');
        alpha = '0.' + alpha.replace('a', '');
      }
      
      //color hunter
      if(new RegExp(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test('#' + value)){
        return hex2rgb(value, alpha);
      }
    }
    
    if(values[value]){ return values[value] }
    
    var unit = value.replace(/\d/g, '');
    if(unit && (unit.length === 3 || unit.length === 2)){
      value = value.replace(unit, '');
      
      if(unit.indexOf('n') !== -1) value = -value;
      if(unit.indexOf('pc') !== -1 ) return value + '%';
      return value + unit.replace('n', '');
    }
    return value;
  });
  
  
  
  
  return valueList.join(' ');
}

function modifyProps(props){
  var combinedProps = [];
  props.forEach(function(prop){
    combinedProps.push(addons[prop] || prop);
  });
  
  return combinedProps;
}

function combineProps(prop, props){
  return prop = properties[prop] || prop;
  prop = [prop].concat(props);
  return prop.join('-');
}

function generateCssRule(className, prop, props, value, state, target){
  
  className = className.replace(':', '\\:');
  
  var firstAddon = props.length && props[0];
  var isGroup = groups.indexOf(firstAddon) !== -1;
  
  state ? className += (':' + state) : false;
  var rules = '';
  
  //grouped props by comma
  var groupedProps = prop.split(',');
  
  if(groupedProps && groupedProps.length > 1){
    groupedProps.forEach(function(char){
      rules += (properties[char] || char) + ':' + value + ';';
    });
    className = className.split(',').join('\\,');
  } else {
    
    //grouped addons
    if(!isGroup){
      prop = [prop].concat(props).join('-');
      rules = prop + ':' + value + ';';
    }else{
      firstAddon.split('').forEach(function(char){
        rules += prop + '-' + addons[char] + ':' + value + ';';
      });
    }
  }
  
  if(target){
    var allIndex = target.indexOf('all');
    if(allIndex !== -1) {target[allIndex] = '*'};
    className = className + ' ' + target.join(' ');
  }
  
  return '.' + className+ '{' + rules + '}\n';
  
}

function hex2rgb(hex, opacity) {
  var h=hex.replace('#', '');
  h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

  for(var i=0; i<h.length; i++)
      h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

  if (typeof opacity != 'undefined')  h.push(opacity);

  return 'rgba('+h.join(',')+')';
}