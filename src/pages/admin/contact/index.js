import { useEffect, useState } from "react";
import Router from "next/router";
function Index() {
  useEffect(() => {
    const getContact = async () => {
      try {
        await fetch("/api/contact", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((d) => {
            console.log(d.data);
            if (d.data !== null) {
              setData(d.data);
            }
          });
      } catch (e) {
        console.log(e);
      }
    };

    return () => {
      getContact();
    };
  }, []);
  const [data, setData] = useState([]);
  return (
    <div className="p-4">
      <h1 className="text-6xl font-bold text-gray-700 justify-center text-center p-2">
        All Contacts
      </h1>
      {data.map((d) => (
        <button
          onClick={() => Router.push(`/admin/contact/${d._id}`)}
          className="w-full border-2 rounded p-2 text-left hover:bg-slate-100 transition-colors duration-300 "
          key={d._id}
        >
          <p className="text-2xl">{d.name}</p>
          <p>{d.email}</p>
        </button>
      ))}
    </div>
  );
}

export default Index;
