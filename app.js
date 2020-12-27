$(function () {
    var galleryImage = $(".gallery").find("img").first();
    var images = [
        "img/laptop-mobile_small.jpg",
        "img/laptop-on-table_small.jpg",
        "img/people-office-group-team_small.jpg"
    ];
    // function to switch image every 2 seconds //
    var i = 0;
    setInterval(function () {
        i = (i + 1) % images.length; // 0, 1, 2, 0, 1, 2, 0, 1, ....
        galleryImage.fadeOut(function () { // function is executed as soon as animation is finished
            $(this).attr("src", images[i]); // this refers to galleryImage
            $(this).fadeIn();
        })
        console.log(galleryImage.attr("src"));
    }, 2000);
});
