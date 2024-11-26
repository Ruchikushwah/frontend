import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'


const AdminLayout = () => {
    return (
        <>

            <div className="h-screen w-full">
            <AdminHeader />
               <div className=''>
               <div className="flex">  
                    <Sidebar/>
                
                    <Outlet />
                </div>
               </div>
            </div>


        </>


    )
}

export default AdminLayout