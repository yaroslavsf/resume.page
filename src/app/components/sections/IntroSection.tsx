import TextHeading from "../typography/TextHeading";
import meImg from "../../../../public/me.png"
import Image from "next/image";
const IntroSection = () => {
    return (
        <div className="h-100 mb-20 mt-20">
            <div className="flex flex-col sm:flex-row justify-center h-full ">
                <div className="flex justify-center w-full items-center">
                    <div className="w-fit absolute mb-5" >
                        {/* animated part starts */}
                        <span
                            className=" inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
                        >
                            <TextHeading title={" Hi there! My name is Yaroslav Zyvotovskyi"}/>
                        </span>
                        <span
                            className="box-border inline-block w-1 h-10 bg-white -mb-1 h-5 animate-cursor will-change-transform"
                        ></span>
                        {/* animated part ends */}
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