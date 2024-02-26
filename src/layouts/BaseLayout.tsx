export const BaseLayout = (props: any) => {
    return (
        <html lang="es">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>URL Shortener</title>
                <link rel="stylesheet" href="/public/styles/global.css" />
            </head>
            <body>
                <main>{props.children}</main>
            </body>
        </html>
    );
};
