import { useEffect, useState} from 'react'
import { Animals } from '../interfaces'
import data from '../data/animals.json'

export const useAnimals = () => {
    const [animals, setAnimals] = useState<Animals[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getAnimalsByName = (nameAnimals: String) => {
        return animals.find(data => data.animal === nameAnimals ) ?? ({} as Animals)
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimals(data)
            setLoading(false)
        }, 300)
    }, [] )

    return {
        animals,
        loading,
        getAnimalsByName
    }    
} 