import { div } from "framer-motion/client";
import React, {  useState } from "react";
import { useParams } from "react-router-dom";

const InsertTopic = () => {
  const { id } = useParams();

  const [topicName, setTopicName] = useState("");
  const [topicDescription, setTopicDescription] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = async () => {
    const topicData = {
      topic_name: topicName,
      topic_description: topicDescription,
      order: order,
      chapter_id: id,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/topic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topicData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Topic Added Successfully");

        setTopicName("");
        setTopicDescription("");
        setOrder("");
      } else {
        alert("Failed to add topic");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occured while adding topic");
    }
  };
  return (
   <div className="w-full  flex items-center justify-center bg-gray">
      <div className="flex flex-col  w-6/12 p-6 bg-white rounded shadow border border-teal-400">
       
        <div className="mb-4">
          <label
            htmlFor="name"
            className=" text-sm font-medium text-gray-600 mb-1"
          >
            Topic Name
          </label>
          <input
            type="text"
            id="name"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="descrition"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Topic Description
          </label>
          <textarea
            id="description"
            value={topicDescription}
            onChange={(e) => setTopicDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your chapter description"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="order"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Order
          </label>
          <input
            type="number"
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter order number"
            required
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600"
          >
            Submit
          </button>
        </div>
      </div>
      </div>
    
  );
};

export default InsertTopic;
