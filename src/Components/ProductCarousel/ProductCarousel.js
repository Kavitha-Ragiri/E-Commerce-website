import Slider from "react-slick";

function ProductCarousel({ images }) {

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="slider-container w-50 mx-auto">

      <Slider {...settings}>
        {images && images.length>0 && images.map((img, index) => (
          <div 
            key={index}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={img}
              alt=""
              className="p-2 border border-1 border-danger"
              style={{
                width: "300px",
                height: "450px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default ProductCarousel;
