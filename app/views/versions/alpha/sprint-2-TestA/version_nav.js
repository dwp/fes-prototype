var version_navigation = {
  levels: [
    {
      label: 'primary',
      items: [
        {
          // primary link text
          text: 'Work list/Diary', // Top level menu name
          // primary file name
          url: 'your-cases', // Link to tthe top level menu name
          // subnav
          items: [
            { 
              text: 'Work list', // Sub menu item
              url: 'your-cases' // link for sub menu
            },
            { 
              text: 'Search all cases',
              url: 'search-main'
            }
          ]
        },




        {
          // primary link text
          text: 'Case view',
          // primary link file name
          url: 'case-view',
          // subnav
          items: [
            { 
              text: 'Case view',
              url: 'case-view'
            },
            //{ 
             // text: 'Relationships',
             // url: 'relationships'
            //},
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
            },
            { 
              text: 'Case history',
              url: 'history'
            }

          ]
        },



         {
          // primary link text
          text: 'Book appointment',
          // primary link file name
          url: 'book-interview',
          // subnav
          items: [
            
            { 
              text: 'Book appointment',
              url: 'book-interview'
            },
            { 
              text: 'Appointment letter',
              url: 'letters'
            }
          ]
        },

        {
          // primary link text
          text: 'Intervention',
          // primary link file name
          url: 'conduct-interview',
          // subnav
          items: [
            { 
              text: 'Intervention',
              url: 'conduct-interview'
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
            },{ 
              text: 'Reject',
              url: 'reject'
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