import { component$, useSignal, useContext } from "@builder.io/qwik";
import { Form, useNavigate, useLocation } from "@builder.io/qwik-city";
//@ts-ignore
import Cookies from "js-cookie";
import { userLoggedInContext } from "~/routes/layout";

export default component$(() => {
    const email = useSignal("");
    const passw = useSignal("");
    const userLoggedIn = useContext(userLoggedInContext);
    const incorrect = useSignal(false);
    const nav = useNavigate();
    const loc = useLocation();
    return (
        <>
        <div class="px-12 pb-12 pt-6 bg-base-200 rounded-xl flex flex-col justify-items-center">
            <div class="text-xl font-bold mb-6">Ввійдть у ваш Pro акаунт:</div>
            <Form>
                <div class="flex flex-col justify-center gap-3">
                    <input type="email" placeholder="Пошта" class="input w-full max-w-sm m-auto" bind:value={email} />
                    <input type="password" placeholder="Пароль" class="input w-full max-w-sm m-auto" bind:value={passw} />
                    <button type="submit" class="w-full max-w-sm m-auto btn btn-primary" onClick$={() => {
                        if (email.value.length > 8 && passw.value.length > 8 && email.value.includes("@")) {
                            Cookies.set("userLoggedIn", true, {"max-age": "3600"});
                            userLoggedIn.value = true;
                            if (loc.prevUrl?.pathname == loc.url.pathname) {
                                nav("/");
                            }
                            else {
                                nav(loc.prevUrl?.pathname);
                            }
                        }
                        else {
                            incorrect.value = true;
                        }
                    }}>Я готовий!</button>
                    {incorrect.value ? <div class="alert alert-error m-auto max-w-sm mt-1">Некоректні дані</div> : <div class="alert alert-error m-auto max-w-sm mt-1 hidden">.</div>}
                </div>
            </Form>
        </div>
        </>
    )
})
