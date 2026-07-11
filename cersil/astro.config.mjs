// @ts-check
import { defineConfig } from 'astro/config';
import deno from '@astrojs/deno';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: deno({
        port: 8000,
        start: true,
    }),
    integrations: [
        mdx()
    ]
});
