import Image from 'next/image'
import ButtonWrapper from './ButtonWrapper'

type Props = {
  image?: string
  link: { href: string, text: string }
  full?: boolean
  center?: boolean
}

export default function Button({ center, link, image, full }: Props) {
  return (
    <>
      <ButtonWrapper full={full}>
        <a
          className={`${center ? 'justify-center' : ''} text-nowrap rounded-sm bg-primary px-4 py-2 text-white shadow-sm visited:text-white hover:bg-primary-light dark:bg-primary-intense h-10 flex items-center`}
          href={link.href}
          rel="noopener"
          target="_blank"
        >
          {image && <Image
            src={image}
            alt="Logo"
            width="14"
            className="mr-2 inline-block"
          />}
          {link.text}
        </a>
      </ButtonWrapper>
    </>
  )
}
