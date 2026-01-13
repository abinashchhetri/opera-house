"use client";

import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  subTitle: string;
  slug: string;
}

export function ServiceCard({
  image,
  title,
  subTitle,
  slug,
}: ServiceCardProps) {
  return (
    <Link
      href={slug}
      className="flex flex-col items-center border border-[#E0E0E0] hover:border-[#2989d8] shadow-[0_4px_12px_rgba(0,0,0,0.05),0_-4px_12px_rgba(0,0,0,0.05)] bg-white p-4 sm:p-6 rounded-[20px] transition-all duration-300 cursor-pointer min-w-[280px] w-full h-auto min-h-[387px] gap-4 sm:min-h-[387px] flex-1"
      id={`all-service-card-${slug}`}
    >
      {/* Image */}
      <div className="w-full h-48 sm:h-52 rounded-[13px] overflow-hidden relative">
        {image ? (
          <img
            src={image}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center">
            <div className="text-[#343a40] text-sm">No Image</div>
          </div>
        )}
      </div>
      {/* Title */}
      <h6 className="text-[#0D1B2A] hover:underline font-bold text-lg sm:text-xl md:text-[22px] truncate line-clamp-1 w-full text-left border-b border-[#2989d8] py-2 sm:py-3 hover:text-[#1e5799] transition-colors">
        {title}
      </h6>
      {/* Description */}
      <p className="text-[#4B5563] text-sm sm:text-base line-clamp-2 truncate text-wrap w-full text-left">
        {subTitle}
      </p>
      {/* Link */}
      <div className="group w-full flex items-center justify-start text-sm sm:text-base relative">
        <span className="relative text-[#2989d8]">
          Learn More
          {/* Hover underline animation directly under the text */}
          <span className="absolute bottom-0 left-0 h-[2px] bg-[#2989d8] w-0 group-hover:w-full transition-all duration-300 sm:block hidden"></span>
        </span>

        <svg
          className="ml-2 w-5 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1 text-[#2989d8]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
