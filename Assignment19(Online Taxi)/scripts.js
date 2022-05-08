var lat = 36.3141306;
var lng = 59.549162;
var map;
let btn_od = document.getElementById("btn_org_des");
let cost = document.getElementById("calculate-cost");
var status_btn = "origin";
var desCenter, detention_marker;
var myCenter, origin_marker;

function getDistance(start, end){
    x1 = start.lat()
    y1 = start.lng()
    x2 = end.lat()
    y2 = end.lng()
    var distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    
    return distance;
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 16,
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        myCenter = new google.maps.LatLng(lat, lng);

        map.setCenter(myCenter);

        origin_marker = new google.maps.Marker({
            position: myCenter,
            icon: "imges/des_marker.png",
            draggable: true,
            animation: google.maps.Animation.DROP,
        }
        );
        origin_marker.setMap(map);

        btn_od.addEventListener('click', function onClick(event) {
            if (status_btn == "origin") {
                btn_od.style.color = "black";
                btn_od.style.backgroundColor = "lightgreen"
                btn_od.value = "Confirmation of detention"
                cost.style.backgroundColor = "lightgreen";
                cost.style.color = "black";
                status_btn = "detention";

                desCenter = new google.maps.LatLng(lat, lng);

                map.setCenter(desCenter);

                detention_marker = new google.maps.Marker({
                    position: desCenter,
                    icon: "imges/origin_marker.png",
                    draggable: true,
                    animation: google.maps.Animation.BOUNCE,
                }
                );
                detention_marker.setMap(map);

                
                origin_marker.setDraggable(false);
                origin_marker.setMap(map);

            }
            else if (status_btn == "detention") {
                btn_od.disabled = true;

                btn_od.value = "Destination confirmed";
                desCenter = detention_marker.getPosition();
                
                detention_marker.setDraggable(false);
                detention_marker.setMap(map);
                btn_od.style.color = "white";
                btn_od.style.backgroundColor = "green";
                cost.style.backgroundColor = "green";
                cost.style.color = "white";
                distance = getDistance(myCenter, desCenter);
                var price = Math.round((distance * 1480) + 5);
                cost.innerHTML = "Your trip was successfully registered and your cost is equal to  " + price + "  dollars $"

                
            }
        });

    });

} else {
    alert("Geolocation is not supported by this browser.");
}

