import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { parsed, publicVars } = loadEnv();

console.log(parsed, publicVars);

export default defineConfig({
  plugins: [pluginReact()],
});
