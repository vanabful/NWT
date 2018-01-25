import { GET_ANIMALS, FILTER_ANIMALS, GET_FILTERED_ANIMALS, CLICKED_ANIMAL, HOME_UNMOUNTED } from '../actions';

const initialState = {
    animals: [],
    home: false,
    filteredAnimals: [],
    filters: {
        age: 'Animal age',
        city: 'Select city',
        azil: 'Select azil',
        type: 'Select type',
        breed: 'Select breed',
        gender: 'Gender'
    },
    clickedAnimal: {}
}

function getAnimals(state, action) {
    return {
        animals: action.payload,
        home: true,
        filteredAnimals: [],
        filters: {
            age: 'Animal age',
            city: 'Select city',
            azil: 'Select azil',
            type: 'Select type',
            breed: 'Select breed',
            gender: 'Gender'
        },
        clickedAnimal: {}
    }
}

function filterAnimals (state, action) {
    var name = action.id;
    return {
        ...state, 
        filters: {
            ...state.filters,
            [name]: action.payload
        }
    }
}

function getFilteredAnimals (state, action) {
    return {
        ...state,
        filteredAnimals: action.payload,
        home: false
    }
}

function clickedAnimal (state, action) {
    return {
        ...state, 
        clickedAnimal: action.payload
    }
}

function homeUnmounted (state, action) {
    return {
        ...state,
        home: false
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_ANIMALS:
            return getAnimals(state, action);
        
        case FILTER_ANIMALS:
            return filterAnimals(state, action);

        case GET_FILTERED_ANIMALS:
            return getFilteredAnimals(state, action);

        case CLICKED_ANIMAL:
            return clickedAnimal(state, action);

        case HOME_UNMOUNTED:
            return homeUnmounted(state, action);
        
        default: 
            return state;
    }
}