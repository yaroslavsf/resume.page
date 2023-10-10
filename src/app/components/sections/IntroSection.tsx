import TextHeading from "../typography/TextHeading";
import meImg from "../../../../public/me.png"
import Image from "next/image";
const IntroSection = () => {
    return (
        <div className="h-[88vh] mb-6 sm:mb-0  sm:h-[58vh] flex flex-col justify-around">
            <div className="flex flex-col sm:flex-row justify-center h-full ">
                <div className="flex justify-center w-full items-center">
                    <div className="w-fit mb-5" >
                         <h3 className="p-5 text-xl font-semibold text-gray-200 dark:text-white">
                         Hi there,<br/> my name is Yaroslav Zhyvotovskyi,
                         I&apos;m 18 y.o. student that is looking for new opportunities in IT. 
                         I have a passion for technologies and I&apos;m always up to date with new advancements 
                         
                        </h3>
                    </div>
                </div>

                <div className="flex justify-center  w-full items-center">
                    <div className="w-fit">
                        <Image src={meImg} alt={"smth"} width={200} height={150}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection;