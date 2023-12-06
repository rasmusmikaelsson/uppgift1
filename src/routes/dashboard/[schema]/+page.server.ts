import { PrismaClient } from '@prisma/client';
import type { Actions } from '@sveltejs/kit';

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
            schemaId: parseInt(params.schema)
        }
    });

    
    return { schemaName: schema?.name ?? '', schemaDescription: schema?.description ?? '', username: username, exercise: exercise };
};

export const actions: Actions = {
    addExercise: async ({ request,params }) => {
        const formData = await request.formData();

        const exerciseName = formData.get('exerciseName')?.toString() ?? '';
        const exerciseReps = parseInt(formData.get('reps')?.toString() ?? '0');
        const exerciseSets = parseInt(formData.get('sets')?.toString() ?? '0');
        const exerciseWeight = formData.get('weight')?.toString() ?? '';

        await prisma.exercise.create({
            data: {
                name: exerciseName,
                rest: 0,
                order: 0,
                reps: exerciseReps,
                sets: exerciseSets,
                weight: exerciseWeight,
                description: '', // Add the description property here
                schema: {
                    connect: {
                        id: parseInt(params.schema!)
                    }
                }
            }
        });
    }
};
