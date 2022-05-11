
import {Carousel} from 'antd';
import { useState } from 'react';


export default function App() {
  
  const [dotPosition, setDotPosition] = useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <>

      <Carousel dotPosition={dotPosition}>
              <img width='100%' src={process.env.PUBLIC_URL + '/ilustraciones/1.jpg'} alt="imagen 1" />
              <img width='100%' src={process.env.PUBLIC_URL + '/ilustraciones/2.png'} alt="imagen 1" />
              <img width='100%' src={process.env.PUBLIC_URL + '/ilustraciones/3.jpg'} alt="imagen 1" />
              <img width='100%' src={process.env.PUBLIC_URL + '/ilustraciones/4.jpg'} alt="imagen 1" /> 
      </Carousel>



    </>
  );
}
 
