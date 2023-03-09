import { useEffect, useState } from "react";
import Head from "next/head";
function Id() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let arr = window.location.pathname.split("/");
    let val = arr.pop();
    const res = await fetch(`/api/contact?id=${val}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((d) => setData(d.data));
  };
  useEffect(() => {
    return () => {
      getData();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Individual customer data</title>
      </Head>
      <div className="p-4 bg-slate-100">
        <p>Name: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.name}</h1>
        <p>Email: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.email}</h1>
        <p>Phone: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.phone}</h1>
        <p>Qualification: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.qualify}</h1>
        <p>Degree type: </p>
        <h1 className="text-4xl font-semibold text-gray-800">
          {data.degreetype}
        </h1>
        <p>Date of Birth: </p>
        <h1 className="text-4xl font-semibold text-gray-800">
          {Date(data.dob).slice(0, 16)}
        </h1>
        <p>CGPA or %: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.cgpa}</h1>
        <p>Backlogs: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.backlog}</h1>
        <p>Interested Countries: </p>
        <h1 className="text-4xl font-semibold text-gray-800">
          {data?.countries?.map((c) => (
            <div key={c} className="flex">
              {c}
            </div>
          ))}
        </h1>
        <p>Visa: </p>
        <h1 className="text-4xl font-semibold text-gray-800">{data.visa}</h1>
        <p>Schedule Meeting date and Time: </p>
        <h1 className="text-4xl font-semibold text-gray-800">
          {Date(data.time).slice(0, 21)}
        </h1>
      </div>
    </>
  );
}

export default Id;
