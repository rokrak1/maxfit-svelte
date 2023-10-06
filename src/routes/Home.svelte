<script lang="ts">
  import ChestIcon from "../lib/icons/ChestIcon.svelte";
  import BackIcon from "../lib/icons/BackIcon.svelte";
  import LegIcon from "../lib/icons/LegIcon.svelte";
  import ShoulderIcon from "../lib/icons/ShoulderIcon.svelte";
  import ArmIcon from "../lib/icons/ArmIcon.svelte";
  import AbsIcon from "../lib/icons/AbsIcon.svelte";
  import Category from "../lib/Category.svelte";

  const workouts = [
    {
      name: "Chest",
      Icon: ChestIcon,
    },
    {
      name: "Back",
      Icon: BackIcon,
    },
    {
      name: "Legs",
      Icon: LegIcon,
    },
    {
      name: "Shoulders",
      Icon: ShoulderIcon,
    },
    {
      name: "Arms",
      Icon: ArmIcon,
    },
    {
      name: "Abs",
      Icon: AbsIcon,
    },
  ];
</script>

<div class="flex flex-col items-center py-6">
  <div class="text-4xl mb-5">Maxfit</div>
  <div class="mb-3">Choose a workout:</div>

  <div class="flex flex-wrap gap-5 items-center justify-center">
    {#each workouts as workout}
      <Category name={workout.name} Icon={workout.Icon} />
    {/each}
  </div>
</div>
