"use client";

import React from "react";
import { Table } from "./table";

export const Animetable = ({Airing1, Airing2, isManga}) => {

  if (!Airing1 || !Airing2) return <div>Loading ...</div>;

  return (
    <div className="flex justify-between items-center w-[95%] py-[40px]">
      <div className="w-[49%] flex flex-col border border-zinc-500/50 bg-zinc-800/30 rounded-xl gap-5 p-[20px]">
      <Table data={Airing1} name={"Latest"} isManga={isManga}/>
      </div>
      <div className="w-[49%] flex flex-col border border-zinc-500/50 bg-zinc-800/30 rounded-xl gap-5 p-[20px]">
      <Table data={Airing2} name={"Favourite"} isManga={isManga}/>
      </div>
    </div>
  );
};
