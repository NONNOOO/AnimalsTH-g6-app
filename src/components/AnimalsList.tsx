import { useAnimals } from "../hooks/useAnimals";
import { AnimalsItem } from "./AnimalsItem";



export const AnimalsList = () => {
    const { animals } = useAnimals();

    return (
        <div className="flex   justify-center py-20 bg-[#61876E]">
            <div className="justify-center max-w-7xl min-h-screen ">
                <h1 className="font-semibold text-white font-mono text-3xl text-center pt-5 pb-5">
                    สัตว์ป่าสงวนในประเทศไทย
                </h1>
                <div className="px-[150px] py-10">
                    <hr />
                </div>
                <div className="flex gap-10 lg:gap-12 flex-wrap justify-center">
                    {
                        (
                            animals.map((data, i) => <AnimalsItem key={i} animalsProps={data} />)
                        )}
                </div>
            </div>
        </div>
    )
}