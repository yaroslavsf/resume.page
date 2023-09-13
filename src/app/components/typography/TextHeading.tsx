import { ITypography } from "../interface/ITypography";

const TextHeading = (props: ITypography) => {
    return (
        <h2 className="sm:text-xl text-lg font-medium px-2">{props.title}</h2>
    )
}

export default TextHeading;