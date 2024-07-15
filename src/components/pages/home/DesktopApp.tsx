import Image from 'next/image'

import Desktop from '@/images/desktop.png'
import DesktopAppDownload from './DesktopApp/Download'

// 1600px x 1000px

export default function DesktopApp() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="mx-none lg:mb-none mb-4 w-2/5 lg:mx-12 flex flex-col justify-center">
          <div>
            <h2 className="text-xl lg:text-3xl font-medium">
              Elasticvue desktop
            </h2>

            <div className="bg-green-700 rounded-sm h-1 w-24 my-10"></div>

            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>

            <div className="mt-10">
              <DesktopAppDownload />
            </div>
          </div>
        </div>

        <div className="mx-none lg:mb-none mb-4 w-3/5 lg:mx-12">
          <Image
            alt="Screenshot"
            className="rounded shadow-md"
            src={Desktop}
            sizes="(min-width: 1344px) 80vw, 100vw"
            quality={100}
          />
        </div>
      </div>
    </>
  )
}
