//========================================================================================
// 작성자 : uramsol
// 작성일자 : 06/09/27
// 최근갱신일자 : 14/07/25
//========================================================================================

//<![CDATA[
//========================================================================================
//	Popup : 06/09/27 : 모든 팝업계열 함수를 Opt로 조절가능한 함수로 통합, 이미지팝업 별도 추가
//========================================================================================
function WinPop(Url, Name, Pw, Ph, Opt)
{
	//스크린 중앙 위치 구하기
	PosLeft = (screen.width - Pw)/2;
	PosTop = (screen.height - Ph)/2;

	if (Opt == 'scroll'){var OptV=',toolbar=no,location=no,directories=no,status=no,menuBar=no,scrollBars=yes,resizable=no';} //스크롤바만 가능
	else if (Opt == 'full'){var OptV=',toolbar=yes,location=yes,directories=yes,status=yes,menuBar=yes,scrollBars=yes,resizable=yes';} //풀옵
	else if (Opt == 'none') {var OptV=',toolbar=no,location=no,directories=no,status=no,menuBar=no,scrollBars=no,resizable=no';} //모든조건 no
	else if (Opt == 'resize'){var OptV=',toolbar=no,location=no,directories=no,status=no,menuBar=no,scrollBars=no,resizable=auto';} //사이즈조절만 가능
	else {var OptV=',top='+PosTop+',left='+PosLeft+',toolbar=no,location=no,directories=no,status=no,menuBar=no,scrollBars=yes,resizable=no';} //스크롤바만+스크린중앙
	
	var Option='width=' + Pw + ',height=' + Ph + OptV;
	winup = window.open(Url, Name, Option);
//	if (!winup) {
//	for (i=0;i<11 ;i++ ) {setTimeout(WinPop(Url, Name, Pw, Ph, Opt),500);}
//		alert('팝업 차단을 허용해 주세요.');
//	}
//	else {winup.focus();}
}

//========================================================================================
//	PNG타입 적용 관련 스크립트(for IE6이하) : 09/02/03
//========================================================================================
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}

//========================================================================================
//	Height/width Control : 테스트용 임의 함수 : 15/04/16
//========================================================================================
$(window).ready(function(){
	crtlWnH();
});

$(window).resize(function(){
	crtlWnH();
});

function crtlWnH() {
	var wBd = $("body").width();
	var hBd = $("body").height();
	var hTit = $(".sect_tit").height();
	var hTab = $(".sect_tab").height();
	var hCnt = $(".sect_cnt").height();

	//[Login]Login Box 세로/가로 중앙 정렬
	$("#box_login").css({'left':( (wBd - 392) / 2 ) + 'px'}); 
	$("#box_login").css({'top':( (hBd - 196) / 2 ) + 'px'});
	
	//[공통]Layer Popup 세로/가로 중앙정렬
	$(".wrap_pop").css({'left':( (wBd - $(".wrap_pop").width()) / 2 ) + 'px'});
	if ($(".wrap_pop").height() <= hBd  ) {
		$(".wrap_pop").css({'top':( (hBd - $(".wrap_pop").height()) / 2 ) + 'px'});
	} else {
		$(".wrap_pop").css({'top':(100) + 'px'});
	}
	
	//[Contents 공통]Title Box 내부 컨텐츠 영역 높이
	$(".titBox_cnt").each(function(){
		$(this).css({'height':( $(this).parents(".indCnt").height() - 41) + 'px'});
	}); 
	
	//[Contents 공통]좌측 컨텐츠 너비 사이즈에 따른 우측 컨텐츠의 유동적 너비 사이즈
	$(".col2nd").each(function(){	
		$(this).css({'width':( $(this).parents(".section").width() - $(this).parents(".section").children(".col1st").width() - 20) + 'px'}); 
		if($(this).hasClass('step') == true) {
			$(this).css({'width':( $(this).parents(".section").width() - $(this).parents(".section").children(".col1st").width() - 60) + 'px'});
		}
		/* box-sizing:border-box 을 적용하지 않았을 경우 활성
		if($(this).hasClass('padBox') == true) {
			$(this).css({'width':($(this).parents(".section").width() - $(this).parents(".section").children(".col1st").width() - 20 - 40) + 'px'});
			$(this).css({'height':( $(this).parents(".section").height() - 30) + 'px'});
		}
		*/
	});

	//[Contents 공통]Step 영역 위치 지정
	$(".btnGrp.step").each(function(){
		$(this).css({'left':( $(this).parents(".section").children(".col1st").width() + 16) + 'px'});
		$(this).css({'top':( $(this).parents(".section").children(".col1st").height()/2 - 32) + 'px'});
	});

	//[공통]유동적 iframe 영역 높이
	$("iframe").each(function(){
		var hIfBd = $(this).contents().find("body").height();
		//alert("수정!!!");
		$(this).css({'height':( $(this).contents().find("body").height() ) + 'px'});
		//$(this).parents('.sect_cnt').css({'height':( h - hHd - (hFt + 6) - 90 - (hTit + 20) - (hTab + 11) ) + 'px'}); //임시 iframe 영역 높이(높이 100% 내 위치 시)
	});
}

