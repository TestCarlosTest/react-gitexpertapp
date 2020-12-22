import React, { useState, useEffect } from "react";
import { GifGriedItem } from "./GifGriedItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map(img => (
          <GifGriedItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
