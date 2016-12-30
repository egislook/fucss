var fucss = {};

fucss.watch = window.fucssWatch !== undefined ? window.fucssWatch : 0;
fucss.init = window.fucssInit !== undefined ? window.fucssInit : true;
fucss.splash = window.fucssSplash !== undefined ? window.fucssSplash : false;

fucss.seps = {
  'value': ':',
  'space': '-',
  'target': '_',
};

fucss.media = {
  sm: 400,
  md: 768,
  lg: 1024,
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
  
  //version 0.5.7
  lis: 'list-style',
  ls: 'letter-spacing',
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
  
  //version5
  ds: 'dashed',
  dt: 'dotted',
};

fucss.bodyHide && document.body ? document.body.style.display = 'none' : false;

//assigning custom client stuff
!!window.fucssValues && Object.assign(fucss.values, window.fucssValues);
!!window.fucssExtras && Object.assign(fucss.extras, window.fucssExtras);

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
  	window.riot.compile(tag.src, function(js){
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
      cssString += '@media only screen and (min-width: ' + fucss.media[mediaName] + 'px) {\n' + cssMediaQueries[mediaName] + '}\n';
    });
    
  for(var fux in fucss.extras){
    cssString += ('.' + fux + '{' + fucss.extras[fux] + '}\n');
  }
  
  //console.log(cssString);
  if(opts && opts.returnStyle){
    return cssString;
  }else{
    //console.log(document.querySelector('style'));
    document.querySelector('style').innerHTML = cssString + document.querySelector('style').innerHTML;
  }
  
  fucss.splash ? document.body.className += (' '+fucss.loader.ready) : false;
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
  
  function modifyValue(valueList, prop){
    
    //console.log(valueList, prop, valueList.length);
    valueList = valueList.map(function(value){
      
      if(fucss.values[value]) return fucss.values[value];
      
      if(fucss.colorazable.indexOf(prop) !== -1){
      
        //console.log(prop, value);
        
        if(new RegExp(/(a\d\d\b)|(a\d\b)|(l\d\d\b)|(d\d\d\b)/).test(value)){
          var length = value.length;
          
          var modifierPos = 2;
          if(new RegExp(/(a\d\b)/).test(value)){
            modifierPos = 1;
          };
          
          var clrModifier = {
            type: value.substring(length-modifierPos, length-modifierPos-1),
            value: value.substr(length-modifierPos)
          }
          var tempValue = value.substr(0, length-modifierPos);
          
          
          if(fucss.values[tempValue]){
            value = fucss.values[tempValue];
          } else if(tempValue && tempValue.length !== 6){
            value = tempValue[0] + tempValue[0] + tempValue[1] + tempValue[1] + tempValue[2] + tempValue[2];
          } else {
            value = tempValue;
          }
          
          switch(clrModifier.type){
            case 'a':
              return hex2rgb(value, {alpha: '0.' + clrModifier.value});
            case 'l':
              return hex2rgb(value, {alpha: 1, percent: clrModifier.value * 0.01});
            case 'd':
              return hex2rgb(value, {alpha: 1, percent: (clrModifier.value * -1) * 0.01});
          }
        } else if(new RegExp(/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i).test(value)){
          return '#' + value;
        }
      }
      
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
  
  function hex2rgb(hex, opts){
    var h = hex.replace('#', '');
    
    h = h.match(new RegExp('(.{'+h.length/3+'})', 'g'));
  
    for(var i=0; i<h.length; i++){
      h[i] = parseInt(h[i], 16);
      if(opts.percent){
        h[i] = Math.round(Math.round(h[i] + (255 * opts.percent)));
        if(h[i] < 0) h[i] = 0;
        if(h[i] > 255) h[i] = 255;
      }
    }
    if(typeof opts.alpha !== 'undefined') h.push(opts.alpha);
    return 'rgba('+h.join(',')+')';
  }
  
  return true;
}

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
  
  loader['@keyframes fadeIn'] = 'from {opacity: 0.3;} to {opacity: 1;}';
  loader['@keyframes fadeOut'] = 'from {opacity: 1;} to {opacity: 0.5;}';
  
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