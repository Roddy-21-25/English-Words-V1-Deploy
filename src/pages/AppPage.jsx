import { Outlet } from 'react-router-dom';

import Header from '../components/AppSection-items/HeaderHome';
import Navbar from '../components/AppSection-items/Navbar';

function AppPage() {
  return (
    <>
      <Header></Header>
      <div>
        <Navbar></Navbar>
        <Outlet />
      </div>
    </>
  )
}

export default AppPage