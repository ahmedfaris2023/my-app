import Link from "next/link";

const page = () => {
  return (
    <div>
      {" "}
      <div>
        {/* <a href="/admin">go to admin page</a> */}
        <Link href="/admin">go to admin page</Link>
        <Link href="/about">go to about page</Link>
        <Link href="/articles">go to articles page</Link>
        <Link href="/login">go to login page</Link>
        <Link href="/register">go to register page</Link>
      </div>{" "}
    </div>
  );
};

export default page;
