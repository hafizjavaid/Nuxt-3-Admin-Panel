import 'dotenv/config';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  compatibilityDate: '2024-07-29',
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
  },
  typescript: {
    tsConfig: {
        compilerOptions: {
          experimentalDecorators: true
        }
    }
  },
  app: {
    head: {
      title: 'ไก่ชนข่าว',
      link: [
        {
          id: 'theme-css',
          rel: 'stylesheet',
          type: 'text/css',
          href: '/themes/aura-light-green/theme.css'
        }
      ]
    }
  },
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  primevue: {
    options: { ripple: true },
    components: {
      exclude: ['Editor']
    }
  },
  script: [
    {
      strategy: 'lazyOnload',
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`
    },
    {
      id: 'ga-analytics',
      strategy: 'lazyOnload',
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_MEASUREMENT_ID}');
      `
    }
  ],
  build: {
    babel: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties'
      ]
    }
  },
  css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss']
});
