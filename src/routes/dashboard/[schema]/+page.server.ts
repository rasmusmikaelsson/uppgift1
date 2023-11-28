import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = async ({ params, cookies }) => {
    let username = cookies.get("username");

    const schema = await prisma.schema.findUnique({
        where: {
            id: parseInt(params.schema)
        },
        select: {
            name: true,
            description: true
        }
    });



    const exercise = await prisma.exercise.findMany({
        where: {
            id: params.exercise
        },
        select: {
            id: true,
            name: true,
            sets: true,
            reps: true,
            weight: true,
            rest: true,
            order: true
        }
    });



    
    
    return { schemaName: schema?.name ?? '', schemaDescription: schema?.description ?? '', username: username };
};

