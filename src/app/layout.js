import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";

export const metadata = {
  title: "Gelateria",
  description: "Site da sorveteria Gelateria",
  robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
