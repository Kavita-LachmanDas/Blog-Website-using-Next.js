'use client';
import Image from 'next/image';

interface CardProps {
  image: string; // URL of the image
  description: string; // Description text
}
export default function Card({ image, description }: CardProps) {
  return (
    <div className="overflow-x-hidden flex flex-col w-[300px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <Image className="w-full h-56 object-cover" src={image} alt="hii" width={300} height={200}  />
      <div className="p-4">
        <h1 className="font-bold text-lg mb-2">{description}</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio reiciendis earum rerum quidem
          exercitationem enim dolor et tenetur totam expedita error voluptatem veniam fugiat sed assumenda,
          reprehenderit voluptatibus nisi.
        </p>
      </div>
    </div>
  );
}
