/* eslint-disable react/prop-types */
export const AboutComponent = ({ title, content, img_src, img_title, h2_title }) => (
    <>
        <div>
            <h2 className=" text-center text-base sm:text-3xl p-2 pt-7 font-semibold text-white">
                📃 About <span className="bg-white p-1 rounded-lg font-bold text-blue-500">{h2_title}</span> 📃
            </h2>
        </div>
        <div className="p-2 sm:p-6 pb-10 lg:p-5">
            <div className="
             max-w-full lg:max-w-full lg:h-96 lg:flex shadow-lg shadow-blue-900/30">
                <div className="
                h-48 lg:h-96 lg:w-80 bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex-none"
                    style={{ backgroundImage: `url('${img_src}')` }}
                    title={img_title}
                ></div>
                <div className="bg-white rounded-b sm:p-4 pt-6 lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div>
                        <h2 className="text-blue-900 font-bold mb-2 text-center text-base sm:text-3xl mb-5 ">
                            ⭐⭐<span className="bg-blue-500 text-white p-2 rounded-lg mx-2">{title}</span>⭐⭐
                        </h2>
                        <div className="bg-blue-50 rounded-lg shadow-inner m-3 p-4">
                            {content.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4 text-base text-blue-900 font-semibold">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);