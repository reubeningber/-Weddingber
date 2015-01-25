$(document).ready(function() {
	$('#menu').slicknav({
		label: ''
	});

    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
	
	$('.js-fit-text').fitText();
	
	$('body').fitVids();

	$('#clock').countdown('2015/10/11').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
        + '<span class="digits">%-D</span> Day%!d '
        + '<span class="digits">%H</span> Hours '
        + '<span class="digits">%M</span> Minutes '
        + '<span class="digits">%S</span> Seconds'));
	});

	$(function() {
        var atlanta = new google.maps.LatLng(33.7550, -84.3900),
            pointToMoveTo, 
            first = true,
            curMarker = new google.maps.Marker({}),
            $el;
      
        var myOptions = {
            zoom: 15,
            center: atlanta,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      
        var map = new google.maps.Map($("#map_canvas")[0], myOptions);
    
        $("#locations li").mouseenter(function() {
            $el = $(this);
                    
            if (!$el.hasClass("hover")) {
            
                $("#locations li").removeClass("hover");
                $el.addClass("hover");
            
                if (!first) { 
                    // Clear current marker
                    curMarker.setMap(); 
                }
                  
                // Move (pan) map to new location
                pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
                map.panTo(pointToMoveTo);
                  
                // Add new marker
                curMarker = new google.maps.Marker({
                    position: pointToMoveTo,
                    map: map,
                    icon: "../assets/img/marker.png"
                });
                  
                // On click, zoom map
                google.maps.event.addListener(curMarker, 'click', function() {
                    map.setZoom(20);
                });
                  
                // Fill more info area
                $("#more-info").find("h2").html($el.find("h3").html()).end().find("p").html($el.find(".longdesc").html());
                  
                // No longer the first time through (re: marker clearing)        
                first = false; 
            }    
        });
      
        $("#locations li:first").trigger("mouseenter"); 
    });

    // Reorder Photo Gallery on load

    function reorder() {
        var $photoGallery = $('.photo-gallery'),
            grp = $photoGallery.children(),
            cnt = grp.length;

        var temp, x;
        for (var i = 0; i < cnt; i++) {
            temp = grp[i];
            x = Math.floor(Math.random() * cnt);
            grp[i] = grp[x];
            grp[x] = temp;
        }
        $(grp).remove();
        $photoGallery.append($(grp));
    }
    
    reorder();
});
