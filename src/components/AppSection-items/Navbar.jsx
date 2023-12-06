/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeView } from '../../redux/Sllices/ManageViewSlice';
import { useEffect, useState } from 'react';

import { changeInputValue } from '../../redux/Sllices/ManageInputValueSlice';
import Alert from './Alert';

function Navbar() {
    const manageViewTest = useSelector(state => state.manageView);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState('Search');
    const [word, setWord] = useState('');
    const [wordInput, setWordInput] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(0);
    const [alertBox, setAlertBox] = useState(false)

    useEffect(() => {
        if (manageViewTest && buttonText === 'Search') {
            navigate('/app/after');
        } else {
            navigate('/app/before');
        }
    }, [manageViewTest, navigate, buttonText]);

    const handleManageView = () => {
        // Validar que el input no esté vacío antes de continuar
        if (word.trim() === '') {
            setAlertBox(true)
            return
        }

        setAlertBox(false)

        dispatch(changeView(true));
        dispatch(changeInputValue(word));

        // Limpiar el input después de presionar el botón
        setWordInput('');
    };

    const changeInput = (wordToSend) => {
        setWord(wordToSend);
    }

    const handleInputChange = (event) => {
        const inputWord = event.target.value;
        //? Asigna el valor del input para poder escribir con normalidad
        setWordInput(inputWord)

        // Limpiar el temporizador anterior si existe
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Configurar un nuevo temporizador para ejecutar handleManageView después de 0.5ms (ajustable según tus necesidades)
        const newTypingTimeout = setTimeout(() => {
            changeInput(inputWord);
        }, 500);

        setTypingTimeout(newTypingTimeout);
    };

    return (
        <>
            <div className="p-5 xl:px-10">

                {alertBox ? <Alert /> : ""}

                <label className="block text-xl lg:text-2xl font-bold leading-6 text-blue-500">
                    ✍️ Write the Word ✍️
                </label>
                <form onSubmit={(e) => {
                    e.preventDefault(); // Evitar que el formulario se envíe por defecto
                    handleManageView('Search');
                }}>
                    <div className="relative mt-2 xl:flex xl:items-center xl:justify-center">
                        <div className="absolute inset-y-3 xl:inset-y-0 left-0 xl:flex xl:items-center pl-3">
                            <span className="text-blue-900/80 sm:text-xl mt-1">
                                <ion-icon name="book-outline"></ion-icon>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="block w-full xl:w-10/12 rounded-md border-0 py-2.5 pl-14 pr-8 
                        text-blue-600 font-bold ring-2 ring-inset ring-blue-500 placeholder:text-blue-900/70 
                        placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:outline-blue-500 sm:text-sm sm:leading-6"
                            placeholder="Write a English word..."
                            onChange={handleInputChange}
                            value={wordInput}
                        />
                        <button
                            type="submit" // Asegura que el botón actúe como un botón de envío
                            className="mt-3 xl:mt-0 ml-2 mb-2 xl:mb-0 px-4 py-2 bg-blue-500 hover:bg-blue-400 
                            text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
                        >
                            <ion-icon name="search-outline"></ion-icon>
                            <span className="ml-2">Search</span>
                        </button>

                    </div>
                </form>
                <label className="block text-sm ml-3 lg:ml-10 font-bold leading-6 text-blue-900/70">
                    Example: Pizza, Moon, Nature…
                </label>
                <label className="block text-sm ml-3 lg:ml-10 font-semibold leading-6 text-blue-900/70">
                    ✨ <strong>Note:</strong> English Words just can give you information about one specific word so, phrasal verbs are not available, but <strong>it will!</strong> ✨
                </label>
            </div>
        </>
    )
}

export default Navbar