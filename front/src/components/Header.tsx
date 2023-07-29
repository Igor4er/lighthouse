import { component$, useSignal, useVisibleTask$, useContext } from "@builder.io/qwik";
import { Link, useNavigate, globalAction$ } from "@builder.io/qwik-city";
import { userLoggedInContext } from "~/routes/layout";
//@ts-ignore
import Cookies from "js-cookie";

export default component$(() => {

    // const userLoggedIn = useSignal(false);
    const userLoggedIn = useContext(userLoggedInContext);
    const nav = useNavigate();



    useVisibleTask$(() => {
        if (Cookies.get("userLoggedIn") === "true") {
            userLoggedIn.value = true;
        }
        else {
            userLoggedIn.value = false;
        }
    });

    return (
        <>
        <div class="navbar bg-base-100 border-b-2 border-primary flex justify-end gap-5">
            {userLoggedIn.value ?
            <>
                <div>Ви ввійшли як Pro користувач. <Link reload class="text-red-500/75 cursor-pointer underline ml-2" preventdefault: click onClick$={() => {
                    Cookies.remove('userLoggedIn');
                    userLoggedIn.value = false;
                    nav();
                }}> Вийти</Link></div>
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
