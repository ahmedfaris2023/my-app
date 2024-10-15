import ArticleItem from "../../components/articles/ArticleItem";
import { Article } from "@/utils/types";
import type { Metadata } from "next";

const ArticlePage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    // next: { revalidate:50 },
  });
  if (!response.ok) {
    throw new Error("Failded to fetch articles");
  }
  const articles: Article[] = await response.json();
  return (
    <div>
      <section className="container m-auto px-5">
        <div className="flex items-center justify-center flex-wrap gap-7">
          {articles.map((item) => (
            <ArticleItem article={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles about programming",
};
