import Link from "next/link";
import TimelineItem from "./TimelineItem";

const ExperienceSection = () => {
    return (
        <div className="h-100 mt-12 mb-16">
            <ol className="items-center sm:flex">
                <TimelineItem title="SBIS" date="Developing since 08.01, 2023">
                    Commercial project for SBIS &lang;
                    <span className="link link-underline link-underline-black text-gray-400">
                        <Link href={"https://www.sbis.ch/"}>Swiss Office for Integral Security</Link>
                    </span>&rang;
                    . Release soon...
                </TimelineItem>
                
                <TimelineItem title={"Bernhackt"} date={"Won on 27.08, 2023"}>
                    T-systems solution winner: 
                    <span className="link link-underline link-underline-black text-gray-400"> 
                    <Link href={"https://www.linkedin.com/feed/update/urn:li:activity:7101590566664065024/"}> our little victory</Link>
                    </span>
                </TimelineItem>

                <TimelineItem title={"..."} date={"now"}>
                    Coming soon... You may offer something
                </TimelineItem>
            </ol>
        </div>
    )
}

export default ExperienceSection;