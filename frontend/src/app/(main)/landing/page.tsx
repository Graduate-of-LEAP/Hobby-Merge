"use client";

import Image from "next/image";
import { useEffect } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import anime from "animejs";

const Page = () => {
  useEffect(() => {
    anime({
      targets: ".duration-to-left .el",
      translateX: [200, 0],
      duration: 3000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".duration-to-bottom .el",
      translateY: [-200, 0],
      duration: 3000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".duration-to-right .el",
      translateX: [-200, 0],
      duration: 3000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".duration-to-top .el",
      translateY: [200, 0],
      duration: 3000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".fade-in .el",
      opacity: [0, 1],
      duration: 3000,
      easing: "easeOutQuad",
      delay: anime.stagger(300), // Adding staggered delay for fade-in effect
    });
    anime({
      targets: ".staggering-direction-demo .el",
      translateY: [600, 0],
      delay: anime.stagger(100, { direction: "reverse" }),
    });
  }, []);

  return (
    <div className="container m-auto">
      <nav className="flex justify-between items-center">
        <div className="relative w-[100px] h-[60px]">
          <Image src={`/weblogo.png`} alt="hi" fill />
        </div>
        <ul className="flex gap-12 font-medium cursor-pointer">
          <li>Homepage</li>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
        <button className="flex gap-2 items-center bg-[#57B569] px-4 text-white py-2 rounded-xl">
          <BiCategoryAlt />
          Get Started
        </button>
      </nav>
      <div className="flex py-24">
        <div className="flex-1 staggering-direction-demo overflow-hidden h-fit">
          <p className="text-[48px] font-semibold px-4 el duration-500 ">
            Hobby Merge бол хүмүүсийн сонирхлыг нэгтгэж, тэдэнд илүү их боломж
            олгох зорилготой,
          </p>
          <p className="px-4 el duration-500 ">
            олон төрлийн хобби болон сонирхлоороо хуваалцах, хамтдаа шинэ зүйлс
            суралцах боломжийг олгодог платформ юм.
          </p>
          <button className="flex gap-2 items-center bg-[#57B569] px-4 text-white py-2 rounded-xl mx-4 my-12 el duration-500  ">
            Our Solution
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="flex gap-2 dura">
            <div className="duration-to-right overflow-hidden duration-1000">
              <Image
                src={`/landing1.png`}
                alt="hi"
                height={240}
                width={280}
                className="object-cover el"
              />
            </div>
            <div className="duration-to-bottom overflow-hidden duration-1000">
              <Image
                src={`/landing5.png`}
                alt="hi"
                height={220}
                width={220}
                className="object-cover el"
              />
            </div>
          </div>
          <div className="absolute top-[152px] left-44 bg-gray-100 rounded-full fade-in duration-1000">
            <Image
              src={`/webLogo.png`}
              alt="hi"
              width={200}
              height={200}
              className="el "
            />
          </div>
          <div className="flex gap-2">
            <div className="duration-to-top overflow-hidden duration-1000">
              <Image
                src={`/landing4.png`}
                alt="hi"
                height={200}
                width={280}
                className="object-cover el "
              />
            </div>
            <div className="duration-to-left overflow-hidden duration-1000">
              <Image
                src={`/landing2.png`}
                alt="hi"
                height={270}
                width={380}
                className="object-cover el"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
