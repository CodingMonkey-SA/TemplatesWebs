if(jQuery){jQuery().ready(function(){jQuery('div.contact-map').each(function(){var lat=jQuery(this).find('.contact-info-map-lat').val(),lon=jQuery(this).find('.contact-info-map-lon').val(),lat_lon=new google.maps.LatLng(lat,lon),mapOptions={zoom:16,center:lat_lon,mapTypeId:google.maps.MapTypeId.ROADMAP},map=new google.maps.Map(jQuery(this).find('.contact-info-map-canvas')[0],mapOptions),marker=new google.maps.Marker({map:map,position:lat_lon});google.maps.event.addListenerOnce(map,'mouseover',function(){google.maps.event.trigger(map,'resize');});});});}