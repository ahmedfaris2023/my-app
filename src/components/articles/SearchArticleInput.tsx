"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const SearchArticleInput = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ searchText });
    router.push(`/articles/search?searchText=${searchText}`);
  };
  return (
    <form onSubmit={formSubmitHandler} className="my-5 w-full md:w-2/3 m-auto ">
      <input
        type="search"
        className="w-full p-3 rounded text-xl border-none text-gray-900"
        placeholder="Search for article"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchArticleInput;
