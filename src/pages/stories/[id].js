import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { convert } from "html-to-text";
function Id() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const query = router.query.id;
  useEffect(() => {
    if (query !== undefined) {
      const getBlog = async () => {
        await fetch(`/api/blog?id=${query}`)
          .then((res) => res.json())
          .then((d) => setData(d.data));
      };
      getBlog();
    }
  }, [query]);
  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <div>
        {data !== [] ? (
          <div className="flex flex-col">
            <Image
              className="w-full h-40 object-cover"
              width="0"
              height="0"
              sizes="100vw"
              alt="headimage"
              src={data?.imageUrl}
            />

            <div className="flex flex-col p-2">
              <h1 className="text-2xl">{data?.title}</h1>
              <p className="p-3">{convert(data?.content)}</p>
            </div>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </>
  );
}

export default Id;
