(function($){

var stylename = {};
var stylechnum = {};
var stylechname = {};
var elembottom = {};
var elemwidth = {};
var elemheight = {};
var elemminwidth = {};
var elemminheight = {};
var elemmaxwidth = {};
var elemmaxheight = {};
var elemmargin = {};
var elempadding = {};
var elembordertop = {};
var elemborderleft = {};
var elemborderbottom = {};
var elemborderright = {};
var elembackground = {};
var elembackgroundimage = {};
var elemcolor = {};
var elemoverflowx = {};
var elemoverflowy = {};
var elemfontfamily = {};
var elemfontsize = {};
var elemtextalign = {};
var elemfloat = {};
var elemposition = {};
var elemfontweight = {};
var elemborderradius = {};
var elemboxshadow = {};
var elemcursor = {};
var elemdisplay = {};
var elemtextshadow = {};
var elemtransition = {};
var elemlineheight = {};
var elemtextdecoration = {};

function ajaxread(filenm){
  var xhr=null;
  if (window.XMLHttpRequest)xhr=new XMLHttpRequest();
  else if(window.ActiveXObject)
  try {xhr=new ActiveXObject("Msxml2.XMLHTTP");}
  catch(e){xhr=new ActiveXObject("Microsoft.XMLHTTP");}
  xhr.open("GET",filenm,false);xhr.send("");eval(xhr.responseText);
};

  $.fn.cssin = function(name, tag){ //style

    ajaxread('/scripts/out.js');
    var structuretree = [];
    structuretree.push(stylename); //0
    structuretree.push(stylechnum); //1
    structuretree.push(stylechname); //2

    var styletree = [];
    styletree.push(elembottom); //0
    styletree.push(elemwidth); //1
    styletree.push(elemheight); //2
    styletree.push(elemminwidth); //3
    styletree.push(elemminheight); //4
    styletree.push(elemmaxwidth); //5
    styletree.push(elemmaxheight); //6
    styletree.push(elemmargin); //7
    styletree.push(elempadding); //8
    styletree.push(elembordertop); //9
    styletree.push(elemborderleft); //10
    styletree.push(elemborderbottom); //11
    styletree.push(elemborderright); //12
    styletree.push(elembackground); //13
    styletree.push(elembackgroundimage); //14
    styletree.push(elemcolor); //15
    styletree.push(elemoverflowy); //16
    styletree.push(elemoverflowx); //17
    styletree.push(elemfontfamily); //18
    styletree.push(elemfontsize); //19
    styletree.push(elemtextalign); //20
    styletree.push(elemfloat); //21
    styletree.push(elemposition); //22
    styletree.push(elemfontweight); //23
    styletree.push(elemborderradius); //24
    styletree.push(elemboxshadow); //25
    styletree.push(elemcursor); //26
    styletree.push(elemdisplay); //27
    styletree.push(elemtextshadow); //28
    styletree.push(elemtransition); //29
    styletree.push(elemlineheight); //30
    styletree.push(elemtextdecoration); //31

    var unitree = [];
    unitree.push(structuretree);
    unitree.push(styletree);
    
    
    
    var cssstr =  tag+'{';

    if(unitree[1][0][unitree[0][0][name]] != null){
      cssstr = cssstr + 'bottom:' + unitree[1][0][unitree[0][0][name]] + ';';
    }
    if(unitree[1][1][unitree[0][0][name]] != null){
      cssstr = cssstr + 'width:' + unitree[1][1][unitree[0][0][name]] + ';';
    }
    if(unitree[1][2][unitree[0][0][name]] != null){
      cssstr = cssstr + 'height:' + unitree[1][2][unitree[0][0][name]] + ';';
    }
    if(unitree[1][3][unitree[0][0][name]] != null){
      cssstr = cssstr + 'min-width:' + unitree[1][3][unitree[0][0][name]] + ';';
    }
    if(unitree[1][4][unitree[0][0][name]] != null){
      cssstr = cssstr + 'min-height:' + unitree[1][4][unitree[0][0][name]] + ';';
    }
    if(unitree[1][5][unitree[0][0][name]] != null){
      cssstr = cssstr + 'max-width:' + unitree[1][5][unitree[0][0][name]] + ';';
    }
    if(unitree[1][6][unitree[0][0][name]] != null){
      cssstr = cssstr + 'max-height:' + unitree[1][6][unitree[0][0][name]] + ';';
    }
    if(unitree[1][7][unitree[0][0][name]] != null){
      cssstr = cssstr + 'margin:' + unitree[1][7][unitree[0][0][name]] + ';';
    }
    if(unitree[1][8][unitree[0][0][name]] != null){
      cssstr = cssstr + 'padding:' + unitree[1][8][unitree[0][0][name]] + ';';
    }
    if(unitree[1][9][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-top:' + unitree[1][9][unitree[0][0][name]] + ';';
    }
    if(unitree[1][10][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-left:' + unitree[1][10][unitree[0][0][name]] + ';';
    }
    if(unitree[1][11][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-bottom:' + unitree[1][11][unitree[0][0][name]] + ';';
    }
    if(unitree[1][12][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-right:' + unitree[1][12][unitree[0][0][name]] + ';';
    }
    if(unitree[1][13][unitree[0][0][name]] != null){
      cssstr = cssstr + 'background:' + unitree[1][13][unitree[0][0][name]] + ';';
    }
    if(unitree[1][14][unitree[0][0][name]] != null){
      cssstr = cssstr + 'background-image:' + unitree[1][14][unitree[0][0][name]] + ';';
    }
    if(unitree[1][15][unitree[0][0][name]] != null){
      cssstr = cssstr + 'color:' + unitree[1][15][unitree[0][0][name]] + ';';
    }
    if(unitree[1][16][unitree[0][0][name]] != null){
      cssstr = cssstr + 'overflow-y:' + unitree[1][16][unitree[0][0][name]] + ';';
    }
    if(unitree[1][17][unitree[0][0][name]] != null){
      cssstr = cssstr + 'overflow-x:' + unitree[1][17][unitree[0][0][name]] + ';';
    }
    if(unitree[1][18][unitree[0][0][name]] != null){
      cssstr = cssstr + 'font-family:' + unitree[1][18][unitree[0][0][name]] + ';';
    }
    if(unitree[1][19][unitree[0][0][name]] != null){
      cssstr = cssstr + 'font-size:' + unitree[1][19][unitree[0][0][name]] + ';';
    }
    if(unitree[1][20][unitree[0][0][name]] != null){
      cssstr = cssstr + 'text-align:' + unitree[1][20][unitree[0][0][name]] + ';';
    }
    if(unitree[1][21][unitree[0][0][name]] != null){
      cssstr = cssstr + 'float:' + unitree[1][21][unitree[0][0][name]] + ';';
    }
    if(unitree[1][22][unitree[0][0][name]] != null){
      cssstr = cssstr + 'position:' + unitree[1][22][unitree[0][0][name]] + ';';
    }
    if(unitree[1][23][unitree[0][0][name]] != null){
      cssstr = cssstr + 'font-weight:' + unitree[1][23][unitree[0][0][name]] + ';';
    }
    if(unitree[1][24][unitree[0][0][name]] != null){
      cssstr = cssstr + '-moz-border-radius:' + unitree[1][24][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-webkit-border-radius:' + unitree[1][24][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-moz-border-radius:' + unitree[1][24][unitree[0][0][name]] + ';';
    }
    if(unitree[1][25][unitree[0][0][name]] != null){
      cssstr = cssstr + '-moz-box-shadow:' + unitree[1][25][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-webkit-box-shadow:' + unitree[1][25][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-moz-box-shadow:' + unitree[1][25][unitree[0][0][name]] + ';';
    }
    if(unitree[1][26][unitree[0][0][name]] != null){
      cssstr = cssstr + 'cursor:' + unitree[1][26][unitree[0][0][name]] + ';';
    }
    if(unitree[1][27][unitree[0][0][name]] != null){
      cssstr = cssstr + 'display:' + unitree[1][27][unitree[0][0][name]] + ';';
    }
    if(unitree[1][28][unitree[0][0][name]] != null){
      cssstr = cssstr + 'text-shadow:' + unitree[1][28][unitree[0][0][name]] + ';';
    }
    if(unitree[1][29][unitree[0][0][name]] != null){
      cssstr = cssstr + '-o-transition:' + unitree[1][29][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-moz-transition:' + unitree[1][29][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-webkit-transition:' + unitree[1][29][unitree[0][0][name]] + ';';
      cssstr = cssstr + 'transition:' + unitree[1][29][unitree[0][0][name]] + ';';
    }
    if(unitree[1][30][unitree[0][0][name]] != null){
      cssstr = cssstr + 'line-height:' + unitree[1][30][unitree[0][0][name]] + ';';
    }
    if(unitree[1][31][unitree[0][0][name]] != null){
      cssstr = cssstr + 'text-decoration:' + unitree[1][31][unitree[0][0][name]] + ';';
    }
    cssstr = cssstr + '}'

    if ($('head style').length) {
      $('head style').append(cssstr);
    } else {
      $('head').append('<style>'+cssstr+'</style>');
    }
  };

  //fitText
  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };



})(jQuery);