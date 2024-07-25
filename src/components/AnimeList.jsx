"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const AnimeList = ({ data, name }) => {
  if (!data) return <div>Loading ...</div>;
  return (
    <>
      <div className="w-full h-[40px] pt-1 px-[10px] ">
        <h1 className=" text-[30px] px-[10px] font-bold border-l-[5px] border-zinc-500 rounded-[5px]">
          {name}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full p-[20px] h-[450px]  border border-zinc-500/50 bg-zinc-800/30 rounded-xl gap-3">
        <div className="flex w-full h-[450px]">
          <Swiper spaceBetween={30} slidesPerView={5}>
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={`/home/${item.id}`}>
                <div className="flex flex-col justify-center items-center h-[450px] gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className=" h-[300px] object-cover rounded-xl border border-zinc-500/50"
                  />
                  <div>
                    <h1 className="text-[18px] font-semibold w-full">
                      {item.title.english.length > 25
                        ? item.title.english.substring(0, 22) + "..."
                        : item.title.english}
                    </h1>
                    <div className="text-[12px]">
                      {item.description
                        ? item.description.length > 100
                          ? item.description
                              .replace(/<\/?[^>]+(>|$)/g, "")
                              .substring(0, 100) + "..."
                          : item.description.replace(/<\/?[^>]+(>|$)/g, "")
                        : "N/A"}
                    </div>
                    <div className="flex w-full justify-between">
                      <p>
                      {(() => {
                        let count = item.rating;
                        let stars = [];

                        for (let i = 0; i < 5; i++) {
                          if (count >= 20) {
                            stars.push(
                              <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                            );
                            count = count - 20; 
                          } else if (count < 20 && count >= 1) {
                            stars.push(
                              <FontAwesomeIcon
                                key={i}
                                icon={faStarHalfStroke}
                                className="text-yellow-400"
                              />
                            );
                            count = 0;
                          }
                        }

                        return stars;
                      })()}
                      </p>
                      <p className="font-semibold italic text-gray-500">
                     {"~"} {item.rating/10/2}
                      </p>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
