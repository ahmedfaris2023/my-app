import SearchArticleInput from "@/components/articles/SearchArticleInput";
import ArticleItem from "../../components/articles/ArticleItem";
import { Article } from "@/utils/types";
import type { Metadata } from "next";
import Pagination from "@/components/articles/Pagination";

const ArticlePage = async () => {
  //delay 10s
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    // next: { revalidate:50 },
  });
  if (!response.ok) {
    throw new Error("Failded to fetch articles");
  }
  const articles: Article[] = await response.json();
  return (
    <section className="container m-auto px-5">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.slice(0, 6).map((item) => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ArticlePage;
export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles about programming",
};
