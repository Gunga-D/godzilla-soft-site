import Script from "next/script";
import {MainPage} from "../layout/Main/Main";

export default async function Main({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | undefined }>
  }) {
    const params = (await searchParams)
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
            <MainPage utm_source={params.utm_source}/>
        </div>
    );
}
