import React from 'react';
import { useEffect, useState } from 'react';
import { MainCard } from '../components/MainCard/MainCard';
import FiltersBar from '../components/FiltersBar/FiltersBar';
import { useDispatch, useSelector } from 'react-redux';
import {getCarList} from "../redux/cars/carsSelectors"
import carsOperation from "../redux/cars/carsOperations"
// import cars from "../cars.json"
import { Gallery } from './Page.styled';


const Catalogue = () => {
  const dispatch = useDispatch();
  
  // const { language } = useAll();
  // const [lang, setLang] = useState(langUA);
  const carsList = useSelector(getCarList);
  console.log(carsList);

  useEffect(() => {
    dispatch(carsOperation.getAllCars());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="wrapper">
      <FiltersBar />
      <Gallery className='gallery'>
        {carsList.map((item, index) =>
        
          <MainCard key={index} item={item} />
        )}
      </Gallery>
    </div>
  );
};

export default Catalogue;
