import { HomeTitle, HomeWrapper } from "./Page.styled";
import car from '../images/grand-cherokee-trailhawk (1).png'

export default function Home() {


    return (
      <HomeWrapper  >
        <HomeTitle  >
         BEST CAR FOR RENT TODAY
        </HomeTitle>
        <img src={car} alt="car"/>

      </HomeWrapper>
    );
  }