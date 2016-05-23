// $(function() {
//     var images = []
//     for (var i = 1; i < 12; i++) {
//         var name = i.toString()
//         if (name.length < 2)
//             name = "0"+name;
//         var imgUrl = "/images/gallery/"+name+".JPG"
//         var img = new Image()
//         var link = document.createElement("a")
//
//         img.src = "/images/gallery/thumb/"+name+"-th.JPG"
//         link.setAttribute("href", "/images/gallery/"+name+".JPG")
//         link.appendChild(img)
//         $("#gallery").append(link)
//     }
//     console.log("passed")
// })
// $(document).ready(function() {
//     $("#gallery").lightGallery({
//         cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)'
//     });
//
// });
$(function() {
    var images = []
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