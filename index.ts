import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "mahabub",
  //     email: "mahabubalam@gmail.com",
  //     profilePhoto: "https://progreinghero-hero/kr.png",
  //   },
  // });
  // console.log(result);

  // const usersData = await prisma.user.findMany({
  //   where: {
  //     email: "mahabubalam@gmail.com",
  //   },
  // });
  // console.log(usersData);

  // const findUserById = await prisma.user.findUnique({
  //   where: {
  //     id: 4,
  //   },
  // });
  // console.log(findUserById);
  const updateUser = await prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      name: "Mahabub ALam",
      email: "mahaubalom72091@gmail.com",
    },
  });
  console.log(updateUser);
}
main();
