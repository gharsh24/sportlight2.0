import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Upcoming() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h1 className="text-center mx-auto mb-4" style={{ fontWeight: "700" ,fontFamily:"'Titillium Web','sans-serif' "}}>
        Upcoming Sports Events
      </h1>
      <br/>
      <br/>
      <br/>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "5%",
        }}
      >
        <div
          className="carousel-container "
          style={{
            width: "450px",
            marginRight: "12rem",
          }}
        >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.vox-cdn.com/thumbor/Z2r_nGzwTwEYxdiVmhdqQS2VRPo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24674557/FwfGkJDWAAIzCqa.jpeg"
                alt="First slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://staticc.sportskeeda.com/editor/2023/05/e7ac9-16850305545304-1920.jpg"
                alt="Second slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/UFC_290_poster.jpg/220px-UFC_290_poster.jpg"
                alt="Third slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          className="carousel-container "
          style={{
            width: "450px",
            marginRight: "12rem",
          }}
        >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.nineforbrands.com.au/wp-content/uploads/2023/04/01_Cover_V2-1.png"
                alt="First slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i1.sndcdn.com/artworks-7vHW1UJEL7YbayNX-AbzUwA-t500x500.jpg"
                alt="Second slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/Fuk-c4vWAAA9bGp.jpg:large"
                alt="Third slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          className="carousel-container "
          style={{
            width: "450px",
            marginRight: "12rem",
          }}
        >
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://prod-printler-front-as.azurewebsites.net/media/photo/129944.jpg?mode=crop&width=727&height=1024&rnd=0.0.1"
                alt="First slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://pbs.twimg.com/media/FznQM75WIAEgfZD.jpg"
                alt="Second slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3></h3>
                <p>.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/2023_SEA_Games_logo.svg/1200px-2023_SEA_Games_logo.svg.png"
                alt="Third slide"
                style={{
                  width: "100%",
                  height: "400px" /* Adjust the height as needed */,
                  objectFit: "cover",
                }}
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
