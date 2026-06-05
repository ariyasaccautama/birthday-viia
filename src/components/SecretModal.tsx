"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

const target = {
  x: 4,
  y: 4,
};

const walls = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 3, y: 1 },
  { x: 3, y: 2 },
];

type Props = {
  mazeComplete: boolean;
  setMazeComplete: (
    value: boolean
  ) => void;

  loveComplete: boolean;
  setLoveComplete: (
    value: boolean
  ) => void;

  noSize: number;
  setNoSize: (
    value: number
  ) => void;
};

export default function SecretModal({
  mazeComplete,
  setMazeComplete,
  loveComplete,
  setLoveComplete,
  noSize,
  setNoSize,
}: Props) {
  const [player, setPlayer] =
    useState({
      x: 0,
      y: 0,
    });

  const [noPos, setNoPos] =
    useState({
      x: 0,
      y: 0,
    });

  const [hearts, setHearts] =
    useState([
      { x: 2, y: 0 },
      { x: 2, y: 2 },
      { x: 4, y: 3 },
    ]);

  const movePlayer = (
    direction:
      | "up"
      | "down"
      | "left"
      | "right"
  ) => {

    if (mazeComplete) return;

    setPlayer((prev) => {
      let x = prev.x;
      let y = prev.y;

      if (direction === "up")
        y--;

      if (direction === "down")
        y++;

      if (direction === "left")
        x--;

      if (direction === "right")
        x++;

      x = Math.max(
        0,
        Math.min(4, x)
      );

      y = Math.max(
        0,
        Math.min(4, y)
      );

      const hitWall =
        walls.some(
          (wall) =>
            wall.x === x &&
            wall.y === y
        );

      if (hitWall) {
        return prev;
      }

      const remainingHearts =
        hearts.filter(
          (heart) =>
            !(
              heart.x === x &&
              heart.y === y
            )
        );

      if (
        remainingHearts.length !==
        hearts.length
      ) {
        setHearts(
          remainingHearts
        );
      }

      if (
        x === target.x &&
        y === target.y &&
        remainingHearts.length === 0
        ) {
        setTimeout(() => {
            setMazeComplete(true);
        }, 0);
        }

      return { x, y };
    });
  };

    const launchConfetti = () => {
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 },
        });
    };

    useEffect(() => {
        if (loveComplete) {
            launchConfetti();
        }
    }, [loveComplete]);

  return (
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
        relative
        bg-white
        text-black
        rounded-xl
        p-6
        w-full
        max-w-2xl
        min-h-[500px]
        max-h-[90vh]
        overflow-auto
        "
      >

        {/* CLOSE */}
        <button
          onClick={() =>
            window.location.reload()
          }
          className="
          absolute
          top-3
          right-4
          text-2xl
          font-bold
          text-black
          "
        >
          ✕
        </button>

        {/* MAZE */}
        {!mazeComplete && (
          <>
            <h2
              className="
              text-2xl
              font-bold
              mb-2
              "
            >
              💌 Secret Mission
            </h2>

            <p className="mb-4">
              Bantu Viia mencari
              Ariya dan kumpulkan ❤️
            </p>

            <div
              className="
              grid
              grid-cols-5
              gap-2
              justify-center
              "
            >
              {[...Array(25)].map(
                (_, i) => {

                  const x = i % 5;
                  const y =
                    Math.floor(i / 5);

                  const isPlayer =
                    player.x === x &&
                    player.y === y;

                  const isTarget =
                    x === target.x &&
                    y === target.y;

                  const isHeart =
                    hearts.some(
                      (heart) =>
                        heart.x === x &&
                        heart.y === y
                    );

                  const isWall =
                    walls.some(
                      (wall) =>
                        wall.x === x &&
                        wall.y === y
                    );

                  return (
                    <div
                      key={i}
                      className="
                      w-14
                      h-14
                      border
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      bg-white
                      "
                    >
                      {isWall && (
                        <div
                          className="
                          w-full
                          h-full
                          bg-zinc-700
                          "
                        />
                      )}

                      {!isWall &&
                        isHeart && (
                          <div className="text-xl">
                            ❤️
                          </div>
                        )}

                      {!isWall &&
                        isTarget && (
                          <Image
                            src="/pixel/ariya.png"
                            alt="Ariya"
                            width={40}
                            height={40}
                          />
                        )}

                      {!isWall &&
                        isPlayer && (
                          <Image
                            src="/pixel/viia.png"
                            alt="Viia"
                            width={40}
                            height={40}
                          />
                        )}
                    </div>
                  );
                }
              )}
            </div>

            {/* MOBILE CONTROLS */}

            <div
              className="
              mt-6
              flex
              flex-col
              items-center
              "
            >
              <button
                onClick={() =>
                  movePlayer("up")
                }
                className="text-5xl"
              >
                ⬆️
              </button>

              <div
                className="
                flex
                gap-3
                "
              >
                <button
                  onClick={() =>
                    movePlayer("left")
                  }
                  className="text-5xl"
                >
                  ⬅️
                </button>

                <button
                  onClick={() =>
                    movePlayer("down")
                  }
                  className="text-5xl"
                >
                  ⬇️
                </button>

                <button
                  onClick={() =>
                    movePlayer("right")
                  }
                  className="text-5xl"
                >
                  ➡️
                </button>
              </div>
            </div>
          </>
        )}

        {/* LOVE QUESTION */}

        {mazeComplete &&
          !loveComplete && (
            <>
              <h2
                className="
                text-4xl
                text-center
                "
              >
                ❤️
              </h2>

              <p
                className="
                text-center
                mt-4
                text-lg
                "
              >
                Kamu sayang aku ga?
              </p>

              <div
                className="
                relative
                flex
                justify-center
                items-center
                gap-6
                mt-10
                h-[300px]
                overflow-hidden
                "
              >
                <button
                  onClick={() =>
                    setLoveComplete(
                      true
                    )
                  }
                  className="
                  bg-pink-500
                  text-white
                  px-5
                  py-2
                  rounded
                  "
                >
                  Sayang ❤️
                </button>

                <button
                  onClick={() => {

                    setNoSize(
                      noSize * 0.8
                    );

                    setNoPos({
                      x:
                        Math.random() *
                          200 -
                        100,
                      y:
                        Math.random() *
                          140 -
                        70,
                    });

                  }}
                  style={{
                    transform:
                      `scale(${noSize})`,
                    position:
                      "relative",
                    left: noPos.x,
                    top: noPos.y,
                  }}
                  className="
                  bg-zinc-400
                  text-white
                  px-5
                  py-2
                  rounded
                  "
                >
                  Ga Sayang
                </button>
              </div>
            </>
          )}

        {/* ENDING */}

        {loveComplete && (
          <div
            className="
            text-center
            "
          >
            <div
              className="
              text-7xl
              mb-4
              "
            >
              🏆
            </div>

            <h2
              className="
              text-3xl
              font-bold
              "
            >
              Achievement
              Unlocked
            </h2>

            <h3
              className="
              text-xl
              mt-2
              "
            >
              ❤️ Soulmate
            </h3>

            <p className="mt-6">
              Terima kasih sudah
              menjadi bagian hidup aku.
            </p>

            <h2
              className="
              text-3xl
              font-bold
              mt-8
              "
            >
              Sekali lagi, Happy Birthday
              Sayang ❤️
            </h2>
          </div>
        )}

      </div>
    </div>
  );
}