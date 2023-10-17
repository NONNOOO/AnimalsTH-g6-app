import { FC } from 'react'
import { useLocation } from 'wouter'
import { Animals } from '../interfaces'


interface AnimalsItemProps {
    animalsProps: Animals
}

export const AnimalsItem: FC<AnimalsItemProps> = ({ animalsProps }) => {
    const { animal, img } = animalsProps
    const [, setLocation] = useLocation()


    const containerClass = 'flex flex-col items-center gap-8 bg-[#3C6255] w-80 h-80 rounded-xl hover:bg-[#79AC78] cursor-pointer p-10   hover:translate-t-1 hover:scale-110 duration-300 '
    return (
        <div
            className={containerClass}
            onClick={() => setLocation(`/Animals/${animal}`)}
        >
            <img src={img} className='h-40 w-auto rounded-xl shadow-lg shadow-[#EAE7B1]' alt="animal" />
            <p className='text-gray-100 overflow-hidden  font-mono fext-lg font-2xl'>
                {animal}
            </p>
        </div>

    )
}

