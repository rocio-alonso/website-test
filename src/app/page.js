"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import Gallery from "./components/lib/Gallery/Gallery";

const page = () => {
  return (
    <div className="hero">
      <CldImage
        src="bollini-2023/ucsijhy1cqs3hcew6rqe"
        width="500"
        height="500"
        alt="image"
        crop="fill"
      />

      <Gallery></Gallery>
    </div>
  );
};

export default page;
