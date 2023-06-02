import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="mx-auto flex min-h-screen min-w-[300px] flex-col">
            <Navigation />
            <div className="flex-1 pt-20 md:pt-24">{children}</div>
            <Footer />
        </div>
    );
}
