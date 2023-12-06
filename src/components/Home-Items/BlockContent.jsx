import { contentBlock } from "../../data/contentBlock"
import ContentHeader from "./ContentHeader"

function BlockContent() {
    return (
        <>
            <div className="container">
                <div className="blockContent m-5 mb-10 mt-10 p-5 bg-blue-500 rounded-lg shadow-md shadow-blue-600/50">
                    <p className="sm:text-4xl text-center font-bold text-white">
                        ⭐ Learn about the Features of English Words ⭐
                    </p>
                </div>
                {
                    contentBlock.map((content, i) => (
                        <ContentHeader {...content} key={i}></ContentHeader>
                    ))
                }
            </div>
        </>
    )
}

export default BlockContent