import React, { useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

const App = () => {

    const [list, dispatch] = usePeopleList();

    const [nameInput, setNameInput] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const handleAdd = () => {
        if (nameInput) {
            dispatch({
                type: "ADD",
                payload: {
                    name: nameInput
                }
            });
            setNameInput("");
        }
    }

    const deletePerson = (id: string) => {
        dispatch({
            type: "DEL",
            payload: { id }
        });
    }

    const handleOrder = () => {
        dispatch({
            type: "ORDER"
        });
    }

    return (
        <section className="container mx-auto w-full max-w-lg shadow-2xl px-6 py-5 rounded">

            <input
                type="text"
                placeholder="Digite o nome"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-3"
                value={nameInput}
                onChange={handleInputChange}
            />

            <button
                className="px-6 py-2 rounded bg-violet-400 hover:bg-violet-500 text-violet-100"
                onClick={handleAdd}
            >
                Adicionar
            </button>

            <button
                className="px-6 py-2 text-orange-100 bg-orange-400 rounded hover:bg-orange-500 ml-4"
                onClick={handleOrder}
            >
                Ordenar
            </button>

            <h3 className="mt-4 mb-4 text-xl text-white">Lista de pessoas:</h3>

            <ul>
                {list.map((item, index) => (
                    <li key={index} className="text-lg flex justify-between text-white mb-2 align-center">
                        <span>{item.name}</span>
                        <button
                            className="rounded py-1 px-1 bg-rose-400 hover:bg-rose-500 text-rose-100"
                            onClick={() => deletePerson(item.id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default App;