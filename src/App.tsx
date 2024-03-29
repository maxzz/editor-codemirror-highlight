import { Section0_Header } from "./components/1-header";
import { Section2_Main } from "./components/2-main";
import { Section3_Footer } from "./components/3-footer";
import { Toaster } from "./components/ui/shadcn";

export function App() {
    return (<>
        <div className="h-screen grid grid-rows-[auto,1fr,auto]">
            <Section0_Header />
            <Section2_Main />
            <Section3_Footer />
        </div>

        <Toaster />
    </>);
}
