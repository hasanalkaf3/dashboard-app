'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { links } from '@/app/lib/constants'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map(({ name, href, icon }) => {
        const LinkIcon = icon
        return (
          <Link
            key={name}
            href={href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md ${
              href === pathname ? 'bg-sky-100 text-blue-600' : 'bg-gray-50'
            } p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 transition-colors md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{name}</p>
          </Link>
        )
      })}
    </>
  )
}
