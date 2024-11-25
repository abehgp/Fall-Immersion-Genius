document.getElementById("myButton").addEventListener('click', function() {
    alert("Button clicked");
    image_tag = document.createElement("img");
    image_tag.src = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/uv%3Fpb%3D!1s0x808f7ef994cbf2e7:0x92a2ab8cdbc9309c!3m1!7e115!4s/maps/place/sfs/%4037.7325426,-122.4114491,3a,75y,17.57h,90t/data%253D*213m4*211e1*213m2*211sEbLFQiU97Ug3wcII-4R_XQ*212e0*214m2*213m1*211s0x808f7ef994cbf2e7:0x92a2ab8cdbc9309c%3Fsa%253DX%2526ved%253D2ahUKEwiYlJiRy4mJAxXMITQIHfUlKSEQpx96BAg9EAA!5ssfs%2B-%2BGoogle%2BSearch!15zQ2dJZ0FRPT0%26imagekey%3D!1e2!2sEbLFQiU97Ug3wcII-4R_XQ%26cr%3Dle_a7%26hl%3Den%26ved%3D1t:206134%26ictx%3D111&ved=2ahUKEwiYlJiRy4mJAxXMITQIHfUlKSEQtsoMegQITRAE&usg=AOvVaw1-999_qkbK-2m3cOi2ohgdg";
    document.body.appendChild(image_tag);
});