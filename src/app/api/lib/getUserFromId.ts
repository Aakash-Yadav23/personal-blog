import { User } from "@/types/User";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
export const UserById = async (id: string) => {

    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    return user as User;

}