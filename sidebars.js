/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  documentation: [
    'docs/index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'docs/overview/background',
        'docs/overview/architecture',
        'docs/overview/glossary',
        'docs/overview/releases',
        {
          type: 'category',
          label: "Upgrading",
          link: {
            type: 'doc',
            id: 'docs/overview/upgrading/index'
          },
          items: ['docs/overview/upgrading/archive']
        },
        {
          type: 'category',
          label: "Changelog",
          link: {
            type: 'doc',
            id: 'docs/overview/changelog/index'
          },
          items: ['docs/overview/changelog/archive']
        },
      ]
    },
    {
      type: 'category',
      label: 'Install',
      link: {
        type: 'doc',
        id: 'docs/install/index'
      },
      items: [
        'docs/install/quickstart',
        'docs/install/binary',
        'docs/install/from-source'
      ]
    },
    {
      type: 'category',
      label: 'Identity Providers',
      link: {
        type: 'doc',
        id: 'docs/identity-providers/index',
      },
      items: [
        'docs/identity-providers/auth0',
        'docs/identity-providers/azure',
        'docs/identity-providers/cognito',
        //'docs/identity-providers/dex-freeipa',
        'docs/identity-providers/github',
        'docs/identity-providers/gitlab',
        'docs/identity-providers/google',
        'docs/identity-providers/okta',
        'docs/identity-providers/one-login',
        'docs/identity-providers/ping',
      ]

    },
    {
      type: 'category',
      label: 'Production',
      items: [
        'docs/production/production-deployment',
        'docs/production/security'
      ]
    },
    {
      type: 'category',
      label: 'TCP Connections',
      link: {
        type: 'doc',
        id: 'docs/tcp/index'
      },
      items: [
        'docs/tcp/client',
        {
          type: 'category',
          label: 'Examples',
          items: [{type: 'autogenerated', dirName: 'docs/tcp/examples'}]
        }
      ]
    },
    {
      type: 'category',
      label: 'Kubernetes',
      link: {
        type: 'doc',
        id: 'docs/k8s/index'
      },
      items: [
        'docs/k8s/quickstart',
        'docs/k8s/ingress',
        'docs/k8s/reference'
      ]
    },
    {
      type: 'category',
      label: 'Topics',
      items: [{type: 'autogenerated', dirName: 'docs/topics'}]
    },
    {type: 'doc', id: 'docs/troubleshooting'},
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'doc',
        id: 'docs/community/index'
      },
      items: [
        'docs/community/code-of-conduct',
        'docs/community/contributing',
        'docs/community/security'
      ]
    }
  ],

  reference: [
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'doc',
        id: 'docs/reference'
      },
      items: [
        {type: 'autogenerated', dirName: 'docs/reference'}
      ]
    }
  ],
  guides: [
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'docs/guides'
      },
      items: [
        {type: 'autogenerated', dirName: 'docs/guides'}
      ]
    }
  ],
  enterprise: [
    {
      type: 'category',
      label: 'Enterprise',
      items: [
        {type: 'doc', id: 'docs/enterprise/about'},
        {type: 'doc', id: 'docs/enterprise/concepts'},
        {
          type: 'category',
          label: 'Install',
          link: {
            type: 'doc',
            id: 'docs/enterprise/install/readme'
          },
          items: [
            {type: 'doc', id: 'docs/enterprise/install/quickstart'},
            {type: 'doc', id: 'docs/enterprise/install/helm'}
          ]
        },
        {type: 'doc', id: 'docs/enterprise/metrics'},
        {
          type: 'category',
          label: 'External Data',
          link: {type: 'doc', id: 'docs/enterprise/external-data'},
          items: [{type: 'autogenerated', dirName: 'docs/enterprise/external-data'}]
        },
        {
          type: 'category',
          label: 'Reference',
          items: [
            {type: 'doc', id: 'docs/enterprise/reference/config'},
            {type: 'doc', id: 'docs/enterprise/reference/reports'},
            {type: 'doc', id: 'docs/enterprise/reference/manage'},
            {type: 'doc', id: 'docs/enterprise/reference/configure'},
          ]
        },
        {type: 'doc', id: 'docs/enterprise/api'},
        {type: 'doc', id: 'docs/enterprise/upgrading'},
        {type: 'doc', id: 'docs/enterprise/changelog'},
      ]
    }
  ],
};

module.exports = sidebars;
