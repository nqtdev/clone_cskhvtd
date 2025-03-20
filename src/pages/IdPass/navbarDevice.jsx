import dienmay from 'assets/iconnavbar/Dienmay-36x24.jpeg'
import nhabep from 'assets/iconnavbar/nhabep-1-30x36.jpeg'
import nhatam from 'assets/iconnavbar/nhacua-36x34.jpeg'
import nhacua from 'assets/iconnavbar/Suckhoe-36x34.jpeg'
import cssk from 'assets/iconnavbar/Tam-36x31.jpeg'
import ShowSlider from 'components/carousel/autoSlide'
import TagSearch from 'components/carousel/tagSearch'
import ViewDevice from 'components/carousel/viewDevice'
import BannerSale from 'assets/homePage/Baner-1.jpeg'
import Thuonghieu from 'components/carousel/thuonghieu'
import img1 from 'assets/slide/6.jpg'
import img2 from 'assets/slide/4.jpg'

const categories = [
  {img: dienmay, label: 'Điện máy gia dụng'},
  {img: nhabep, label: 'Tiện ích nhà bếp'},
  {img: nhatam, label: 'Tiện ích nhà tắm'},
  {img: nhacua, label: 'Nhà cửa và Đời sống'},
  {img: cssk, label: 'Chăm sóc sức khoẻ'},
]

const NavbarDevice = () => {
  return (
    <div>
      <div className='grid grid-cols-6 text-center rounded-md gap-2'>
        <div className='flex items-center'>
          <p className='font-semibold'>Danh Mục Sản Phẩm</p>
        </div>
        {categories.map((category, index) => (
          <div
            key={index}
            className='flex justify-around items-center border-2 border-blue-400 rounded-lg hover:border-red-400 !p-0'
          >
            <img src={category.img} alt={category.label} className='w-10 p-1' />
            <p className='font-semibold text-[1rem] text-blue-700 text-left'>{category.label}</p>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-3'>
        <div className='col-span-2'>
          <ShowSlider />
          <div>
            <TagSearch />
          </div>
          <div className='mt-4'>
            <img src={BannerSale} alt='' />
          </div>
          <Thuonghieu />
          <div className='mt-4'>
            <img src={img1} alt='' />
          </div>
          <div className='mt-4'>
            <img src={img2} alt='' />
          </div>
        </div>
        <div className='col-span-1'>
          <ViewDevice />
        </div>
      </div>
    </div>
  )
}

export default NavbarDevice
