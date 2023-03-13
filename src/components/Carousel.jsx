import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const images = [
        { src: "https://images.pexels.com/photos/6397651/pexels-photo-6397651.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/7292911/pexels-photo-7292911.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/6280478/pexels-photo-6280478.jpeg?auto=compress&cs=tinysrgb&w=600" },

    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto">
            <Slider {...settings}>
                {
                    images.map(image => <div key={image.id}>
                        <img className="w-[100%] h-[70vh] object-cover mx-auto" src={image.src} alt="" />
                    </div>)
                }
            </Slider>
        </div>

    );
};


export default Carousel;