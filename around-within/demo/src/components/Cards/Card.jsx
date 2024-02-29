import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Card = () => {
  const Data = [
    {
      imageFile: "../assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description: "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description: "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'

    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'

    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Lacus amet egestas ullamcorper fermentum",
      description:
        "Trauma, Anxiety, Depression, Life Transitions, Career Uncertainty, Relationship Challenges, Quarter-Life Crisis, Couples Therapy",
      startsFrom: '16 March'
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out"
  };

  return (
    <div className="h-[631px] w-[1436px] gap-[32px] pt-[32px]pb-[32px] m-auto">
        <p className="text-[28px] leading-[42px] w-[1124px] h-[42px] gap-[32px] pt-[32px] mb-[32px] m-auto">
          Upcoming Groups
        </p>
      <div className="w-[1124px] h-[600px] gap-[24px] pl-4 pr-[16px,] py-[12px,] m-auto">
        <Slider {...settings}>
          {Data.map((item) => (
            <div>
              <div className="rounded-t-xl flex flex-col justify-center items-center gap-[10px] p-4 mt-[32px]">
                <img src={item.imageFile} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl w-[316px] text-center leading-[25px] text-[#121014] pb-[20px]">
                  {item.heading}
                </p>
                <p className="w-[316px] h-[80px] leading-[20px] text-[#272529]">
                  {item.description}
                </p>
              </div>
              <div className="bg-[#F7F131] rounded-lg pl-2 pr-[8px,] py-[4px,] w-[129px] h-[28px] float-right translate-x-[-39px] translate-y-[-467px]">
                <p>Starts: {item.startsFrom}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
