import Image from "next/image";

export default function SceneGallery() {
  return (
    <section className="panel w-screen h-screen bg-purple-100 flex flex-col items-center justify-center">

      <h2 className="text-5xl font-bold mb-10">
        Our Memories 📸
      </h2>

      <div className="flex gap-8">
        <Image
          src="/v1.jpg"
          width={250}
          height={250}
          alt=""
          className="rounded-xl"
        />

        <Image
          src="/v2.jpg"
          width={250}
          height={250}
          alt=""
          className="rounded-xl"
        />

        <Image
          src="/v3.jpg"
          width={250}
          height={250}
          alt=""
          className="rounded-xl"
        />
      </div>
    </section>
  );
}