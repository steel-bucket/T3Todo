import "~/styles/globals.css";

import {GeistSans} from "geist/font/sans";

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{rel: "icon", url: "/favicon.ico"}],
};

function TopNav() {
    return (
        <nav className="flex w-full justify-between items-center p-4 border-b text-white">
            <div>
                Gallery
            </div>
            <div>
                Sign In
            </div>
        </nav>
    );
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body>
        <TopNav/>
        {children}
        </body>
        </html>
    );
}
