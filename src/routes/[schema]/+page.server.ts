import { error } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = async ({ params, cookies }) => {
    let username = cookies.get("username");
    let schemaName = params.schema;

    return { username, schemaName: schemaName };
};