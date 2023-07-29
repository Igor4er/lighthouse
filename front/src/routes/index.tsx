import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="text-4xl">INDEX</div>
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
