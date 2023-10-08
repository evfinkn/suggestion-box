const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({ data: {} });
  const user2 = await prisma.user.create({ data: {} });

  // Create posts for user1
  const post1 = await prisma.post.create({
    data: {
      content: "Hello, world!",
      authorId: user1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      content: "This is another post.",
      authorId: user1.id,
    },
  });

  await prisma.reaction.create({
    data: {
      emoji: "👍",
      userId: user1.id,
      postId: post1.id,
    },
  });

  await prisma.reaction.create({
    data: {
      emoji: "❤️",
      userId: user2.id,
      postId: post1.id,
    },
  });

  await prisma.post.create({
    data: {
      content: "I agree!",
      authorId: user2.id,
      parentId: post1.id,
    },
  });

  await prisma.post.create({
    data: {
      content: "Nice post.",
      authorId: user2.id,
      parentId: post2.id,
    },
  });

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
