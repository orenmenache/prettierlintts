import { createServer } from './server';
import { config } from './config';

const startServer = async (): Promise<void> => {
    try {
        const server = createServer();

        server.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });

        const handleShutdown = (signal: string): void => {
            console.log(`\n${signal} received, shutting down gracefully...`);
            server.close(() => {
                console.log('Server closed');
                process.exit(0);
            });
        };

        process.on('SIGTERM', () => handleShutdown('SIGTERM'));
        process.on('SIGINT', () => handleShutdown('SIGINT'));
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
