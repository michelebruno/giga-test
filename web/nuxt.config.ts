// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '~/assets/css/main.scss'
    ],
    modules: [
        '@nuxtjs/sanity',
        '@nuxtjs/apollo',
        // '@nuxt/image' // This module is still in beta for Nuxt3
    ],
    app: {
        head: {
            titleTemplate: '%s – Pot Pot Pottery',
            title: 'Pot Pot Pottery',
            link: [

                {
                    rel: 'stylesheet',
                    href: 'https://use.typekit.net/gom4qfo.css',
                }
            ]
        }
    },
    sanity: {
        projectId: 'uhi8746v'
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://uhi8746v.api.sanity.io/v1/graphql/production/default'
            }
        },
    },
})
