import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import Card from '../card/Card';
import styles from './Cards.module.css';

export default function Cards({ onSearch, drivers, getAllDrivers }) {
    return (
        <section>

            <div className='cardContainer' style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly"
            }}>
                {
                    !drivers.length
                        ? <h2>No se han seleccionado Drivers</h2>
                        : drivers.map(driver => (
                            <Card
                                key={driver.id}
                                id={driver.id}
                                image={driver.image}
                                name={driver.name}
                                lastname={driver.lastname}
                                teams={driver.teams ? driver.teams.map(team => team.trim()).join(', '): []}
                            />
                        ))
                }
            </div>
        </section>
    )
}