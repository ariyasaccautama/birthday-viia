"use client";

import Image from "next/image";

type Props = {
  isWalking: boolean;
};

export default function Character({
  isWalking,
}: Props) {
  return (
    <div
      className="
      fixed
      bottom-[58px]
      left-[120px]
      z-50
      "
    >
      <div
          className={`
          relative
          flex
          flex-col
          items-center
          ${isWalking ? "animate-bob" : ""}
          `}
      >
        {/* HEAD */}
        <Image
          src="/pixel/viia.png"
          alt="Viia"
          width={70}
          height={70}
          className="
          rounded-full
          border-4
          border-white
          "
        />

        {/* BODY */}
        <div
          className="
          relative
          w-12
          h-16
          bg-pink-500
          rounded-t-lg
          "
        >

          {/* LEFT ARM */}
          <div
            className={`
            absolute
            top-2
            -left-2
            w-2
            h-10
            bg-pink-400
            origin-top
            ${isWalking ? "animate-arm-left" : ""}
            `}
          />

          {/* RIGHT ARM */}
          <div
            className={`
            absolute
            top-2
            -right-2
            w-2
            h-10
            bg-pink-400
            origin-top
            ${isWalking ? "animate-arm-right" : ""}
            `}
          />
        </div>

        {/* LEGS */}
        <div className="relative flex gap-2">
          <div
            className={`
            w-2
            h-8
            bg-zinc-800
            origin-top
            ${isWalking ? "animate-leg-left" : ""}
            `}
          />

          <div
            className={`
            w-2
            h-8
            bg-zinc-800
            origin-top
            ${isWalking ? "animate-leg-right" : ""}
            `}
          />
        </div>
      </div>
    </div>
  );
}