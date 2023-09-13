import { ITypography } from "../interface/ITypography";

const DescriptionHeading = (props: ITypography) => {
    return (
        <span className="text-xl font-normal pt-1">{props.title}</span>
    )
}

export default DescriptionHeading;