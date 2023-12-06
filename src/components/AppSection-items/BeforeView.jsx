import { StepByStepInfo } from "../../data/stepByStepInfo"
import StepByStep from "./StepByStep"
import assets from "../../assets"

function BeforeView() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center">
        <div className="mb-10 mt-8 font-bold text-blue-500 ">
          <h2 className="text-2xl xl:text-5xl">📌 Step By Step 📌</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-4 text-center">
          {StepByStepInfo.map((step, i) => (
            <StepByStep key={i} {...step}></StepByStep>
          ))}
        </div>
        <div className="my-10 mx-5 xl:mx-10 p-2 pb-4 font-bold text-white rounded-lg text-center bg-blue-500">
          <h2 className="text-3xl xl:text-5xl">🎓 Master English, Discover Words and Improve your Fluency</h2>
        </div>
        <div className="grid justify-items-center">
          <img className="header-img" src={assets.gifBeforeView} alt="Gif de la seccion de app de before" />
        </div>
      </div>
    </>
  )
}

export default BeforeView