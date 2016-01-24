var fs = require('fs');
var sass = require('node-sass');
var lodash = require('lodash');

var defaultSass = 'style.scss';
var defaultDir = '../examples/';
var endpointFile = './test.css';
var acceptedExtensions = ['html', 'js'];

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


var allClassList = loadHtmlFilesFromDir(defaultDir);
var cssString = '';

allClassList.forEach(function(className){
  
  var splitedClassName = className.split('-');
  
  var key   = splitedClassName.shift();
  
  if(ignore.indexOf(key) !== -1){
    return;
  }
  
  
  var value = !!splitedClassName.length && splitedClassName.pop();
  var addon = splitedClassName.shift();
  
  if(!properties[key]){
    console.log('missing class => ', key);
    return;
  }
  
  //console.log(value);
  
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

fs.writeFile(endpointFile, cssString, function(e) {
  if(e) return console.error(e);
});

//console.log(cssString);




function loadHtmlFilesFromDir(defaultDir){
  
  var classList = [];
  
  fs.readdirSync(defaultDir).forEach(function(folderOrFile){
    acceptedExtensions.indexOf(folderOrFile.split('.').pop()) !== -1
      ? classList = lodash.union(classList, harvestClassesFromOneFile(fs.readFileSync(defaultDir + folderOrFile, 'utf8').toString()))
      : false;
  });
  
  return classList;
}

function harvestClassesFromOneFile(string){
  
  var myRegexp = (/class="(.*?)"/gi);
  var myArray;
  var allHarvestedClassNames = [];
  
  while ((myArray = myRegexp.exec(string)) !== null) {
    var harvestedClassNames = myArray[0].split('"')[1].split(' ');
    allHarvestedClassNames = lodash.union(allHarvestedClassNames, harvestedClassNames);
  }
  
  return allHarvestedClassNames;
}


/*var folders = fs.readdirSync(paths.app);
var finished = 0;
folders.forEach(function(appName){
  var appTree = paths.appTree(appName);
  var filePath = appTree.styles + defaultSass;
  var exists = fs.existsSync(filePath);
  
  if(!exists){
    console.log('Sass build', ' >> Warning << ', 'file does not exist', filePath);
    finished++;
    return false;
  }
  
  var file = fs.readFileSync(filePath, 'utf8').toString();
  
  var opts = {
    data: file,
    success: function(result) {
        fs.writeFile(paths.css + appName + '.css', result.css, function(e) {
          if(e) return console.error(e);
          console.log('Sass build', ' >> Success << ', 'file compiled', paths.css + appName + '.css');
          finished++;
          finished-1 === folders.length ? process.kill(0) : false;
        });
    },
    error: function(error) {
      console.log(error);
    },
    includePaths: [paths.styles, appTree.styles],
    outputStyle: 'compact'
    
  }
  
  sass.render(opts);
  
});*/

/*, 'compressed'*/