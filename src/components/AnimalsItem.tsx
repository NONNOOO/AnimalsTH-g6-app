import { FC } from 'react'
import { useLocation } from 'wouter'
import { Animals } from '../interfaces'


interface AnimalsItemProps {
    animalsProps: Animals
}

export const AnimalsItem: FC<AnimalsItemProps> = ({ animalsProps }) => {
    const { animal, img } = animalsProps
    const [, setLocation] = useLocation()


    const containerClass = 'flex flex-col items-center gap-8 bg-green-900 w-80 h-80 rounded-md hover:bg-gradient-to-br from-green-600 to-sky-600 cursor-pointer p-10   hover:translate-t-1 hover:scale-110 duration-300'
    return (
        <div
            className={containerClass}
            onClick={() => setLocation(`/animals/${animal}`)}
        >
            <img src={img} className='h-40 w-30 rounded-md' alt="animal" />
            <p className='text-gray-100 overflow-hidden  font-mono fext-lg font-2xl'>
                {animal}
            </p>
        </div>

    )
}
