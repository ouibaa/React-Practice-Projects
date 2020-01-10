import React, { useState, useEffect } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  const [dogLinks, setDogLinks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random/10");
      const res = await result.json();
      setDogLinks(res.message);
      setLoading(false);
    };

    fetchDogs();
  }, []);

  // console.log(dogLinks); //checking to make sure the dogs show up

  return (
    <div className="DogCarousel">
      {loading ? (
        <div>...Loading</div>
      ) : (
        <Carousel>
          {dogLinks.map(dog => {
            const dogData = dog.split("/")[4];

            return (
              <div key={dog}>
                <img src={dog}></img>
                <p className="legend">Breed: {dogData}</p>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default App;
