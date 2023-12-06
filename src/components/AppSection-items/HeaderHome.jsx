import assets from "../../assets"

function Header() {
    return (
        <>
            <div className="HeaderApp grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center text-center mt-3 mb-3">
                <div className="sm:col-span-2 grid justify-items-center sm:mt-7">
                    <img src={assets.imgHeaderHome} className="HeaderApp-img" alt="imagen del header" />
                </div>
                <div className="sm:col-span-2 sm:p-10 p-3 font-semibold">
                    <h1 className="sm:text-4xl text-blue-900 font-bold text-2xl sm:mb-2 sm:leading-relaxed mb-4 ms:mb-0">
                        Improve your “English” has never been so efficient!
                    </h1>
                    <h2 className="sm:text-xl">
                        <span className="text-white bg-blue-500 p-1 px-2 rounded-lg mx-1">↧</span>
                        <span className="text-white bg-blue-500 p-1 px-2 rounded-lg mx-1">↧</span>
                        <span className="text-white bg-blue-500 p-1 px-2 rounded-lg mx-1">↧</span>
                        <span className="text-white bg-blue-500 p-1 px-2 rounded-lg mx-1">↧</span>
                        <span className="text-white bg-blue-500 p-1 px-2 rounded-lg mx-1">↧</span>
                    </h2>
                    <blockquote
                        className={`
                        p-3 rounded-r-lg rounded-l-lg my-4 text-blue-900 border-r-4 dark:border-blue-500 dark:bg-blue-50 hidden lg:block`}>
                        <p>
                            Expanding your vocabulary and Improving your English
                        </p>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default Header