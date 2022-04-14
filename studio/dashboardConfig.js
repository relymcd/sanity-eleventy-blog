export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62577fa7c6b4a70d4c617863',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1hecfh9g',
                  apiId: 'b4b188e9-950d-4512-a585-8fe3e2bc7a14'
                },
                {
                  buildHookId: '62577fa8ba777c0406ae83a5',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-8dzf1acr',
                  apiId: '0a1ccc71-60d3-4c30-b034-b37d882fb8ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/relymcd/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-8dzf1acr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
