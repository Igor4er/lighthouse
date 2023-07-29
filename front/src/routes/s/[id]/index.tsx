import { component$ } from '@builder.io/qwik';
import { useLocation, routeLoader$ } from '@builder.io/qwik-city';

const useSpecDetails = routeLoader$(async (requestEvent) => {
    
});

 
export default component$(() => {
const loc = useLocation();
  return <div class="text-4xl">Hello {loc.params.id}!</div>;
});