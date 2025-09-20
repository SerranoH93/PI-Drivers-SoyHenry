import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDrivers, getTeams } from '../../redux/actions';
import './Home.modules.css';
import Cards from '../cards/Cards';
import NavBar from '../navbar/NavBar';
import Pagination from '../pagination/Pagination';
import SearchBar from '../searchbar/SearchBar';
import Filters from '../filters/Filters';



const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.driversGetted);  

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [])

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const driversToShow = drivers.slice(startIndex, endIndex);




  return (
    <div >
      <div >
        <NavBar />
        <hr />
        <SearchBar />
        <hr />
        <Filters />
      </div>
      <div>
        <Cards drivers={driversToShow} />
      </div>
      <div>
        <Pagination currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={setPageSize}
        totalItems={drivers.length} />
      </div>
    </div>
  )
}

export default Home