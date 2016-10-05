var version_navigation = {
  levels: [
    {
      label: 'primary',
      items: [
        {
          // primary link text
          text: 'Activities and appointments', // Top level menu name
          // primary file name
          url: 'your-cases', // Link to tthe top level menu name
          // subnav
          items: [
            { 
              text: 'Current activities', // Sub menu item
              url: 'your-cases' // link for sub menu
            },
            { 
              text: 'Incoming activities',
              url: 'cases-incoming'
            },
            { 
              text: 'Daily appointments',
              url: 'diary-day'
            },
            { 
              text: 'Week in view',
              url: 'diary-week'
            }
          ]
        },




        {
          // primary link text
          text: 'Information',
          // primary link file name
          url: '#',
          // subnav
          items: [
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            }
          ]
        },



         {
          // primary link text
          text: 'Contact',
          // primary link file name
          url: '#',
          // subnav
          items: [
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            }
          ]
        },


        {
          text: 'Escalate',
          url: '#',
          // subnav
          items: [
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            }
          ]
        },




        {
          text: 'Refer',
          url: '#',
          // subnav
          items: [
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            }
          ]
        },



        {
          text: 'Reject',
          url: '#',
          // subnav
          items: [
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            }
          ]
        },


        {
          text: 'Close',
          url: '#',
          // subnav
          items: [
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            },
            { 
              text: 'Link',
              url: ''
            }
          ]
        }





      ]
    },
    {
      label: 'tertiary',
      items: [
        {
          text: 'Change password',
          url: 'change-password'
        }
      ]
    }    
  ]
}

module.exports = version_navigation;