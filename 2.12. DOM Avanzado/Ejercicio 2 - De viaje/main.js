"use strict";

// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid. Haz lo mismo para París y Nueva York

const select = document.querySelector(".js-cities");
const foto1 = document.querySelector(".js-foto1");
const foto2 = document.querySelector(".js-foto2");
const foto3 = document.querySelector(".js-foto3");

function showPhoto() {
  if (select.value === "madrid") {
    foto1.src = "https://www.hola.com/imagenes/viajes/20180111104515/planes-gratis-madrid/0-526-138/madrid-panoramica-gran-via-t.jpg";
    foto2.src = "https://static.trainlinecontent.com/content/vul/hero-images/city/madrid/2x.jpg";
    foto3.src = "https://elpais.com/elpais/imagenes/2018/02/23/seres_urbanos/1519379688_339051_1519379812_noticia_grande.jpg";
  } else if (select.value === "paris") {
    foto1.src = "https://res.cloudinary.com/hzekpb1cg/image/upload/c_fill,h_410,w_800,f_auto/s3/public/prod/2019-02/Paris.jpg";
    foto2.src = "https://www.thelocal.fr/userdata/images/article/2bead9763909b4c16c9859c356c92f5a5bca2231bf22a7f44a2482e860b70f38.jpg";
    foto3.src = "https://viajes.nationalgeographic.com.es/medio/2019/04/15/istock-1132778056_60e4a83a_1258x833.jpg";
  } else if (select.value === "nueva-york") {
    foto1.src = "https://cdn.civitatis.com/estados-unidos/nueva-york/contrastes-nueva-york-vip.jpg";
    foto2.src = "https://www.infobae.com/new-resizer/U2cn5PWtKlNBXAZWgao1kgubyc0=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/11/27175507/nueva-york-turismo.jpg";
    foto3.src = "https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=60&fit=crop";
  }
}

select.addEventListener("change", showPhoto);
