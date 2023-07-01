import { useState } from "react";
import { useLocalStorage } from "../localStorageKullan";

export const geceModuAc = (initialValue) => {
    const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);
    return [geceModu, setGeceModu]
}