import { z } from "zod";

export const createArticleSchema = z.object({
  title: z.string().min(2, "title must be more than 2 characters").max(200),
  body: z.string().min(10),
});
