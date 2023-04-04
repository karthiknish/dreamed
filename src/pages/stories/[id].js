import { useEffect, useState } from "react";

import Image from "next/image";
import Head from "next/head";

function Id({ data }) {
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={data?.title} />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.title} />
        <meta property="og:image" content={data?.imageUrl} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://dreamedconsultancy.com/stories/${data?._id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.title} />
        <meta name="twitter:image" content={data?.imageUrl} />

        <meta property="og:image" content={data?.imageUrl} />
      </Head>
      <div>
        {data && (
          <div className="flex flex-col">
            <Image
              className="w-full h-40 object-cover"
              width="0"
              height="0"
              sizes="100vw"
              alt="headimage"
              src={data.imageUrl}
            />

            <div className="flex flex-col p-2">
              <h1 className="text-4xl">{data?.title}</h1>
              {data && data.content && (
                <div
                  dangerouslySetInnerHTML={{ __html: data.content }}
                  className="p-3 prose"
                ></div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  let data = null;

  try {
    const response = await fetch(`${process.env.URL}/api/blog?id=${id}`);
    const blogData = await response.json();
    data = blogData.data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      data,
    },
  };
}
export default Id;