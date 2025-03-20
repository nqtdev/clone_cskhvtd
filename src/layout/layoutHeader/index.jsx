import {Navbar} from 'flowbite-react'
import {NavLink} from 'react-router-dom'
import logo from '/favicon/1.png'
import {Input} from 'antd'
const {Search} = Input
const onSearch = (value, _e, info) => console.log(info?.source, value)
const LayoutHeader = () => {
  // Quản lý trạng thái mở/đóng của menu

  return (
    <div className='mb-20 '>
      <header className='fixed left-0 top-0 !z-10 w-full !bg-blue-400'>
        <Navbar fluid className='m-auto !p-1 xl:w-[85%] xxl:w-3/4 bg-blue-400'>
          {/* Logo HTC Software */}
          <Navbar.Brand to='/' as={NavLink}>
            <img src={logo} className='w-1/2' alt='HTC Software Logo' />
          </Navbar.Brand>
          {/* Menu Collapse */}
          <Navbar.Collapse>
            <Search
              placeholder='Bạn cần tìm gì ..? '
              allowClear
              enterButton='Tìm kiếm'
              size='large'
              onSearch={onSearch}
            />
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  )
}

export default LayoutHeader
