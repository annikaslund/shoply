import { ADD, REMOVE } from "./actionTypes";

export function addItem(item) {
    return {
        type: ADD,
        payload: item
    };
}

export function removeItem(item) {
    // console.log("REMOVEEEITEEMMMM", item)
    return {
        type: REMOVE,
        payload: item
    };
}