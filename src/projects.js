const projects = [
  {
    key:1,
    title:'Invite-Only Campany Blog',
    body:'Invite-only website for use with sensitive information, such as internal company procedures, etc. Dynamic, custom user model that requires invite code to sign up(these can be added via the admin). Utilizes smtp forwarder to send emails.',
    demoLink: "http://express.pythonanywhere.com/",
    githubLink:'https://github.com/timjonez/company_blog',
    tech: ['Python','Django','Email Capability','Invite Code Model','Integrated WYSIWYG Editor','Custom User Model'],
  },
  {
    key:2,
    title:'Volunteering Platform',
    body:"Django website that allows non-profits to post projects. Volunteers browse though the listings and can volunteer for projects. Dynamic, with custom user model. Uses an api to get addresses. Search-able by category and keyword. Utilizes smtp forwarder to send emails.",
    demoLink:'http://chuchworks.pythonanywhere.com/',
    githubLink:'https://github.com/timjonez/church_works',
    tech:['Python','Django','Bootstrap','Google Maps API','Integrated Search Engine','Email'],
  },
  {
    key:3,
    title:'Inventory Program',
    body:"Desktop application to automate asset tracking. Takes in bar-codes and places in correct slot in spreadsheet used to track assets at each location. Uses TKinter for GUI. Simplifies task, with speed and accuracy improving as well.",
    demoLink: null,
    githubLink: 'https://github.com/timjonez/Inventory_Manager',
    tech: ['Python', 'Tkinter', 'OpenPyXl for excel functionality'],
  }
];

export default projects;
