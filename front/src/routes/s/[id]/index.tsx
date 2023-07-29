import { component$ } from '@builder.io/qwik';
import { useLocation, routeLoader$ } from '@builder.io/qwik-city';

export const useSpecDetails = routeLoader$(async (requestEvent) => {
    const fromAPI = await fetch(`http://127.0.0.1:8000/spec?id=${requestEvent.params.id}`).then((resp) => {
        return resp.json().then((j) => {return j});
    });
    console.log(fromAPI);
});

 
export default component$(() => {
const signal = useSpecDetails();
const loc = useLocation();
  return <div class="text-4xl">Hello {loc.params.id}!</div>;
});