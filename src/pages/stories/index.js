import Head from "next/head";
import { convert } from "html-to-text";
import Router from "next/router";
import Image from "next/image";
function Index({ data }) {
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

  return (
    <>
      <Head>
        <title>Success Stories</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Read inspiring success stories from our blog."
        />
        <meta
          name="keywords"
          content="success stories, blog, inspiration, achievements"
        />
        <meta name="author" content="Dreamed consultancy" />
      </Head>
      <section className="bg-gray-100">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3x">
            From the blog
          </h1>
          {data?.length !== 0 &&
            data.map((d) => (
              <div
                style={{ cursor: "pointer" }}
                key={d?._id}
                onClick={() => Router.push(`/stories/${d?._id}`)}
                className="mt-8 lg:-mx-6 lg:flex lg:items-center"
              >
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
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.URL}/api/blog`, {
      method: "GET",
    });
    const responseData = await response.json();

    return {
      props: {
        data: responseData.data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        data: [],
      },
    };
  }
}
export default Index;
