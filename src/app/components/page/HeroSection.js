import React from 'react'
import Image from 'next/image';

import herobg  from '../../../../public/HeroBg.png'
import vector1 from '../../../../public/Vector1.png'

import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className='bg-sc-grayBg grid grid-cols-2 px-20 h-[90vh]'>
        <section className='flex flex-col justify-center items-start gap-5'>
            <h1 className='font-extrabold text-[64px] leading-none pr-32'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-black/60 text-base'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button title={'Shop Now'} primary className={'rounded-full py-3 px-16'} />
            <article className='flex justify-between w-full mt-10'>
              <span>
                <h2 className='text-4xl font-medium'>200+</h2>
                <p className='text-black/60'>International Brands</p>
              </span>
              <span>
                <h2 className='text-4xl font-medium'>2,000+</h2>
                <p className='text-black/60'>High Quality Products</p>
              </span>
              <span>
                <h2 className='text-4xl font-medium'>30,000+</h2>
                <p className='text-black/60'>Happy Customers</p>
              </span>
            </article>
        </section>
        <section className='flex items-end relative'>
          <Image src={herobg} width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} 
            alt='Background Image'
          />
          <Image src={vector1} width={100} height={100} alt='vector' className='absolute top-28 right-10' />
          <Image src={vector1} width={50} height={50} alt='vector' className='absolute top-[400px] left-10' />
        </section>
    </div>
  )
}

export default HeroSection;