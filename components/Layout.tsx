import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen flex-col items-center p-4">
            <Navigation />
            <div className="py-4">{children}</div>
            <Footer />
        </div>
    );
}
