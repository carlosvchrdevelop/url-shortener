import { Elysia, t } from 'elysia';
import home from '../pages/home';
import { parse, store } from './handler';

const routes = new Elysia()
    .get('/', ({ query: { result } }) => home(result), {
        query: t.Object({
            result: t.Optional(t.String()),
        }),
    })
    .get('/:shortUrl', ({ params: { shortUrl } }) => parse(shortUrl), {
        params: t.Object({
            shortUrl: t.String(),
        }),
    })
    .post('/', ({ body }) => store(body), {
        body: t.Object({
            url: t.String(),
        }),
    });

export default routes;
