import { useAnimals } from "../hooks/useAnimals";
import { AnimalsItem } from "./AnimalsItem";


export const AnimalsList = () => {
    const { animals } = useAnimals();

    return (
        <div className="flex   justify-center py-20  bg-gradient-to-br from-green-700 to-sky-700">
            <div className="justify-center max-w-7xl min-h-screen ">
                <h1 className="font-semibold text-white fpont-mono text-3xl text-center pt-5 pb-10">
                    สัตว์ป่าสงวนที่สูญพันธุ์ไปแล้ว
                </h1>
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