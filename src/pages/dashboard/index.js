import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import { useSession } from "next-auth/react";
function Index() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    const getForm = async () => {
      if (session && !loading) {
        const userEmail = session.user.email;
        await fetch(`/api/student?email=${userEmail}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((d) => {
            if (!d.data.length && d.success === true) {
              Router.push("/dashboard/info");
            }
          });
      }
    };

    getForm();
  }, [session, loading]);

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
