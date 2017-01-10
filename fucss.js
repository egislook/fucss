var fucss = {};

fucss.watch = window.fucssWatch !== undefined ? window.fucssWatch : 0;
fucss.init = window.fucssInit !== undefined ? window.fucssInit : true;
fucss.anim = window.fucssAnim !== undefined ? window.fucssAnim : true;
fucss.glob = window.fucssGlob !== undefined ? window.fucssGlob : true;
fucss.fux = window.fucssFux !== undefined ? window.fucssFux : true;

fucss.seps = {
  'value': ':',
  'space': '-',
  'target': '_',
  'comma': '.',
  'important': '!',
  'and': '+',
  
};

fucss.media = {
  sm: 400,
  md: 768,
  lg: 1024,
  smx: 399,
  mdx: 767,
  lgx: 1023,
};

fucss.states = {
  hov: 'hover',
  act: 'active',
  foc: 'focus',
  
  hv: 'hover',
  ac: 'active',
  fc: 'focus',
  //version 0.6.3
  bf: 'before',
  af: 'after',
};

fucss.properties = {
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
  
  // version 0.5.3
  ol: 'outline',
  
  // version 0.5.5
  bz: 'box-sizing',
  bs: 'box-shadow',
  tl: 'table-layout',
  
  //version 0.5.7
  lis: 'list-style',
  ls: 'letter-spacing',
  
  //version 0.6.3
  ww: 'word-wrap',
  od: 'order',
  fd: 'flex-direction',
  flxd: 'flex-direction',
  flxw: 'flex-wrap',
  flxg: 'flex-grow',
  flxs: 'flex-shrink',
  flxb: 'flex-basis',
  flx: 'flex',
  as: 'align-self',
  ai: 'align-items',
  ac: 'align-content',
  flxf: 'flex-flow',
  
};

fucss.units = ['px', 'em', 'pc', 'vh', 'vw']; 

fucss.groups = ['tb', 'rl'];

