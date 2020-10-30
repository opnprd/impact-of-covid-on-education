import { writable, readable } from 'svelte/store';

export const dataset = writable(0);
export const data = writable();
export const datasets = readable(['tokens', 'bigrams']);
