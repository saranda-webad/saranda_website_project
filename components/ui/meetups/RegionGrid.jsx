"use client";

import { useState } from "react";
import RegionCard from "./RegionCard";

// Import region-specific images
import patnaImg from "@/public/images/regions/patna.png";
import chennaiImg from "@/public/images/regions/chennai.png";
import mumbaiImg from "@/public/images/regions/mumbai.png";
import chandigarhImg from "@/public/images/regions/chandigarh.png";
import kolkataImg from "@/public/images/regions/kolkata.png";
import lucknowImg from "@/public/images/regions/lucknow.png";
import hyderabadImg from "@/public/images/regions/hyderabad.png";
import delhiImg from "@/public/images/regions/delhi.png";
import bengaluruImg from "@/public/images/regions/bengaluru.png";

// Region data with specific images
const regions = [
  { name: "patna", image: patnaImg },
  { name: "chennai", image: chennaiImg },
  { name: "mumbai", image: mumbaiImg },
  { name: "chandigarh", image: chandigarhImg },
  { name: "kolkata", image: kolkataImg },
  { name: "lucknow", image: lucknowImg },
  { name: "hyderabad", image: hyderabadImg },
  { name: "delhi", image: delhiImg },
  { name: "bengaluru", image: bengaluruImg },
];

export default function RegionGrid() {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="w-9/10 max-w-[120ch] mx-auto">
      <h2 className="text-center text-primary mb-8">
        Explore Meetups by Region
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {regions.map((region, index) => (
          <RegionCard
            key={region.name}
            region={region.name}
            imageSrc={region.image}
            isLast={index === regions.length - 1}
            isHovered={hoveredRegion}
            onHover={setHoveredRegion}
            onLeave={() => setHoveredRegion(null)}
          />
        ))}
      </div>
    </div>
  );
}
