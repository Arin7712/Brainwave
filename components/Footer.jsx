import React from 'react'
import Section from './Section'
import { socials } from '@/app/constants'
import Image from 'next/image'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className='container flex sm:justify-between justify-center items-centergap-10 max-sm:flex-col'>
        <p className='caption text-n-4 lg:block'>{new Date().getFullYear()}. All rights reserved.</p>

        <ul className='flex gap-5 flex-wrap'>
            {socials.map((i) => (
                <a key={i.id} href={i.url} target='_blank'  className='flex items-center justify-center w-10 h-10 rounded-full bg-n-7 transition-colors hover:bg-n-6'>
                    <Image src={i.iconUrl} width={16} height={16} alt={i.title}/>
                </a>
            ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
