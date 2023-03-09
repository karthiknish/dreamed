import Link from "next/link";

function Index() {
  return (
    <>
      <Link href="/blog/create">Create Blog</Link>
      <Link href="/admin/contact">Check contacts</Link>
    </>
  );
}

export default Index;
