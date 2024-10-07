import localFont from "next/font/local";
import "./normalize.css";
import "./globals.css";
import resume from "../components/Resume_Data_Helper";



export const metadata = {
  title: resume.basics.name + " | " + "CV Portfolio",
  description: "Portfolio creado con Next JS a partir de un CV en JSON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" >
      <body >
        {children}
      </body>
    </html>
  );
}
