<script>
  import { Router, Route, navigate } from "svelte-routing";
  import Login from "./routes/Login.svelte";
  import Home from "./routes/Home.svelte";
  import WorkoutPlan from "./routes/WorkoutPlan.svelte";
  import supabase from "./config/supabase";
  import { user } from "./store/store";
  import { fetchUserAndInitialData } from "./apis/initialData";

  let isAuthenticated = !!$user.id || false;

  supabase.auth.onAuthStateChange(async (event, session) => {
    isAuthenticated = !!session?.user;
    if (session) {
      await fetchUserAndInitialData(session.user.id);
    }
  });

  if (!isAuthenticated) {
    navigate("/login");
  }
</script>

<Router>
  {#if isAuthenticated}
    <Route path="/" component={Home} />
    <Route path="/workout-plan" component={WorkoutPlan} />
  {:else}
    <Route path="/login" component={Login} />
  {/if}
  <Route path="*" component={Home} />
</Router>
