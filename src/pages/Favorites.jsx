import { useDispatch, useSelector } from "react-redux";
import { getCarList, getFavorites, getCarRerender } from "../redux/cars/carsSelectors";
import { useEffect, useState } from "react";
import { CatalogueWrapper, Gallery } from "./Page.styled";
import { MainCard } from "../components/MainCard/MainCard";
import { Button } from "../components/Button/Button";
import carsOperation from "../redux/cars/carsOperations"






const Favorites = () => {

  const dispatch = useDispatch();
  const carsList = useSelector(getCarList);
  const reRender= useSelector(getCarRerender)
  const favorites = useSelector(getFavorites)
  const [visibleCars, setVisibleCars] = useState(12); 
  const loadMoreStep = 8; 

  
  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + loadMoreStep);
  };

  useEffect(() => {

    dispatch(carsOperation.getAllCars());
  }, [dispatch, reRender]);

  return (
    <CatalogueWrapper>
       <Gallery className='gallery'>
        {carsList
        .filter((item) => item.favorite === true)
        .slice(0, visibleCars)
        .map((item, index) =>

         <MainCard key={index} item={item} /> 
        )}
      </Gallery>


   { (favorites > visibleCars) && (
        <Button 
        className='LoadMore'
        onClick={handleLoadMore}>Load More</Button>
      )} 

    </CatalogueWrapper>
  )
}

export default Favorites