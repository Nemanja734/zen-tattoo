export type StatusHandler = () => void;

export const createEmail = (): Record<number | "default", StatusHandler> => ({
  200: () => {
    console.log("Success")
  },
  409: () => {
    console.log("Email already taken");
  },
  default: () => {
    console.log("Something went wrong")
  },
});
