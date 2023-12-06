// eslint-disable-next-line react/prop-types
const ButtonHeader = ({ ButtonNavigation, text, className }) => {
    return (
        <button className={className} onClick={ButtonNavigation}>{text}</button>
    )
}

export default ButtonHeader