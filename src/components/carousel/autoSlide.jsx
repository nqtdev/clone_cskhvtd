import slide1 from 'assets/slide/1.jpg'
import slide2 from 'assets/slide/2.jpg'
import slide3 from 'assets/slide/3.jpeg'
import slide4 from 'assets/slide/4.jpg'
import slide6 from 'assets/slide/6.jpg'

import {Carousel} from 'antd'
const contentStyle = {
  height: '420px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}
const dataSlide = [{img: slide1}, {img: slide2}, {img: slide3}, {img: slide4}, {img: slide6}]
const ShowSlider = () => (
  <Carousel autoplay>
    {dataSlide.map((dataSlide, index) => (
      <div key={index} className='w-full p-3'>
        <h3 style={contentStyle}>
          <img className='w-max' src={dataSlide.img} alt='' />
        </h3>
      </div>
    ))}
  </Carousel>
)
export default ShowSlider
