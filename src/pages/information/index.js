import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Info from "./info";
function Index() {
  return (
    <>
      <Head>
        <title>Your Info</title>
      </Head>
      <Info></Info>
    </>
  );
}

export default Index;
