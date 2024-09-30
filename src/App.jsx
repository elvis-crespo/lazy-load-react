import './App.css'
import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import landscapePlaceholder from './assets/landscapePlaceholder.svg'
import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  const API_KEY = "YOUR API KEY HERE!!!";
  
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => setPhotos(json.photos));
  }, [])

  return (
    <>
    <img src="" alt="" />
      <h1>Mars Photos</h1>
      <div className="photos">
        {photos.map((photo) => (
          <div key={photo.id}>
            <LazyLoadImage
              src={photo.img_src}
              alt={photo.id}
              width={300}
              height={300}
              placeholderSrc={landscapePlaceholder}
              effect='opacity'
              threshold={10}
              onLoad={() => console.log('image loaded')}
              wrapperClassName='photo'
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App
