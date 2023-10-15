import { useEffect, useState} from 'react'
import { Animals } from '../interfaces'
import data from '../data/animals.json'

export const useAnimals = () => {
    const [animals, setAnimals] = useState<Animals[]>([])

    const getAnimalsByName = (nameAnimals: String) => {
        return animals.find(data => data.animal === nameAnimals ) ?? ({} as Animals)
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimals(data)
        }, 300)
    }, [] )

    return {
        animals,
        getAnimalsByName
    }    
} 