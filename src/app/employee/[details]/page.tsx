


// import React from 'react';
// import { notFound } from 'next/navigation'; // For handling invalid IDs
// import Card1Data from '@/app/components/pass/Card1Data';
// import Image from 'next/image';
// import Link from 'next/link';
// import Contact from '@/app/components/Contact';

// interface Props {
//   params: {
//     details: string;
//   };
// }

// export default function DetailsPage({ params }: Props) {
//   const { details } = params;

//   // Find the matching card
//   const card = Card1Data.find((card) => card.id === details);

//   if (!card) {
//     notFound(); 
//   }

//   return (
//     <div>
//       <div className="p-[50px]">
//         <div className="content w-[700px] m-auto">
//           <h1 className="font-bold font-sans text-[40px]">{card.description}</h1>
//           <br />
//           <Image src={card.image} alt={card.description} height={400} width={500} />
//           <br />



//           <p className='text-gray-600 font-serif'>{card.details} </p> <br />
//           <h2 className='text-[20px] font--sans font-bold'> {card.heading1}
//           </h2>

//           <p className='border-l-2 text-gray-600 font-serif p-[20px]' style={{ borderColor: 'rgb(187, 90, 58)' }}> {card.description2}

//           </p>
//           <br />
//           <p className='text-gray-600 font-serif'>{card.description3}

//           </p> <br />
//           <h3 className='text-[20px] font--sans font-bold'>{card.heading2}</h3> <br />
//           <p className='text-gray-600 font-serif'>{card.description4}
//           </p> <br />
//           <h1 className='text-[20px] font-sans font-bold'>{card.heading3} </h1> <br />
//           <p className='border-l-2 text-gray-600 font-serif p-[20px] ' style={{ borderColor: 'rgb(187, 90, 58)' }}>{card.description5}</p> <br />

//           <p className='text-gray-600 font-serif'>            {card.description6}
//           </p> <br />
//           <h2 className='text-[20px] font--sans font-bold'>{card.heading4}</h2> <br />
//           <p className='text-gray-600 font-serif'>{card.description7}

//           </p>
//           <br />
//           <hr /> <br />
//           <Link href="#"> <p className='text-gray-900 font-serif text-center text-[30px]'> Visit my Profile </p></Link>
//           <br /><br />






//         </div>

//       </div>
//       <Contact />
//     </div>
//   )
// }

import React from 'react';
import { notFound } from 'next/navigation'; // For handling invalid IDs
import Card1Data from '@/app/components/pass/Card1Data';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/app/components/Contact';

interface Props {
  params: {
    details: string;
  };
}

export default function DetailsPage({ params }: Props) {
  const { details } = params;

  // Find the matching card
  const card = Card1Data.find((card) => card.id === details);

  if (!card) {
    notFound();
  }

  return (
    <div>
      <div className="p-4 sm:p-6 lg:p-10">
        <div className="content max-w-full lg:w-[700px] mx-auto">
          <h1 className="font-bold font-sans text-[30px] sm:text-[35px] lg:text-[40px]">{card.description}</h1>
          <br />
          <Image
            src={card.image}
            alt={card.description}
            className="w-full max-w-[500px] mx-auto"
            height={300}
            width={300}
          />
          <br />
          <p className="text-gray-600 font-serif text-[14px] sm:text-[16px] lg:text-[18px]">{card.details}</p>
          <br />
          <h2 className="text-[18px] sm:text-[20px] font-sans font-bold">{card.heading1}</h2>
          <p
            className="border-l-2 text-gray-600 font-serif p-4"
            style={{ borderColor: 'rgb(187, 90, 58)' }}
          >
            {card.description2}
          </p>
          <br />
          <p className="text-gray-600 font-serif text-[14px] sm:text-[16px] lg:text-[18px]">
            {card.description3}
          </p>
          <br />
          <h3 className="text-[18px] sm:text-[20px] font-sans font-bold">{card.heading2}</h3>
          <br />
          <p className="text-gray-600 font-serif text-[14px] sm:text-[16px] lg:text-[18px]">
            {card.description4}
          </p>
          <br />
          <h1 className="text-[18px] sm:text-[20px] font-sans font-bold">{card.heading3}</h1>
          <br />
          <p
            className="border-l-2 text-gray-600 font-serif p-4"
            style={{ borderColor: 'rgb(187, 90, 58)' }}
          >
            {card.description5}
          </p>
          <br />
          <p className="text-gray-600 font-serif text-[14px] sm:text-[16px] lg:text-[18px]">
            {card.description6}
          </p>
          <br />
          <h2 className="text-[18px] sm:text-[20px] font-sans font-bold">{card.heading4}</h2>
          <br />
          <p className="text-gray-600 font-serif text-[14px] sm:text-[16px] lg:text-[18px]">
            {card.description7}
          </p>
          <br />
          <hr />
          <br />
          <Link href="#">
            <p className="text-gray-900 font-serif text-center text-[20px] sm:text-[25px] lg:text-[30px]">
              Visit my Profile
            </p>
          </Link>
          <br />
          <br />
        </div>
      </div>
      <Contact />
    </div>
  );
}
