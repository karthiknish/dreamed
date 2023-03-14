import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, author, imageUrl, content };
    let res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
return (
  <div className="flex flex-col p-4 gap-4">
    <h1 className="text-center text-4xl font-bold">Create Blog</h1>
    <input
      value={title}
      type="text"
      onChange={(e) => setTitle(e.target.value)}
      className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Title"
    />
    <input
      value={author}
      type="text"
      onChange={(e) => setAuthor(e.target.value)}
      className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Author"
    />

    <input
      value={imageUrl}
      type="text"
      onChange={(e) => setImageUrl(e.target.value)}
      className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Image URL"
    />
    <textarea
      value={content}
      type="text"
      onChange={(e) => setContent(e.target.value)}
      className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder="Content"
    />
    <button onClick={handleSubmit}>Submit</button>
  </div>
);
}

export default Create;
