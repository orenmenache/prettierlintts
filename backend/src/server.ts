import http from 'http';
import { methods } from './methods';

export const createServer = (): http.Server => {
    const server = http.createServer((req, res) => {
        const handleRequest = (): void => {
            // Enable CORS for development
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

            if (req.method === 'OPTIONS') {
                res.writeHead(200);
                res.end();
                return;
            }

            if (req.method === 'POST' && req.url === '/methods') {
                const handleMethodCall = (): void => {
                    let body = '';

                    req.on('data', (chunk: Buffer) => {
                        body += chunk.toString();
                    });

                    req.on('end', () => {
                        try {
                            const { method, params } = JSON.parse(body) as {
                                method: string;
                                params: unknown[];
                            };

                            if (method in methods) {
                                const result = methods[method](...params);
                                res.writeHead(200, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({ success: true, result }));
                            } else {
                                res.writeHead(404, { 'Content-Type': 'application/json' });
                                res.end(
                                    JSON.stringify({
                                        success: false,
                                        error: `Method ${method} not found`,
                                    })
                                );
                            }
                        } catch (error) {
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(
                                JSON.stringify({
                                    success: false,
                                    error: error instanceof Error ? error.message : 'Unknown error',
                                })
                            );
                        }
                    });
                };

                handleMethodCall();
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(
                    JSON.stringify({
                        message: 'Backend server is running',
                        timestamp: new Date().toISOString(),
                        path: req.url,
                        availableMethods: Object.keys(methods),
                    })
                );
            }
        };

        handleRequest();
    });

    return server;
};
