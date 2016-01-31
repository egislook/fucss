var watch = 5000;

var sign = '-';

var media = {
  'mbl': 480,
  'tbt': 768,
  'lpt': 1024,
  'dsk': 1280,
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
  
};

var ignore = ['fa', 'tb', 'fix', 'trans', 'cursor', 'wrap', 'tr'];


var addons = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  pos: 'position',
  rad: 'radius',
  fml: 'family',
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
};


window.onload=function(){
  generateStyling() && watch && setInterval(generateStyling, watch);
}

function generateStyling(){
  
  var cssString = '';
  var cssMediaQueries = {};
  
  harvestClassesFromOneFile(document.body.outerHTML)
    .forEach(function(className){
  
      var splitedClassName = className.split(sign);
      
      var key = splitedClassName.shift();
      var mediaQuery = null;
      
      if(ignore.indexOf(key) !== -1){
        return;
      }
      
      
      if(Object.keys(media).indexOf(key) !== -1){
        mediaQuery = key;
        key = splitedClassName.shift();
      }
      
      
      var value = !!splitedClassName.length && splitedClassName.pop();
      
      if(!value){
        return;
      }
      
      var addon = splitedClassName.shift();
      
      /*if(!properties[key]){
        //console.log('missing class => ', key);
        return;
      }*/
      
      switch(key){
        case 'bg':
        case 'clr':
          value = values[value] || '#'+value;
        break;
      }
      
      if(values[value]){
        value = values[value];
      }
      
      if(value.indexOf('pc')){
        value = value.replace('pc', '%');
      }
      
      key = properties[key] || key;
      addon = addon ? addons[addon] && ('-' + addons[addon]) || ('-' + addon) : addon;
      
      var property = addon 
        ? key + addon
        : key;
      
      var cssRule = '.' + className + '{' 
        + property + ':' + value 
      + ';}\n';
        
      console.log(mediaQuery, cssRule);
        
      if(mediaQuery){
        cssMediaQueries[mediaQuery] = cssMediaQueries[mediaQuery] ? (cssMediaQueries[mediaQuery] + cssRule) : cssRule;
      } else {
        cssString += cssRule;
      }
      
    });
    
  //cssRule = '@media only screen and (min-width: ' + media[mediaQuery] + 'px) {' + cssRule + '}';
  console.log(cssMediaQueries);
  
  //sets media queries at the end
  Object.keys(cssMediaQueries).length 
    && Object.keys(cssMediaQueries).forEach(function(mediaName){
      cssString += '@media only screen and (min-width: ' + media[mediaName] + 'px) {' + cssMediaQueries[mediaName] + '}'
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