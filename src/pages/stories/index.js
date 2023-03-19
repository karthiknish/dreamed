import { useEffect, useState } from "react";
import Head from "next/head";
import { convert } from "html-to-text";
import Router from "next/router";
import Image from "next/image";
function Index() {
  const [data, setData] = useState([]);

  const options = {
    wordwrap: 10,
    limits: {
      // ellipsis: " ...",
      maxInputLength: "200",
    },
    longWordSplit: {
      forceWrapOnLimit: true,
      wrapCharacters: ["-", "/"],
    },
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch("/api/blog", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => setData(d.data));
  };
  return (
    <>
      <Head>
        <title>Success Stories</title>
      </Head>
      <section className="bg-gray-100">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3x">
            From the blog
          </h1>
          {data?.length !== 0 &&
            data.map((d) => (
              <>
                <div
                  key={d?._id}
                  onClick={() => Router.push(`/stories/${d?._id}`)}
                  className="mt-8 lg:-mx-6 lg:flex lg:items-center"
                >
                  {d?._id}
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
                    src={d?.imageUrl}
                    alt="cover image"
                  />

                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="block mt-4 text-2xl font-semibold text-gray-800 ">
                      {d?.title}
                    </p>

                    <p className="mt-3 text-sm text-gray-500 md:text-sm">
                      {convert(d?.content, options)}...
                    </p>

                    <a
                      href="#"
                      className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </a>

                    <div className="flex items-center mt-6">
                      <img
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""
                      />

                      <div className="mx-4">
                        <h1 className="text-sm text-gray-700">{d?.author}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </section>
    </>
  );
}

export default Index;
