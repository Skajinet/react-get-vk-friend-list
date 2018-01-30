let response = [
    {
        id: 1,
        name: 'Song1'
    },
    {
        id: 2,
        name: 'Song2'
    },
    {
        id: 3,
        name: 'Song3'
    },
    {
        id: 4,
        name: 'Song4'
    },

    {
        id: 5,
        name: 'Song5'
    }
];
export const getTracks = () => dispatch =>  {
    console.log('I got tracks');
    dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: response })
};