import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
    let username = cookies.get("username")
    if (!username) {
        throw redirect(303, "/login")
    }
    
    return {username};
}) satisfies PageServerLoad;


export const actions: Actions = {
    create: async ({ request, cookies }) => {
        let data = await request.formData();
        let schemaName = data.get("schemaName")?.toString();
        let schemaDescription = data.get("schemaDescription")?.toString();
        let username = cookies.get("username");
    }
    
};

