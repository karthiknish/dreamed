import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
function Index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getContact();
  }, []);
  async function getContact() {
    try {
      const response = await fetch("/api/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.data !== null) {
        setData(result.data);
      }
    } catch (e) {
      console.error("Error fetching contacts:", e);
    }
  }

  async function deleteContact(id) {
    console.log(id);
    try {
      await fetch(`/api/contact?id=${id}`, {
        method: "DELETE",
      });
      // Refresh the contact list after deletion
      getContact();
    } catch (e) {
      console.error("Error deleting contact:", e);
    }
  }

  return (
    <>
      <Head>
        <title>All Contacts</title>
      </Head>
      <div className="p-4 min-h-screen   flex flex-col gap-2">
        <h1 className="text-6xl font-bold text-gray-700 justify-center text-center p-2">
          All Contacts
        </h1>
        {data?.map((d) => (
          <div
            className="w-full border-2 rounded p-2 text-left hover:bg-slate-100 transition-colors duration-300 flex justify-between items-center"
            key={d._id}
          >
            <button
              className="flex flex-col"
              onClick={() => Router.push(`/admin/contact/${d._id}`)}
            >
              <p className="text-2xl">{d.name}</p>
              <p>{d.email}</p>
            </button>
            <button
              onClick={() => deleteContact(d._id)}
              className="bg-red-500 z-10 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Index;