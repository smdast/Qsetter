import { resolve } from "path";

export default {
  base: "/Qsetter/",  // GitHub Pages 用
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "quest/index.html"),
        contact: resolve(__dirname, "quest/result/index.html"),
      },
    },
  },
};