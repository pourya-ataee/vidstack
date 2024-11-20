import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: "src/CustomVidstack.tsx",
			name: "CustomVidstack",
			formats: ["iife"],
			fileName: (format) => `custom-vidstack.${format}.js`,
		},
		rollupOptions: {
			output: {
				format: "iife",
				inlineDynamicImports: true,
			},
			external: [],
		},
	},
	define: {
		"process.env": {},
	},
});
