import Image from "next/image";
import { ISkillCard } from "../../interface/ISkillCard";
import DescriptionHeading from "../../typography/Description";

const SkillCard = (props : ISkillCard) => {
    if (props.present === true) {
        return (
            <div className="col-span-3 flex flex-col items-center sm:col-span-2 lg:col-span-1">
                <div className="border border-gray-500 rounded-lg shadow mb-2.5 h-[7.5rem] w-[7.5rem] sm:h-[8.2rem] sm:w-[8.2rem] hover:scale-105 hover:shadow-md hover:shadow-gray-500 transition ease-in-out">     
                    <div className="flex flex-col items-center p-2">
                    <Image src={props.img!} alt={props.title!} height={70} />
                    <DescriptionHeading title={props.title!}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
    
}
export default SkillCard;