fucss.addons = {
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


fucss.values = {
  bb: 'border-box',
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
  
  //version5
  ds: 'dashed',
  dt: 'dotted',
  
  //version 0.6.3
  pl: 'pre-line',
  nm: 'normal',
  bl: 'baseline',
  flx: 'flex',
  if: 'inline-flex',
  row: 'row',
  col: 'column',
  rr: 'row-reverse',
  cr: 'column-reverse',
  li: 'list-item',
  wrp: 'wrap',
  sb: 'space-between',
  sa: 'space-around',
  fs: 'flex-start',
  fe: 'flex-end',
  stc: 'stretch',
  
};

fucss.ignore = ['fa', 'fix', 'trans', 'cursor', 'wrap', 'owlServices', 'owl', 'gm'];

//version 4
fucss.colorazable = [
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

fucss.colors = {
  //version 6 colors
  prim:     '#DE3E3E',  // red
  sec:      '#2F3B50',  // grey dark
  
  red:      '#F44336',
  pink:     '#E91E63',
  purple:   '#9C27B0',
  dpurple:  '#673AB7',
  indigo:   '#3F51B5',
  blue:     '#2196F3',
  lblue:    '#03A9F4',
  cyan:     '#00BCD4',
  teal:     '#009688',
  green:    '#4CAF50',
  lgreen:   '#8BC34A',
  lime:     '#CDDC39',
  yellow:   '#FFEB3B',
  amber:    '#FFC107',
  orange:   '#FF9800',
  dorange:  '#FF5722',
  brown:    '#795548',
  grey:     '#9E9E9E',
  bgrey:    '#607D8B',
  
  black:    '#111',
  silver:   '#DDD',
  white:    '#fff',
  
  navy:     '#001f3f',
  aqua:     '#7FDBFF',
  teil:     '#39CCCC',
  olive:    '#3D9970',
  maroon:   '#85144b',
  fuchsia:  '#F012BE',
  // social
  twitter:  '#5AACF2',
  facebook: '#3C599C',
  google:   '#D8503D',
};

fucss.colorMods = {
  //50:   'l52',  // white 'a13'
  100:  'l37',  // white 'a31'
  200:  'l26',  // white 'a50'
  300:  'l12',  // white 'a7'
  400:  'l6',   // white '185'
  500:  '',
  600:  'd6',   // black 'a91'
  700:  'd12',  // black 'a81'
  800:  'd18',  // black 'a71'
  900:  'd24'   // black 'a52'
};

fucss.config = {
  'prim': 'colors', 
  'sec': 'colors',
  'err': 'colors',
  'warn': 'colors',
};

//assigning custom client stuff
!!window.fucssValues && Object.assign(fucss.values, window.fucssValues);
!!window.fucssColors && Object.assign(fucss.colors, window.fucssColors);

window.onload=function(){
  
  //initiating the generator
  fucss.watch && setInterval(fucss.generateStyling, fucss.watch);
  fucss.init && !window.riot && fucss.generateStyling();
  fucss.init && !!window.riot && fucss.riotExtractNGenerate();
};

fucss.riotExtractNGenerate = function(){
  var _tags = document.querySelectorAll('script[type="riot/tag"');
  var _jsStr = document.body.outerHTML;
  var _jsLoadedCount = 0;
  _tags.forEach(function(tag){
  	window.riot.compile(tag.src || tag.getAttribute('data-src'), function(js){
    	_jsStr += js;
    	_jsLoadedCount++;
    	_jsLoadedCount === _tags.length && fucss.generateStyling({riot: _jsStr, returnStyle: false});
  	});
  });
}

fucss.generateStyling = function(opts){
  
  console.time('Fucss');
  var cssString = '';
  var cssMediaQueries = {
    sm: [],
    md: [],
    lg: []
  };
  var cssMissing = [];
  
  var classHarvestingMethodName = opts && opts.jsx 
    ? 'harvestClassesFromJsx'
    : opts && opts.riot || !!window.riot
      ? 'harvestClassesFromRiot'
      : 'harvestClassesFromHtml';
  
  var htmlString = (opts && (opts.jsx || opts.riot || opts.html)) || document.body.outerHTML;
      
  fucss[classHarvestingMethodName](htmlString)
    .forEach(function(className){
      var target = className.split(fucss.seps.target);
      
      var splitedClassName = target.shift().split(fucss.seps.value);
      
      //props
      var props = splitedClassName.shift().split(fucss.seps.space);
      var mediaQuery = extractMediaQuery(props);
      var state = extractState(props);
      
      //fucss.values
      
      var value = splitedClassName.pop();
      var prop = props.shift();
      
      if(fucss.config[prop]){
        value = fucss[fucss.config[prop]][value] || modifyColor(value) || value;
        fucss[fucss.config[prop]][prop] = value;
        return;
      }
      
      //console.log(prop, props, state, value);
      if(Object.keys(fucss.properties).indexOf(prop) === -1 && prop.indexOf(',') === -1) return;
      //if(fucss.ignore.indexOf(prop) !== -1){return}
      if(!value) return console.warn('No value specified. Use value seperator ' + fucss.seps.value + ' for "' + className + '"');
      if(!prop) return console.warn('No prop specified. Use prop seperator ' + fucss.seps.space + ' for "' + className + '"');
      if(!fucss.properties[prop] && prop.indexOf(',') < 0) cssMissing = cssMissing.concat([prop]);
      
      prop = combineProps(prop, props);
      props = modifyProps(props);
      value = modifyValue(value.split(fucss.seps.space), prop);
      
      var cssRule = generateCssRule(className, prop, props, value, state, target);
      
      mediaQuery
        ? cssMediaQueries[mediaQuery] = cssMediaQueries[mediaQuery] ? (cssMediaQueries[mediaQuery] + cssRule) : cssRule
        : cssString += cssRule;
      
    });
  
  //sets fucss.media queries at the end
  Object.keys(cssMediaQueries).length 
    && Object.keys(cssMediaQueries).forEach(function(mediaName){
      var rule = mediaName.indexOf('x') !== -1 ? 'max-width' : 'min-width';
      
      if(cssMediaQueries[mediaName].length){
        cssString += '@media only screen and (' + rule + ': ' + fucss.media[mediaName] + 'px) {\n' + cssMediaQueries[mediaName] + '}\n';
      }
    });
  
  //console.log(cssString);
  if(opts && opts.returnStyle){
    return cssString;
  }else{
    fucss.fux   ? cssString += fucss.generateExtras()       : false;
    fucss.glob  ? cssString += fucss.generateGlobalExtras() : false;
    fucss.anim  ? cssString += fucss.generateAnimations()   : false;
    //console.log(document.querySelector('style'));
    document.querySelector('style').innerHTML = cssString + document.querySelector('style').innerHTML;
  }
  
  console.timeEnd('Fucss');
  
  if(cssMissing.length){console.warn('Used as full prop [ ' + cssMissing + ' ]')}
  
  // from class to css rule
  
  function extractMediaQuery(props){
    var mediaValue = props.length && props[0];
    if(Object.keys(fucss.media).indexOf(mediaValue) !== -1){
      return props.shift();
    }
  }
  
  function extractState(props){
    var stateValue = props.length && props[0];
    if(Object.keys(fucss.states).indexOf(stateValue) !== -1){
      return fucss.states[props.shift()];
    }
  }
  
  function modifyColor(value){
    if(fucss.colors[value]) return fucss.colors[value];
        
    //checks if there is color and modifier (3 chars length) specified 
    if(fucss.colors[value.substring(0, value.length-3)]
      && fucss.colorMods[value.substring(value.length-3)]){
      
      return fucss.generateColor(
        fucss.colors[value.substring(0, value.length-3)], 
        fucss.colorMods[value.substring(value.length-3)]
      );
    }
    
    if(new RegExp(/(a\d\d\b)|(a\d\b)|(l\d\d\b)|(d\d\d\b)/).test(value)){
      var length = value.length;
      
      var modifierPos = new RegExp(/(a\d\b)/).test(value) ? length-2 : length-3;
      var modifier = value.substring(modifierPos);
      modifier = fucss.colorMods[modifier] || modifier;
      value = fucss.colors[value.substring(0, modifierPos)] || value.substring(0, modifierPos);
      
      return fucss.generateColor(value, modifier);
      
    } else if(new RegExp(/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i).test(value)){
      return '#' + value;
    }
  }
  
  function modifyValue(valueList, prop){
    
    //console.log(valueList, prop, valueList.length);
    valueList = valueList.map(function(value){
      
      if(fucss.values[value]) return fucss.values[value];
      
      if(fucss.colorazable.indexOf(prop) !== -1){
        //console.log(prop, value)
        var modifiedColor = modifyColor(value);
        if(modifiedColor) return modifiedColor;
      }
      
      var unit = value.replace(/\d/g, '');
      if(unit && (unit.length === 3 || unit.length === 2)){
        value = value.replace(unit, '');
        
        if(unit.indexOf('n') !== -1) value = -value;
        if(unit.indexOf('pc') !== -1 ) return value + '%';
        return value + unit.replace('n', '');
      }
      
      if(value === fucss.seps.important){
        return '!important';
      }
      
      if(prop === 'font-family'){
        value = value.replace(fucss.seps.and, ' ');
        return '"'+value+'"';
      }
      
      return value;
    });
    
    //console.log(valueList.join(' '));
    return valueList.join(' ');
  }
  
  function modifyProps(props){
    var combinedProps = [];
    props.forEach(function(prop){
      combinedProps.push(fucss.addons[prop] || prop);
    });
    
    return combinedProps;
  }
  
  function combineProps(prop, props){
    return prop = fucss.properties[prop] || prop;
    prop = [prop].concat(props);
    return prop.join('-');
  }
  
  function generateCssRule(className, prop, props, value, state, target){
    
    className = className.replace(fucss.seps.value, '\\:');
    className = className.replace(fucss.seps.comma, '\\.');
    className = className.replace(fucss.seps.important, '\\!');
    className = className.replace(fucss.seps.and, '\\+');
    
    var firstAddon = props.length && props[0];
    var isGroup = fucss.groups.indexOf(firstAddon) !== -1;
    
    state ? className += (':' + state) : false;
    var rules = '';
    
    //grouped props by comma
    var groupedProps = prop.split(',');
    
    if(groupedProps && groupedProps.length > 1){
      groupedProps.forEach(function(char){
        rules += (fucss.properties[char] || char) + ':' + value + ';';
      });
      className = className.split(',').join('\\,');
    } else {
      
      //grouped fucss.addons
      if(!isGroup){
        prop = [prop].concat(props).join('-');
        rules = prop + ':' + value + ';';
      }else{
        firstAddon.split('').forEach(function(char){
          rules += prop + '-' + fucss.addons[char] + ':' + value + ';';
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
  
  return true;
}

//---------- color section Starts

function hex2rgb(hex, opts){
  var hex = hex.replace('#', '');
  var rgb = hex.match(new RegExp('(.{' + (hex.length/3) + '})', 'g'));

  for(var i = 0; i < rgb.length; i++){
    rgb[i] = parseInt(rgb[i], 16);
    if(opts.percent){
      rgb[i] = Math.round(Math.round(rgb[i] + (255 * opts.percent)));
      if(rgb[i] < 0) rgb[i] = 0;
      if(rgb[i] > 255) rgb[i] = 255;
    }
  }
  
  if(opts.alpha) return 'rgba(' + rgb.join(',') + ',' + opts.alpha + ')';
  if(opts.format === 'hex') return "#" +
    ("0" + parseInt(rgb[0],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2);
  return 'rgb(' + rgb.join(',') + ')';
}

fucss.generateColor = function(hex, modifier){
  
  var c = hex.replace('#', '');
  var mv = modifier.substring(1, modifier.length);
  if(c && c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  if(c && c.length === 2) c = c[0] + c[1] + c[0] + c[1] + c[0] + c[1];
  
  //console.log('generateColor', c, modifier);
  
  switch(modifier[0]){
    case 'a':
    case 'alpha':
      return hex2rgb(c, { alpha: '0.' + mv });
    case 'l':
    case 'light':
      return hex2rgb(c, { percent: mv * 0.01, format: 'hex'});
    case 'd':
    case 'dark':
      return hex2rgb(c, { percent: (mv * -1) * 0.01, format: 'hex' });
  }
  
  return hex;
}

//---------- color section ENDS
  

fucss.harvestClassesFromHtml = function(html){
  var myRegexp = (/class="(.*?)"/gi);
  var myArray;
  var allHarvestedClassNames = [];
  
  while ((myArray = myRegexp.exec(html)) !== null) {
    var harvestedClassNames = myArray[0].split('"')[1].split(' ');
    allHarvestedClassNames = allHarvestedClassNames.concat(harvestedClassNames);
  }
  
  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}

fucss.harvestClassesFromRiot = function(riot){
  
  var myRegexp = (/class="(.*?)"/gi);
  var myRegexp2 = (/\'(.*?)\\'/gi)
  var myArray, myArray2;
  var allHarvestedClassNames = [];
  
  while ((myArray = myRegexp.exec(riot)) !== null) {
    if(myArray[0].indexOf("\'") === -1){
      //myArray[0].split('"')[1].split(' ')
      allHarvestedClassNames = allHarvestedClassNames.concat(myArray[1].split(' '));
    } else {
      while ((myArray2 = myRegexp2.exec(myArray[0])) !== null) {
        allHarvestedClassNames = allHarvestedClassNames.concat(myArray2[1].split(' '));
      }
    }
  }
  
  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}

fucss.harvestClassesFromJsx = function(jsx){
  var ptrn = (/(className=\"(.*?)\")|(classNames\(\{([\S\s]*?)\}\))/ig);
  var arr;
  var allHarvestedClassNames = [];
  var cl;
  while ((arr = ptrn.exec(jsx))) {
    if(!arr) return;
    //gets all className class list
    if(arr[2]){
      cl = arr[2].split(' ');
      if(cl){
        allHarvestedClassNames = allHarvestedClassNames.concat(cl);
      }
    }
    //gets all classNames library class list
    else if(arr[4]){
      var classNamesList = arr[4].replace(/\r\n|\n|\r/gm, '').split(',');
      if(classNamesList && classNamesList.length){
        classNamesList.forEach(function(cl){
          if(!cl) return;
          cl = cl.split(':').shift();
          if(!cl) return;
          cl = cl.split("'");
          if(!cl || cl && cl.length < 2) return;
          cl = cl[1] && !!cl[1].length && cl[1].split(' ');
          if(!cl || cl && !cl.length) return;
          
          allHarvestedClassNames = allHarvestedClassNames.concat(cl);
        });
      }
    }
  }
  
  return allHarvestedClassNames.filter (function (v, i, a) { return a.indexOf (v) == i });
}

fucss.generateGlobalExtras = function(){
  var globalExtras = {
    "body": 'margin: 0; text-align: center; font-family: inherit; border-width: 0;',
    "*": 'margin: 0 auto; outline: 0; padding: 0; box-sizing: border-box; border-style: solid; border-width: 0; vertical-align: baseline;',
    "a": 'text-decoration: none; color: inherit;',
    "a, span, img, button, i": 'display: inline-block; vertical-align: middle;',
    "button, a": 'cursor: pointer',
    "input, button, select, option, textarea": 'font-size: 100%; font-family: inherit;',
    
    "[contenteditable='plaintext-only']": 'cursor: text',
    "[contenteditable='plaintext-only']:empty:before" : 'content: attr(placeholder); opacity: 0.5; display: block;',
  }
  !!window.fucssGlobalExtras && Object.assign(globalExtras, window.fucssGlobalExtras);
  
  var cssString = '';
  for(var key in globalExtras){
    cssString += (key + '{' + globalExtras[key] + '}\n');
  }
  return cssString;
};

fucss.generateExtras = function(){
  var extras = {
    'fux-bb':       'box-sizing: border-box;',
    'fux-clear':    'overflow: hidden;',
    'fux-fadeIn':   'animation-name: fadeIn;animation-iteration-count: 1;\
                      animation-timing-function: ease-in;animation-duration: 0.2s;opacity: 1;',
    'fux-spinner':  'position: absolute; top: calc(50% - 25px); left: calc(50% - 25px); width: 50px; height: 50px; border: 3px solid #fff;\
      			          border-radius: 50%; border-top-color: ' + fucss.colors.sec + '; -webkit-animation: spin 0.75s ease-in-out infinite;',
    'fux-boxsh':    'box-shadow: 0 1px 2px rgba(0,0,0,.1)',
    'fux-trans':    'transition: color 0.1 ease-in; transition-property: color, background-color, border-color;',
  }
  !!window.fucssExtras && Object.assign(extras, window.fucssExtras);
  
  var cssString = '';
  for(var key in extras){
    cssString += ('.' + key + '{' + extras[key] + '}\n');
  }
  return cssString;
};

// aninamtion loader
fucss.generateAnimations = function(){
  var loader = {};
  loader['@keyframes spin'] = 'to { -webkit-transform: rotate(360deg); }';
  loader['@-webkit-keyframes spin'] = 'to { -webkit-transform: rotate(360deg); }';
  
  loader['@keyframes fadeIn'] = 'from {opacity: 0.3;} to {opacity: 1;}';
  loader['@-webkit-keyframes fadeIn'] = 'from {opacity: 0.3;}to {opacity: 1;}';
  
  loader['@keyframes fadeOut'] = 'from {opacity: 1;} to {opacity: 0.5;}';
    
  var cssString = '';
  for(var key in loader){
    cssString += (key + '{'+ loader[key] +'}\n');
  }
  return cssString;
}