//========================================================================================
//	CSS Button Hover BG Change : 테스트용 임의 함수 : 14/05/XX
//========================================================================================
$(function(){
	$('.Basic').find('a').hover(function() {
		$(this).parents('.button').removeClass('Basic').addClass('Selected');
	},
	function(){
		$(this).parents('.button').removeClass('Selected').addClass('Basic');
	});
	$('Black').find('a').hover(function() {
		$(this).parents('.button').removeClass('Black').addClass('Selected');
	},
	function(){
		$(this).parents('.button').removeClass('Selected').addClass('Black');
	});
	$('Gray').find('a').hover(function() {
		$(this).parents('.button').removeClass('Black').addClass('Selected');
	},
	function(){
		$(this).parents('.button').removeClass('Selected').addClass('Black');
	});
});

//========================================================================================
//	Layer On/Off : 테스트용 임의 함수 : 13/09/26 추가 : Frame간 적용
//========================================================================================
var target = "";
var dp_type = "";
var frameid = "";
var layerid = "";
var evt = 0;
function layer_onoff(target,dp_type,frameid,layerid,evt) {	
	if(target == "frame") {
		if(dp_type == "on") {
			parent.frames[frameid].document.getElementById(layerid).style.display = 'block';
		} else if(dp_type == "off") {
			parent.frames[frameid].document.getElementById(layerid).style.display = 'none';
		}
	} else if(target == "frame2") {
		if(dp_type == "on") {
			parent.parent.frames[frameid].document.getElementById(layerid).style.display = 'block';
		} else if(dp_type == "off") {
			parent.parent.frames[frameid].document.getElementById(layerid).style.display = 'none';
		}
	} else if(target == "iframe") {
		if(dp_type == "on") {
			parent.document.getElementById(layerid).style.display = 'block';
		} else if(dp_type == "off") {
			parent.document.getElementById(layerid).style.display = 'none';
		}
	} else {
		if (dp_type == "on") {
			document.getElementById(layerid).style.display = "block";
		} else if(dp_type == "off") {
			document.getElementById(layerid).style.display = "none";
		}
	}
}

//========================================================================================
//	Popup Layer ON/OFF : 테스트용 임의 함수 : 15/04/13
//===================================================================용====================
function pop_onoff(stg,layer) {
	var stg;
	if (stg == 'L1') {
		$('#cover_pop').show();
	} else if (stg == 'L2') {
		$('#cover_popLol').show();
		$('#' + layer).css({'top':( ($('body').height() - $('#' + layer).height()) / 2 ) + 'px'});
	}
	$('#' + layer).show();
	$('body').addClass('actPop'); //Fix size of main[body] and Remove main[scroll]
	crtlWnH(); //Pracice Function of Size-control 
	return false;
}

$(function(){
	$('.pop_header > .ico_close').click(function() {
		$('#cover_pop').hide();
		$('#wrap_pop').hide();
		$('body').removeClass('actPop');
		crtlWnH(); //Pracice Function of Size-control 
		return false;
	});
	$('.popLol_header > .ico_close').click(function() {
		$('#cover_popLol').hide();
		$('#wrap_popLol').hide();
		//$('body').removeClass('actPop');
		crtlWnH(); //Pracice Function of Size-control 
		return false;
	});
});

//========================================================================================
//	Slide System Select : 테스트용 임의 함수 : 15/04/13
//========================================================================================
$(function(){
	$('.hdTxt_nm').click(function() {
		if($('.lyr_account').css("display") == 'none') {
			$('.lyr_account').slideDown('0');
			$(this).addClass('active');
			return false;
		} else if ($('.lyr_account').css("display") == 'block') {
			$('.lyr_account').slideUp('0');
			$(this).removeClass('active');
			return false;
		}
	});
});
//]]>
