import { component$ } from "@builder.io/qwik";
import { useSearch } from "~/routes/layout";

export default component$(() => {
    const action = useSearch();
    const sVal = "";

    return (
        <>
        {/* <div class="form-control">
          <div class="input-group">
            <input type="text" placeholder="Search…" class="input input-bordered" />
                <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                 </button>
          </div>
        </div> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg> */}
        <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">

          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input type="text" placeholder="Введіть текс для пошуку" class="input input-bordered input-primary w-[560px] rounded-full pl-10" value={sVal} onInput$={async () => {
            action.submit({query: sVal})
        }} />
        </div>
        </>
    )
})
