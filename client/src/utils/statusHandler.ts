import toast from "react-hot-toast";

export type StatusHandler = () => void;

export const createEmail = (): Record<number | "default", StatusHandler> => ({
  200: () => {
    toast.success("Schaue in deinem Postfach nach!")
  },
  409: () => {
    toast.error("Diese Email ist bereits vergeben. Bitte verwende eine andere.");
  },
  default: () => {
    toast.error("Etwas unerwartetes ist passiert ...")
  },
});

export const registerArtist = (): Record<number | "default", StatusHandler> => ({
  default: () => {
    toast.error("Etwas unerwartetes ist passiert ...");
  }
})