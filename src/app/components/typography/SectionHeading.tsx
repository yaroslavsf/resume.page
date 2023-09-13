import { ITypography } from "../interface/ITypography";

const SectionHeading = (props : ITypography) => {
    return (
        <span className="text-4xl flex flex-col items-center p-5 font-bold">{props.title}</span>
    )
}

export default SectionHeading;