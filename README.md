#FUCSS client side styling generator  

Fucss styling generator Hell YEAH!!!! (0.6.4)  
https://cdn.rawgit.com/noneedsystem/fucss/0.6.4/fucss.min.js

Fuico icon library  
https://github.com/noneedsystem/fuico 

#0.6.4
color modifiers enabled for example default pink = '#E91E63':
```
  bg:pinka5   = { background: rgba(233,30,99,0.5); }  
  bg:pinkl10  = { background: #ff387d; }  
  bg:pinkd10  = { background: #d0054a; }  
```
Flex box support implemented.  
https://css-tricks.com/snippets/css/a-guide-to-flexbox/  
default colors modified and implemented color modifier  
implemented global default rules
```javascript
  
  //css important eg: bg:pink-! = { background: #E91E63 !important; }
  
  //colors moved to separate object and redefined
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
  
  // now you can specify color modes for the color eg: pink400 = pinklight6
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
  
  // now you can predefine color configs eg: <body class="prim:indigo sec:pink err:red warn:yellow"> 
  fucss.config = {
    'prim': 'colors', 
    'sec': 'colors',
    'err': 'colors',
    'warn': 'colors',
  };
  
  // flex box support
  var fucssProperties = {
    //version 0.6.3
    ww: 'word-wrap',
    fd: 'flex-direction',
    od: 'order',
    flxg: 'flex-grow',
    flxs: 'flex-shrink',
    flxb: 'flex-basis',
    flx: 'flex',
    as: 'align-self',
    ai: 'align-items',
    ac: 'align-content',
  }
  
  var fucssValues = {
    //version 0.6.3
    pl: 'pre-line',
    nm: 'normal',
    bl: 'baseline',
    flx: 'flex',
    if: 'inline-flex',
    row: 'row',
    col: 'col',
    rr: 'row-reverse',
    cr: 'column-reverse',
    li: 'list-item',
    wrap: 'wrap',
    sb: 'space-between',
    sa: 'space-around',
    fs: 'flex-start',
    fe: 'flex-end',
    stc: 'stretch',
  }
  
  var fucssGlob = false; // by default it is enabled
  
  var fucssGlobalExtras = {
    "[contenteditable='plaintext-only']":   'cursor: text',
    "[contenteditable='plaintext-only']:empty:before" : 'content: attr(placeholder); opacity: 0.5; display: block;',
    "body": 'margin: 0; text-align: center; font-family: inherit; border-width: 0;',
    "*": 'margin: 0 auto; outline: 0; padding: 0; box-sizing: border-box; border-style: solid; border-width: 0; vertical-align: baseline;',
    "a": 'text-decoration: none;',
    "a, span, img, button, i": 'display: inline-block;',
    "button, a": 'cursor: pointer',
    "input, button, select, option, textarea": 'font-size: 100%; font-family: inherit;',
  }

```

#0.6.2
Predefined colours, animations implemented. Splash screen deprecated.
```javascript
  
  //all values can be overwrited using fucssValues
  var fucssValues = {
    //version 6 colors
    prim:     '#DE3E3E',  // red
    sec:      '#5FBA7D',  // grey dark
    tert:     '#2F3B50',  // green
    quat:     '#f6f7f4',  // grey
    quin:     '#D3D1D1',  // grey light
    //sext:     '#D3D1D1',
    //sept:     '#D3D1D1',
    //oct:      '#D3D1D1',
    //non:      '#D3D1D1',
    //den:      '#F1F1F1', // bg grey very light,
    navy:     '#001f3f',
    blue:     '#0074D9',
    aqua:     '#7FDBFF',
    teil:     '#39CCCC',
    olive:    '#3D9970',
    green:    '#2ECC40',
    lime:     '#01FF70',
    yellow:   '#FFDC00',
    orange:   '#FF851B',
    red:      '#FF4136',
    maroon:   '#85144b',
    fuchsia:  '#F012BE',
    purple:   '#B10DC9',
    black:    '#111111',
    grey:     '#AAAAAA',
    silver:   '#DDDDDD',
  }
  
  //deprecated splash screen value
  var fucssSplash = false;
  
  //implemented
  var fucssAnim = false; // default true
  
  // animations implemented
  @keyframes spin
  @keyframes fadeIn
  @keyframes fadeOut
  
  // new extras added
  var fucssExtras = {
    'fux-bb':       'border-sizing: border-box;',
    'fux-clear':    'overflow: hidden;',
    'fux-fadeIn':   'animation-name: fadeIn;animation-iteration-count: 1;\
                      animation-timing-function: ease-in;animation-duration: 0.2s;opacity: 1;',
    'fux-spinner':  'position: absolute; top: calc(50% - 25px); left: calc(50% - 25px); width: 50px; height: 50px; border: 3px solid #fff;\
      			          border-radius: 50%; border-top-color: #DE3E3E; -webkit-animation: spin 0.75s ease-in-out infinite;',
    'fux-boxsh':    'box-shadow: 0 1px 2px rgba(0,0,0,.1)',
    'fux-trans':    'transition: color 0.1 ease-in; transition-property: color, background-color;',
  }
fucss.riotExtractNGenerate = function(){}

```

