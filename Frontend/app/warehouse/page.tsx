
import Cards from "@/components/warehouse/Dashboard/Cards";
import Chart from "@/components/warehouse/Dashboard/Chart";
import { SideBar } from "@/components/warehouse/SideBar";
import React from "react";

const Page = () => {
  return <>
    <SideBar />

    <div className="sm:ml-72 mx-16 my-12">
        <Cards />

        <div className="my-20 flex justify-between gap-5 mx-20">
              <Chart />
        </div>
    </div>
  </>;
};

export default Page;