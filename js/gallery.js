$(function() {
    // if (Galleria) { $("body").text('Galleria works') }
    for (var i = 1; i < 12; i++) {
        var name = i.toString()
        if (name.length < 2)
            name = "0"+name;
        var img = new Image()
        img.src = "/images/gallery/"+name+".JPG"
        $(".galleria").append(img)
    }
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.4.2/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');
})