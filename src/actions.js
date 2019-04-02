import { ADD, REMOVE } from "./actionTypes";

export function addItem() {
    return {
        type: ADD
    };
}

export function removeItem() {
    return {
        type: REMOVE
    };
}