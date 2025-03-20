import view1 from 'assets/slideview/1.jpg'
import view2 from 'assets/slideview/2.jpg'
import view3 from 'assets/slideview/3.jpg'
import view4 from 'assets/slideview/4.jpg'
import view5 from 'assets/slideview/5.jpg'

const dataView = [{img: view1}, {img: view2}, {img: view3}, {img: view4}, {img: view5}]
const ViewDevice = () => {
  return (
    <>
      {dataView.map((dataView, index) => (
        <div key={index} className='p-3 w-full'>
          <img src={dataView.img} className='w-full' />
        </div>
      ))}
    </>
  )
}

export default ViewDevice
