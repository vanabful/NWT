export const GET_ANIMALS = 'GET_ANIMALS';
export const HOME_UNMOUNTED = 'HOME_UNMOUNTED';
export const SHOW_FORM = 'SHOW_FORM';

export function getAnimals() {
    const animals = require('../../JSON/data.json');
    return{
        type: GET_ANIMALS,
        payload: animals
    }
}

export const homeUnmounted = (payload) => ({
    type: HOME_UNMOUNTED,
    payload
});

export const showForm = (payload) => ({
    type: SHOW_FORM,
    payload
});

