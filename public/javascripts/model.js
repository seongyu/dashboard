/**
 * Created by LeonKim on 15. 10. 30..
 */
var site_info = {x:[],y:[]},map,tgSiteBtn;
//var api_url = 'http://localhost:3001/';
var api_url = 'http://52.192.168.235:3001/';
var park_id = '01100aok151020';
var storage_url = 'https://s3-ap-northeast-1.amazonaws.com/parkingtalk';

site_info.m = [
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,59,60,61,62,63,
    64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88 ,89, 90,91,92,93,94,95,
    96, 97, 98, 99,
    128, 129, 130, 131
];

site_info.a = [
    133,134,135,137,138,139,141,142,143,145,146,147,149,150,151,153,154,155,157,158,159
];

site_info.s = [

];

//init y information
for(var y=0;y<5;y++){
    if(y==1||y==2){
        site_info.y.push({
            y : y,
            v : 'hidden'
        });
    }else{
        site_info.y.push({
            y : y,
            v : null
        });
    }
}

//init x information
for(var x = 0;x<32;x++){
    if(x%4==0){
        site_info.x.push({
            x : x,
            cm : 'Y',
            c : 'black'
        });
    }else{
        site_info.x.push({
            x : x,
            c : '#9b9b9b'
        });
    }
}


//Tue Oct 20 2015 10:32:01 GMT+0900 (KST)
//Tue Oct 20 2015 10:38:01 GMT+0900 (KST)

var parkList = [
    {
        park_id : 'test',
        title : '옥산지하주차장',
        loc : {
            loc1 : '경상북도 경산시 서부1동 725-1',
            loc2 : ''
        },
        geo_loc : {
            lon : 128.726425,
            lat : 35.8294583
        },
        tel : '(000)000-0000',
        price : {
            first : '-',
            basic : {
                t : 'M',
                b : 10,
                p : 500
            },
            max : 20000,
            daily : '-'
        },
        time_info:[
            '09:00 ~ 22:00','09:00 ~ 22:00','09:00 ~ 22:00'
        ],
        site : {
            is_full : 'N',
            now : 82,
            total : 320
        },
        img : [
            'img/sample/test_site_img.png',
            'img/sample/test_site_img.png',
            'img/sample/test_site_img.png'
        ],
        update_info : '11:37'
    }
];



var userInfo = {
    car_num : '23가1234',
    tel : '010-0000-0000'
};

var find_result = [{
    car_num : '23가1234',
    locate : '3층 A구역 20',
    pic : 'img/sample/sample_site.png',
    init_time : "2015-10-13T05:15:18.526Z"
},{
    car_num : '17가2345',
    locate : '3층 A구역 21',
    pic : 'img/sample/sample_site.png',
    init_time : "2015-10-13T03:39:18.526Z"
}];

var testRD = {
    "user": {
        "tel":"123",
        "car_num":"123"
    },
    "reserve": {
        "date":"2015-10-16T03:26:30.000Z",
        "is_daily":"N",
        "during":7200
    }
};

//
//var park_info = {
//  park_id: '1211000001',
//  title: '옥산지하주차장',
//  address: {
//    prev: '경북 경산시 옥산동 112번지',
//    new: '경북 경산시 옥산동길 2가 212'
//  },
//  location: {
//    latitude: 35.8294583,
//    longitude: 128.726425
//  },
//  tel: '000-000-0000',
//  price: {
//    info : '유료',
//    first: 0,		//최초주차금액 있을 시
//    basic: {
//      t: 'M',		//M : minute, H : hour, d : day
//      b: 10,
//      p: 500		// format : won
//    },
//    max: 20000, 	// 일단위 최고금액
//    daily: 0		// 일주차요금
//  },
//  time_info: {
//    weekday : {
//      start : '09:00',
//      end : '22:00'
//    },
//    weekend : {
//      start : '09:00',
//      end : '22:00'
//    },
//    holiday : {
//      start : '09:00',
//      end : '22:00'
//    }
//
//  },
//  site: {
//    is_full: 'N',		// Y : 만차, N : 주차가능
//    now: 82,		// 현재 주차가능 공간
//    total: 320		// 총 주차공간
//  },
//  img: [		// 주차장 이미지 정보
//    'file'			// type : File (jpg,png,gif)
//  ],
//  update_info: '2015-10-13T05:15:18.526Z'	// 정보전송 시간
//};
//
//var site_info = [
//  {
//    park_id: '01100aok151020',	// 주차장 id
//    site_code: '01',			// 주차공간 id
//    site_name: 'A-1',			// 주차공간 이름
//    car_info: {			// default : NULL, 차량 진출입에 의한 전달 시 정보 포함
//      car_num: '12가1234',	// 차량 정보
//      action: 'IN'			// IN : 진입, OUT : 진출
//    },
//    status: 'N',			// Y : 주차가능, N : 주차불가
//    udt_time: '2015-10-13T05:15:18.526Z'
//  }
//];
