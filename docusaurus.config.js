/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "InnerCore Tutorials",
    tagline: "Học làm mod cho Minecraft Bedrock Edition",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "B3taTeam", // Usually your GitHub org/user name.
    projectName: "InnerCoreTutorials", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "InnerCore Tutorials",
            logo: {
                alt: "logo",
                src: "img/horizon.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "getting-started",
                    position: "left",
                    label: "Hướng dẫn",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/B3taTeam/InnerCoreTutorials",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Tài liệu",
                    items: [
                        {
                            label: "Hướng dẫn",
                            to: "/docs/getting-started",
                        },
                    ],
                },
                {
                    title: "Cộng đồng",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discordapp.com/invite/docusaurus",
                        }
                    ],
                },
                {
                    title: "Khác",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/B3taTeam/InnerCoreTutorials",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} B3ta Team. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/B3taTeam/InnerCoreTutorials/edit/main/docs",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/B3taTeam/InnerCoreTutorials/edit/main/blog",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
