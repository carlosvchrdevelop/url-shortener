import { BaseLayout } from '../layouts/BaseLayout';

const home = (result?: string) => {
    return (
        <BaseLayout>
            <h1>URL Shortener</h1>
            <form action="/" method="post" id="search-box">
                <input type="text" name="url" placeholder="www.example.com" />
                <button type="submit">
                    <span>Shorten</span>
                </button>
            </form>
            <br />
            <div id="res-container">
                {result && (
                    <h3>
                        <script src="/public/scripts/global.js"></script>
                        Url acortada: <a id="hostnameref"></a>
                        <button
                            onclick="copy2clipboard()"
                            id="clipboard"
                            title="Copy to clipboard"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                            </svg>
                        </button>
                        <input type="hidden" value={result} id="result" />
                    </h3>
                )}
                <p id="clipboard-msg">Copied url to clipboard!</p>
            </div>
        </BaseLayout>
    );
};

export default home;
