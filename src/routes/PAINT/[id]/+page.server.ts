import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const load = (async ({ params }) => {
    let id = parseInt(params.id)
    if(Number.isNaN(id)) {
        throw error(404, 'Not found');
    }
    const pixelart = await prisma.pixelArt.findUnique({
        where: {
            id: id
        },
        include: {
            pixels: true, // Include the associated Pixel records
        }
    });

    if(!pixelart) {
        throw error(404, 'Not found');
    }

    return {pixelart};
}) satisfies PageServerLoad;