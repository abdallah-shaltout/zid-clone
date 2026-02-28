import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        htmlAttrs: {
            dir: "rtl",
            lang: "ar",
        },
        head: {
            title: "زد - منصة التجارة الإلكترونية",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content:
                        "زد - منصة التجارة الإلكترونية الرائدة في المملكة العربية السعودية",
                },
            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap",
                },
            ],
        },
    },

    css: ["~/assets/css/master.css"],

    vite: {
        plugins: [tailwindcss()],
    },
});
