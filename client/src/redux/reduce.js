import { GET_DRIVERS, GET_TEAMS, GET_DRIVERS_BY_ID, FILTER_BY_TEAM, FILTER_BY_ORIGIN,ORDER_BY_NAME, ORDER_BY_DOB, RESET_FILTERS } from "../redux/action-types";


const initialState = {
    drivers: [], //Trae todos los drivers
    teams: [], //Trae todos los equipos
    driversGetted: [], //Copia de drivers   
    driverDetail: {}  //Detalles de conductor
};

const rootReducer = (state = initialState, action) => {
    

    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                drivers: [...action.payload],
                driversGetted: action.payload
            };
        case GET_TEAMS:
            return {
                ...state,
                teams: action.payload
            };
        case GET_DRIVERS_BY_ID:
            return {
                ...state,
                driverDetail: action.payload
            } 

        case FILTER_BY_TEAM:
            const filterByTeam = state.driversGetted.filter(driver => {
                if (Array.isArray(driver.teams)) {
                    return driver.teams.some(team => team.toLowerCase() == action.payload.toLowerCase());                    
                } else if(typeof driver.teams === 'string') {
                    const teamsGetted = driver.teams.split(',').map(team => team.trim().toLowerCase());
                    return teamsGetted.includes(action.payload);
                }
            });
            
            return {
                ...state,
                driversGetted: filterByTeam
            }
        case FILTER_BY_ORIGIN:
            const filterByOrigin = state.drivers.filter(origin => {
                if (action.payload === 'All Origins') {
                    return origin;
                } else if (action.payload === 'Database') {
                    return typeof origin.name === 'string';
                } else {
                    return typeof origin.name === 'object'
                }
            });
            return {
                ...state,
                driversGetted: filterByOrigin
            }
        case ORDER_BY_NAME:
            const driversCopyName = [...state.driversGetted];
            let driversToName;
            
            if (action.payload === 'A-to-Z') { 
                driversToName = driversCopyName.sort((a, b) => {
                    const nameA = typeof a.name === 'string' ? a.name.toLowerCase(): `${a.name}`.toLowerCase();
                    const nameB = typeof b.name === 'string' ? b.name.toLowerCase(): `${b.name}`.toLowerCase();
                    return nameA.localeCompare(nameB);
                })
            } else if (action.payload === 'Z-to-A') {
                driversToName = driversCopyName.sort((a, b) => {
                    const nameA = typeof a.name === 'string' ? a.name.toLowerCase(): `${a.name}`.toLowerCase();
                    const nameB = typeof b.name === 'string' ? b.name.toLowerCase(): `${b.name}`.toLowerCase();
                    return nameB.localeCompare(nameA);
                })
            }
            return {
                ...state,
                driversGetted: driversToName
            }
        case ORDER_BY_DOB:
            const driversCopyDate = [...state.driversGetted];
            let driversToDOB;

            if (action.payload === 'ascendant') {
                driversToDOB = driversCopyDate.sort((a,b) => a.dateofbirth.localeCompare(b.dateofbirth));
            } else if (action.payload === 'descendant') {
                driversToDOB = driversCopyDate.sort((a,b) => b.dateofbirth.localeCompare(a.dateofbirth));
            }
            return {
                ...state,
                driversGetted: driversToDOB
            }
        case RESET_FILTERS: 
            return {
                ...state,
                driversGetted: state.drivers
            } 
        default:
            return { ...state };            
    }
};

export default rootReducer;