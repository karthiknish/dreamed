import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

function Id() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const query = router.query.id;

  useEffect(() => {
    if (query) {
      const getBlog = async () => {
        try {
          const response = await fetch(`/api/blog?id=${query}`);
          const blogData = await response.json();
          setData(blogData.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      getBlog();
    }
  }, [query]);

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="w-full h-40 bg-gray-200"></div>
      <div className="p-2">
        <div className="h-6 bg-gray-200 w-1/2 mt-4"></div>
        <div className="h-4 bg-gray-200 w-full mt-2"></div>
        <div className="h-4 bg-gray-200 w-full mt-2"></div>
        <div className="h-4 bg-gray-200 w-3/4 mt-2"></div>
      </div>
    </div>
  );

  if (loading) return <LoadingSkeleton />;
  if (error) return <div>Error: {error}</div>;

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
          content={`https://dreamedconsultancy.com/stories/${query}`}
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

export default Id;