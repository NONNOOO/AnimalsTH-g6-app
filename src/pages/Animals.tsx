import { FC } from 'react'
import { AnimalsList } from '../components/AnimalsList';
import { useTitle } from '../hooks/useTitle'


const Animals: FC = () => {

    useTitle('Animals ');

    return <AnimalsList />
}

export default Animals