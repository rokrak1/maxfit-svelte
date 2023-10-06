<script lang="ts">
  import supabase from "../config/supabase";
  import { selectedCategory, user, categories } from "../store/store";

  let workoutPlans: any[] = [];

  function goBack() {
    window.history.back();
  }

  const fetchWorkoutPlans = async () => {
    let category = $categories.find(
      (category) => category.name === $selectedCategory
    );
    if (!category) return;
    console.log("stuck1");
    const { data, error } = await supabase
      .from("workoutplan")
      .select("*")
      .eq("creator_id", $user.id)
      .eq("category_id", category.id);
    console.log("stuck");
    if (error) {
      console.error("Error fetching workout plans:", error);
    }
    console.log(data);
    workoutPlans = data || [];
  };

  $: {
    fetchWorkoutPlans();
  }
  $: console.log(workoutPlans);
</script>

<div class="p-3">
  <div class="flex justify-between">
    <button on:click={goBack} class="w-20">go back</button>
    <div class="text-2xl">{$selectedCategory}</div>
    <div class="w-20" />
  </div>
  <div>
    <div class="w-max flex mt-10 flex-col mb-5">
      <div class="text-xl pr-4">Workout plans</div>
      <div class="w-full h-1 bg-gray-200 rounded-full" />
    </div>
    {#each workoutPlans as workoutPlan}
      <div class="bss p-4 flex justify-between items-center">
        <div>
          <div class="text-lg font-medium">{workoutPlan.name}</div>
        </div>
        <div>-D</div>
      </div>
    {/each}
  </div>
</div>
