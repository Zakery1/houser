const initialState = {
    name: '',
    address: '',
    city: '',
    stateName: '',
    zip: 0,
    imageUrl: '',
    mortgage: 0,
    rent: 0
}
const UPDATE_FIRST_PAGE = 'UPDATE_FIRST_PAGE';
;

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_FIRST_PAGE: 
            return Object.assign({}, state, action.payload)

        default: return state
    }
}

export function updateFirstPage(name, address, city, stateName, zip) {
    return {
        type: UPDATE_FIRST_PAGE,
        payload: {
            name,
            address,
            city, 
            stateName,
            zip
        }
    }
}