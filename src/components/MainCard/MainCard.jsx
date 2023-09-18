import { iconHeart } from '../../images/icons';
import { Button, FlatButton } from '../Button/Button';
import {
  CardTitle,
  CardWrapper,
  ImgWrapper,
  RowWrapper,
} from './MainCard.styled';

export const MainCard = ({ item }) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={item.img} alt="car" />
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

      <Button className="learnBtn">Learn more</Button>
    </CardWrapper>
  );
};
