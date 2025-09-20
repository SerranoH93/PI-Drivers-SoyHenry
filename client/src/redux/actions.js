import { GET_DRIVERS, GET_TEAMS, GET_DRIVERS_BY_ID, FILTER_BY_TEAM, FILTER_BY_ORIGIN, ORDER_BY_NAME, ORDER_BY_DOB, RESET_FILTERS } from './action-types';
import axios from 'axios';

const serverURL = 'http://localhost:3001';


export const getAllDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/drivers`);
            const drivers = data;
            dispatch({
                type: GET_DRIVERS,
                payload: drivers
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${serverURL}/drivers/teams`);
            console.log(data)
            const teams = data;
            dispatch({
                type: GET_TEAMS,
                payload: teams
            });
        } catch (error) {
            alert(error.message);
        }
    }
}

export const getDriverById = (driverId) => {
    return async (dispatch) => {
        try {            
            const { data } = await axios(`${serverURL}/drivers/${driverId}`);            
            return dispatch({
                type: GET_DRIVERS_BY_ID, 
                payload: data
            })
        } catch (error) {            
            alert(error.message);
        }
    }
}

export const filterByTeam = (team) => {
    return {
        type: FILTER_BY_TEAM,
        payload: team
    };
}

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    };
}

export const filterByName = (origin) => {
    return {
        type: ORDER_BY_NAME,
        payload: origin
    };
}

export const filterByDOB = (date) => {
    return {
        typeof: ORDER_BY_DOB,
        payload: date
    }
}

export const resetFilter = (reset) => {
    return {
        type: RESET_FILTERS,
        payload: reset
    }
}