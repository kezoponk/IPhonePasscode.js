/**
 * @author Albin Eriksson, https://github.com/kezoponk
 * @license MIT, https://opensource.org/licenses/MIT
 */
var numpadCountClick = 0,
    numpadEnteredPassword = "",
    numpadOptions;

class IPhoneNumpad {
  appendButtons(div, numpad) {
    const buttonStyle = 'height:22.3%;'
                        +'width:27.3%;'
                        +'margin-top: 0;'
                        +'margin-left:0;'
                        +'margin-bottom:4.35%;'
                        +'border-radius:100%;'
                        +'border:none;'
                        +'opacity:0;'
                        +'position:relative';
    // Append 10 buttons + 2 invisible
    for(var i = 0; i < 12; i++) {
      let numpadButton = document.createElement('button');

      // Default buttons
      let background = 'white',
          margin = '9%';

      // Remove margin for the third button in row
      if((((i+1) / 3) % 1) == 0 && i != 0) {
        margin = 0;
      }
      // Space for left and right of bottom '0'
      if(i == 9 || i == 11) {
        background = 'transparent';
      } else if(i == 10) {
        // If button value is '0'
        numpadButton.setAttribute("onclick", "numpad(this)");
        numpadButton.setAttribute("value", "0")
      } else {
        // Increase i by 1 since i have to start on 0
        numpadButton.setAttribute("onclick", "numpad(this)");
        numpadButton.setAttribute("value", i+1)
      }
        
      // Set style depending on button position
      numpadButton.setAttribute('style', 'background:'+background+';'
                                         +'margin-right:'+margin+';'
                                         +buttonStyle);
      numpad.appendChild(numpadButton);
    }
    div.appendChild(numpad);
  }

  appendEnteredPins(div, pinHeight, numpadWidth) {
    // Create div containing pins and change css to center all
    const pinsDiv = document.createElement('div');
    pinsDiv.setAttribute('style', 'height:'+pinHeight+'px;'
                                  +'width:'+numpadWidth+'px;'
                                  +'display: flex;'
                                  +'justify-content: center;'
                                  +'flex-wrap: wrap;'
                                  +'position: relative;'
                                  +'text-align:center');
    // Create title with entered text
    const text = document.createElement('h3');
    let textSize = (numpadWidth * 0.7) / 2;
    text.setAttribute('style', 'font-size:'+textSize+'%;'
                               +'color:white;'
                               +'width:100%;'
                               +'text-align:center;'
                               +'font-family: Arial, sans-serif;'
                               +'font-weight: lighter;'
                               +'margin:0');

    text.innerHTML = numpadOptions.text;
    pinsDiv.appendChild(text);

    for(var i = 0; i < numpadOptions.length; i++) {
      let singlePin = document.createElement('div');
      singlePin.setAttribute('style', 'border: 2px solid white;'
                                      +'height:20%;'
                                      +'width: 4.5%;'
                                      +'margin: 7px;'
                                      +'margin-top:0;'
                                      +'border-radius: 100%;'
                                      +'background: transparent;'
                                      +'position: relative');

      singlePin.setAttribute("id", "pin" + (i+1));
      pinsDiv.appendChild(singlePin);
    }
    div.appendChild(pinsDiv);
  }

  /**
   * @param {string} elementID - ID of div containing scrolling buttons
   * @param {Object} options - { password, length, color, text }
   */
  constructor(elementID, options) {
    const div = document.getElementById(elementID);
    // Default value
    if (options.text == null) options.text = "Enter Password";

    // Make options global for button onclick
    numpadOptions = options;

    // Init numpad that will exist in elementID div
    const numpad = document.createElement('div');

    // Set width and height to make numpad background fit perfectly
    let pinHeight = div.offsetHeight * 0.15,
        numpadHeight = div.offsetHeight - pinHeight,
        numpadWidth = numpadHeight * 0.8144;

    numpad.setAttribute('style', 'height:'+numpadHeight+'px;'
                                 +'width:'+numpadWidth+'px;');

    // Use numpad background and align buttons according to background
    numpad.style.background = 'url(src/src/'+options.color+'_numpad.png) no-repeat top / 100% 100%';

    this.appendEnteredPins(div, pinHeight, numpadWidth);
    this.appendButtons(div, numpad);
  }
}

