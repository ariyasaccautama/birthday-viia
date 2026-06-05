"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import Character from "./Character";
import SecretModal from "./SecretModal";

export default function World() {
  const [worldOffset, setWorldOffset] = useState(0);

  const [isWalking, setIsWalking] = useState(false);

  const [showIntro, setShowIntro] =
  useState(true);

  const [music, setMusic] =
    useState<HTMLAudioElement | null>(
      null
    );

  const [mazeComplete, setMazeComplete] =
    useState(false);

  const [loveComplete, setLoveComplete] =
    useState(false);

  const [noSize, setNoSize] =
    useState(1);
    
  const [openModal, setOpenModal] =
  useState<string | null>(null);

  const [activeSpot, setActiveSpot] =
  useState<string | null>(null);
 
  const WORLD_WIDTH = 3000;

  useEffect(() => {
  let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        window.scrollY / maxScroll;

      setWorldOffset(
        progress *
          (WORLD_WIDTH - window.innerWidth)
      );

      const currentPos =
        progress *
        (WORLD_WIDTH - window.innerWidth);

      if (
        currentPos > 250 &&
        currentPos < 450
      ) {
        setActiveSpot("home");
      } else if (
        currentPos > 750 &&
        currentPos < 900
      ) {
        setActiveSpot("date");
      } else if (
        currentPos > 1200 &&
        currentPos < 1350
      ) {
        setActiveSpot("trip");
      } else if (
        currentPos > 1550 &&
        currentPos < 1700
      ) {
        setActiveSpot("cake");
      } else if (
        currentPos > 1950 &&
        currentPos < 2100
      ) {
        setActiveSpot("letter");
      } else {
        setActiveSpot(null);
      }

      setIsWalking(true);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsWalking(false);
      }, 150);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const launchConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: {
        y: 0.6,
      },
    });
  };

  if (showIntro) {
    return (
      <div
        className="
        fixed
        inset-0
        bg-slate-900
        flex
        items-center
        justify-center
        p-6
        z-[9999]
        "
      >
        <div
          className="
          bg-white
          text-black
          rounded-xl
          p-6
          max-w-md
          text-center
          "
        >
          <h1
            className="
            text-2xl
            font-bold
            mb-4
            "
          >
            🎂 Happy Birthday
            Sayang ❤️
          </h1>

          <p className="mb-4">
            Selamat datang di
            Birthday Adventure ✨
          </p>

          <div className="text-left">
            <p>
              📜 Cara Bermain:
            </p>

            <p>
              • Swipe ke bawah buat jalan
            </p>

            <p>
              • Kalo muncul OPEN,
              klik gambarnya
            </p>

          </div>

          <button
            onClick={() => {

              const bgm =
                new Audio(
                  "/music/Adventure.mp3"
                );

              bgm.loop = true;
              bgm.volume = 0.5;

              bgm.play();

              setMusic(bgm);

              setShowIntro(false);
            }}

            className="
            mt-6
            bg-pink-500
            text-white
            px-6
            py-3
            rounded-lg
            "
          >
            OK ❤️
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="relative">
      <div className="h-[1200vh]">
        <div className="fixed inset-0 overflow-hidden">

          {/* SKY */}
          <div className="absolute inset-0 bg-sky-300" />

                      {/* TITLE */}
            <h1
              className="
                absolute
                top-6
                left-1/2
                -translate-x-1/2
                text-center
                text-white
                text-sm
                md:text-6xl
                game-shadow
                z-50
                pointer-events-none
              "
            >
              Welcome To
              <br />
              VIIA&apos;s Birthday Adventure
            </h1>

          {/* WORLD */}
          <div
            style={{
              width: `${WORLD_WIDTH}px`,
              transform: `translateX(-${worldOffset}px)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="absolute inset-y-0"
          >

            {/* CLOUDS */}
            <div className="absolute top-20 left-[300px]">
              <Image
                src="/pixel/cloud.png"
                alt="cloud"
                width={120}
                height={80}
                className="pixelated"
              />
            </div>

            <div className="absolute top-28 left-[1600px]">
              <Image
                src="/pixel/cloud.png"
                alt="cloud"
                width={120}
                height={80}
                className="pixelated"
              />
            </div>

            {/* BIRDS */}

            <div
              className="
              absolute
              top-24
              left-[200px]
              animate-bird-1
              "
            >
              🦅
            </div>

            <div
              className="
              absolute
              top-36
              left-[1200px]
              animate-bird-2
              "
            >
              🦇
            </div>

            <div
              className="
              absolute
              top-28
              left-[2200px]
              animate-bird-3
              "
            >
              🦅
            </div>

            {/* BIRDS */}

            <div
              className="
              absolute
              top-24
              left-[200px]
              animate-bird-1
              "
            >
              🦇
            </div>

            <div
              className="
              absolute
              top-36
              left-[1200px]
              animate-bird-2
              "
            >
              🕊️
            </div>

            <div
              className="
              absolute
              top-28
              left-[2200px]
              animate-bird-3
              "
            >
              🕊️
            </div>

            {/* ================= HOME ================= */}

            <div className="absolute bottom-[70px] left-[220px]">
              <Image
                src="/pixel/tree2.png"
                alt="tree"
                width={140}
                height={140}
                className="pixelated"
              />
            </div>

            
            {activeSpot === "home" && (
              <div
                className="
                absolute
                bottom-[250px]
                left-[420px]
                text-4xl
                animate-bounce
                z-50
                "
              >
                ❤️ OPEN
              </div>
            )}

            <div 
              onClick={() => {
                if (activeSpot === "home") {
                  setOpenModal("home");
                }
              }}
              className={`absolute bottom-[70px] left-[420px]
              ${
                activeSpot === "home"
                  ? "animate-pulse scale-110"
                  : ""
              }
            `}>

              <Image
                src="/pixel/house2.png"
                alt="house"
                width={180}
                height={180}
                className="pixelated"
              />
            </div>

            <div
              className="
              absolute
              bottom-[200px]
              left-[450px]
              text-white
              text-sm
              game-shadow
              "
            >
              🏡 Home
            </div>

            {/* ================= FIRST DATE ================= */}

            <div className="absolute bottom-[70px] left-[700px]">
              <Image
                src="/pixel/tree2.png"
                alt="tree"
                width={140}
                height={140}
                className="pixelated"
              />
            </div>

            {activeSpot === "date" && (
              <div
                className="
                absolute
                bottom-[250px]
                left-[900px]
                text-4xl
                animate-bounce
                z-50
                "
              >
                ❤️ OPEN
              </div>
            )}

            <div onClick={() => {
                if (activeSpot === "date") {
                  setOpenModal("date");
                }
              }}className={`absolute bottom-[50px] left-[900px]
            ${
              activeSpot === "date"
                ? "animate-pulse scale-110"
                : ""
            }
            `}>

              <Image
                src="/pixel/memory.png"
                alt="memory"
                width={120}
                height={120}
                className="pixelated"
              />
            </div>

            <div
              className="
              absolute
              bottom-[170px]
              left-[920px]
              text-white
              text-sm
              game-shadow
              "
            >
              📸 First Date
            </div>

            {/* ================= FIRST TRIP ================= */}

            <div className="absolute bottom-[70px] left-[1150px]">
              <Image
                src="/pixel/tree2.png"
                alt="tree"
                width={140}
                height={140}
                className="pixelated"
              />
            </div>

            {activeSpot === "trip" && (
                <div
                  className="
                  absolute
                  bottom-[250px]
                  left-[1350px]
                  text-4xl
                  animate-bounce
                  z-50
                  "
                >
                  ❤️ OPEN
                </div>
              )}

            <div onClick={() => {

                    if (activeSpot === "trip") {

                      music?.pause();

                      setOpenModal("trip");

                    }

                  }}className={`absolute bottom-[50px] left-[1350px]
            ${
              activeSpot === "trip"
                ? "animate-pulse scale-110"
                : ""
            }
            `}>

              <Image
                src="/pixel/memory.png"
                alt="memory"
                width={120}
                height={120}
                className="pixelated"
              />
            </div>

            <div
              className="
              absolute
              bottom-[170px]
              left-[1360px]
              text-white
              text-sm
              game-shadow
              "
            >
              🌸 First Trip
            </div>

            {/* ================= BIRTHDAY CAKE ================= */}

            {activeSpot === "cake" && (
            <div
              className="
              absolute
              bottom-[250px]
              left-[1700px]
              text-4xl
              animate-bounce
              z-50
              "
            >
              ❤️ OPEN
            </div>
          )}

            <div onClick={() => {
                  if (activeSpot === "cake") {

                    music?.pause();

                    const cakeMusic =
                      new Audio(
                        "/music/Cake.mp3"
                      );

                    cakeMusic.loop = true;
                    cakeMusic.volume = 0.5;

                    cakeMusic.play();

                    setMusic(cakeMusic);

                    launchConfetti();

                    setOpenModal("cake");
                  }
                }}className={`absolute bottom-[65px] left-[1700px]
            ${
              activeSpot === "cake"
                ? "animate-pulse scale-110"
                : ""
            }
            `}>

              <Image
                src="/pixel/cake.png"
                alt="cake"
                width={150}
                height={150}
                className="pixelated"
              />
            </div>

            <div
              className="
              absolute
              bottom-[210px]
              left-[1710px]
              text-white
              text-sm
              game-shadow
              "
            >
              🎂 Birthday Cake
            </div>

            {/* ================= SECRET ================= */}

            {activeSpot === "letter" && (
                <div
                  className="
                  absolute
                  bottom-[250px]
                  left-[2100px]
                  text-4xl
                  animate-bounce
                  z-50
                  "
                >
                  ❤️ OPEN
                </div>
              )}

            <div onClick={() => {
                  if (activeSpot === "letter") {

                    music?.pause();

                    const secretMusic =
                      new Audio(
                        "/music/Secret.mp3"
                      );

                    secretMusic.loop = true;
                    secretMusic.volume = 0.5;

                    secretMusic.play();

                    setMusic(secretMusic);

                    setOpenModal("secret");
                  }
                }}className={`absolute bottom-[60px] left-[2100px]
            ${
              activeSpot === "letter"
                ? "animate-pulse scale-110"
                : ""
            }
            `}>

              <Image
                src="/pixel/memory.png"
                alt="letter"
                width={120}
                height={120}
                className="pixelated"
              />
            </div>

            <div
              className="
              absolute
              bottom-[170px]
              left-[2100px]
              text-white
              text-sm
              game-shadow
              "
            >
              💌 Secret
            </div>

            {/* ================= END ================= */}

            <div
              className="
              absolute
              bottom-[170px]
              left-[2380px]
              text-white
              text-xl
              md:text-3xl
              game-shadow
              "
            >
              ✨ Happy Birthday Sayangku, I❤️U & Sayang kamu banyak-banyak❤️
            </div>

          </div>

          {openModal === "home" && (
          <div
            className="
            fixed
            inset-0
            bg-black/70
            z-[999]
            flex
            items-center
            justify-center
            p-6
            "
          >
            <div
              className="
              bg-white
              rounded-xl
              max-w-md
              w-full
              p-6
              relative
              "
            >

              <button
                onClick={() =>
                  setOpenModal(null)
                }
                className="
                text-black
                absolute
                top-3
                right-3
                text-xl
                "
              >
                ✖
              </button>

              <h2
                className="
                text-black
                text-2xl
                font-bold
                mb-4
                "
              >
                🏡 Welcome Home
              </h2>

              <p className="
                text-black">
                Welcome to VIIA&apos;s Birthday
                Adventure.
              </p>

              <p className="mt-4 text-black">
                Scroll to explore our story
                together ❤️
              </p>

            </div>
          </div>
        )}

        {openModal === "date" && (
        <div
          className="
          fixed
          inset-0
          bg-black/80
          z-[999]
          flex
          items-center
          justify-center
          p-4
          "
        >
          <div
            className="
            bg-white
            text-black
            rounded-xl
            max-w-md
            w-full
            p-5
            relative
            "
          >

            <button
              onClick={() =>
                setOpenModal(null)
              }
              className="
              absolute
              top-3
              right-3
              text-xl
              "
            >
              ✖
            </button>

            <h2
              className="
              text-2xl
              font-bold
              mb-4
              "
            >
              📸 First Date
            </h2>

            <Image
              src="/photos/date1.png"
              alt="First Date"
              width={500}
              height={300}
              className="
              rounded-lg
              mb-4
              w-full
              h-auto
              "
            />

            <p className="leading-relaxed">
              This was one of my favorite
              moments with you.
            </p>

            <p className="leading-relaxed mt-3">
              I still remember how excited
              I was before meeting you,
              and how quickly the time
              passed when we were together.
            </p>

            <p className="leading-relaxed mt-3">
              Thank you for making
              ordinary days feel special ❤️
            </p>

          </div>
        </div>
      )}

      {openModal === "trip" && (
        <div
          className="
          fixed
          inset-0
          bg-black/80
          z-[999]
          flex
          items-center
          justify-center
          p-4
          "
        >
          <div
            className="
            bg-white
            text-black
            rounded-xl
            max-w-lg
            w-full
            p-5
            relative
            "
          >

            <button
              onClick={() => {

                setOpenModal(null);

                music?.pause();

                const bgm =
                  new Audio(
                    "/music/Adventure.mp3"
                  );

                bgm.loop = true;
                bgm.volume = 0.5;

                bgm.play();

                setMusic(bgm);

              }}
              className="
              absolute
              top-3
              right-3
              text-xl
              "
            >
              ✖
            </button>

            <h2
              className="
              text-2xl
              font-bold
              mb-4
              "
            >
              🌸 First Trip Together
            </h2>

            <video
              autoPlay
              playsInline
              controls
              className="
              w-full
              rounded-lg
              "
            >
              <source
                src="/videos/first-trip.mp4"
                type="video/mp4"
              />
            </video>

            <div className="space-y-2">

              <p className="mt-4">
                We got tired.
              </p>

              <p>
                We got hungry.
              </p>

              <p>
                We probably got lost at some point.
              </p>

              <p>
                But somehow...
              </p>

              <p>
                it became one of my favorite days ❤️
              </p>

            </div>

          </div>
        </div>
      )}

      {openModal === "cake" && (
        <div
          className="
          fixed
          inset-0
          bg-black/80
          z-[999]
          flex
          items-center
          justify-center
          p-4
          "
        >
          <div
            className="
            bg-white
            text-black
            rounded-xl
            max-w-md
            w-full
            p-6
            relative
            text-center
            "
          >

            <button
              onClick={() => {

                music?.pause();

                const bgm =
                  new Audio(
                    "/music/Adventure.mp3"
                  );

                bgm.loop = true;
                bgm.volume = 0.5;

                bgm.play();

                setMusic(bgm);

                setOpenModal(null);

                }}
              className="
              absolute
              top-3
              right-3
              text-xl
              "
            >
              ✖
            </button>

            <div className="text-7xl mb-4">
              🎂
            </div>

            <h2
              className="
              text-3xl
              font-bold
              mb-4
              "
            >
              Happy Birthday Sayang ❤️
            </h2>

            <p className="mb-3">
              Wishing you happiness,
              health, and lots of love.
            </p>

            <p className="mb-3">
              Thank you for being part
              of my life.
            </p>

            <p className="font-bold">
              Enjoy your special day ✨
            </p>

          </div>
        </div>
      )}

      {openModal === "secret" && (
        <SecretModal

          closeModal={() => {

            setOpenModal(null);

            music?.pause();

            const bgm =
              new Audio(
                "/music/Adventure.mp3"
              );

            bgm.loop = true;
            bgm.volume = 0.5;

            bgm.play();

            setMusic(bgm);
          }}

          mazeComplete={mazeComplete}
          setMazeComplete={setMazeComplete}
          loveComplete={loveComplete}
          setLoveComplete={setLoveComplete}
          noSize={noSize}
          setNoSize={setNoSize}
        />
      )}

          {/* ROAD */}
          <div
            className="
            absolute
            bottom-[64px]
            w-full
            h-3
            md:h-5
            bg-amber-700
            "
          />

          {/* CHARACTER */}
          <Character isWalking={isWalking} />

           <div
              className="
              absolute
              bottom-0
              w-full
              h-16
              md:h-20
              pixelated
              "
              style={{
                backgroundImage:
                  "url('/pixel/grass.png')",
                backgroundRepeat:
                  "repeat",
                backgroundSize:
                  "120px auto",
              }}
            />

        </div>
      </div>
    </main>
  );
}