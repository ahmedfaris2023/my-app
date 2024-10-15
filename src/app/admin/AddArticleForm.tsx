"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title is required");
    if (description === "") return toast.error("Description is required");
    console.log({ title, description });
    toast.success("secces");
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        type="text"
        className="mb-4 border rounded p-2 text-xl"
        placeholder="Enter Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 p-2 lg:text-xl rounded resize-none"
        rows={5}
        placeholder="Enter Article Description"
        value={description}
      ></textarea>
      <button
        type="submit"
        className="text-2xl text-white bg-blue-700 hover:bg-blue-900  p-2 rounded-lg font-bold"
        onChange={(e) => setDescription(e.target.value)}
      >
        add
      </button>
    </form>
  );
};

export default AddArticleForm;
