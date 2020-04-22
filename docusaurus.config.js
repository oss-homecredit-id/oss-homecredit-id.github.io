module.exports = {
  title: "Home Credit OSFE Engineering",
  tagline:
    "Open Source Multi-Platform Front End Development of Homecredit Indonesia.",
  url: "https://fe-homecredit-id.github.io",
  baseUrl: "/",
  favicon: "img/hc-smileys.png",
  organizationName: "Home Credit Indonesia",
  projectName: "OSFE",
  customFields: {
    teams: ["HCID Yellow", "HCID Blue"],
  },
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["powershell", "dart"],
    },
    disableDarkMode: true,
    navbar: {
      title: "OSFE Home Credit 🇮🇩",
      logo: {
        alt: "Home Credit Indonesia Logo",
        src: "img/hc-smileys.png",
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Direct Design System",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        { to: "community", label: "Community", position: "right" },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "light",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Direct Design System",
      //         to: "docs/doc1",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "JS Yellow",
      //         to: "community/javscript",
      //       },
      //       {
      //         label: "Flutter Blue",
      //         to: "community/flutter",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Stack",
      //     items: [
      //       {
      //         label: "Flutter",
      //         href: "https://flutter.dev/",
      //       },
      //       {
      //         label: "React",
      //         href: "https://reactjs.org/",
      //       },
      //       {
      //         label: "NextJS",
      //         href: "https://nextjs.org/",
      //       },
      //     ],
      //   },
      // ],
      logo: {
        alt: "Home Credit Indonesia Logo",
        src: "img/homecreditlogo.svg",
        href: "https://homecredit.co.id/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} OSFE Home Credit Indonesia. Built with ❤ in Jakarta, Indonesia.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
