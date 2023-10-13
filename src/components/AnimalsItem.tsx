import { FC } from 'react'
import { useLocation } from 'wouter'
import { Animals } from '../interfaces'

interface AnimalsItemProps {
    animalsProps: Animals
}

// export const AnimalsItem: FC<AnimalsItemProps> = ({ animals }) => {
//     const { animal, img } = animals
//     const [, setLocation] = useLocation()
export const AnimalsItem: FC<AnimalsItemProps> = ({ animalsProps }) => {
    const { animal, img } = animalsProps
    const [, setLocation] = useLocation()


    const containerClass = 'flex flex-col items-center gap-8 bg-gray-700 w-100 h-100 rounded-md hover:bg-blue-800 cursor-pointer p-10   hover:translate-t-1 hover:scale-110 duration-300'
    return (
        <div
            className={containerClass}
            onClick={() => setLocation(`/animals/${animal}`)}
        >
            <img src={img} className='h-20 w-20 rounded-md' alt="animal" loading='lazy' />
            <p className='text-gray-100 overflow-hidden  font-mono fext-lg'>
                {animal}
            </p>
        </div>
    )
}
