import Image from 'next/image'

type Props = { title: string, image: { src: any, priority?: boolean }, reverse?: boolean, children: any }

export default function Showcase({ title, image: { src, priority }, reverse, children }: Props) {
  return (
    <>
      <section className={`${reverse ? 'bg-primary text-white' : 'bg-white'} py-4 lg:py-28 lg:mb-none`}>
        <div className="lg:w-[70%] w-[92%] max-w-[1344px] mx-auto">
          <div className={`flex flex-col w-full gap-10 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold my-8">{title}</h2>

              {children}
            </div>

            <div className="w-full lg:w-1/2">
              <a href={src.src} data-caption={title}>
                <Image src={src} alt={title} className="shadow-main hover:shadow-main-ele rounded" priority={priority} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
