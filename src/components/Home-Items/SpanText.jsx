// eslint-disable-next-line react/prop-types
const SpanText = ({ children, classNameParam }) => {
    return (
        <span
            className={`font-bold italic text-white bg-blue-500 rounded-lg p-1 ease-in duration-300 hover:bg-blue-600 ${classNameParam}`}>
            {children}
        </span>
    )
}

export default SpanText;