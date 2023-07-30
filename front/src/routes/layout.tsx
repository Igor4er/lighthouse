import { component$, Slot, useSignal, type Signal } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { MeiliSearch } from 'meilisearch'

import {
  useContext,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';

import Header from "~/components/Header";
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
  apiKey: '756b04fa7fbf4bc06c42755456bb37bea8f8acfdc5c549986c25a5bbb1d1c1f0',
});

export const useSearch = routeAction$(async (data) => {
  if (typeof data.query === 'string') {
      console.log(data);
      const hits = await client.index('specs').search(data.query, {'limit': 5}).then((h) => {return h});
      // console.log({ok: true, data: hits});
      return {ok: true, data: hits.hits}
  }
});

export const userLoggedInContext =  createContextId<Signal<boolean>>("ulg");

export default component$(() => {
  const userLoggedIn = useSignal(false);
  useContextProvider(userLoggedInContext, userLoggedIn)

  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});
