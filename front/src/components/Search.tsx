import { component$ } from "@builder.io/qwik";
import { useSearch } from "~/routes/layout";

export default component$(() => {
    const action = useSearch();

    return (
        <>
        <input type="text" placeholder="Введіть текс для пошуку" class="input input-bordered input-primary w-full max-w-xs" onInput$={async (e, t) => {
            action.submit({'query': t.value})
        }} />
        {action.value?.ok && action.value.data?.map((x) => (
            <div class="text-xl" key={x.name}>{x.name}</div>
        )) }
        </>
    )
})
