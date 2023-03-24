import { useEffect, useState } from "react";
import Head from "next/head";
import Markdown from "../../../../components/Markdown";
import { useRouter } from "next/router";
function Edit() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    const getData = async () => {
      if (id) {
        let res = await fetch(`/api/blog?id=${id}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((d) => {
            if (d?.success) {
              setTitle(d?.data?.title);
              setAuthor(d?.data?.author);
              setImageUrl(d?.data?.imageUrl);
              setContent(d?.data?.content);
            }
          });
      }
    };
    getData();
  }, [router]);
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const { id } = router.query;
    const data = { id, title, author, imageUrl, content };
    try {
      let res = await fetch(`/api/blog?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      console.log(res);
      if (res.success) {
        router.push(`/admin/blog`);
      } else {
        console.error(res.error);
      }
    } catch (error) {
      // Handle network error
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Edit Blog</title>
      </Head>
      <div className="flex flex-col p-4 gap-4 mx-10">
        <h1 className="text-center text-4xl font-bold">Edit Blog</h1>
        <label htmlFor="title">Title</label>
        <input
          value={title || ""}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Title"
        />
        <label htmlFor="author">Author</label>
        <input
          value={author || ""}
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Author"
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          value={imageUrl || ""}
          type="text"
          onChange={(e) => setImageUrl(e.target.value)}
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Image URL"
        />
        <Markdown
          key={content}
          content={content || ""}
          setContent={setContent}
        />

        <button
          className="bg-blue-500 p-4 text-white rounded-lg shadow-lg hover:bg-blue-700"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </>
  );
}

export default Edit;
