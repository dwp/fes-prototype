var version_navigation = {
  levels: [
    {
      label: 'primary',
      items: [
        {
          // primary link text
          text: 'Home', // Top level menu name
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
            }//,
            //{ 
            //  text: 'Search', // Sub menu item
            //  url: 'search-main' // link for sub menu
            //}
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
              text: 'Book telephone interview',
              url: 'book-interview-telephone'
            },
            { 
              text: 'Book face to face interview',
              url: 'book-interview-person'
            },
            { 
              text: 'Intervention',
              url: 'conduct-interview'
            },
            { 
              text: 'Appoinment letter',
              url: 'letters'
            }
          ]
        },


        {
          text: 'Case history',
          url: 'history',
          // subnav
          items: [
            { 
              text: 'Case history',
              url: 'history'
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