#0.6.1
Auto riot class generator implemented
```javascript

//now generates automatically riot tag classes when script[type="riot/tag" and !!window.riot
fucss.riotExtractNGenerate = function(){}

```

#0.6.0  
Minified version now available

```javascript
  // now riot.js class object can be extracted too and all rules will be generated
  var _jsStr = "<div class={'op:0.8 hv-op:1': true, 'p:10px': true, 'm:10px': false} />";
  fucss.generateStyling({riot: _jsStr, returnStyle: false});
  
  // if you need to use fucss for riot.js
  var _tags = document.querySelectorAll('script[type="riot/tag"');
  var _jsStr = document.body.outerHTML;
  var _jsLoadedCount = 0;
  _tags.forEach(function(tag){
  	riot.compile(tag.src, function(js){
    	_jsStr += js;
    	_jsLoadedCount++;
    	if(_jsLoadedCount === _tags.length){
    		fucss.generateStyling({riot: _jsStr, returnStyle: false});
  			
  			riot.mount('*');
  			route.start(true);
    	}
  	});
  });
  
```

#0.5.9c  
Fixed fucssValues implementation

```javascript
// now it is assigned before window.onload
Object.assign(fucss.values, window.fucssValues)
```

#0.5.9  
Fixed color generator

#0.5.8
Change log
```javascript
  //default splash value now is set to false
  fucss.splash = false;
  
  //colors can be predefined
  var fucssValues = {
    main: '#ffcb05',
    grey: '#dadada',
  };
  
  /** new function for react.js and classNames library implemented
    
    <div className="bg:000"/>
    
    or
    
    var getDivClassNames = classNames({
      'bg:000': true,
    });
    
  **/
  fucss.generateStyling({jsx: _scriptString});
```

```html
  <!--
    now it is possible to use lighten(l25) / darken(d25) / alpha(a25) for colours. 
    Can be used with predifined values eg: (bg:mainl25)
  -->
  <div class="bg:ffcb05l25">colour #ffcb05 lightened by 25%</div>
```

#0.5.6
Change log

Media queries changed
```javascript
  fucss.media = {
    sm: 400,
    md: 768,
    lg: 1024,
  };
```

#0.5.5
Change log

Splash screen implemented
```html
<!-- put inside body -->
<body>
  <div class="fux-spin"></div>
</body>
```

Properties
```html
<!-- "bs" changed to "bz" "box-sizing"-->
bs => bz                  // box-sizing

<!-- We need bs for "box-shadow" more then "box-sizing" -->
bs                        // box-shadow

<!-- NEW table-layout prop-->
tl                        //table-layout
```

Now fucss is a bit more customizable. AT LAST WE CAN PREDEFINE COLORS and create custom rules
```html
<script>
  
  // Your custom values
  var fucssValues = {
    main: '#ffcb05'
  };
  
  // Your custom extra classess (fux)
  var fucssExtras = {
    'fux-grd-blue': 'background: linear-gradient(to right, rgba(25,32,68,0.9) 0%, rgba(25,32,68,0) 100%);'
  };
  
  // Starts fucss checking function every 5s
  var fucssWatch = 5000;
  
  // Stops fucss init function
  var fucssInit = false; 
  
  // Disables fucss splash screen
  var fucssSplash = false;
</script>
```

#0.5.4  
Change log
```html
  <!-- Atlast we have two "font-family" word support -->
  ff:Open+Sans              // font-family:"Open+Sans";
  
  <!-- ls changed to lis "list-style"-->
  ls => lis                 // list-style
  
  <!-- We need ls for "letter-spacing" more then "list-style" -->
  ls                        // letter-spacing
  
  <!-- Added Important functionality -->
  c:fff-!                   // color:#fff !important;
```

#0.5.2  
Stuff
```javascript

// set fucss.init = false and fucss will not initiate after document is loaded

// function fucss.generateStyling(html, returnStyle) lets you to initate style rendering in js
// u can pass 2 props to this function
// html lets you to pass htmlString
// returnStyle lets you to get back the cssString instead of inserting automatically to your html header

fucss.watch = 0;
fucss.init = true;

fucss.seps = {
  'value': ':',
  'space': '-',
  'target': '_',
};

fucss.media = {
  sm: 480,
  md: 768,
  lg: 1024,
};

fucss.states = {
  hov: 'hover',
  act: 'active',
  foc: 'focus',
  
  hv: 'hover',
  ac: 'active',
  fc: 'focus',
};

fucss.properties = {
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
};

```