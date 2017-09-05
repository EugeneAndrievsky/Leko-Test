$(document).ready(function(){	
  
  $('#input-name, #input-name2, #input-family').unbind().blur( function(){
		var id = $(this).attr('id');
		var val = $(this).val();
		
		switch(id) {            
			case 'input-name':
				var rv_name = /^[a-zA-Zа-яА-Я]+$/; 
				
				if(val != '' && rv_name.test(val)) {
					$(this).removeClass('credit-form__input-text--alert baloon--alert');
					$(this).next('.baloon')
						.removeClass('baloon--alert')
						.animate({"opacity": "0"}, 100);
				}				
				else {
					$(this).addClass('credit-form__input-text--alert');
					$(this).next('.baloon')
					.addClass('baloon--alert')
					.animate({"opacity": "1"}, 300);
				}				
			break;
				
			case 'input-name2':
				var rv_name = /^[a-zA-Zа-яА-Я]+$/; 
				
				if(val != '' && rv_name.test(val)) {
					$(this).removeClass('credit-form__input-text--alert ');
					$(this).next('.baloon')
						.removeClass('baloon--alert')
						.animate({"opacity": "0"}, 100);
				}				
				else {
					$(this).addClass('credit-form__input-text--alert');
					$(this).next('.baloon')
						.addClass('baloon--alert')
						.animate({"opacity": "1"}, 300);
				}				
			break;	
				
			case 'input-family':
				var rv_name = /^[a-zA-Zа-яА-Я]+$/; 
				
				if(val != '' && rv_name.test(val)) {
					$(this).removeClass('credit-form__input-text--alert');
					$(this).next('.baloon')
						.removeClass('baloon--alert')
						.animate({"opacity": "0"}, 100);
				}				
				else {
					$(this).addClass('credit-form__input-text--alert');
					$(this).next('.baloon')
						.addClass('baloon--alert')
						.animate({"opacity": "1"}, 300);
				}
			break;	
		}	
		
		validation();
		
	});
	
//  function baloon() {
//		var rv_name = /^[a-zA-Zа-яА-Я]+$/; 
//
//		if(val != '' && rv_name.test(val)) {
//			$(this).removeClass('credit-form__input-text--alert');
//			$(this).next('.baloon')
//				.removeClass('baloon--alert')
//				.animate({"opacity": "0"}, 100);
//		}				
//		else {
//			$(this).addClass('credit-form__input-text--alert');
//			$(this).next('.baloon')
//				.addClass('baloon--alert')
//				.animate({"opacity": "1"}, 300);
//		}
//	}
  
	function validation() {
		if ($('.baloon--alert').length == 1) {	//1 - временно, пока нету условия для radio		
			$(".btn").removeAttr("disabled");
		}
		else{
			$(".btn").prop("disabled", true);
		}
	}
	
});