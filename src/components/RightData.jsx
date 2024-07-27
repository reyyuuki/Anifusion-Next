"use client";

import React from "react";
import { Table } from "./table";

export const RightData = ({ data }) => {
  if (!data) return <div>Loading ...</div>;
  return (
    <div className="flex flex-col w-[23%]">
      {data.relatedAnimes && (
        <div className="flex flex-col gap-2 p-[10px] bg-zinc-800/50  ">
          <h1 className="text-[25px] font-semibold">Related Anime</h1>
          <div className="overflow-y-scroll ScrollWidth max-h-[300px] flex flex-col gap-2">
          <Table data={data.relatedAnimes} className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};
