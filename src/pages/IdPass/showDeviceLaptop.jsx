import {Card} from 'antd'
import dataShowDeviceBathroom from 'data/dataDeviceLaptop'

const ShowDeviceLaptop = () => {
  return (
    <div className='mt-10 '>
      <div className='bg-blue-500 w-1/5 rounded-lg'>
        <p className='p-3 font-roboto text-white'>Thiết bị tiện ích nhà tắm</p>
      </div>
      <div className='grid grid-cols-5 gap-4 mt-4'>
        {dataShowDeviceBathroom.map(device => (
          <Card
            key={device.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt={device.name} src={device.image} />}
            className='border-4'
          >
            <div>
              <h3 className='font-roboto text-sm text-blue-600'>{device.name}</h3>
              <h4 className='font-roboto text-red-500 text-center'>
                {device.price.toLocaleString('vi-VN')}đ
              </h4>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ShowDeviceLaptop
