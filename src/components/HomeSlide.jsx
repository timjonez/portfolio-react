import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function HomeSlide(){
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./media/express_lg.png"
          alt="Company blog"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./media/volunteer.png"
          alt="volunteer platform"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./media/inventory_with2.png"
          alt="Inventory Manager"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeSlide;
