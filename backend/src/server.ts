import http from 'http';

export const createServer = (): http.Server => {
    const server = http.createServer((req, res) => {
        const handleRequest = (): void => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
                JSON.stringify({
                    message: 'Backend server is running',
                    timestamp: new Date().toISOString(),
                    path: req.url,
                })
            );
        };

        handleRequest();
    });

    return server;
};
