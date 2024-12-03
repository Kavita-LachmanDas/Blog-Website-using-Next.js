'use client';
import Image from 'next/image';
export default function Card(Props) {
  return (
    <div className="overflow-x-hidden flex flex-col w-[300px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <Image className="w-full h-56 object-cover" src={Props.image} alt="hii" width={300} height={200}  />
      <div className="p-4">
        <h1 className="font-bold text-lg mb-2">{Props.description}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio reiciendis earum rerum quidem
          exercitationem enim dolor et tenetur totam expedita error voluptatem veniam fugiat sed assumenda,
          reprehenderit voluptatibus nisi.
        </p>
      </div>
    </div>
  );
}
