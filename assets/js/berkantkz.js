var hipster_container_h1;
var hipster_container_img;
var hipster_opacity;

var fadeStart= 0; 
var fadeUntil= 220;
    
$().ready(function(){
    $hipster_container_h1 = $('.hipster-container h1');
	$hipster_container_img = $('.hipster-container img');
        
});

$(window).on('scroll',function(){
    hafc.checkScrollForContentTransitions();             
});

hafc = {       
    checkScrollForContentTransitions : function(){                  
        var offset = $(window).scrollTop(),
           opacity = 0;
            
            
        if(offset < 600){ 
            if(offset <= fadeStart){
                opacity = 1;
            }else if( offset <= fadeUntil ){
                opacity = 1 - offset / fadeUntil;
            }
            $hipster_container_h1.css({
                    'opacity': opacity,
                    'transform': 'translateY(' + offset + 'px)',
                    '-webkit-transform': 'translateY(' + offset + 'px)',
                    '-moz-transform': 'translateY(' + offset + 'px)'
            });    
			$hipster_container_img.css({
                    'opacity': opacity,
                    'transform': 'translateY(' + offset + 'px)',
                    '-webkit-transform': 'translateY(' + offset + 'px)',
                    '-moz-transform': 'translateY(' + offset + 'px)'
            });    
        }
    }                   
}

var english = new Function('tr','en', 'document.body.innerHTML = document.body.innerHTML.replace(tr, en)');

if(window.location.href.indexOf("eng") > -1) {
	document.documentElement.lang = 'en';
	english('"Ne mutlu Türk\'üm diyene!"','"How happy the one who says I\'m a Turk!"');
	english('Wikipedia\'dan Wiki Zero\'ya andaş olarak yönlendirme görevini yapan Chromium eklentisi.','A Chromium extension which automatically redirects WikiPedia to Wiki Zero');
	english('Bilgi','Info');
	english('Yaşam öyküm','My biography');
	english('99 yılında Kocaeli\'de doğdum, orada büyüdüm. Şuan Kırklareli Üniversitesi\'nde mütercim tercümanlık bölümünde okuyorum. İstanbul\'dan Fenerbahçe Spor Kulübünü destekliyorum.','I was born in the year 99 in Kocaeli, grew up there. Now, I\'m studying translation-interpretationan at Kırklareli University. I support Fenerbahçe Spor Kulübü among İstanbul clubs.');
	english('Geliştirme','Development');
	english('Sosyal Hesap','Social');
	english('Efsaneler gelir ve giderler ancak sonsuza dek unutulmazlar...','Legends come and go but they are never forgotten...');
	english('Sosyal Hesap','Social');
	english('Neredeyse asla girmediğim Twitter.','Account which I almost never visit.');
	english('Sosyal Hesap','Social');
	english('Geliştirme','Development');
	english('Geliştirip Google Play\'de yayınladığım ilk uygulamam.','The first app I developed and published at Google Play Store.');
	english('Google Play\'den alın','Get it from Google Play');
	english('Yayın hakkı © 2015, Tasarım: <a href="http://creative-tim.com">Creative Tim</a>, <i class="fa fa-heart ct-heart"></i> ile daha iyi bir web için yapıldı.','Copyright © 2015, Design by <a href="http://creative-tim.com">Creative Tim</a>, Made with <i class="fa fa-heart ct-heart"></i> for a better web.');
	english('<a href="https://github.com/berkantkz/berkantkz.github.io" target="_blank">Bu web sayfası GitHub Pages\'da barındırılmaktadır.</a>','<a href="https://github.com/berkantkz/berkantkz.github.io" target="_blank">This web page is hosted with GitHub Pages.</a>');
	document.getElementById('tr').style.display = 'initial';
	document.getElementById('gb').style.display = 'none';
}

$().ready(function(){
        	
        	var $container = $('.masonry-container');

            doc_width = $(document).width();
            
            if (doc_width >= 768){
                $container.masonry({
                    itemSelector        : '.card-box',
                    columnWidth         : '.card-box',
                    transitionDuration  : 0
                });
            };            
});

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  document.body.style.background = 'radial-gradient(circle at 50% 50%,rgba(0,0,0,0.46),rgba(0,0,0,0.88))';
  $('.mas-container').removeClass('mas-container').addClass('row');
}