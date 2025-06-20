import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("👀 Starting seeding...");

  await prisma.class.createMany({
    data: [
      { classId: 1 },
      { classId: 2 },
      { classId: 3 },
    ],
    skipDuplicates: true,
  });

  await prisma.student.createMany({
    data: [
      { name: "Arun", classId: 1 },
      { name: "Meena", classId: 2 },
      { name: "Suresh", classId: 3 },
    ],
    skipDuplicates: false,
  });

  console.log("✅ Seeding completed.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
