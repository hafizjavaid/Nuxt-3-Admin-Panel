// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    ssr: false,

    css: ['primevue/resources/primevue.min.css', 'primeicons/primeicons.css', '@/assets/styles.scss', '/node_modules/primeicons/primeicons.css', '@/assets/demo/styles/flags/flags.css'],
    build: {
        transpile: ['primevue']
    },
    app: {
        head: {
            title: 'Sakai Vue',

            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/lara-light-indigo/theme.css'
                }
            ]
        }
    },
    script: [
        {
            strategy: 'lazyOnload',
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-93461466-1'
        },
        {
            id: 'ga-analytics',
            strategy: 'lazyOnload',
            children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-93461466-1');
          `
        }
    ]
});
