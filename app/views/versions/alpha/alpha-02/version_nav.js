var version_navigation = {
  levels: [
    {
      label: 'primary',
      items: [
        {
          // primary link text
          text: 'Home', // Top level menu name
          // primary file name
          url: 'welcome', // Link to tthe top level menu name
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
            },
            { 
              text: 'Search', // Sub menu item
              url: 'search-main' // link for sub menu
            }
          ]
        },




        {
          // primary link text
          text: 'Information',
          // primary link file name
          url: 'case-view',
          // subnav
          items: [
            { 
              text: 'Information',
              url: 'case-view'
            },
            { 
              text: 'Relationships',
              url: 'relationships'
            },
            { 
              text: 'Documents',
              url: 'documents'
            },
            { 
              text: 'Linked cases',
              url: 'linked-cases'
            },
            { 
              text: 'Third parties',
              url: 'third-parties',
            },
            { 
              text: 'Bank details',
              url: 'bank-details'
            }

          ]
        },



         {
          // primary link text
          text: 'Contact suspect',
          // primary link file name
          url: 'contact',
          // subnav
          items: [
            { 
              text: 'Overview',
              url: 'contact'
            },
            { 
              text: 'Book interview',
              url: 'book-interview'
            },
            { 
              text: 'Conduct interview',
              url: 'conduct-interview'
            },
            { 
              text: 'Letters',
              url: 'letters'
            },
            { 
              text: 'Cancel interview',
              url: 'cancel-interview'
            }
          ]
        },


        {
          text: 'Case history',
          url: 'History',
          // subnav
          items: [
            { 
              text: 'Case history',
              url: 'History'
            }
          ]
        },



        {
          text: 'Re-route',
          url: 'reroute',
          // subnav
          items: [
            { 
              text: 'Re-route the case',
              url: 'reroute'
            }
          ]
        },






        {
          text: 'Close',
          url: 'close',
          // subnav
          items: [
            { 
              text: 'Close case',
              url: 'close'
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