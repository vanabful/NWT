export const GET_ANIMALS = 'GET_ANIMALS';
export const FILTER_ANIMALS = 'FILTER_ANIMALS';
export const GET_FILTERED_ANIMALS = 'GET_FILTERED_ANIMALS';
export const CLICKED_ANIMAL = 'CLICKED_ANIMAL';
export const HOME_UNMOUNTED = 'HOME_UNMOUNTED';

export function getAnimals() {
    const animals = require('../../JSON/data.json');
    return{
        type: GET_ANIMALS,
        payload: animals
    }
}

export const filterAnimals = (payload, id) => ({
    type: FILTER_ANIMALS,
    payload, 
    id
});

export function getFilteredAnimals(filters, animals){
    var filteredAnimals = animals.filter(animal => animal.ageRange === filters.age && animal.location.city === filters.city && animal.type === filters.type)
    return {
        type: GET_FILTERED_ANIMALS,
        payload: filteredAnimals
    }
}

export const clickedAnimal = (payload) => ({
    type: CLICKED_ANIMAL,
    payload
});

export const homeUnmounted = (payload) => ({
    type: HOME_UNMOUNTED,
    payload
});

export function extendedFilter (filters, animals) {
    var filteredAnimals1 = animals.filter(animal => 
        animal.ageRange === filters.age && animal.location.city === filters.city && animal.type === filters.type && animal.gender === filters.gender && animal.breed === filters.breed && animal.location.name === filters.azil
    )
    return {
        type: GET_FILTERED_ANIMALS,
        payload: filteredAnimals1
    }
}