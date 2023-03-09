import { useEffect, useState } from "react";
function Id() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let arr = window.location.pathname.split("/");
    let val = arr.pop();
    console.log(val);
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
  return <div>{console.log(data)}</div>;
}

export default Id;
