import SocketContextProvider from "@/contexts/socketio";
import Preloader from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { TooltipProvider } from "./ui/tooltip";
import { LanguageProvider } from "@/context/language-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <LanguageProvider>
        <Preloader>
          <SocketContextProvider>
            <TooltipProvider>
              {children}
            </TooltipProvider>
            <Toaster />
          </SocketContextProvider>
        </Preloader>
      </LanguageProvider>
    </ThemeProvider>
  );
};
