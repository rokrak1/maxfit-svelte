<script>
  import { navigate } from "svelte-routing";
  import supabase from "../config/supabase.ts";
  import { fetchUserAndInitialData } from "../apis/initialData.ts";

  let email = "";
  let password = "";

  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error(error);
  }

  $: {
    (async () => {
      let { data, error } = await supabase.auth.getSession(); // <-- this is the line that's causing the error

      if (error) console.error(error);

      if (data && data.session?.user.id) {
        await fetchUserAndInitialData(data.session?.user.id);
        navigate("/");
      }
    })();
  }
</script>

<input bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="Password" />
<button on:click={login}>Login</button>
