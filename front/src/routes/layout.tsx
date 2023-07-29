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
  apiKey: 'f09fbf1f1f30b0bb34f2b2d1453bc2c3aee3e7df4452ab69b17ba5f7eb61e62f',
});

export const useSearch = routeAction$(async (data) => {
  if (typeof data.query === 'string') {
      console.log(data);
      const hits = await client.index('specs').search(data.query, {'limit': 5}).then((h) => {return h});
      // console.log({ok: true, data: hits});
      return {ok: true, data: hits.hits}
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
