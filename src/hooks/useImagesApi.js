import { useEffect, useState } from 'react';

const useImagesApi = (url) => {
  const [image, setImages] = useState([]);
  
  useEffect(() => {
    window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);
  return image;
};

export default useImagesApi;
