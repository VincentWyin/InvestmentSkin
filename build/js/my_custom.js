
$(function () {
	
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#search_title .collapse-link").click();
    	$("#menu_toggle").click();
    }
		
    if($("#_menu .active").length == 0){
    	console.log('reset current page');
	setTimeout(function(){
		var URL = window.location.href.split('#')[0].split('?')[0].split("/").pop();
		$("#_menu").find('a[href="' + URL + '"]').parent('li').addClass('current-page').parent("ul").siblings("a").click();
	},1000);
    }
})
