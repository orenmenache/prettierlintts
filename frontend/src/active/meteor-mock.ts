// Mock Meteor object for development/testing outside of Meteor environment
// This allows the code to compile and run in a standard React dev environment

type MeteorCallback = (error?: Error, result?: unknown) => void;

interface MeteorMock {
    call: (method: string, ...args: unknown[]) => void;
    isClient: boolean;
    isServer: boolean;
}

const BACKEND_URL =
    (import.meta.env.VITE_BACKEND_URL as string | undefined) || 'http://localhost:3000';

const createMeteorMock = (): MeteorMock => {
    return {
        call: (method: string, ...args: unknown[]): void => {
            const callback = args[args.length - 1] as MeteorCallback;
            const params = args.slice(0, -1);

            console.log(`[Meteor Mock] Calling method: ${method}`, params);

            // Call the backend server
            fetch(`${BACKEND_URL}/methods`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ method, params }),
            })
                .then((response) => response.json())
                .then((data: { success: boolean; result?: unknown; error?: string }) => {
                    if (typeof callback === 'function') {
                        if (data.success) {
                            callback(undefined, data.result);
                        } else {
                            callback(new Error(data.error || 'Unknown error'));
                        }
                    }
                })
                .catch((error: Error) => {
                    console.error('[Meteor Mock] Error calling method:', error);
                    if (typeof callback === 'function') {
                        callback(error);
                    }
                });
        },
        isClient: true,
        isServer: false,
    };
};

// Check if we're in a real Meteor environment
const isMeteorEnvironment = (): boolean => {
    return typeof (window as Window & { Meteor?: unknown }).Meteor !== 'undefined';
};

// Export either real Meteor or mock
export const Meteor: MeteorMock = isMeteorEnvironment()
    ? (window as unknown as Window & { Meteor: MeteorMock }).Meteor
    : createMeteorMock();
