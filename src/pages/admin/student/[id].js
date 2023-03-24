import { useEffect, useState } from "react";
import Head from "next/head";

function Id() {
  const [data, setData] = useState(null);

  const getData = async () => {
    let arr = window.location.pathname.split("/");
    let val = arr.pop();
    const res = await fetch(`/api/student?id=${val}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d.data);
        setData(d.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Individual Student data</title>
      </Head>
      {data ? (
        <div className="p-4 min-h-screen flex flex-col items-center gap-4 bg-slate-100">
          <h1 className="text-4xl font-semibold text-gray-800">{data?.name}</h1>
          <p>
            Email:<span className="font-medium"> {data?.email}</span>
          </p>
          <p>
            Phone: <span className="font-medium">{data?.phone}</span>
          </p>
          <p>
            Qualification: <span className="font-medium">{data?.qualify}</span>
          </p>
          <p>
            Degree: <span className="font-medium">{data?.degreetype}</span>
          </p>
          <p>
            Date of Birth:{" "}
            <span className="font-medium">
              {new Date(data?.dob).toLocaleDateString()}
            </span>
          </p>
          <p>
            CGPA: <span className="font-medium">{data?.cgpa}</span>
          </p>
          <p>
            Backlog: <span className="font-medium">{data?.backlog}</span>
          </p>
          <p>
            Preferred Countries:{" "}
            <span className="font-medium">{data?.countries.join(", ")}</span>
          </p>
          <p>
            Visa Status:{" "}
            <span className="font-medium">{data?.visabool ? "Yes" : "No"}</span>
          </p>
          <p>
            Visa: <span className="font-medium">{data?.visa}</span>
          </p>
          <p>
            Course 1:{" "}
            <span className="font-medium">
              {data?.course1.category}, {data?.course1}
            </span>
          </p>
          <p>
            Course 2:{" "}
            <span className="font-medium">
              {data?.course2.category}, {data?.course2.program}
            </span>
          </p>
          <p>
            IELTS Status:{" "}
            <span className="font-medium">
              {data?.ieltsbool ? "Yes" : "No"}
            </span>
          </p>
          <p>
            IELTS: <span className="font-medium">{data?.ielts}</span>
          </p>
          <p>
            GRE Status:{" "}
            <span className="font-medium">{data?.grebool ? "Yes" : "No"}</span>
          </p>
          <p>
            GRE: <span className="font-medium">{data?.gre}</span>
          </p>
          <p>
            English Score: <span className="font-medium">{data?.english}</span>
          </p>
          <p>
            Preferred Contact Date:{" "}
            <span className="font-medium">
              {new Date(data?.time).toLocaleDateString()}
            </span>
          </p>
          <p>
            Status: <span className="font-medium">{data?.status}</span>
          </p>
        </div>
      ) : (
        <div className="p-4 min-h-screen flex flex-col items-center gap-4 bg-slate-100">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default Id;
