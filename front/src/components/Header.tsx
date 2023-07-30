import { component$, useSignal, useVisibleTask$, useContext } from "@builder.io/qwik";
import { Link, useNavigate, globalAction$, useLocation } from "@builder.io/qwik-city";
import { userLoggedInContext } from "~/routes/layout";
import ImgLogo from "~/media/Logo.svg?jsx"
//@ts-ignore
import Cookies from "js-cookie";

export default component$(() => {

    // const userLoggedIn = useSignal(false);
    const userLoggedIn = useContext(userLoggedInContext);
    const nav = useNavigate();
    const loc = useLocation();



    // useVisibleTask$(() => {
    //     if (Cookies.get("userLoggedIn") === "true") {
    //         userLoggedIn.value = true;
    //     }
    //     else {
    //         userLoggedIn.value = false;
    //     }
    // });

    return (
        <>
        <div class="navbar bg-base-100 border-b-2 border-primary flex justify-between gap-5" >
            {loc.url.pathname != "/" ?
                    <Link href={loc.prevUrl?.pathname != loc.url.pathname ? loc.prevUrl?.pathname : "/" }><button class="btn btn-ghost">← Назад</button></Link>
                :
                    <button class="btn btn-ghost opacity-0 cursor-default">← Назад</button>
            }

            {loc.url.pathname != "/" ?
            <Link href="/"><ImgLogo class="h-[50px]"/></Link>  // ЛОГо СЮДИ
            :
            <div class="opacity-0">.</div>
            }

            {userLoggedIn.value ?
            <>
                <div>
                    <div><span class="text-warning">Pro режим</span>. <Link reload class="text-red-500/75 cursor-pointer underline ml-2" preventdefault: click onClick$={() => {
                        Cookies.remove('userLoggedIn');
                        userLoggedIn.value = false;
                        nav();
                    }}> Вийти</Link></div>
                </div>     
            </>
            :
            <>
                <div class="flex gap-4">
                    <Link href="/login"><button class="btn btn-outline">Вхід</button></Link>
                    <Link href="/premium"><button class="btn btn-warning hover:bg-base-100 hover:text-warning">Pro</button></Link>
                </div>
            </>
            }
        </div>
        </>
    )
})
