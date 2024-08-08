'use client'

import React from 'react'
import Image from 'next/image'

import versace from '../../../../public/versace.png'
import zara from '../../../../public/zara.png'
import gucci from '../../../../public/gucci.png'
import prada from '../../../../public/prada.png'
import ck from '../../../../public/ck.png'


const partners = [
    {
        logo: versace,
        alt:  'Versace'
    },
    {
        logo: zara,
        alt: 'Zara'
    },
    {
        logo: gucci,
        alt: 'Gucci'
    },
    {
        logo: prada,
        alt: 'Prada'
    },
    {
        logo: ck,
        alt: 'CK'
    },
]

const Partners = () => {
  return (
    <div className='bg-black h-[122px] flex items-center justify-between px-20'>{partners.map((partner, index) => <Image key={index} src={partner.logo} width={100} height={100} alt={partner.alt}/>)}</div>
  )
}

export default Partners