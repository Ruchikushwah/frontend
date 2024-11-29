import React, { Suspense } from "react";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { BeatLoader } from "react-spinners";
import { div } from "framer-motion/client";

const AdminLayout = () => {
  return (
    <>
      <div className="h-screen w-full">
        <AdminHeader />
        <div className="">
          <div className="flex">
            <Sidebar />

            <Suspense
              fallback={
                
                  <BeatLoader color="#1fd3d1" className=" flex justify-center items-center flex-1 " />
                
              }
            >
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
