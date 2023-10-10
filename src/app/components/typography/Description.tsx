import { ITypography } from "../interface/ITypography";

const DescriptionHeading = (props: ITypography) => {
    return (
        <span className="text-lg font-normal pt-1">{props.title}</span>
    )
}

export default DescriptionHeading;