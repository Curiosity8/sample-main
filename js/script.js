$(function(){
    // image slide
    $('.slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    })

    let lat = 37.5180667
    let lon = 126.9063573


    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
        //center: new kakao.maps.LatLng(55.962927, 9.311336), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    // 지도를 생성한다
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new kakao.maps.MapTypeControl()

    // 지도 상단 우측에 타입 변경 컨트롤을 추가한다.
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

    // 지도에 확대/축소 컨트롤을 생성한다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커가 표시될 위치입니다 
    //var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 생성합니다
    //var marker = new kakao.maps.Marker({
    //    position: markerPosition
    //});

    // 마커가 지도 위에 표시되도록 설정합니다
    //marker.setMap(map);

    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lon), // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    });

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        console.log('지도에서 클릭한 위치의 좌표는 ' + mouseEvent.latLng.toString() + ' 입니다.');

        let position = document.getElementById('position')
        let latlng = mouseEvent.latLng
        let lat = latlng.getLat()
        let lng = latlng.getLng()
        let msg = `위도 : ${lat}, 경도 : ${lng}`
        position.innerHTML = msg
    });	


    var customOverlay = new kakao.maps.CustomOverlay({
        map: map,
        content: '<div class="my-place">현재 위치</div>', 
        position: new kakao.maps.LatLng(lat, lon), // 커스텀 오버레이를 표시할 좌표
        xAnchor: 0.5, // 컨텐츠의 x 위치
        yAnchor: 0 // 컨텐츠의 y 위치
    });

    // 사이드바
    $('#btn-menu').on('click', function(){
        $('.side-bar').toggleClass('active')
    })

    // 닫기
    $('#btn-close').on('click', function(){
        $('.side-bar').toggleClass('active')
    })



})

