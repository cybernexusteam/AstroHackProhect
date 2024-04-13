import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "astrohacktalk2/utils/api";

import "astrohacktalk2/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
