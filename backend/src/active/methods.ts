// Meteor methods for the backend
// These would normally be defined using Meteor.methods() in a real Meteor app

interface MeteorMethodContext {
    userId?: string;
    connection?: unknown;
}

type MeteorMethod = (this: MeteorMethodContext, ...args: unknown[]) => unknown;

interface MeteorMethods {
    [key: string]: MeteorMethod;
}

// Define your Meteor methods here
export const methods: MeteorMethods = {
    exampleMethod: function (...args: unknown[]): {
        success: boolean;
        newCount: number;
        timestamp: string;
    } {
        const count = args[0] as number;
        console.log(`[Meteor Method] exampleMethod called with count: ${count}`);

        // Simulate some processing
        const newCount = count * 2;

        return {
            success: true,
            newCount,
            timestamp: new Date().toISOString(),
        };
    },

    getUserData: function (...args: unknown[]): { userId: string; data: unknown } {
        const userId = args[0] as string;
        console.log(`[Meteor Method] getUserData called for userId: ${userId}`);

        return {
            userId,
            data: {
                name: 'Test User',
                email: 'test@example.com',
            },
        };
    },

    updateCounter: function (...args: unknown[]): { counterId: string; newValue: number } {
        const counterId = args[0] as string;
        const increment = args[1] as number;
        console.log(
            `[Meteor Method] updateCounter called for ${counterId} with increment ${increment}`
        );

        return {
            counterId,
            newValue: increment,
        };
    },
};

// Helper to register methods (would use Meteor.methods in real Meteor app)
export const registerMethods = (): void => {
    console.log('[Meteor Methods] Registered methods:', Object.keys(methods));
};
