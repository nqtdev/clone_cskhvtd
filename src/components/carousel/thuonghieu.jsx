import img1 from 'assets/thuonghieu/1 (1).jpeg'
import img2 from 'assets/thuonghieu/1 (2).jpeg'
import img3 from 'assets/thuonghieu/1 (3).jpeg'
import img4 from 'assets/thuonghieu/1 (4).jpeg'
import img5 from 'assets/thuonghieu/1 (5).jpeg'
import img6 from 'assets/thuonghieu/1 (6).jpeg'

const data = [{img: img1}, {img: img2}, {img: img3}, {img: img4}, {img: img5}, {img: img6}]
const Thuonghieu = () => {
  return (
    <div className='my-4'>
      <div className='bg-green-200 w-full'>
        <h3 className='text-xl font-bold p-2 text-blue-600 '>Các thương hiệu lớn</h3>
      </div>
      <div className='flex items-center justify-center'>
        {data.map((data, index) => (
          <div key={index}>
            <div>
              <img src={data.img} className='w-44 p-2' alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Thuonghieu
