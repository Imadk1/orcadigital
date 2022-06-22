import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

export const Hero = () => {
  return (
    <div className="flex flex-wrap md items-center md:h-screen h-1/2 ">
        <div className="bg-zinc-200 flex flex-col items-start gap-10 w-full py-12 md:w-1/2 md:h-screen h-1/2">
            <div className="md:mx-32 mx-7 flex flex-col items-start gap-10">
                <FontAwesomeIcon className='text-6xl text-amber-500' icon={faBolt} />
                <h1 className="text-7xl font-bold">Supercharge your brand</h1>
                <div className="description w-full sm: md:w-2/3 text-gray-500 text-md">
                    Tokyo, Japan’s busy capital, mixes the ultramodern and the
                    traditional, from neon-lit skyscrapers to historic temples. The
                    opulent Meiji Shinto Shrine is known for its towering gate and
                    surrounding woods. The Imperial Palace sits amid large public
                    gardens
                </div>

                <button className="uppercase text-md bg-amber-500 text-white shadow-lg font-bold rounded-md py-3 px-6 hover:scale-110 hover:bg-amber-600">
                    read more
                </button>
            </div>
        </div>
        <div className="bg-red-600 w-full md:w-1/2 hidden md:block h-screen">
            <img
            src="https://source.unsplash.com/7H77FWkK_x4/1600x900"
            className="h-screen w-full"
            alt=""
            />
        </div>
    </div>
  )
}
