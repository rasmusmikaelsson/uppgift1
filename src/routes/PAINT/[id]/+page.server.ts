import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import { error, type Actions } from '@sveltejs/kit';

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

export const actions: Actions = {
    paint: async ({ request, params }) => {

        if(!params.id){
            throw error(404, 'Not found');
        }

        let id = Number(params.id);
        let form = await request.formData();
        let color = form.get('color')?.toString();
        let pixelId = form.get('id')?.toString();
        console.log(color, pixelId);

        //update pixel
        if(color && pixelId) {
            let pixel = await prisma.pixel.update({
                where: {
                    id: parseInt(pixelId)
                },
                data: {
                    color: color
                }
            });
            return {
                status: 200,
                body: pixel
            }
        }

    }
};