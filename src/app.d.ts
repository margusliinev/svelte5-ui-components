declare global {
    namespace App {
        interface Error {
            message: string;
            status: number;
        }
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
