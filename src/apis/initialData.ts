import supabase from "../config/supabase";
import { categories, accessories, user } from "../store/store";

export const fetchUserAndInitialData = async (id: string) => {
  await fetchUserData(id);
  await fetchInitialData();
};

export const fetchUserData = async (id: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .match({ auth_id: id });

  if (error || !data.length) {
    console.log("No users founds!", error);
    return;
  }
  user.set(data[0]);
};

export const fetchInitialData = async () => {
  await fetchGroups();
  await fetchAccessories();
};

const fetchGroups = async () => {
  console.log("fetching groups");
  const { data, error } = await supabase.from("categories").select("*");
  console.log("data:", data); // <-- this is not executing
  if (error) {
    console.log(error);
    return;
  }
  console.log("data:", data);
  categories.set(data);
};

const fetchAccessories = async () => {
  console.log("fetching accessories");
  const { data, error } = await supabase.from("accessories").select("*");

  if (error) {
    console.log(error);
    return;
  }
  accessories.set(data);
};
