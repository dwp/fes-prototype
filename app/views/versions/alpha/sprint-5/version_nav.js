var version_navigation = {
  levels: [
    {
      label: 'primary',
      items: [
        {
          // primary link text
          text: 'Work list/Diary', // Top level menu name
          // primary file name
          url: 'diary-week', // Link to tthe top level menu name
          // subnav
          items: [
            { 
              text: 'Work list', // Sub menu item
              url: 'your-cases' // link for sub menu
            },
            { 
              text: 'Diary',
              url: 'diary-week'
            },
            { 
              text: 'Find a case',
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
              text: 'Documents (3)',
              url: 'documents'
            },
            { 
              text: 'Linked cases (1)',
              url: 'linked-cases'
            },
            { 
              text: 'Third parties (3)',
              url: 'third-parties',
            },
            { 
              text: 'Notes (1 new)',
              url: 'case-notes'
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
          text: 'Interviewing',
          // primary link file name
          url: 'conduct-interview',
          // subnav
          items: [
            { 
              text: 'Interviewing',
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