import Filters from "@/components/page/Filters";
import { Breadcrumb } from "antd";
import React from "react";

const Shirts = () => {
  return (
    <div className="md:px-20 px-5">
      <hr />
      <Breadcrumb
        separator=">"
        items={[{ title: "Shop" }, { title: "Shirts" }]}
        className="font-"
      />
      <div className="grid grid-flow-row-dense grid-cols-4">
        <section>
          <Filters />
        </section>
        <section className="col-span-3">
          <h1>Hello</h1>
        </section>
      </div>
    </div>
  );
};

export default Shirts;
