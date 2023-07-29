import { FunctionComponent, JSXChildren, JSXNode, Signal, component$ } from '@builder.io/qwik';
import { useLocation, routeLoader$, Link } from '@builder.io/qwik-city';

export const useSpecDetails = routeLoader$(async (requestEvent) => {
    const fromAPI = await fetch(`http://127.0.0.1:8000/spec?id=${requestEvent.params.id}`).then((resp) => {
        const specinfo = resp.json().then((j) => {return j});
        return specinfo
    });
    console.log(fromAPI);
    return {specinfo: fromAPI};
});

 
export default component$(() => {
const signal = useSpecDetails();
const loc = useLocation();
  return (
    <>
    <div class="text-5xl">PAGE :{loc.params.id}</div>
    <div class="text-3xl">SPEC:</div>
    <div class="text-2xl">{signal.value.specinfo.name}:</div>
            {signal.value.specinfo.reqs.map((x: string) => (
                <div key={x}> <div class="text-lg pl-[31px] font-medium">{x}</div> </div>  
            )) }
            <div class="text-3xl">PROJ:</div>
            {signal.value.specinfo.projects.map((x: any) => (
                <div key={x.name}> <div class="text-lg pl-[31px] font-medium">{x.name} <span class="bg-base-300">{x.desc}</span></div> </div>  
            )) }
    </>
  )
});