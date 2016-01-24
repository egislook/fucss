var watch = 5000;

var properties = {
  pdg: 'padding',
  mrg: 'margin',
  clr: 'color',
  bg: 'background',
  txt: 'text',
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
};

var ignore = ['fa', 'tb', 'fix', 'trans', 'cursor', 'wrap', 'tr'];


var addons = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  pos: 'position',
};


var values = {
  greyd1: '#ffcb05',
  blackl3: '#f24543',
  cc: 'center center',
  bot: 'bottom',
  c: 'center',
  r: 'right',
  l: 'left',
};


window.onload=function(){
  generateStyling() && watch && setInterval(generateStyling, watch);
}

function generateStyling(){
  
  var cssString = '';
  
  harvestClassesFromOneFile(document.body.innerHTML)
    .forEach(function(className){
  
      var splitedClassName = className.split('-');
      
      var key = splitedClassName.shift();
      
      if(ignore.indexOf(key) !== -1){
        return;
      }
      
      
      var value = !!splitedClassName.length && splitedClassName.pop();
      var addon = splitedClassName.shift();
      
      if(!properties[key]){
        console.log('missing class => ', key);
        return;
      }
      
      value = values[value] || value;
      key = properties[key];
      addon = addons[addon] && ('-' + addons[addon]);
      
      var property = addon 
        ? key + addon
        : key;
      
      cssString = cssString 
        + '.' + className + '{' 
          + property + ':' + value 
        + ';} \n';
    });
  
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