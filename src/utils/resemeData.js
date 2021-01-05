import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    }

}