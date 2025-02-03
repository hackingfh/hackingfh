import React from "react";
import Slider from "react-slick";

const SliderComps = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 h-[600px] p-8">
          <div className="flex-1 pl-20">
            <div className="text-6xl font-bold">
              Nike Metcon 9 EasyOn, chaussure d'entraînement pour femme
            </div>
            <div className="text-lg my-8">
              Le Metcon 9 répond à vos attentes, quelle que soit votre raison de vous entraîner. Nous avons amélioré le modèle 8 avec une plaque Hyperlift plus grande et une enveloppe en caoutchouc supplémentaire.
            </div>
            <div
              className="border rounded-full cursor-pointer text-2xl
             w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all"
            >
              Explorer
            </div>
          </div>

          <div className="flex-1">
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bbe8ac18-c6b6-4288-8cdd-5e6c03937cae/metcon-9-easyon-antrenman-ayakkab%C4%B1s%C4%B1-XFHvVK.png"
              alt="Nike Metcon 9 EasyOn"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="!flex items-center bg-gray-100 h-[600px] p-8">
          <div className="flex-1 pl-20">
            <div className="text-6xl font-bold">
              Le Nike Metcon 9 EasyOn, chaussure d'entraînement pour femme
            </div>
            <div className="text-lg my-8">
              Le Metcon 9 répond à vos attentes, quelle que soit votre raison de vous entraîner. Nous avons amélioré le modèle 8 avec une plaque Hyperlift plus grande et une enveloppe en caoutchouc supplémentaire.
            </div>
            <div
              className="border rounded-full cursor-pointer text-2xl
             w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all"
            >
              Explorer
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6dc1c89-ae17-475b-a31d-a8137b452eed/metcon-9-easyon-antrenman-ayakkab%C4%B1s%C4%B1-XFHvVK.png"
              alt="Nike Metcon 9 EasyOn"
              className="max-w-full h-auto"
            />
          </div>
        </div>      </Slider>
    </div>
  );
};

export default SliderComps;