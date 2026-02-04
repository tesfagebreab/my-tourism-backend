import { mergeConfig } from 'vite';

export default (config) => {
  return mergeConfig(config, {
    resolve: {
      alias: {
        ...config.resolve?.alias,
        // This line tells Vite to use the browser-safe version of "path"
        path: 'path-browserify',
      },
    },
  });
};