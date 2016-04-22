#FUCSS client side styling generator  

Fucss styling generator Hell YEAH!!!! (0.5.5)  
https://cdn.rawgit.com/noneedsystem/fucss/0.5.5/fucss.js

#0.5.5
Change log

Properties
```html
<!-- "bs" changed to "bz" "box-sizing"-->
bs => bz                 // box-sizing

<!-- We need bs for "box-shadow" more then "box-sizing" -->
bs                        // box-shadow
```

Now fucss is a bit more customizable. ATLAST WE CAN PREDEFINE COLORS and create custom rules
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