import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home/Home.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import ManageCourse from "./Admin/ManageCourse.jsx";
import Dashboard from "./Admin/Dashboard.jsx";
import ManageChapter from "./Admin/ManageChapter.jsx";
import ManageTopic from "./Admin/ManageTopic.jsx";
import ManagePost from "./Admin/ManagePost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="managecourse" element={<ManageCourse />} />
        <Route path="managechapter" element={<ManageChapter />} />
        <Route path="managetopic" element={<ManageTopic />} />
        <Route path="managepost" element={<ManagePost />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
