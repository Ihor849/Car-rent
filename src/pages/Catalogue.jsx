import React from 'react';
import { useEffect, useState } from 'react';
import { MainCard } from '../components/MainCard/MainCard';
import FiltersBar from '../components/FiltersBar/FiltersBar';
import { useDispatch, useSelector } from 'react-redux';
import {getCarList, getCarRerender} from "../redux/cars/carsSelectors"
import carsOperation from "../redux/cars/carsOperations"
// import cars from "../cars.json"
import { CatalogueWrapper, Gallery } from './Page.styled';
import { Button } from '../components/Button/Button';
import { getFilter } from '../redux/selectors';
import { resetFilters } from '../redux/filterSlice';


const Catalogue = () => {
  const carsList = useSelector(getCarList);

  const [visibleCars, setVisibleCars] = useState(8);
  const [searchedCars, setSearchedCars] = useState(carsList)
  const [isSeaching, setIsSeaching] = useState(false)

  const dispatch = useDispatch();
  const reRender= useSelector(getCarRerender)
  const loadMoreStep = 8; 

  const {
    filterBrand, 
    filterPrice,
    filterFrom,
    filterTo
  } = useSelector(getFilter)

  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + loadMoreStep);
  };

  const filterdCars = [...carsList
    .filter(item => ( filterBrand === "" ? true : item.make.toLowerCase() === filterBrand.toLowerCase() ))
    .filter(item => ( filterPrice === 0  ? true : Number(item.rentalPrice.replace(/\$/g, "")) <= filterPrice ))
    .filter(item => (filterFrom === "" || filterTo === "" ? true : item.mileage >= filterFrom*1000  && item.mileage <= filterTo*1000 ))
  ]

  const reset =() => {
    dispatch(resetFilters())
    setIsSeaching(false)
   }
  useEffect(() => {
    dispatch(carsOperation.getAllCars());
  
  }, [dispatch, reRender]);
  
  const carSearch = () => {
    setSearchedCars(filterdCars)
    setIsSeaching(true)
   }
  

  return (
    <CatalogueWrapper className="wrapper">
      <FiltersBar
       reset={reset}
    search={carSearch} />
       <Gallery className='gallery'>
        {isSeaching 
        ? (searchedCars
        .slice(0, visibleCars)
        .map((item, index) =>
         <MainCard key={index} item={item} />
        ))
        : (carsList
          .slice(0, visibleCars)
          .map((item, index) =>
           <MainCard key={index} item={item} />
          ))
      }
      </Gallery>
      { ( !isSeaching && visibleCars < carsList.length  )  && (
        <Button 
        className='LoadMore'
        onClick={handleLoadMore}>Load More</Button>
      )}
    </CatalogueWrapper>
  );
};

export default Catalogue;
