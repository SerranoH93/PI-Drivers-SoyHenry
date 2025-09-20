import React from 'react';
import styles from "./Card.module.css"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ id, image, name, lastname, teams }) {
    const defaultImg = 'https://img.freepik.com/fotos-premium/hermoso-piloto-carreras-traje-carreras-ilustracion-imagenes-predisenadas-acuarela_962764-33747.jpg'


    return (
        
        <div style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "15px",
        }}
        >
            <Link to={`/detail/${id}`}>
                <img src={image || defaultImg} alt={name} style={{with: "10px", height: "150px" }}/>
            </Link>
            <h2>Name: {name} {lastname} </h2>
            <h3>Teams: {teams}</h3>
        </div>
    );
}
