$(document).on('turbolinks:load', function(){
	var ar = $('#projects-arrow');
		function point(){
		  ar.animate({top: '+=1em'},300,function(){
		    ar.animate({top: '-=1em'},300,point);
		  });
		}
		point();



// (function tic(){
//   ar.animate({width:'+=5',height:'+=5'},300,function(){
//     ar.animate({width:'-=5',height:'-=5'},300,tic);
//   });
// })();
})
