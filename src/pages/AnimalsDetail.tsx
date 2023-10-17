import { useRoute, useLocation } from "wouter";
import { useAnimals } from "../hooks/useAnimals";

const AnimalsDetail = () => {
    const [, params] = useRoute('/animals/:animalsName')
    const animalsName = decodeURI(params!.animalsName)
    const { getAnimalsByName } = useAnimals()
    const { img, biography } = getAnimalsByName(animalsName)
    const [, setLocation] = useLocation()



    return (
        <div className="flex flex-col items-center p-9 min-h-screen bg-[#61876E] text-[#fff]">
            <div className="flex flex-col md:flex-col md:gap-4 md:w-[calc(89%+1rem)] lg:w-[colc(70%+1rem)] items-center p-10 border-dashed border-2 rounded-xl">
                <div className="flex flex-col items-center w-full">

                    <p className="font-mono font-bold text-2xl lg:text-3xl text-center hover:text-grey-300">
                        {animalsName}
                    </p>

                    <img src={img} className="my-10 odject-cover rounded-xl shadow-lg shadow-[#EAE7B1] " alt={animalsName} />
                </div>


                <div>
                    <p className=" font-mono font-bold text-lg  ">
                        ลักษณะ
                    </p>
                    <p className=" font-mono md:text-base lg:fext-lg  px-0 lg:px-20  indent-10">
                        {biography}
                    </p>
                </div>

                <button onClick={() => setLocation('/Animals')} className="text-[#fff] bg-[#3C6255] hover:bg-[#618264] rounded-lg p-3">
                    ย้อนกลับ
                </button>
            </div>
        </div>
    )
}

export default AnimalsDetail