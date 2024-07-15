import Image from 'next/image'

type Props = {
  image: string
  link: { href: string, text: string }
}

export default function Button({ link, image }: Props) {
  return (
    <>
      <a
        className="mb-2 mt-3 mx-1 inline-block rounded bg-primary px-4 py-3 text-white shadow visited:text-white hover:bg-primary-light dark:bg-primary-intense"
        href={link.href}
        rel="noopener"
        target="_blank"
      >
        <Image
          src={image}
          alt="Logo"
          width="14"
          className="mb-1 mr-2 inline-block"
        /> {link.text}
      </a>
    </>
  )
}
