import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5002/about-us')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setAboutData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>About Me</h2>
      <img src={'https://drive.google.com/uc?export=download&id=15auY3_0YKv48MPuxdkJqZHn7ce9TMcCM'} alt="My Photo" />
      {/* <img src={aboutData.imageUrl} alt="My Photo" /> */}
      <p>{aboutData.name}</p>
      <p>{aboutData.description}</p>
    </div>
  );
}

export default AboutUs;
