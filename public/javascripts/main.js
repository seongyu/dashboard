/**
 * Created by LeonKim on 15. 10. 30..
 */



angular.module('sctDashModule', ['chart.js'])
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#3F8CFF', '#FD9943', '#FD4343']
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
    }])
    .controller('mainCtrl', function ($scope) {

    $scope.park_info = parkList[0];

    gridster = $(".gridster ul").gridster({
        widget_base_dimensions: [100, 100],
        widget_margins: [5, 5],
        resize: {
            enabled: true,
            start : function(e, ui, widget){
                //parentWidth = jQuery(widget).width();
                //parentHeight = jQuery(widget).height();
                jQuery(widget).find("iframe").css("display", "none");
            },
            stop : function(e, ui, widget){
                //alert(jQuery(widget).html());
                jQuery(widget).find("iframe").css("display", "");
                parentWidth = jQuery(widget).width();
                parentHeight = jQuery(widget).height();
                //jQuery(widget).find("iframe").css("width", parentWidth-10);
                //jQuery(widget).find("iframe").css("height", parentHeight-35);
            },
            min_size : [1,1]
        },
        autogrow_cols: true,
        max_size_x : 20
    }).data('gridster');

    $scope.status = '오늘 운영시간 '+$scope.park_info.time_info[0];
    $scope.abcdf = 'adfadfadsf';
    $scope.isS0 = 'Y';
    $scope.test = function(i,act){
        if(act=='in'){
            $('li:eq('+i+') .box_cnt').fadeIn();
            $scope.isS0 = 'Y';
        }else{
            $('li:eq('+i+') .box_cnt').fadeOut();
            $scope.isS0 = 'N';
        }
    };
    $scope.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Dec"];
    $scope.series = ['H', 'M', 'L'];
    $scope.option = {

    };
    $scope.data = [
        [200, 190, 210, 208, 195, 178, 185,177,175,168,155,90],
        [155, 167, 166, 176, 173, 158, 155,153,146,136,122,85],
        [127, 125, 133, 131, 126, 122, 124,114,105,101,92,71]
    ];

    $scope.w = $('.maps').width();
    $scope.site_info = site_info;
    setTimeout(function() {
        site_info.m.forEach(function (v, i, a) {
            var targetm = '.td:eq(' + v + ')';
            $(targetm).css('visibility', 'hidden');

            var targets = '.minitd:eq(' + v + ')';
            $(targets).css('visibility', 'hidden');
        });

        site_info.a.forEach(function (v, i, a) {
            for (var t = 0; t < site_info.s.length; t++) {
                if (site_info.s[t] == i) {

                    var targetm = '.td:eq(' + v + ') div';
                    $(targetm).css('background-color', '#51b9ff');

                    var targets = '.minitd:eq(' + v + ') div';
                    $(targets).css('background-color', '#51b9ff');
                }
            }
        });

        $('#siteView').css('visibility', 'visible');

        $('#sidebar').height($('#sidebar').parent().height());
    },200);


});


function crtlWnH() {
    //각 컨텐츠 박스 Contents 높이
    //common.js에 지정하면 .boxBs값을 가져오지 못 한 상태에서 각 위젯 컨텐츠 박스를 생성하여, 정상적인 높이로 만들어지지 않음
    //본 함수때문인지는 몰라도 초기에 뿌려진 위젯 컨텐츠 박스 높이 이하로 줄여지지 않음
    //UX플랫폼 개발진에 문의할 것
    $(".box_cnt").each(function(){

        $(this).css({'height':( $(this).parents(".boxBs").height() - 42 ) + 'px'});
        //$(this).css({'height': '200px'});
    });
}


var testbtn = function(){
    $('#parkInfoModal').modal('show');
};

var tabClk = function(id){
    console.log(id);
    $('.tab-pane').hide();
    $('#'+id).show();
};