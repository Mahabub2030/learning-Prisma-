import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
  //   const insertUsers = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Mahabub",
  //         email: "mahabublom2magil.com",
  //       },
  //       {
  //         name: "Mahabub1",
  //         email: "mahabublom2magil.com",
  //       },
  //       {
  //         name: "Mahabub2",
  //         email: "mahabublomagil.com",
  //       },
  //       {
  //         name: "Mahabub3",
  //         email: "mahabublomagil.com",
  //       },
  //       {
  //         name: "Mahabub4",
  //         email: "mahabublommagil.com",
  //       },
  //     ],
  //   });

  //   console.log(insertUsers);

  const users = await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
  });
  console.log(users);
}
others();
