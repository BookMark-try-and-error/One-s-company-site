/***********************************
* menu *
***********************************/
$(document).ready(function() {
	$(".menu_trigger").click(function () {
	  $(this).toggleClass("active");
	  $('.gblnv_box').toggleClass('set');
	  $('.gblnv_block').toggleClass("onanimation");
	  $('ul li').hide();
	  $('ul li').each(function(i) {
	 	 $(this).delay(80 * i).fadeIn(2000);
	  });
	});
});

/***********************************
* character *
***********************************/
$(function(){
var main = $('.main_logo'),
    mainSpeed = 250,
    mainfade = 0;
		mainText = main.html();

		sub = $('.sub_logo'),
		subSpeed = 50,
    subfade = 0;
    subText = sub.html();

/* main
--------------------------- */
main.css({visibility:'visible'}).children().addBack().contents().each(function(){
    var elmThis = $(this);
    if (this.nodeType == 3) {
        var $this = $(this);
        $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
    }
});
$(window).load(function(){
    splitLength = $('.textSplitLoad').length;
    main.find('.textSplitLoad').each(function(i){
        splitThis = $(this);
        splitTxt = splitThis.text();
        splitThis.delay(i*(mainSpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},mainfade);
    });
    setTimeout(function(){
            main.html(mainText);
    },splitLength*mainSpeed+mainfade);
});

/* sub
--------------------------- */
sub.css({visibility:'visible'}).children().addBack().contents().each(function(){
    var elmThis = $(this);
    if (this.nodeType == 3) {
        var $this = $(this);
        $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
    }
});
$(window).load(function(){
    splitLength = $('.textSplitLoad').length;
    sub.find('.textSplitLoad').each(function(i){
        splitThis = $(this);
        splitTxt = splitThis.text();
        splitThis.delay(i*(subSpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},subfade);
    });
    setTimeout(function(){
            sub.html(subText);
    },splitLength*subSpeed+subfade);
	});
});
