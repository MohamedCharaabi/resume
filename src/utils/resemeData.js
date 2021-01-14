import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import SpeedIcon from '@material-ui/icons/Speed';
import SmartphoneOutlinedIcon from '@material-ui/icons/SmartphoneOutlined';

export const resumeData = {
    name: 'Mohamed Charaabi',
    title: 'Full Stack Junior Developer',

    birthday: '05 January 1998',
    email: 'mohamed.charaabi@yahoo.com',
    address: 'El Ghrifet, El Fahs, Zaghouan, Tunisia',
    phone: '+216 52 239 788',
    socials: {
        twitter: {
            link: 'https://twitter.com/CharaabiMed',
            text: 'My Twitter',
            icon: <TwitterIcon />
        },
        linkedIn: {
            link: 'https://www.linkedin.com/in/mohamed-charaabi/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />
        },
        github: {
            link: 'https://github.com/MohamedCharaabi',
            text: 'My Github',
            icon: <GitHubIcon />
        }
    },
    about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

    experiences: [
        {
            title: "Art Director - Facebook Inc",
            date: "2010 - Present",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor."
        },
        {
            title: "Senior Designer - Google",
            date: "2008 - 2010",
            description: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward."
        },
        {
            title: "Junior Designer - Creative Shake",
            date: "2005 - 2008",
            description: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract."
        },
    ],

    educations: [
        {
            title: "Abc University of Los Angeles",
            date: "2004 - 2009",
            description: "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
        },
        {
            title: "Drawing Course",
            date: "2003 - 2004",
            description: "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
        },
        {
            title: "Abc High School",
            date: "2000 - 2003",
            description: "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
        },
    ],

    services: [
        {
            title: "Web Development",
            description: "I have been working on web design for 10 years.",
            icon: <WebOutlinedIcon />,
            
        },
        {
            title: "Mobile Development",
            description: "I have been working on web design for 10 years.",
            icon: <SmartphoneOutlinedIcon />,
        },
        {
            title: "Fast Delevry",
            description: "I deliver your business as fast as possible.",
            icon: <SpeedIcon /> ,
        },
        
    ],

    skills: [
        {
            title:"Front-End",
            description: [
                "ReactJs",
                "JavaScript",
                "Material-ui",
                "Bootstrap"
            ],
        },
        {
            title:"Back-End",
            description: [
                "Node",
                "JAVA",
                "Python",
                "PHP"
            ],
        },
        {
            title:"Databases",
            description: [
                "MySQL",
                "Firebase",
                "MongoDB",
                "SQLite"
            ],
        },
        {
            title:"Source Control",
            description: [
                "Git",
                "Github",
                "SCRUM/Agil",
                
            ],
        },
    ]

}