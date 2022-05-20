import type { UserConfig } from "unocss";
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig<UserConfig>({
  shortcuts: {
    fc: "flex items-center",
    fcc: "flex items-center justify-center",
    fcb: "flex items-center justify-between",
    fbb: "flex items-baseline justify-between",
    fsb: "flex items-start justify-between",
    fss: "flex items-start justify-start",
    fcs: "flex items-center justify-start",
    fce: "flex items-start justify-end",
  },
  presets: [presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
