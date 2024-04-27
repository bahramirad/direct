import { defineConfig } from "vite";

import { resolve } from "path";

export default defineConfig({
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                mainRtl: resolve(__dirname, "index-rtl.html"),
                login: resolve(__dirname, "login-register.html"),
                loginRtl: resolve(__dirname, "login-register-rtl.html"),
            },
            output: {
                chunkFileNames: "assets/js/[name].js",
                assetFileNames: ({ name }) => {
                    if (/\.css$/.test(name ?? "")) {
                        return "assets/css/[name][extname]";
                    }
                    return "assets/[name][extname]";
                },
            },
        },
    },
});
