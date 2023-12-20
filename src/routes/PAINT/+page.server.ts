import { Prisma, PrismaClient } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

const prisma = new PrismaClient();

export const load = (async ({ cookies }) => {
    const user = cookies.get('username');
    const pixelarts = await prisma.pixelArt.findMany({

    });

    return {pixelarts, user: user};
}) satisfies PageServerLoad;

export const actions: Actions = {
    createPixelart: async ({ request }) => {

        let data = await request.formData();
        let name = data.get('name')?.toString() ?? '';
        let width = data.get('width')?.toString() ?? '';
        let height = data.get('height')?.toString() ?? '';

        if(!name || !width || !height) {
            return {
                status: 400,
                body: 'Invalid data'
            }
        }

        let pixels:{color:string}[] = Array(parseInt(width) * parseInt(height)).fill({color: '#ffffff'});

        try {
            await prisma.pixelArt.create({
                data: {
                    name: name,
                    width: parseInt(width),
                    height: parseInt(height),
                    pixels: {
                        create: pixels
                    }
                    // drawnPixels: JSON.stringify(pixels),
                }
            })
        }
        catch(err) {
            return { status: 500, body: { error: "Failed to create pixelart" } };
        }
    }
};