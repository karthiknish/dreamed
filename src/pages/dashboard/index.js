import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
function Index() {
  useEffect(() => {
    const getForm = async () => {
      await fetch("/api/student", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((d) => {
          if (!d.data.length && d.success === true) {
            Router.push("/dashboard/info");
          }
        });
    };

    getForm();
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div></div>
    </>
  );
}

export default Index;
