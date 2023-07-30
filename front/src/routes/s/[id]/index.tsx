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
    {/* <div class="text-5xl">PAGE :{loc.params.id}</div>
    <div class="text-3xl">SPEC:</div> */}
    <div class="huge_blok flex justify-around ">
      <div class="left_blok w-2/5 rounded-2xl bg-[#222a34]  mt-8">
        <div class="text-2xl text-white text-4xl text-center mt-8">{signal.value.specinfo.name}:</div>
          <div class="card w-96 bg-base-100 shadow-xl  m-auto mt-4">
            <div class="card-body">
              <h2 class="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl m-auto mt-4">
            <div class="card-body flex">
              <ul>
                <li class="text-lg pl-[31px] font-medium"><h2 class="card-title">Card title!</h2></li>
              </ul>
              
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl m-auto mt-4">
            <div class="card-body">
              <h2 class="card-title">Card title!</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
          </div>
      </div>
      <div class="right_blok w-2/5 rounded-2xl bg-[#222a34] mt-8">
        <div class="card w-96 bg-[#F2C94C] text-primary-content m-auto">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            </div>
          </div>
        </div>
        </div>
      </div>
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