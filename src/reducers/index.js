// import { combineReducers } from 'redux';
// import { routeReducer } from 'react-router-redux';
//
// import tracks from './tracks';
// import playlists from './playlists';
// import filterTracks from './filterTracks';
//
// export default combineReducers({
//     routing: routeReducer,
//     tracks,
//     playlists,
//     filterTracks
// })
import {combineReducers} from 'redux';
import CarReducers from './car';
import ActiveCar from './car-active';

const allReducers = combineReducers({
    cars:  CarReducers,
    active: ActiveCar
});
export default allReducers;