
$(function () {
	
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	$("#menu_toggle").click();
    	$("#menu_toggle").click();
    }
			
    if($("#_menu .active").length == 0){
    	console.log('reset current page');
	    setTimeout(function(){
		    var URL = window.location.href.split('#')[0].split('?')[0].split("/").pop();
		    $("#_menu").find('a[href="' + URL + '"]').parent('li').addClass('current-page').parent("ul").siblings("a").click();
	    },1000);
    }
	
	if ($('.control-group .tags').length ){ 
    	$('.control-group .tags').tagsInput({ width: 'auto', 'defaultText': 'add here' });
    }
	
	if ($('.cust_datetimepicker').length ){
	    $('.cust_datetimepicker').daterangepicker({
	        singleDatePicker: true,
	        singleClasses: "picker_2"
	    }, function (start, end, label) {
	        console.log(start.toISOString(), end.toISOString(), label);
	    });
	}

})
