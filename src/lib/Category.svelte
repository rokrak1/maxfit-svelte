<script lang="ts">
  import { selectedCategory } from "../store/store";
  import { navigate } from "svelte-routing";

  export let name: string;
  export let Icon: any;

  const handleClick = () => {
    $selectedCategory = name;
    navigate("/workout-plan");
  };
</script>

<div
  on:keydown={(e) => e.key === "Enter" && handleClick()}
  on:click={handleClick}
  tabindex="0"
  role="button"
  class="bss flex flex-col items-center justify-center h-[120px] w-[130px]"
>
  <Icon width={48} color="#8c8989" />
  <div class="text-xl">
    {name}
  </div>
</div>
