import Link from "next/link";

function Index() {
  return (
    <div className="flex flex-col text-center p-4">
      <Link
        className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 "
        href="/admin/blog/create"
      >
        Create Blog
      </Link>
      <Link
        className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 "
        href="/admin/blog/edit"
      >
        Edit/Delete Blog
      </Link>
      <Link
        className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100 "
        href="/admin/contact"
      >
        Check contacts
      </Link>
    </div>
  );
}

export default Index;
