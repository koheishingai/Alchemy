(function($){

//Language Detection Section
function getlang() {
  try {
    return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2)
  }
  catch(e) {
    return undefined;
  }
}

//"idstock" is a collection of all tags.
var idstock = [];
//"unitree" is a collection of all setting parameter asosiative arrays.
var unitree = [];   

//Element Arrays
var stylename = {};
var stylechnum = {};
var stylechname = {};
var styletextin = {};
var elemtop = {};
var elembottom = {};
var elemleft = {};
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

//Get Setting CSS on Loacal
function ajaxread(filenm){
  var xhr=null;
  if (window.XMLHttpRequest)xhr=new XMLHttpRequest();
  else if(window.ActiveXObject)
  try {xhr=new ActiveXObject("Msxml2.XMLHTTP");}
  catch(e){xhr=new ActiveXObject("Microsoft.XMLHTTP");}
  xhr.open("GET",filenm,false);xhr.send("");eval(xhr.responseText);
};

//Append init * CSS
if ($('head style').length) {
  $('head style').append('*, *:after, *:before {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;list-style: none;}');
} else {
  $('head').append('<style>'+'*, *:after, *:before {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;list-style: none;}'+'</style>');
}

//"cssin" function
$.fn.cssin = function(name, tag){ //style
    if(tag == null){
      var tagname = 'body';
    }else if(tag.indexOf(':')!=-1){
      var tagname = tag.replace( /[:]/, '' );
    }else{
      var tagname = tag;
    }

    ajaxread('/scripts/out.js');
    var structuretree = [];
    structuretree.push(stylename); //0
    structuretree.push(stylechnum); //1
    structuretree.push(stylechname); //2
    structuretree.push(styletextin); //3

    var styletree = [];
    styletree.push(elemtop); //0
    styletree.push(elembottom); //1
    styletree.push(elemleft); //2
    styletree.push(elemwidth); //3
    styletree.push(elemheight); //4
    styletree.push(elemminwidth); //5
    styletree.push(elemminheight); //6
    styletree.push(elemmaxwidth); //7
    styletree.push(elemmaxheight); //8
    styletree.push(elemmargin); //9
    styletree.push(elempadding); //10
    styletree.push(elembordertop); //11
    styletree.push(elemborderleft); //12
    styletree.push(elemborderbottom); //13
    styletree.push(elemborderright); //14
    styletree.push(elembackground); //15
    styletree.push(elembackgroundimage); //16
    styletree.push(elemcolor); //17
    styletree.push(elemoverflowy); //18
    styletree.push(elemoverflowx); //19
    styletree.push(elemfontfamily); //20
    styletree.push(elemfontsize); //21
    styletree.push(elemtextalign); //22
    styletree.push(elemfloat); //23
    styletree.push(elemposition); //24
    styletree.push(elemfontweight); //25
    styletree.push(elemborderradius); //26
    styletree.push(elemboxshadow); //27
    styletree.push(elemcursor); //28
    styletree.push(elemdisplay); //29
    styletree.push(elemtextshadow); //30
    styletree.push(elemtransition); //31
    styletree.push(elemlineheight); //32
    styletree.push(elemtextdecoration); //33

    unitree.push(structuretree);
    unitree.push(styletree);

    var cssstr =  tagname+'{';
    if(unitree[1][0][unitree[0][0][name]] != null){
      cssstr = cssstr + 'top:' + unitree[1][0][unitree[0][0][name]] + ';';
    }
    if(unitree[1][1][unitree[0][0][name]] != null){
      cssstr = cssstr + 'bottom:' + unitree[1][1][unitree[0][0][name]] + ';';
    }
    if(unitree[1][2][unitree[0][0][name]] != null){
      cssstr = cssstr + 'left:' + unitree[1][2][unitree[0][0][name]] + ';';
    }
    if(unitree[1][3][unitree[0][0][name]] != null){
      cssstr = cssstr + 'width:' + unitree[1][3][unitree[0][0][name]] + ';';
    }
    if(unitree[1][4][unitree[0][0][name]] != null){
      cssstr = cssstr + 'height:' + unitree[1][4][unitree[0][0][name]] + ';';
    }
    if(unitree[1][5][unitree[0][0][name]] != null){
      cssstr = cssstr + 'min-width:' + unitree[1][5][unitree[0][0][name]] + ';';
    }
    if(unitree[1][6][unitree[0][0][name]] != null){
      cssstr = cssstr + 'min-height:' + unitree[1][6][unitree[0][0][name]] + ';';
    }
    if(unitree[1][7][unitree[0][0][name]] != null){
      cssstr = cssstr + 'max-width:' + unitree[1][7][unitree[0][0][name]] + ';';
    }
    if(unitree[1][8][unitree[0][0][name]] != null){
      cssstr = cssstr + 'max-height:' + unitree[1][8][unitree[0][0][name]] + ';';
    }
    if(unitree[1][9][unitree[0][0][name]] != null){
      cssstr = cssstr + 'margin:' + unitree[1][9][unitree[0][0][name]] + ';';
    }
    if(unitree[1][10][unitree[0][0][name]] != null){
      cssstr = cssstr + 'padding:' + unitree[1][10][unitree[0][0][name]] + ';';
    }
    if(unitree[1][11][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-top:' + unitree[1][11][unitree[0][0][name]] + ';';
    }
    if(unitree[1][12][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-left:' + unitree[1][12][unitree[0][0][name]] + ';';
    }
    if(unitree[1][13][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-bottom:' + unitree[1][13][unitree[0][0][name]] + ';';
    }
    if(unitree[1][14][unitree[0][0][name]] != null){
      cssstr = cssstr + 'border-right:' + unitree[1][14][unitree[0][0][name]] + ';';
    }
    if(unitree[1][15][unitree[0][0][name]] != null){
      cssstr = cssstr + 'background:' + unitree[1][15][unitree[0][0][name]] + ';';
    }
    if(unitree[1][16][unitree[0][0][name]] != null){
      cssstr = cssstr + 'background-image:' + unitree[1][16][unitree[0][0][name]] + ';';
    }
    if(unitree[1][17][unitree[0][0][name]] != null){
      cssstr = cssstr + 'color:' + unitree[1][17][unitree[0][0][name]] + ';';
    }
    if(unitree[1][18][unitree[0][0][name]] != null){
      cssstr = cssstr + 'overflow-y:' + unitree[1][18][unitree[0][0][name]] + ';';
    }
    if(unitree[1][19][unitree[0][0][name]] != null){
      cssstr = cssstr + 'overflow-x:' + unitree[1][19][unitree[0][0][name]] + ';';
    }
    if(unitree[1][20][unitree[0][0][name]] != null){
      if(unitree[1][20][unitree[0][0][name]].indexOf('Titillium Web')!=-1){
          $('head').append("<link href='http://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>");
      }
      cssstr = cssstr + 'font-family:' + unitree[1][20][unitree[0][0][name]] + ';';
    }
    if(unitree[1][21][unitree[0][0][name]] != null){
      var fontsizeres = unitree[1][21][unitree[0][0][name]].split('/');
      cssstr = cssstr + 'font-size:' + fontsizeres[0] + ';';
      for(var i = 0;i < fontsizeres.length - 1;i++){                                        
        var tempcss = "@media (max-width: "+fontsizeres[i+1].split(':')[1]+"){";
              tempcss = tempcss + tagname + "{ font-size: " + fontsizeres[i+1].split(':')[0]+ ";}}";
      }
    }
    if(unitree[1][22][unitree[0][0][name]] != null){
      cssstr = cssstr + 'text-align:' + unitree[1][22][unitree[0][0][name]] + ';';
    }
    if(unitree[1][23][unitree[0][0][name]] != null){
      cssstr = cssstr + 'float:' + unitree[1][23][unitree[0][0][name]] + ';';
    }
    if(unitree[1][24][unitree[0][0][name]] != null){
      cssstr = cssstr + 'position:' + unitree[1][24][unitree[0][0][name]] + ';';
    }
    if(unitree[1][25][unitree[0][0][name]] != null){
      cssstr = cssstr + 'font-weight:' + unitree[1][25][unitree[0][0][name]] + ';';
    }
    if(unitree[1][26][unitree[0][0][name]] != null){
      cssstr = cssstr + '-moz-border-radius:' + unitree[1][26][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-webkit-border-radius:' + unitree[1][26][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-moz-border-radius:' + unitree[1][26][unitree[0][0][name]] + ';';
    }
    if(unitree[1][27][unitree[0][0][name]] != null){
      cssstr = cssstr + '-moz-box-shadow:' + unitree[1][27][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-webkit-box-shadow:' + unitree[1][27][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-moz-box-shadow:' + unitree[1][27][unitree[0][0][name]] + ';';
    }
    if(unitree[1][28][unitree[0][0][name]] != null){
      cssstr = cssstr + 'cursor:' + unitree[1][28][unitree[0][0][name]] + ';';
    }
    if(unitree[1][29][unitree[0][0][name]] != null){
      cssstr = cssstr + 'display:' + unitree[1][29][unitree[0][0][name]] + ';';
    }
    if(unitree[1][30][unitree[0][0][name]] != null){
      cssstr = cssstr + 'text-shadow:' + unitree[1][30][unitree[0][0][name]] + ';';
    }
    if(unitree[1][31][unitree[0][0][name]] != null){
      cssstr = cssstr + '-o-transition:' + unitree[1][31][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-moz-transition:' + unitree[1][31][unitree[0][0][name]] + ';';
      cssstr = cssstr + '-webkit-transition:' + unitree[1][31][unitree[0][0][name]] + ';';
      cssstr = cssstr + 'transition:' + unitree[1][31][unitree[0][0][name]] + ';';
    }
    if(unitree[1][32][unitree[0][0][name]] != null){
      cssstr = cssstr + 'line-height:' + unitree[1][32][unitree[0][0][name]] + ';';
    }
    if(unitree[1][33][unitree[0][0][name]] != null){
      cssstr = cssstr + 'text-decoration:' + unitree[1][33][unitree[0][0][name]] + ';';
    }
    cssstr = cssstr + '}'

    if(unitree[0][3][unitree[0][0][name]] != null){
        $(tagname).text(unitree[0][3][unitree[0][0][name]]).ready(function(){
          $(this).fitText();
        });
    }


 
    if ($('head style').length) {
      $('head style').append(cssstr).append(tempcss);
      var curelem = tagname;
    } else {
      $('head').append('<style>'+cssstr+tempcss+'</style>');
      var curelem = tagname;
    }

   if(tag == null || tag.indexOf(':') == -1){
    for(var i = 0;i < unitree[0][1][unitree[0][0][name]];i++){
      var childstr = unitree[0][2][unitree[0][0][name]].split(',');
      var appendelem = childstr[i].split(':');
      idstock.push(unitree[0][0][name]+'-'+unitree[0][0][appendelem[1]]);
      crawler(unitree[0][0][appendelem[1]]);
    }


   //ready...
   $(appendelem[0]).ready(function(){
     //append section  
     for(var i = 0;i < idstock.length;i++){
       var splitstock = idstock[i].split('-');
       if(splitstock[1] != 'undefined'){
         for(var key in unitree[0][0]){
           if (unitree[0][0][key] == splitstock[0]) {
              if(tag != null){
              var appendelem3raw = tag;
              var appendelem3 = tag.replace( /[#]/, '' );              
              }else{
              var temparr = key.split('/');
              var appendelem3raw = temparr[1];
              var appendelem3 = temparr[1].replace( /[#]/, '' );
              }
           }
           if (unitree[0][0][key] == splitstock[1]) {
              var appendelem4raw = key;
              var temparr = key.split('/');
              var appendelem4 = temparr[1].replace( /[#]/, '' );
           }
         }

         if(appendelem4.indexOf('header')!=-1){
           $(appendelem3).append('<header id='+appendelem4+'>');  
         }else if(appendelem4.indexOf('footer')!=-1){
           $(appendelem3).append('<footer id='+appendelem4+'>');
         }else if(appendelem4.indexOf('-h1')!=-1){
           $(appendelem3raw).append('<h1 id='+appendelem4.replace( '-h1', '' )+'>');
         }else{
           $(appendelem3raw).append('<div id='+appendelem4+'>');
         }  
         if(appendelem4.indexOf('body')!=-1){
           $('window').cssin(appendelem4raw, ':body'); 
         }else if(appendelem4.indexOf('header')!=-1){
           $('window').cssin(appendelem4raw, ':header');
         }else if(appendelem4.indexOf('footer')!=-1){
           $('window').cssin(appendelem4raw, ':footer');
         }else if(appendelem4.indexOf('-h1')!=-1){
           $('window').cssin(appendelem4raw, ':#'+appendelem4.replace( '-h1', '' ));
         }else{
           $('window').cssin(appendelem4raw, ':#'+appendelem4);
         } 
       } 
     }
    });
  }

};


function crawler(id){
  for(var i = 0;i < unitree[0][1][id];i++){
        var childstr = unitree[0][2][id].split(',');
        var appendelem = childstr[i].split(':');
        idstock.push(id+'-'+unitree[0][0][appendelem[1]]);
        crawler(unitree[0][0][appendelem[1]]);
  }
}

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