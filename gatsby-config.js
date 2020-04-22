module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/chiuhungchun/26f35d5f17c94bcfa08934fcc4cf235d?v=fa14d67aa15143bca16b28a6d31f8ba1"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/chiuhungchun/8af85c7b62244425bebac98410deecac?v=2c0af9cabbef4d6ead8871307f454dbe"
            }
        }
    ],
}
