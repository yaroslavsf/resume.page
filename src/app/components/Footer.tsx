import TextHeading from "./typography/TextHeading";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center">
                <hr className="w-9/12 h-px bg-gray-500 border-0"/>
            <TextHeading title="© Yaroslav Zhyvotovskyi 2023" />
        </footer>
    )
}

export default Footer;