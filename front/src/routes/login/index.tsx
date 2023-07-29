import { Signal, component$ } from '@builder.io/qwik';
import {  Link } from '@builder.io/qwik-city';
import LoginForm from '~/components/LoginForm';

 
export default component$(() => {
  return (
    <>
    <div class="flex justify-center mt-16">
       <LoginForm /> 
    </div>
    </>
  )
});
