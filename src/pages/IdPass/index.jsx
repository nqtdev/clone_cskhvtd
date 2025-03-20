import Mota from './mota'
import NavbarDevice from './navbarDevice'
import ShowDevice from './showDevice'
import ShowDeviceLaptop from './showDeviceLaptop'
import ShowDevicePrint from './showDevicePrint'
const IdPassPage = () => {
  return (
    <div className='m-auto mx-10'>
      <section>
        <NavbarDevice />
      </section>
      <section>
        <ShowDevice />
      </section>
      <section>
        <ShowDeviceLaptop />
      </section>
      <section>
        <ShowDevicePrint />
      </section>
      <section>
        <Mota />
      </section>
    </div>
  )
}

export default IdPassPage
