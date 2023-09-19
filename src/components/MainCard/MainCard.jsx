import { iconHeart } from '../../images/icons';
import { Button, FlatButton } from '../Button/Button';
import {
  CardTitle,
  CardWrapper,
  ImgWrapper,
  RowWrapper,
} from './MainCard.styled';
import ModalPopup from "../ModalPopup/ModalPopup";
import { useState } from 'react';

export const MainCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const carImg= item.img || item.photoLink
  
  console.log(item.photoLink);
  const onModalClose = () => {
    setShowModal(false);
};

const onModalOpen = () => {
    setShowModal(true);
};

  return (
    <CardWrapper>
      <ImgWrapper style={{
      backgroundImage: `url(${carImg})`,
       backgroundPosition: "center",
       backgroundSize:"cover",
       backgroundRepeat:"no-repeat"}}>
        <FlatButton className="likeBtn">{iconHeart}</FlatButton>
      </ImgWrapper>
      <CardTitle>
        <p>
          {item.make}, {item.year}
        </p>
        <p>{item.rentalPrice}</p>
      </CardTitle>

      <RowWrapper>
        <p>{item.address.split(' ')[3].replace(/,/g, '')}</p>
        <p>{item.address.split(' ')[4].replace(/,/g, '')}</p>

        <p>{item.rentalCompany}</p>
        
        <p>{item.accessories[0].includes("Premium") || 
        item.accessories[1].includes("Premium") ||
        item.accessories[2].includes("Premium")? "Premium" : " "}</p>
      </RowWrapper>

      <RowWrapper>
        <p>{item.type}</p>
        <p>{item.make}</p>
        <p>{item.mileage}</p>
        <p>{item.rentalCompany}</p>
      </RowWrapper>

      <Button 
            onClick={onModalOpen }
            className="learnBtn">
            Learn more</Button>

            {showModal && (
                <ModalPopup
                    onClose={onModalClose}
                    isOpen={showModal}
                    // image={item.img}
                    objectCar={item}
                />
            )}
    </CardWrapper>
  );
};
