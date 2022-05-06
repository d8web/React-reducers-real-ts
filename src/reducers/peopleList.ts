import { useReducer } from "react";
import { v4 as createId } from "uuid";

type Person = {
    id: string;
    name: string;
}

type actionType = {
    type: string;
    payload?: {
        id?: string;
        name?: string;
    }
}

const initialState: Person[] = [];

const reducer = (state: Person[], action: actionType) => {
    switch(action.type) {
        case "ADD":
            if(action.payload?.name) {
                const newState = [ ...state ];
                newState.push({
                    id: createId(),
                    name: action.payload?.name
                });
                return newState;
            }
        break;
        case "DEL":
            if(action.payload?.id) {
                let newState = [ ...state ];
                newState = newState.filter(item => item.id !== action.payload?.id);
                return newState;
            }
        break;
        case "ORDER":
            let newState = [ ...state ];
            newState = newState.sort((a,b) => (a.name > b.name) ? 1 : -1);
            return newState;
        break;
    }

    return state;
}

export const usePeopleList = () => {
    return useReducer(reducer, initialState);
}