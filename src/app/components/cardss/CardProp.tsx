// import React from 'react'
// import Card from './Card'

// export default function CardProp() {
//   return (
//     <div>
//         <div className="card flex ">
//         <Card image='/cardimg1.webp' description='Transform Your Winter bllues into Winter Creativity'/>
//         <Card image='/cardimg2.webp' description='5 Reasons to Wakeup at 5am' />
//         <Card image='/cardimg3.webp' description='5 Reasons to Wakeup at 5am' /> 
 
       
//         <Card image='/cardimg4.webp' description='5 Reasons to Wakeup at 5am' />
//       <Card image='/cardimg5.webp' description='5 Reasons to Wakeup at 5am' />
//       <Card image='/cardimg7.webp' description='5 Reasons to Wakeup at 5am' />

//       <Card image='/cardimg6.webp' description='5 Reasons to Wakeup at 5am' />
//       <Card image='/cardimg8.gif' description='5 Reasons to Wakeup at 5am' />
//       <Card image='/cardimg9.webp' description='5 Reasons to Wakeup at 5am' />
//         </div>
//     </div>
//   )
// }










// 'use client'
// import React from 'react';

// import Link from 'next/link';
// import Card from './Card';


// export default function CardProp() {
//   return (
//     <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-100">
//      <Link href="./employee/card1">  <Card image="/cardimg1.webp" description="Transform Your Winter Blues into Winter Creativity" /></Link>
//     <Link href="./employee/card2"> <Card image="/cardimg2.webp" description="5 Reasons to Wake Up at 5am" /></Link>
//     <Link href="./employee/card3"> <Card image="/cardimg3.webp" description="How Decluttering Changed My Life" /></Link>
//     <Link href="./employee/card4">  <Card image="/cardimg4.webp" description="The Things We Carry, and What We Can Let Go Of" /></Link>
//     <Link href="./employee/card5">  <Card image="/cardimg5.webp" description="When Expecting, Expect the Unexpected" /></Link>
//      <Link href="./employee/card6">  <Card image="/cardimg6.webp" description="Surprising Discoveries During Walking Tours" /></Link>
//       <Link href="./employee/card7">  <Card image="/cardimg7.webp" description="Join the Re-Commerce Revolution" /></Link>
//       <Link href="./employee/card8">  <Card image="/cardimg8.gif" description="Starting Fresh: New Year Resolutions" /></Link>
//       <Link href="./employee/card9">  <Card image="/cardimg9.webp" description="Top Street Markets in the Middle East" /></Link> 
    
    
     
    
//     </div>
//   );
// }




'use client';
import React from 'react';
import Link from 'next/link';
import Card from './Card';
import Cards1Data from '@/app/components/pass/Card1Data';

export default function CardProp() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-100">
      {Cards1Data.map((card) => (
        <Link key={card.id} href={`/employee/${card.id}`}>
          <Card image={card.image} description={card.description} />
        </Link>
      ))}
    </div>
  );
}
