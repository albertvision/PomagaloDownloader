$(function () {
	//Index
	$('.help').html(chrome.i18n.getMessage("help"));
	$('.about').html(chrome.i18n.getMessage("about"));
	
	//About
	$('.title').html(chrome.i18n.getMessage("extName"));
	$('.desc').html(chrome.i18n.getMessage("extDesc"));
	$('.current-year').html((new Date).getFullYear());
	$('.author').html(chrome.i18n.getMessage("extAuthor"));
	$('.rights').html(chrome.i18n.getMessage("rights"));
	$('.licensed-under').html(chrome.i18n.getMessage("licensed_under"));
	$('.short-guide').html(chrome.i18n.getMessage("short_guide"));
	$('.help-cnt').html(chrome.i18n.getMessage("help_cnt"));
	$('.to-index').html(chrome.i18n.getMessage("back"));
	
	//Actions
	$('.help').click(function () {
		$('#index').fadeOut(50);
		$('#help').fadeIn();
		$("html").animate({
			height: "310px",
		}, 1000);
	});
	$('.about').click(function () {
		$('#index').fadeOut(50);
		$('#about').fadeIn();
		$("html").animate({
			height: "110px",
		}, 1000);
	});
	$('.to-index').click(function () {
		$('#help').fadeOut(50);
		$('#about').fadeOut(50);
		$('#index').fadeIn();
		$("html").animate({
			height: "90px",
		}, 1000);
	});
});