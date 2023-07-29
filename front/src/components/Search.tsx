import { component$ } from "@builder.io/qwik";
import { useSearch } from "~/routes/layout";

export default component$(() => {
    const action = useSearch();
    const sVal = "";

    return (
        <>
        <input type="text" placeholder="Введіть текс для пошуку" class="input input-bordered input-primary w-full max-w-xs" value={sVal} onInput$={async () => {
            action.submit({query: sVal})
        }} />
        </>
    )
})
