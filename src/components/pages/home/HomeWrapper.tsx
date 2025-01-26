import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string
  description: string
  capabilities: string[]
  image: StaticImageData
  reverse?: boolean
  children?: React.ReactNode | React.ReactNode[]
}

export default function HomeWrapper({ title, description, capabilities, image, reverse, children }: Props) {
  return (
    <>
      <div className={`flex flex-col py-40 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className="lg:w-2/5 lg:mx-12 flex flex-col justify-center">
          <div>
            <h2 className="text-xl lg:text-3xl font-medium mb-2">
              {title}
            </h2>

            {capabilities &&
              <div className="text-gray-400 text-sm">
                {capabilities.map(capability =>
                  <span className="mr-3 text-nowrap" key={capability}>✓ {capability}</span>
                )}
              </div>
            }

            <div className="bg-green-700 rounded-xs h-1 w-24 my-10"></div>

            <p className="">
              {description}
            </p>

            <div className="mt-10 flex justify-around">
              {children}
            </div>
          </div>
        </div>

        <div className="mx-none lg:mb-none mb-4 lg:w-3/5 lg:mx-12">
          <Image
            alt="Screenshot"
            src={image}
            className="rounded-sm"
            sizes="(min-width: 1200px) 80vw, 100vw"
            quality={100}
          />
        </div>
      </div>
    </>
  )
}
