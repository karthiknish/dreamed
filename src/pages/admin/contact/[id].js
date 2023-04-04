import { useEffect, useState } from "react";
import Head from "next/head";
function Id() {
  const [data, setData] = useState([]);
const [create, setCreate] = useState("");
const fetchData = async () => {
  try {
    let arr = window.location.pathname.split("/");
    let val = arr.pop();
    const encodedVal = encodeURIComponent(val);
    const res = await fetch(`/api/contact?id=${encodedVal}`, {
      headers: { "Content-Type": "application/json" },
    });
    const d = await res.json();
    setData(d.data);
    if (data) {
      const date = new Date(data.createdAt);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCreate(new Intl.DateTimeFormat("en-US", options).format(date));
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


useEffect(() => {
  fetchData();
}, [data]);
return (
  <>
    <Head>
      <title>Individual Query data</title>
    </Head>

    <div className="p-4 min-h-scree flex flex-col items-center gap-4 bg-slate-100 min-h-screen">
      <p>Name: </p>
      <h1 className="text-4xl font-semibold text-gray-800">{data.name}</h1>
      <p>Email: </p>
      <h1 className="text-4xl font-semibold text-gray-800">{data.email}</h1>
      <p>Phone: </p>
      <h1 className="text-4xl font-semibold text-gray-800">{data.phone}</h1>
      <p>Query: </p>
      <h1 className="text-4xl font-semibold text-gray-800">{data.query}</h1>
      <p>Enquiry on: </p>
      <h1 className="text-4xl font-semibold text-gray-800">{create}</h1>
    </div>
  </>
);
}

export default Id;
