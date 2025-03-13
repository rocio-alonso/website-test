"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Gallery from "./components/lib/Gallery/Gallery";

const page = () => {
  return (
    <section className="">
      <div className="hero bg-blue-700">
        <CldImage
          src="bollini-2023/ucsijhy1cqs3hcew6rqe"
          width="500"
          height="500"
          alt="image"
          crop="fill"
        />
      </div>
      <div className="hero bg-amber-50">
        <h1>test</h1>
        <Gallery></Gallery>
      </div>
    </section>
  );
};

export default page;
