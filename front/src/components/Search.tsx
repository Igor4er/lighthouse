import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useSearch } from "~/routes/layout";
import ImgLogo from "~/media/Logo.svg?jsx"

export default component$(() => {
    const action = useSearch();

    return (
        <>
         
        <div class="relative">
            <ImgLogo/>
        <div class="relative text-gray-600 focus-within:text-gray-400 mt-10" >
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
            <input type="text" placeholder="Введіть спеціальність або технологію" class="input input-bordered input-primary w-[560px] rounded-full pl-10" onInput$={async (e, t) => {

            action.submit({'query': t.value})
            }} />
        </div>
        <div class="buttons mt-5 flex justify-between fixed w-[560px]">
            <button class="btn btn-outline btn-primary opacity-60 hover:opacity-100 mr-3" onclick="my_modal_1.showModal()" >Про платформу</button>
            <dialog id="my_modal_1" class="modal">
                <form method="dialog" class="modal-box">
                    <h3 class="font-bold text-lg">Про платформу</h3>
                    <p class="py-4">Press ESC key or click the button below to close</p>
                    <div class="modal-action">
                    <button class="btn">Close</button>
                    </div>
                </form>
                </dialog>
            <button class="btn btn-outline btn-primary opacity-60 hover:opacity-100" onclick="my_modal_2.showModal()">Як користуватися платформою?</button>
                <dialog id="my_modal_2" class="modal">
                <form method="dialog" class="modal-box">
                    <h3 class="font-bold text-lg">Як користуватися платформою?</h3>
                    <p class="py-4">Press ESC key or click the button below to close</p>
                    <div class="modal-action">
                    <button class="btn">Close</button>
                    </div>
                </form>
                </dialog>
        </div>
        
        {/* {action.value?.ok && action.value.data?.map((x) => (
            <li class="text-xl mt-5" key={x.name}>{x.name}</li>
        )) } */}
        {action.value?.ok &&
        <div class="dropdown dropdown-open  ">
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-[#222a34] rounded-box w-[560px]">
                {action.value.data?.map((x) => (
                    <li key={x.name}> <Link href={`s/${x.id}`} class="text-lg pl-[31px] font-medium">{x.name}</Link> </li>  
                )) }
            </ul>
        </div>
        }
        </div>
            
        

        </>
    )
})
