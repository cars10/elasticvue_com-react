import Link from 'next/link'
import Image from 'next/image'

export type ButtonColor = 'white' | 'primary'

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  label?: string
  href?: string
  icon?: string
  full?: boolean
  center?: boolean
  dense?: boolean
  color?: ButtonColor
  children?: React.ReactNode
}

export default function Button({ label, href, icon, full, center, dense, color, children, className, ...rest }: Props) {
  const defaulClasses = `text-nowrap px-4 py-2 shadow-sm flex items-center inline-flex rounded-xl cursor-pointer transition duration-300`
  const additionalClasses = {
    'justify-center': center,
    'w-full': full,
    'h-10': !dense
  }

  let colorClass = ''
  switch (color) {
    case 'white':
      colorClass = 'bg-white text-black hover:shadow-primary hover:shadow-lg'
      break
    case 'primary':
      colorClass = 'bg-primary text-white'
      break
    default:
      colorClass = 'bg-transparent text-neutral-200 hover:bg-neutral-800 hover:text-white'
  }

  return (
    <>
      {href ? (
        <Link
          className={`${defaulClasses} ${conditionalClasses(additionalClasses)} ${className} ${colorClass}`}
          href={href}
          target="_blank"
          {...rest}
        >
          {icon && <Image
            src={icon}
            alt="Logo"
            width="14"
            className="mr-2 inline-block"
          />}
          {label && (
            <>{label}</>
          )}
          {children && (
            <>{children}</>
          )}
        </Link>
      ) : (
        <button
          className={`${defaulClasses} ${conditionalClasses(additionalClasses)} ${className} ${colorClass}`}
          {...rest}
        >
          {icon && <Image
            src={icon}
            alt="Logo"
            width="14"
            className="mr-2 inline-block"
          />}
          {label && (
            <>{label}</>
          )}
          {children && (
            <>{children}</>
          )}
        </button>
      )}
    </>
  )
}

export const conditionalClasses = (obj: Record<string, boolean | null | undefined>): string => {
  return Object.entries(obj)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(' ')
}
