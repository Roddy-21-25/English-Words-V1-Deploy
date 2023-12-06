/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

export const SynonymsList = ({ synonyms }) => {
    return (
        <div className="m-2 text-center">
            <div className="col-span-1 p-2 rounded-lg bg-blue-50 font-semibold
            text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <span>{synonyms}</span>
            </div>
        </div>
    );
}

export const AntonymList = ({ antonym }) => {
    return (
        <div className="m-2 text-center">
            <div className="col-span-1 p-2 rounded-lg bg-blue-50 font-semibold
            text-blue-500 transform transition-transform duration-300 hover:scale-110">
                <span>{antonym}</span>
            </div>
        </div>
    );
}