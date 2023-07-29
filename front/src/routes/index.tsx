import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Search from "~/components/Search";



export default component$(() => {


  return (
    <>
      <div class="flex justify-center align-middle mt-auto relative top-[40vh]"><Search /></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Lighthouse",
  meta: [
    {
      name: "desc",
      content: "cont",
    },
  ],
};