//  A formatted version of a popular md5 implementation.
//  Original copyright (c) Paul Johnston & Greg Holt.
//  The function itself is now 42 lines long.
function md5(inputString) {
    var hc="0123456789abcdef";
    function rh(n) {var j,s="";for(j=0;j<=3;j++) s+=hc.charAt((n>>(j*8+4))&0x0F)+hc.charAt((n>>(j*8))&0x0F);return s;}
    function ad(x,y) {var l=(x&0xFFFF)+(y&0xFFFF);var m=(x>>16)+(y>>16)+(l>>16);return (m<<16)|(l&0xFFFF);}
    function rl(n,c)            {return (n<<c)|(n>>>(32-c));}
    function cm(q,a,b,x,s,t)    {return ad(rl(ad(ad(a,q),ad(x,t)),s),b);}
    function ff(a,b,c,d,x,s,t)  {return cm((b&c)|((~b)&d),a,b,x,s,t);}
    function gg(a,b,c,d,x,s,t)  {return cm((b&d)|(c&(~d)),a,b,x,s,t);}
    function hh(a,b,c,d,x,s,t)  {return cm(b^c^d,a,b,x,s,t);}
    function ii(a,b,c,d,x,s,t)  {return cm(c^(b|(~d)),a,b,x,s,t);}
    function sb(x) {
        var i;var nblk=((x.length+8)>>6)+1;var blks=new Array(nblk*16);for(i=0;i<nblk*16;i++) blks[i]=0;
        for(i=0;i<x.length;i++) blks[i>>2]|=x.charCodeAt(i)<<((i%4)*8);
        blks[i>>2]|=0x80<<((i%4)*8);blks[nblk*16-2]=x.length*8;return blks;
    }
    var i,x=sb(inputString),a=1732584193,b=-271733879,c=-1732584194,d=271733878,olda,oldb,oldc,oldd;
    for(i=0;i<x.length;i+=16) {olda=a;oldb=b;oldc=c;oldd=d;
        a=ff(a,b,c,d,x[i+ 0], 7, -680876936);d=ff(d,a,b,c,x[i+ 1],12, -389564586);c=ff(c,d,a,b,x[i+ 2],17,  606105819);
        b=ff(b,c,d,a,x[i+ 3],22,-1044525330);a=ff(a,b,c,d,x[i+ 4], 7, -176418897);d=ff(d,a,b,c,x[i+ 5],12, 1200080426);
        c=ff(c,d,a,b,x[i+ 6],17,-1473231341);b=ff(b,c,d,a,x[i+ 7],22,  -45705983);a=ff(a,b,c,d,x[i+ 8], 7, 1770035416);
        d=ff(d,a,b,c,x[i+ 9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,     -42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);
        a=ff(a,b,c,d,x[i+12], 7, 1804603682);d=ff(d,a,b,c,x[i+13],12,  -40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);
        b=ff(b,c,d,a,x[i+15],22, 1236535329);a=gg(a,b,c,d,x[i+ 1], 5, -165796510);d=gg(d,a,b,c,x[i+ 6], 9,-1069501632);
        c=gg(c,d,a,b,x[i+11],14,  643717713);b=gg(b,c,d,a,x[i+ 0],20, -373897302);a=gg(a,b,c,d,x[i+ 5], 5, -701558691);
        d=gg(d,a,b,c,x[i+10], 9,   38016083);c=gg(c,d,a,b,x[i+15],14, -660478335);b=gg(b,c,d,a,x[i+ 4],20, -405537848);
        a=gg(a,b,c,d,x[i+ 9], 5,  568446438);d=gg(d,a,b,c,x[i+14], 9,-1019803690);c=gg(c,d,a,b,x[i+ 3],14, -187363961);
        b=gg(b,c,d,a,x[i+ 8],20, 1163531501);a=gg(a,b,c,d,x[i+13], 5,-1444681467);d=gg(d,a,b,c,x[i+ 2], 9,  -51403784);
        c=gg(c,d,a,b,x[i+ 7],14, 1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+ 5], 4,    -378558);
        d=hh(d,a,b,c,x[i+ 8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16, 1839030562);b=hh(b,c,d,a,x[i+14],23,  -35309556);
        a=hh(a,b,c,d,x[i+ 1], 4,-1530992060);d=hh(d,a,b,c,x[i+ 4],11, 1272893353);c=hh(c,d,a,b,x[i+ 7],16, -155497632);
        b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13], 4,  681279174);d=hh(d,a,b,c,x[i+ 0],11, -358537222);
        c=hh(c,d,a,b,x[i+ 3],16, -722521979);b=hh(b,c,d,a,x[i+ 6],23,   76029189);a=hh(a,b,c,d,x[i+ 9], 4, -640364487);
        d=hh(d,a,b,c,x[i+12],11, -421815835);c=hh(c,d,a,b,x[i+15],16,  530742520);b=hh(b,c,d,a,x[i+ 2],23, -995338651);
        a=ii(a,b,c,d,x[i+ 0], 6, -198630844);d=ii(d,a,b,c,x[i+ 7],10, 1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);
        b=ii(b,c,d,a,x[i+ 5],21,  -57434055);a=ii(a,b,c,d,x[i+12], 6, 1700485571);d=ii(d,a,b,c,x[i+ 3],10,-1894986606);
        c=ii(c,d,a,b,x[i+10],15,   -1051523);b=ii(b,c,d,a,x[i+ 1],21,-2054922799);a=ii(a,b,c,d,x[i+ 8], 6, 1873313359);
        d=ii(d,a,b,c,x[i+15],10,  -30611744);c=ii(c,d,a,b,x[i+ 6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21, 1309151649);
        a=ii(a,b,c,d,x[i+ 4], 6, -145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+ 2],15,  718787259);
        b=ii(b,c,d,a,x[i+ 9],21, -343485551);a=ad(a,olda);b=ad(b,oldb);c=ad(c,oldc);d=ad(d,oldd);
    }
    return rh(a)+rh(b)+rh(c)+rh(d);
}

function numpad(button) {
  numpadCountClick++;
  numpadEnteredPassword += button.value;

  // Fill pin width entered color
  document.getElementById('pin'+numpadCountClick).style.background = "white";

  // IPhone numpad press animation
  button.style.opacity = "0.6";
  button.style.transition = "opacity 50ms linear";
  setTimeout(function() {
    button.style.opacity = "0";
    button.style.transition = "opacity 200ms linear";
  }, 100);

  if(numpadOptions.length == numpadCountClick) {
    if(md5(md5(numpadEnteredPassword)) == numpadOptions.doublemd5password) {
      // Success, php is required to validate again to prevent cross site script
      window.location = numpadOptions.redirect+"?pass="+numpadEnteredPassword;
    } else {
      // Delay reset with 500ms
      setTimeout(function() {
        // Reset each pin
        for(var i = 0; i < numpadOptions.length; i++) {
          document.getElementById('pin' + (i+1)).style.background = 'transparent';
        }
        numpadCountClick = 0;
        numpadEnteredPassword = "";
      }, 500);
    }
  }
}
