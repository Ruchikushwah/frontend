import { div, param } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Description from "./Description";
import { useParams } from "react-router-dom";
import Image from "./Image";

const Update = () => {
  const { id } = useParams();
  const [record, setRecord] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}`);
        const data = await response?.json();
        setRecord(data.data);
        
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  

  return (
    <div className="grid grid-cols-2 gap-4  px-6 py-4 w-full">
      <Title label="title" field={record.title} />
      <Description label="Description" field={record.Description}/>
      <Image label="image" field={record.Image}/>
    </div>
  );
};

export default Update;
