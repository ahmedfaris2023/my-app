import { NextRequest, NextResponse } from "next/server";
import { UpdateArticleDto } from "@/utils/dtos";
import prisma from "@/utils/db";

interface Props {
  params: { id: string };
}
/**
 * @method GET
 * @route /api/articles/:id
 * @desc Get single article by id
 * @access public
 */

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });
    if (!article) {
      return NextResponse.json(
        { message: "article not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(article, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method PUT
 * @route /api/articles/:id
 * @desc update article
 * @access public
 */

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "article not found" },
        { status: 404 }
      );
    }
    const body = (await request.json()) as UpdateArticleDto;
    const updateArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    console.log(body);
    return NextResponse.json(updateArticle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}

/**
 * @method DELETE
 * @route /api/articles/:id
 * @desc Delete article
 * @access public
 */

export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json(
        { message: "article not found" },
        { status: 404 }
      );
    }
    await prisma.article.delete({ where: { id: parseInt(params.id) } });
    return NextResponse.json({ message: "article deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}
