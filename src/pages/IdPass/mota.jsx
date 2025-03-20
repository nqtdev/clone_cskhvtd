import payment from 'assets/payment.png'
const Mota = () => {
  const data = [
    {text: 'Chính sách thanh toán'},
    {text: 'Chính sách vận chuyển'},
    {text: 'Chính sách Bảo Mật Thông Tin'},
    {text: 'Chính sách xử lý khiếu nại'},
    {text: 'Chính sách bảo hành'},
    {text: 'Chính sách kiểm hàng'},
    {text: 'Chính sách đổi trả và hoàn tiền'},
  ]
  const data2 = [
    {text: 'Gia dụng tiện ích - Ecoco'},
    {text: 'Gia dụng tiện ích - Kyta'},
    {text: 'Thiết bị gia dụng - Seka'},
    {text: 'Thiết bị gia dụng - Aulux'},
    {text: 'Gia dụng tiện ích - Oenon'},
    {text: 'Thiết bị gia dụng - Relax'},
  ]
  return (
    <div className='flex justify-between my-4'>
      <div>
        <p className='text-red-500 text-lg font-roboto hover:text-blue-500 m-2'>
          Hỗ trợ - Chính sách
        </p>
        {data.map((data, index) => (
          <div key={index}>
            <p className='text-black font-roboto hover:text-blue-500 m-2 cursor-pointer'>
              {data.text}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className='text-red-500 text-lg font-roboto hover:text-blue-500 m-2'>
          Hỗ trợ - Chính sách
        </p>
        {data2.map((data2, index) => (
          <div key={index}>
            <p className='text-black font-roboto hover:text-blue-500 m-2 cursor-pointer'>
              {data2.text}
            </p>
          </div>
        ))}
      </div>
      <div className='col-span-1'>
        <p className='text-red-500 text-lg font-roboto hover:text-blue-500 m-2'>
          Các phương thức thanh toán
        </p>
        <img className='w-3/5' src={payment} alt='' />
      </div>
    </div>
  )
}

export default Mota
