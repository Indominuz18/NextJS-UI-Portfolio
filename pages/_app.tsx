import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import { fontSans, fontMono } from "@/config/fonts";

function handleExternalLinks() {
  const links = document.querySelectorAll('a[href^="http"]');
  links.forEach(link => {
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
    }
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Improve accessibility by handling external links
  useEffect(() => {
    handleExternalLinks();
  }, [router.asPath]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <NextUIProvider navigate={router.push}>
          <div className="dark:bg-black bg-white transition-colors duration-300">
            <Component {...pageProps} />
            <Analytics />
          </div>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
