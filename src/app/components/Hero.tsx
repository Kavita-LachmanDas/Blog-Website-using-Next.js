// import Image from 'next/image'
// import React from 'react'

// export default function Hero() {
//   return (
//     <div>
//         <div className="flex h-[500px] w-[100vw]">
//         <Image src="/img1.webp" 
//        alt='hello' width={420} height={300}/>
//        <Image src="/img2.webp" 
//        alt='hello' width={410} height={300}/>
//         <Image src="/img3.webp" 
//        alt='hello' width={450} height={300}/>
//         </div>

//        <div className="text relative left-[370px] bottom-6 ">
//         <h1 className='text-black font-serif font-bold text-[40px] bg-white  w-[500px] text-center '>My Life. My Blog.</h1>
//        </div>
//     </div>
//   )
// }
// import Image from 'next/image'
// import React from 'react'

// export default function Hero() {
//   return (
//     <div>
//         {/* Image container with responsive images */}
//         <div className="flex h-[500px] w-full overflow-hidden">
//           <div className="relative w-full h-full">
//             <Image src="/img1.webp" alt="hello" layout="fill" objectFit="cover" />
//           </div>
//           <div className="relative w-full h-full">
//             <Image src="/img2.webp" alt="hello" layout="fill" objectFit="cover" />
//           </div>
//           <div className="relative w-full h-full">
//             <Image src="/img3.webp" alt="hello" layout="fill" objectFit="cover" />
//           </div>
//         </div>

//         {/* Centering and making "My Life. My Blog." responsive */}
//         <div className="flex justify-center items-center absolute left-0 right-0 bottom-[0px]">
//           <h1 className="text-black font-serif font-bold text-[40px] sm:text-[30px] md:text-[35px] bg-white w-[500px] sm:w-[90%] md:w-[80%] text-center">
//             My Life. My Blog.
//           </h1>
//         </div>
//     </div>
//   )
// }

import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="relative">
      {/* Image container with responsive images */}
      <div className="flex h-[500px] w-full space-x-4">
        <div className="relative w-1/3 h-full">
          <Image src="/img1.webp" alt="hello" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-1/3 h-full">
          <Image src="/img2.webp" alt="hello" layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-1/3 h-full">
          <Image src="/img3.webp" alt="hello" layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* Centering and making "My Life. My Blog." responsive */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center items-center">
        <h1 className="text-black font-serif font-bold text-[35px] sm:text-[25px] md:text-[30px] bg-white w-[500px] sm:w-[90%] md:w-[80%] text-center">
          My Life. My Blog.
        </h1>
      </div>
    </div>
  )
}
