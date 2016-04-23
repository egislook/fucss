var fucss = {};

fucss.watch = window.fucssWatch !== undefined ? window.fucssWatch : 0;
fucss.init = window.fucssInit !== undefined ? window.fucssInit : true;
fucss.splash = window.fucssSplash !== undefined ? window.fucssSplash : true;

fucss.seps = {
  'value': ':',
  'space': '-',
  'target': '_',
};

fucss.media = {
  sm: 768,
  md: 1024,
  lg: 1280,
};

fucss.extras = {
  'fux-bb': 'border-sizing: border-box;',
  'fux-clear': 'overflow: hidden;',
}

fucss.states = {
  hov: 'hover',
  act: 'active',
  foc: 'focus',
  
  hv: 'hover',
  ac: 'active',
  fc: 'focus',
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
  
  //version 6
  lis: 'list-style',
  ls: 'letter-spacing',
};

fucss.bodyHide && document.body ? document.body.style.display = 'none' : false;

window.onload=function(){
  
  //assigning custom client stuff
  !!window.fucssValues && Object.assign(fucss.values, window.fucssValues);
  !!window.fucssExtras && Object.assign(fucss.extras, window.fucssExtras);
  
  //initiating the generator
  fucss.watch && setInterval(fucss.generateStyling, fucss.watch);
  fucss.init && fucss.generateStyling();
};

fucss.generateStyling = function(html, returnStyle){
  
  console.time('Fucss');
  var cssString = '';
  var cssMediaQueries = {
    sm: [],
    md: [],
    lg: []
  };
  var cssMissing = [];
  
  harvestClassesFromOneFile(html || document.body.outerHTML)
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
      
      //console.log(prop, props, state, value);
      if(Object.keys(fucss.properties).indexOf(prop) === -1 && prop.indexOf(',') === -1){return}
      //if(fucss.ignore.indexOf(prop) !== -1){return}
      if(!value){return console.warn('No value specified. Use value seperator ' + fucss.seps.value + ' for "' + className + '"')}
      if(!prop){return console.warn('No prop specified. Use prop seperator ' + fucss.seps.space + ' for "' + className + '"')}
      if(!fucss.properties[prop] && prop.indexOf(',') < 0){cssMissing = cssMissing.concat([prop])}
      
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
      cssString += '@media only screen and (min-width: ' + fucss.media[mediaName] + 'px) {\n' + cssMediaQueries[mediaName] + '}\n';
    });
    
  for(var fux in fucss.extras){
    cssString += ('.'+fux+'{'+fucss.extras[fux]+'}\n');
  }
  
  //console.log(cssString);
  if(!returnStyle){
    document.querySelector('style').innerHTML = cssString + document.querySelector('style').innerHTML;
  }else{
    return cssString;
  }
  
  
  fucss.splash ? document.body.className += (' '+fucss.loader.ready) : false;
  console.timeEnd('Fucss');
  
  if(cssMissing.length){console.warn('Used as full prop [ ' + cssMissing + ' ]')}
  
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
  
  function modifyValue(valueList, prop){
    
    valueList = valueList.map(function(value){
      if(fucss.colorazable.indexOf(prop) !== -1){
        
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
      
      if(fucss.values[value]){ return fucss.values[value] }
      
      var unit = value.replace(/\d/g, '');
      if(unit && (unit.length === 3 || unit.length === 2)){
        value = value.replace(unit, '');
        
        if(unit.indexOf('n') !== -1) value = -value;
        if(unit.indexOf('pc') !== -1 ) return value + '%';
        return value + unit.replace('n', '');
      }
      
      if(value === '!'){
        return '!important';
      }
      
      if(prop === 'font-family'){
        value = value.replace('+', ' ');
        return '"'+value+'"';
      }
      
      return value;
    });
    
    
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
    
    className = className.replace(':', '\\:');
    className = className.replace('.', '\\.');
    className = className.replace('!', '\\!');
    className = className.replace('+', '\\+');
    
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
  
  function hex2rgb(hex, opacity) {
    var h=hex.replace('#', '');
    h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));
  
    for(var i=0; i<h.length; i++)
        h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);
  
    if (typeof opacity != 'undefined')  h.push(opacity);
  
    return 'rgba('+h.join(',')+')';
  }
  
  return true;
}

// loader prototype
fucss.loader = {
  'ready': 'fux-ready',
  'spin': 'fux-spin',
};

fucss.loader.generate = function(){
  var loader = {};
  loader['.'+fucss.loader.spin] = 'position: absolute; top: calc(50% - 10px); left: calc(50% - 40px);width: 50px;height: 50px;border: 3px solid rgba(0,0,0,.3);\
    border-radius: 50%;border-top-color: #000;animation: spin 1s ease-in-out infinite;-webkit-animation: spin 0.75s ease-in-out infinite;';
  loader['@keyframes spin'] = 'to { -webkit-transform: rotate(360deg); }';
  loader['@-webkit-keyframes spin'] = 'to { -webkit-transform: rotate(360deg); }';
  
  //body fade in stuff
  loader['body *:not(.'+fucss.loader.spin+')'] = 'opacity: 0;';
  loader['body.'+fucss.loader.ready+' *'] = 'opacity: 1; transition: opacity 0.25s ease-in;';
  loader['body.'+fucss.loader.ready+' .'+fucss.loader.spin] = 'opacity:0; transition: opacity 0.1s ease-out;'
    
  var loaderStyle = '';
  for(var rule in loader){
    loaderStyle += (rule + '{'+ loader[rule] +'}\n');
  }
  return loaderStyle;

}

fucss.splash 
  ? document.querySelector('style').innerHTML = document.querySelector('style').innerHTML + fucss.loader.generate()
  : false;