import { writable } from "svelte/store";

export interface IUser {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export const selectedCategory = writable("");
export const user = writable<IUser>({ id: "", name: "" });
export const categories = writable<ICategory[]>([]);
export const accessories = writable<ICategory[]>([]);
