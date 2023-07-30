import { component$, useContext } from '@builder.io/qwik';
import { useLocation, routeLoader$, Link } from '@builder.io/qwik-city';
import { userLoggedInContext } from '~/routes/layout';

export const useSpecDetails = routeLoader$(async (requestEvent) => {
    const fromAPI = await fetch(`http://127.0.0.1:8000/spec?id=${requestEvent.params.id}`).then((resp) => {
        const specinfo = resp.json().then((j) => {return j});
        return specinfo
    });
    console.log(fromAPI);
    return {specinfo: fromAPI};
});

 
export default component$(() => {
const userLoggedIn = useContext(userLoggedInContext);
const signal = useSpecDetails();
const loc = useLocation();

  return (
    <>
    {/* <div class="text-5xl">PAGE :{loc.params.id}</div>
    <div class="text-3xl">SPEC:</div> */}
    <div class="huge_blok flex justify-around ">
      <div class="left_blok w-2/5 rounded-2xl bg-[#222a34]  mt-8">
        <div class="text-2xl text-white text-4xl text-center mt-8">{signal.value.specinfo.name}:</div>
        {signal.value.specinfo.reqs.map((x: string) => (
          <>
          <div class="card w-96 bg-base-100 shadow-xl  m-auto mt-4">
            <div class="card-body">
                  <h2 class="card-title">{x}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            </div>
          </>
          )) }
      </div>
      {userLoggedIn.value ?
      <>
        <div class="right_blok w-2/5 rounded-2xl bg-[#222a34] mt-8">
          <div class="card w-96 bg-[#F2C94C] text-primary-content m-auto">
          {signal.value.specinfo.projects.map((x: any) => (
              <>
                <div class="card-body" key={x.name}>
                <h2 class="card-title">{x.name}</h2>
                <p>{x.desc}</p>
                <div class="card-actions justify-end"></div>
                </div>
              </>  
              )) }

          </div>
          </div>
      </>
      :
      <>
        <div class="hidden">ПРЕМІУМ НЕ ВИДНО</div>
      </>
      }
      </div>
    </>
  )
});