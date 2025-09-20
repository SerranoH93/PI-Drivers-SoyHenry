import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDriverById } from '../../redux/actions';
import styles from './Detail.module.css';
import NavBar from '../navbar/NavBar';


const DetailPage = () => {
  const defaultPhoto = 'https://img.freepik.com/fotos-premium/hermoso-piloto-carreras-traje-carreras-ilustracion-imagenes-predisenadas-acuarela_962764-33747.jpg';
  const { id } = useParams();
  const dispach = useDispatch();
  const driverDetails = useSelector(state => state.driverDetail);

  useEffect(() => {
    dispach(getDriverById(id));
    
  }, [id]);

  return (
    <div>
      <NavBar />
      <hr />
      <h1>Detalles</h1>
      <h2>{driverDetails.name} {driverDetails.lastname}</h2>
      
        <div>
          <img src={driverDetails.image || defaultPhoto} alt={`imagen de ${driverDetails.name}`} />
          <p>ID: {driverDetails.id}</p>
          <p>Nombre: {driverDetails.name}</p>
          <p>Apellido: {driverDetails.lastname}</p>
          <p>Nacionalidad: {driverDetails.nationality}</p>
          <p>Fecha de nacimiento: {driverDetails.dateofbirth}</p>
          <p>Teams: {driverDetails.teams ? driverDetails.teams.map(team => team.trim()).join(', '): []}</p>
          <p>Descripcion: {driverDetails.description || 'No hay descripción disponible'}</p>
        </div>
      
    </div>
  );
}

export default DetailPage