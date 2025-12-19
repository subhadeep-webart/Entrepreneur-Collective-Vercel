import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400', // Bebas Neue has only one weight
    display: 'swap',
    variable: "--font-bebas",
});


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${bebasNeue.variable}`}>
                {children}
            </body>
        </html>
    );
}
