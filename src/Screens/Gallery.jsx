import Card from '../Gallery-Components/Card';
import Appbar from '../Gallery-Components/Appbar';
import Footer from '../components/Footer'

function Gallery() {
  return (
    < >

      <Appbar />
      
      <div className='gredient '>
        <div className='mx-20 pt-10 font-bold border-b-1 border-stone-400'>
          <h1 className='text-6xl raleway '>Gallery</h1>
          <p className='text-lg raleway my-4'>Watch some previous work of our great artists!</p>
        </div>



        <Card />

        <Footer/>


      </div>
    </>
  )
}
export default Gallery