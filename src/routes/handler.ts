import db from '../db';

export const parse = async (shortUrl: string) => {
    try {
        const link = await db.link.findUnique({ where: { shortUrl } });

        if (!link) {
            return Response.redirect('/');
        }

        return Response.redirect(link.url);
    } catch (e: unknown) {
        console.log(`Error getting post: ${e}`);
    }
};

export const store = async (options: { url: string }) => {
    try {
        const { url } = options;

        const link = await db.link.findUnique({ where: { url } });
        if (link) return Response.redirect(`/?result=${link.shortUrl}`);

        const shortUrl = generateRandomString();
        await db.link.create({ data: { url, shortUrl } });
        return Response.redirect(`/?result=${shortUrl}`);
    } catch (e: unknown) {
        console.log(`Error creating post: ${e}`);
    }
};

const generateRandomString = (length = 6) => {
    return Math.random()
        .toString(20)
        .slice(2, length + 2);
};
