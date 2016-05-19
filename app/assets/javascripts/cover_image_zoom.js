$(document).on('turbolinks:load', function(){
    $(".home_cover_image").zoomScroller({
        initZoom: 1.15,
        zoom: 1,
        animationTime: 2000,
        easing: "ease",
        onZoom: function(el, zoomType) {},
        beforeZoom: function(el, zoomType) {},
        afterZoom: function(el, zoomType) {},
        offsetTop: 0,
        offsetBottom: 200,
    });
})