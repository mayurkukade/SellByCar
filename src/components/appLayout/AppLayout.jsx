
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
      
    </>
  )
}

export default AppLayout
