import Script from "next/script";
import {MainPage} from "../layout/Main/Main";
import {Metadata} from "next";
export const metadata: Metadata = {
    metadataBase: new URL('https://godzillasoft.ru'),
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico"
    },
    title: 'GODZILLA SOFT — интернет-магазин видеоигр',
    description: 'GODZILLA SOFT — интернет-магазин видеоигр и не только. Низкие цены, широкий ассортимент и моментальная доставка. Мам, купи!',
    keywords: "купить ключи Steam, пополнить баланс Steam, цифровые товары, ключи для игр, купить игры дешево, магазин Steam ключей, пополнение Steam кошелька, цифровые подписки, игровые ключи активации, купить ключ для Steam, дешевые игры Steam, пополнить Steam мгновенно, купить подписки для игр, магазин цифровых товаров, активация ключей Steam, купить игры онлайн, пополнение Steam баланса, ключи для популярных игр, цифровые коды для игр, надежный магазин ключей",
    openGraph: {
        type: "website",
        url: "/",
        title: "GODZILLA SOFT — интернет-магазин видеоигр",
        description: "GODZILLA SOFT — интернет-магазин видеоигр и не только. Низкие цены, широкий ассортимент и моментальная доставка. Мам, купи!",
        siteName: "GODZILLA SOFT",
        images: [{ url: "/og_favicon_1200x675.png" }],
    },
    alternates: {
        canonical: `/`,
    },
}
export default function Main() {
    return (
        <div>
            <Script type="text/javascript">
            {
            `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(99938212, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });`
            }
            </Script>
            <MainPage/>
        </div>
    );
}
