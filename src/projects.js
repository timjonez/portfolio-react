const projects = [
  {
    key:1,
    title:'Freelancing',
    body:'My first freelancing project was for a church here in the Twin Cities area. They now have a completely redesigned website that is easily updated due to it being built on the Wagtail CMS.',
    demoLink: "https://www.mbccares.com/",
    githubLink:'https://github.com/timjonez/metropolitan',
    tech: ['Django','Wagtail','Bootstrap4', 'Sqlite3'],
  },
  {
    key:2,
    title:'Notes App',
    body:'To do app built with ReactJS and Django. Allows users to create to do items that they can later check-off when finished',
    demoLink: "http://notesapi.pythonanywhere.com/",
    githubLink:'https://github.com/timjonez/ToDoApp',
    tech: ['ReactJS','Django','User Authentication','CRUD Functionality',],
  },
  {
    key:3,
    title:'Company Blog',
    body:'Invite-only website for use with sensitive information, such as internal company procedures, etc. Dynamic, custom user model that requires invite code to sign up(these can be added via the admin). Utilizes smtp forwarder to send emails.',
    demoLink: "http://express.pythonanywhere.com/",
    githubLink:'https://github.com/timjonez/company_blog',
    tech: ['Python','Django','Email Capability','Invite Code Model','Integrated WYSIWYG Editor','Custom User Model'],
  },
  {
    key:5,
    title:'Volunteering Platform',
    body:"Django website that allows non-profits to post projects. Volunteers browse though the listings and can volunteer for projects. Dynamic, with custom user model. Uses an api to get addresses. Search-able by category and keyword. Utilizes smtp forwarder to send emails.",
    demoLink:'http://chuchworks.pythonanywhere.com/',
    githubLink:'https://github.com/timjonez/church_works',
    tech:['Python','Django','Bootstrap','Google Maps API','Integrated Search Engine','Email'],
  },
  {
    key:6,
    title:'Inventory Program',
    body:"Desktop application to automate asset tracking. Takes in bar-codes and places in correct slot in spreadsheet used to track assets at each location. Uses TKinter for GUI. Simplifies task, with speed and accuracy improving as well.",
    demoLink: null,
    githubLink: 'https://github.com/timjonez/Inventory_Manager',
    tech: ['Python', 'Tkinter', 'OpenPyXl for excel functionality'],
  },
  {
    key:7,
    title:'This Portfolio',
    body:"This is my portfolio built with React! As you might have noticed, each project is it's own tab which cuts out waiting for each to load like it would normally",
    demoLink: null,
    githubLink: 'https://github.com/timjonez/portfolio-react',
    tech: ['React', 'Apache',],
  }
];

export default projects;
