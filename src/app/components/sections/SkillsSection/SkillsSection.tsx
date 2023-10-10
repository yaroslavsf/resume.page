import SkillCard from "./SkillCard";
import springImg from '../../../../../public/spring.svg'
import nestImg from '../../../../../public/nest.svg'
import reactImg from '../../../../../public/react.svg'
import nextImg from '../../../../../public/next.svg'
import reduxImg from '../../../../../public/redux.svg'
import cImg from '../../../../../public/c++.svg'
import tsImg from '../../../../../public/ts.svg'
import javaImg from '../../../../../public/java.svg'
import TextHeading from "../../typography/TextHeading";
import tailwindImg from '../../../../../public/tailwind.svg'
import SectionHeading from "../../typography/SectionHeading";

const SkillsSection = () => {
    return (
        <div className="h-fit m-6 sm:m-0 flex flex-col justify-center gap-y-14">
            <SectionHeading title="Skills"/>
            <div className="w-full h-fit flex flex-col items-center">
                <div className="w-full md:w-11/12 h-fit border border-gray-500 rounded-lg shadow p-3 mb-4">
                    <TextHeading title="Languages"/>
                    <div className="grid grid-cols-6 mt-2">
                        <SkillCard title="Java" img={javaImg} present={true}/>
                        <SkillCard title="Typescript" img={tsImg} present={true}/>
                        <SkillCard title="C++" img={cImg} present={true}/>
                        <SkillCard present={false}/>
                        <SkillCard present={false}/>
                        <SkillCard present={false}/>
                    </div>
                </div>
                <div className="w-full md:w-11/12 h-fit border border-gray-500 rounded-lg shadow p-3 mb-4">
                <TextHeading title="Frontend"/>
                    <div className="grid grid-cols-6 mt-2">
                        <SkillCard title="Next.js" img={nextImg} present={true}/>
                        <SkillCard title="React" img={reactImg} present={true}/>
                        <SkillCard title="React Native" img={reactImg} present={true}/>
                        <SkillCard title="Redux-Saga" img={reduxImg} present={true}/>
                        <SkillCard title="Tailwind" img={tailwindImg} present={true}/>
                        <SkillCard present={false}/>
                    </div>
                </div>
                <div className="w-full md:w-11/12 h-fit border border-gray-500 rounded-lg shadow p-3">
                <TextHeading title="Backend"/>
                    <div className="grid grid-cols-6 mt-2">
                        <SkillCard title="Spring Boot" img={springImg} present={true}/>
                        <SkillCard title="Nest.js" img={nestImg} present={true}/>
                        <SkillCard present={false}/>
                        <SkillCard present={false}/>
                        <SkillCard present={false}/>
                        <SkillCard present={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;