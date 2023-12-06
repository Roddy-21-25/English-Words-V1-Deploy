import { useState } from 'react';

const useWordSectionThree = () => {
    // Valores por defecto
    const defaultState = {
        wordSyns: ["Loading up", "Charging", "Packing", "Lading", "Stowing", "Stuffing", "Filling", "Cramming"],
        wordAnts: ["Unloading", "Emptying", "Offloading", "Clearing", "Discharging", "Draining", "Depleting", "Evacuating"],
        wordsExamples: ["➽ I am loading up the car with groceries for the party",
            "➽ The website is currently filling the new features",
            "➽ The software is charging the latest updates",
            "➽ The truck is filling construction materials for the site",],
        word: 'Loading...'
    };

    const [wordSectionThree, setWordSectionThree] = useState(defaultState);

    // Función para asignar nuevos valores y restablecer a los valores por defecto si es necesario
    const assignNewValuesThree = (newValues) => {
        setWordSectionThree({
            ...wordSectionThree,
            ...newValues
        });
    };

    return {
        wordSectionThree,
        assignNewValuesThree
    };
};

export default useWordSectionThree;
