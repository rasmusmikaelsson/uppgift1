import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: PageServerLoad = async ({ cookies }) => {
    let username = cookies.get("username");
    if (!username) {
        throw redirect(303, "/login");
    }

    try {
        const schemas = await prisma.schema.findMany({});
        return { schemas, username };
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const actions: Actions = {
    create: async ({ request, cookies }) => {
        let data = await request.formData();
        let schemaName = data.get("schemaName")?.toString();
        let schemaDescription = data.get("schemaDescription")?.toString();
        let username = cookies.get("username");

        if (!schemaName) {
            return { status: 400, body: { schemaName: "schemaName is required" } };
        }


        try {
            await prisma.schema.create({
                data: {
                    name: schemaName,
                    description: schemaDescription ?? "",
                    created: new Date(),
                }
            });
        } catch (error) {
            console.error(error);
            return { status: 500, body: { error: "Failed to create schema" } };
        }
    },
};

