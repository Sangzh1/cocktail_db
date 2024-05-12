import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
        <Navbar/>
        <main className='max-container'>
            <Outlet/>
        </main>
    </>
  )
}

export default RootLayout