import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
//@ts-ignore
import Cookies from "js-cookie";

export default component$(() => {
    const userLoggedIn = useSignal(true);
    const nav = useNavigate();

    useTask$(async () => {
        const ulg = Cookies.get('userLoggedIn');
        if (typeof(ulg) === undefined) {

        }
    });

    return (
        <>
        <div class="navbar bg-base-100 border-b-2 border-primary flex justify-end gap-5">
            {userLoggedIn.value ?
            <>
                <div>Ви ввійшли як Pro користувач. <a class="text-red-500/75 cursor-pointer underline ml-2" preventdefault: click onClick$={() => {
                    Cookies.remove('userLoggedIn');
                    nav();
                }}> Вийти</a></div>
            </>
            :
            <>
                <Link href="/login"><button class="btn btn-outline">Вхід</button></Link>
                <Link href="/premium"><button class="btn btn-warning hover:bg-base-100 hover:text-warning">Pro</button></Link>
            </>
            }
        </div>
        </>
    )
})
