/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import HomeTemplate from "../components/homeTemplate";
import Link from "next/link";

export default function home() {
  

  return (
    <HomeTemplate title="Home">
      <h1>This is default landing static page</h1>
      <Link href="/top-headlines">
        <a className="hover:underline text-purple-800">
          Top Headlines
        </a>
      </Link>
    </HomeTemplate>
  );
}
