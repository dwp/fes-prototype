var version_navigation = {
  levels: [
    {
      label: 'primary',
      items: [
        {
          // primary link text
          text: 'Cases & Appointments', // Top level menu name
          // primary file name
          url: 'your-cases', // Link to tthe top level menu name
          // subnav
          items: [
            { 
              text: 'Day in view',
              url: 'diary-detail'
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
          text: 'User settings',
          url: 'user-settings'
        }
      ]
    }    
  ]
}

module.exports = version_navigation;

