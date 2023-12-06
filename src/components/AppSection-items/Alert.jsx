function Alert() {
    return (
        <>
            <div id="alert-border-2" className="flex items-center justify-center p-4 mb-4 text-white border-t-4 border-red-300 
                                        bg-red-500 dark:border-red-800 rounded-lg" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div className="ms-3 text-md font-bold">
                    The input Box should not be empty
                </div>
            </div>
        </>
    )
}

export default Alert