"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { CldVideoPlayer } from "next-cloudinary";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/drive");
        setImages(response.data); // Our API returns an array of public_id
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data); // Our API returns an array of public_id
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchImages();
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.length > 0 ? (
        images.map((public_id) => (
          <CldImage
            key={public_id}
            src={public_id}
            width="300"
            height="300"
            alt="Gallery Image"
            crop="fill"
          />
        ))
      ) : (
        <p>Loading images...</p>
      )}

      {videos.length > 0 ? (
        videos.map((public_id) => (
          <video
              width="600"
              height="400"
              autoPlay
              muted
              loop
              controls={false} // Removes video controls
              key={public_id}
            >
              <source
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${public_id}.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default Gallery;
