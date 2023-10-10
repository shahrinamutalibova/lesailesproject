import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '320px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};
const imgStyle = {
    margin: 0,
    height: '320px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    width:"95%",
    margin:"auto",
    borderRadius:"10px"
  };
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}><img style={imgStyle} src="https://images.uzum.uz/ckbcm5kjvf2kdov68lcg/main_page_banner.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img style={imgStyle} src="https://images.uzum.uz/cke130cvutv73otrju9g/main_page_banner.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img style={imgStyle}   src="https://images.uzum.uz/ckbcq6rk9fq1var6vi1g/main_page_banner.jpg" alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img  style={imgStyle}  src="https://images.uzum.uz/ckdqqokjvf2v2soud7ug/main_page_banner.jpg" alt="" /></h3>
      </div>
    </Carousel>
  );
};
export default App;