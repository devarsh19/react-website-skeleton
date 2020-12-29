import data from '../data.json';

export const initialState = {
    recipes: data.recipes,
    country: data.country,
    cooks: data.cooks,
    project_team: data.project_team
}

export const reducer = (state = initialState, action) => {
    return state;
}