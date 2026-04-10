// import Image from 'next/image'
// import React from 'react'
// import Button from './Button'

// const Home7 = () => {
//     return (
//         <div className='w-full h-full flex justify-center'
//             style={{
//                 padding: "clamp(1rem,5vw,200rem)"
//             }}
//         >
//             <div className="flex flex-col gap-10 items-center w-[100%] h-full">
//                 <div className="flex flex-col gap-2 w-full">
//                     <div className="text-[#FF0000] text-center xl:text-right text-xl inter font-medium w-full">
//                         Testimonials
//                     </div>
//                     <div className="text-xl w-full sm:text-5xl leading-snug xl:text-5xl pixel text-center xl:text-right text-[#8A3E1D]"
//                     >
//                         Sweet words from happy customers
//                     </div>
//                 </div>


//                 <div className="w-full max-w-7xl mx-auto px-4 md:px-6 2xl:px-8">
//                     <div className="w-[90%] justify-center flex flex-row flex-wrap 2xl:flex-row items-center gap-4 md:gap-6 2xl:gap-8 relative h-fit">

//                         <Image
//                             src="/c1.png"
//                             alt="home3"
//                             width={400}
//                             height={400}
//                             className='w-full 2xl:w-[35%] relative z-20 shadow-2xl shadow-black/20 rounded-4xl h-full object-contain'
//                         />
//                         <Image
//                             src="/c2.png"
//                             alt="hme3"
//                             width={400}
//                             height={400}
//                             className='w-full 2xl:w-[35%] relative z-20 shadow-2xl shadow-black/20 rounded-4xl h-full object-contain'
//                         />
//                         <Image
//                             src="/c3.png"
//                             alt="home3"
//                             width={400}
//                             height={400}
//                             className='w-full 2xl:w-[35%] relative z-20 shadow-2xl shadow-black/20 rounded-4xl h-fit object-contain'
//                         />
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Home7
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Home7 = () => {
    return (
        <div className='w-full h-full flex justify-center'
            style={{
                // Changed 200rem to 10rem to prevent "fucked up" layout on large screens
                padding: "clamp(1.5rem, 5vw, 10rem) clamp(1rem, 8vw, 15rem) clamp(1.5rem, 5vw, 10rem) clamp(1rem, 8vw, 15rem)" 
            }}
        >
            <div className="flex flex-col gap-10 items-center w-full max-w-[1600px] h-full">
                
                {/* Header Section */}
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-[#FF0000] text-center md:text-right text-lg md:text-xl inter font-medium w-full">
                        Testimonials
                    </div>
                    <div className="text-2xl sm:text-4xl lg:text-5xl leading-snug pixel text-center md:text-right text-[#8A3E1D]">
                        Sweet words from <br className="md:hidden" /> happy customers
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="w-full">
                    {/* flex-col: Stacked for mobile (sm)
                        md:flex-row: Row for medium, large, and extra large screens
                    */}
                    <div className="flex flex-col md:flex-row flex-wrap justify-between md:justify-center items-center  w-full h-fit gap-6 md:gap-4 lg:gap-8">

                        <Image
                            src="/c1.png"
                            alt="testimonial 1"
                            width={500}
                            height={500}
                            loading="eager"
                            className='w-[95%] h-auto md:flex-1 max-w-[400px] md:w-[95%] shadow-2xl shadow-black/10 rounded-3xl xl:rounded-4xl object-fill'
                        />
                        
                        <Image
                            src="/c2.png"
                            alt="testimonial 2"
                            width={500}
                            height={500}
                            loading="eager"
                            className='w-[95%] h-auto md:flex-1 max-w-[400px] md:w-[95%] shadow-2xl shadow-black/10 rounded-3xl xl:rounded-4xl object-fill'
                        />
                        
                        <Image
                            src="/c3.png"
                            alt="testimonial 3"
                            width={500}
                            height={500}
                            loading="eager"
                            className='w-[95%] h-auto md:flex-1 max-w-[400px] md:w-[95%] shadow-2xl shadow-black/10 rounded-3xl xl:rounded-4xl object-fill'
                        />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home7