import React from "react";
import Slider from "react-slick";

import "./carousel.scss"
import { Slide } from "../slide";

export const Carousel = React.memo( function Carousel({ lotteries, isLoading, slideClick }) {

    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        arrows: false,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            {
                
                isLoading ? (
                    <div className="lds-dual-ring"></div>
                ) : (

                <Slider {...settings}>
                    {
                    Object.keys(lotteries).map((lottery, idx) => {
                        return (
                            <Slide 
                                key={ idx }
                                title={ lottery }
                                prize={ lotteries[lottery].next.jackpot }
                                date={ lotteries[lottery] }
                                setActiveLottery={ slideClick }
                            />
                        )
                    })
                    }
                </Slider>
            )}
        </>
    );
}
)