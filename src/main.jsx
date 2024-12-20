import { lazy, StrictMode } from "react";
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

//import Dashboard from "./Admin/Dashboard.jsx";
import ManageChapter from "./Admin/ManageChapter.jsx";
import ManageTopic from "./Admin/ManageTopic.jsx";
import ManagePost from "./Admin/ManagePost.jsx";

import Register from "./Auth/Register.jsx";
import Login from "./Auth/Login.jsx";
import Update from "./Admin/Update.jsx";
import ChapterEdit from "./Admin/ChapterEdit.jsx";
import InsertChapter from "./Admin/InsertChapter.jsx";
import InsertTopic from "./Admin/InsertTopic.jsx";
import InsertPost from "./Admin/InsertPost.jsx";
import InsertAuthor from "./Admin/InsertAuthor.jsx";
import ManageAuthor from "./Admin/ManageAuthor.jsx";
import ViewCourse from "./ViewCourse.jsx";

const Dashboard = lazy(() =>
  wait(500).then(() => import("./Admin/Dashboard.jsx"))
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="viewcourse" element={<ViewCourse />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/managecourse" element={<ManageCourse />} />

        <Route path="/admin/managechapter" element={<ManageChapter />} />
        <Route
          path="/admin/insertchapter/:id/:slug"
          element={<InsertChapter />}
        />
        <Route path="/admin/managetopic" element={<ManageTopic />} />
        <Route path="/admin/inserttopic/:id/:slug" element={<InsertTopic />} />
        <Route path="/admin/managepost" element={<ManagePost />} />
        <Route path="/admin/manageauthor" element={<ManageAuthor />} />
        <Route path="/admin/insertpost/:id" element={<InsertPost />} />

        <Route
          path="/admin/insertauthor/:id/:slug"
          element={<InsertAuthor />}
        />
        <Route path="/admin/managecourse/update/:slug" element={<Update />} />
        <Route
          path="/admin/managechapter/chapterEdit/:slug"
          element={<ChapterEdit />}
        />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </>
  )
);

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
