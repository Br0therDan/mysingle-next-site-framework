import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link
        href="/"
        passHref 
    >
        <Image
            src="/images/logo_sq_dark.png"
            alt="Logo"
            width={40}
            height={40}
          />
    </Link>
  )
}
