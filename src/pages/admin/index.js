import Link from "next/link";
import { AiOutlineEdit, AiOutlineMail, AiOutlineFileAdd } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Head from "next/head";
function Index() {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h1 className="text-4xl font-medium mb-8">Admin Panel</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/blog/create"
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md transition-all duration-200 hover:bg-gray-200"
          >
            <AiOutlineFileAdd className="text-4xl mb-2" />
            <span>Create Blog</span>
          </Link>

          <Link
            href="/admin/blog"
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md transition-all duration-200 hover:bg-gray-200"
          >
            <AiOutlineEdit className="text-4xl mb-2" />
            <span>Edit/Delete Blog</span>
          </Link>

          <Link
            href="/admin/contact"
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md transition-all duration-200 hover:bg-gray-200"
          >
            <AiOutlineMail className="text-4xl mb-2" />
            <span>Check Contacts</span>
          </Link>

          <Link
            href="/admin/student"
            className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-md transition-all duration-200 hover:bg-gray-200"
          >
            <RxAvatar className="text-4xl mb-2" />
            <span>Check Students</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;
