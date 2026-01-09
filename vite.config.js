import { resolve } from "path";

export default {
  base: "/Qsetter/",  // GitHub Pages 用
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        quest1: resolve(__dirname, "quest/choice/index.html"),
        quest2: resolve(__dirname, "quest/text/index.html"),
        result: resolve(__dirname, "quest/result/index.html"),
      },
    },
  },
};
