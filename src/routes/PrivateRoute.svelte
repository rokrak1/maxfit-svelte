<script lang="ts">
  import { Link, Route, navigate } from "svelte-routing";
  import supabase from "../config/supabase.ts";

  export let path: string;
  export let component: any;

  let isAuthenticated = false;

  supabase.auth.onAuthStateChange(async (event, session) => {
    console.log(event, session);
    isAuthenticated = !!session?.user;
    if (session) {
      localStorage.setItem("user", JSON.stringify(session?.user));
    }
  });

  $: {
    const user = localStorage.getItem("user");
    if (user) {
      isAuthenticated = true;
      navigate("/");
    }
  }
</script>

{#if isAuthenticated}
  <Route {path} let:params let:location>
    <svelte:component this={component} {params} {location} />
  </Route>
{/if}
