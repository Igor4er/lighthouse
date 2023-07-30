import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useSearch } from "~/routes/layout";
import ImgLogo from "~/media/Logo.svg?jsx"

export default component$(() => {
    const action = useSearch();
    const modal1_en = useSignal(false);
    const modal2_en = useSignal(false);

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
            <button class="btn btn-outline btn-primary opacity-60 hover:opacity-100 mr-3" onClick$={() => {
                modal1_en.value = !modal1_en.value;
                }} >Про платформу</button>
            <input type="checkbox" id="my_modal_1" class="modal-toggle" bind:checked={modal1_en} />
            <dialog id="my_modal_1" class="modal">
                <form method="dialog" class="modal-box">
                    <h3 class="font-bold text-lg">Про платформу</h3>
                    <p class="py-4 indent-5 pb-3">Lighthouse - це платформа, яка допоможе вам зробити крок, щоб отримати першу роботу, а також допоможе досвідченим спеціалістам дізнатись найновіші вимоги на ринку праці в ІТ. </p>
                    <p class="py-4 indent-5 pt-0 pb-3">
                        Тут користувач може ввести назву своєї спеціалізації в пошук і отримати список технологій , які йому необхідно знати, щоб його прийняли на роботу.
                    </p>
                    <p class="py-4 indent-5 pt-0 pb-3">Платформа максимально зручна та інтуїтивна в користуванні і не має лишніх об'єктів, що могли б відвертати увагу від головної інформації.</p>
                    <p class="py-4 indent-5 pt-0 pb-3">Також є pro версія, яка має розширений функціонал у вигляді згенерованих ідей pet - проєктів, виконавши які, користувач закріпить знання з необхідних галузей і зможе використати їх для протфоліо на співбесіді.</p>
                    <p class="py-4 indent-5 pt-0 pb-3">До того ж на pro варіанті розміщена рекомендація інфоресурсів, на яких можна здобути або покращити необхідні знання. </p>
                        
                    <div class="modal-action">
                    <button class="btn" onClick$={() => {
                modal1_en.value = !modal1_en.value;
                }}>Close</button>
                    </div>
                </form>
                </dialog>
            <button class="btn btn-outline btn-primary opacity-60 hover:opacity-100" onClick$={() => {
                modal2_en.value = !modal2_en.value;
                }}>Як користуватися платформою?</button>
                <input type="checkbox" id="my_modal_1" class="modal-toggle" bind:checked={modal2_en} />
                <dialog id="my_modal_2" class="modal">
                <form method="dialog" class="modal-box">
                    <h3 class="font-bold text-lg">Як користуватися платформою?</h3>
                    <p class="py-4 indent-5 pt-0 pb-3">Щоб знайти  перелік технологій, які вам необхідно знати, потрібно ввести в полі пошуку назву вашої спеціалізації. Варіанти відповіді атоматично підвантажуватимуться нижче і ви зможете обрати саме той, який вас цікавить. </p>
                        Скрін як це виглядає..... <br />
                    <p class="py-4 indent-5 pt-0 pb-3">Далі вибираєте галузь, яка вас цікавить і на екран вам виводиться список необхідних знань для отримання роботи в цій сфері.</p>
                        Скрін як це виглядає..... <br />
                    <p class="py-4 indent-5 pt-0 pb-3">Якщо ви хочете отримати pro версію, натисніть в правому верхньому куті на кнопку PRO, зареєструйтеся. Далі вам відкриється нове вікно з детальнішою інформацією про це і можливістю купити pro пакет.</p>
                        Скрін як це виглядає..... <br />
                        
                    <div class="modal-action">
                    <button class="btn" onClick$={() => {
                modal2_en.value = !modal2_en.value;
                }}>Close</button>
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
