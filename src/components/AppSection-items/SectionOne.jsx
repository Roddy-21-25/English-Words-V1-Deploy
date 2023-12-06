/* eslint-disable react/prop-types */
import Select from 'react-select';
import { languageOptions } from '../../data/languageOptions';
import { useState } from 'react';
import { useTranslatorNavbar } from '../../services/AxiosNavbarTranslator';
import Spiner from './Spiner';

// eslint-disable-next-line react/prop-types
export const SectionOne = ({ word, wordTranslated, ipa, audioSRC, definition, example }) => {
    const [optionValud, setOptionValue] = useState('')
    const [wordTranslatedTwo, setWordTranslatedTwo] = useState(wordTranslated)
    // eslint-disable-next-line no-unused-vars
    const [wordTwo, setWordTwo] = useState(word)

    const [check, setCheck] = useState(false)

    const [loading, setLoading] = useState(false)

    const { getText } = useTranslatorNavbar({ wordSend: "", languaje: "" });

    // Manejar el cambio de opción seleccionada
    const handleChange = (selectedOption) => {
        if (selectedOption.value !== optionValud) {
            setLoading(true)
            setOptionValue(selectedOption.value);
            setTimeout(() => {
                getText(wordTwo, selectedOption.value)
                    .then((responseTranslator) => {
                        console.log(responseTranslator.data.resultado);
                        setWordTranslatedTwo(responseTranslator.data.resultado)
                        setCheck(true)
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.error("Error fetching translation:", error);
                    });
            }, 1000);
        }
    };

    const CustomOption = ({ innerProps, label, data }) => (
        <div {...innerProps} className="flex items-center hover:bg-blue-500/20">
            <img
                src={data.icon}
                alt={`${data.label} icon`}
                className="w-4 h-4 m-2"
            />
            <span className='text-blue-900/90'>- {label}</span>
        </div>
    );

    return (
        <>
            <div className="shadow-md w-full shadow-blue-500/25 p-2 my-6 rounded-lg">
                <div className="font-bold text-center m-3">
                    <h2 className='flex items-center justify-between lg:justify-center'>
                        <span className="text-blue-600/90 hover:text-blue-600 transition-colors duration-300 
                            lg:text-4xl lg:text-2xl text-xl">
                            {wordTwo}
                        </span>
                        <span className="text-blue-600/40 text-xs lg:text-2xl px-2 lg:px-4">➜</span>
                        <span className="text-blue-600/70 hover:text-blue-600/80 transition-colors duration-300 
                            lg:text-3xl lg:text-2xl text-xl">
                            {loading ? <Spiner /> : (check ? wordTranslatedTwo : wordTranslated)}
                        </span>
                        <span>
                            {/* Menú desplegable */}
                            <Select
                                options={languageOptions}
                                isSearchable={true} // Deshabilitar la búsqueda
                                onChange={handleChange}
                                placeholder="Select Language" // Personalizar el placeholder aquí
                                className="text-xs lg:text-sm mx-2 lg:mx-3 w-33 lg:w-48"
                                components={{ Option: CustomOption }}
                                styles={{
                                    dropdownIndicator: (baseStyles, state) => ({
                                        ...baseStyles,
                                        color: state.isFocused ? '#6993f1' : '#4d80ef',
                                        '&:hover': {
                                            borderColor: '#6993f1', // Cambia el color del borde al hacer hover
                                        },
                                    }),
                                    indicatorSeparator: (baseStyles) => ({
                                        ...baseStyles,
                                        color: '#1e3a8a', // Cambia el color de la flecha aquí
                                    }),
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderColor: state.isFocused ? '#1e3a8a' : '#4d80ef',
                                        borderWidth: '2px', // Ajusta el tamaño del borde
                                        cursor: "pointer",
                                        '&:hover': {
                                            borderColor: '#6993f1', // Cambia el color del borde al hacer hover
                                        },
                                    }),
                                    placeholder: (baseStyles) => ({
                                        ...baseStyles,
                                        color: '#4d80ef'
                                    }),
                                    option: (baseStyles) => ({
                                        ...baseStyles,
                                        color: '#4d80ef'
                                    }),
                                }}
                            />
                        </span>
                    </h2>
                </div>
                <div className="font-bold text-center m-4">
                    <h2 className="">
                        <span className="border-r-4 border-l-4 border-blue-600/80 rounded-lg px-4 text-blue-600/80 text-xl">
                            🔊 {ipa}
                        </span>
                    </h2>
                </div>
                <div className="">
                    <span className="grid justify-items-center">
                        <audio controls key={audioSRC} className="w-60 md:w-80">
                            <source src={audioSRC} type="audio/mp3" />
                        </audio>
                    </span>
                </div>
                <div>
                    <p className="p-4 m-4 mt-7 rounded-lg bg-blue-50 text-blue-600/80 text-md
                                font-semibold border-l-4 border-r-4 border-blue-600/80">
                        <ol className="list-decimal ml-4">
                            <li className="my-2">{definition[0]}</li>
                            <li className="my-4">{definition[1]}</li>
                            <li className="my-2">{definition[2]}</li>
                        </ol>
                    </p>
                    <p className="m-3 p-3 border border-blue-500/20 rounded text-blue-600/80">
                        <p className="font-bold text-lg text-center">📘 Ex: 📘</p>
                        <br />
                        <p className="font-semibold my-2">1 - {example[0]}</p>
                        <p className="font-semibold my-2">2 - {example[1]}</p>
                    </p>
                </div>
            </div>
        </>
    )
}