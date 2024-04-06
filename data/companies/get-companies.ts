import { db } from "@/lib/db";

export const getAllCompanies = async (take?: number, skip?: number) => {
  try {
    const companies = await db.company.findMany({ take, skip });
    return companies;
  } catch {
    return null;
  }
};

export const getCompanyById = async (id: string) => {
  try {
    const company = await db.company.findUnique({
      where: { id },
      include: {
        cases: {
          orderBy: { date: "asc" },
        },
        contacts: true,
      },
    });
    return company;
  } catch {
    return null;
  }
};
