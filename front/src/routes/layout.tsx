import { component$, Slot } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { MeiliSearch } from 'meilisearch'

// import Header from "~/components/starter/header/header";
// import Footer from "~/components/starter/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

const client = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: '0a600f4dfe4e3047406af2e612dbfd7fcdf105c9fded8d0bf8ec1a7870bf55f6',
});

export const useSearch = routeAction$(async (data) => {
  if (typeof data.query === 'string') {
      return client.index('specs').search(data.query);
  }
});

export default component$(() => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});
