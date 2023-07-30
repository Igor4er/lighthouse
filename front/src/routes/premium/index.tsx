import { Signal, component$ } from '@builder.io/qwik';
import {  Link } from '@builder.io/qwik-city';
import PremiumForm from '~/components/PremiumForm';

 
export default component$(() => {
  return (
    <>
    <div class="flex justify-center mt-16">
       <PremiumForm /> 
    </div>
    </>
  )
});