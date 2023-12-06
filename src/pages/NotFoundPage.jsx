import assets from "../assets"

function NotFoundPage() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center m-10">
        <div className="mb-10 mt-10">
          <img src={assets.error404} className="notFound-img mt-10" />
        </div>
        <div className="my-10 font-bold text-blue-500 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl">
          <p>
            🔄 Reload the Web! or go to Home 🔄
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default NotFoundPage