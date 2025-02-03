/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
}

export const metadata: Metadata = {
    title: "Decide The Future",
    openGraph: {
        url: "https://stark-inlet-79454.herokuapp.com",
        type: "website",
        title: "Decide The Future",
        description:
            "Find out how your legislators have voted on surveillance and the Fourth Amendment.",
        images: [
            {
                url: "https://stark-inlet-79454.herokuapp.com/decidethefuture.png",
                alt: "Decide The Future",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
                <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    type="text/javascript"
                ></script>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
