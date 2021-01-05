import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'

import CustomButton from '../Button/CustomButton'

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Profile.css'
import image from '../../assets/images/DS.jpg'
import { resumeData } from '../../utils/resemeData'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import GetAppIcon from '@material-ui/icons/GetApp';





const CustomTimelineItem = ({ title, text, link }) => {
    return <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline_content'>

            {link ?
                (<Typography className='timelineItem_text'>
                    <span >{title}:</span> <a href={link} target='_blank'>{text}</a>
                </Typography>) :
                (<Typography className='timelineItem_text'>
                    <span>{title}:</span> {text}
                </Typography>)}

        </TimelineContent>
    </TimelineItem >
}



function Profile() {
    const { name, title } = resumeData;
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{name}</Typography>
                <Typography className="title">{title}</Typography>
            </div>

            <div className="profile_image">
                <img src={image} alt="" />
            </div>

            <div className="profile_informations">
                <CustomTimeline icon={<PersonOutlineIcon />}  >
                    <CustomTimelineItem title="Name" text={name} />
                    <CustomTimelineItem title="Birthday" text={resumeData.birthday} />
                    <CustomTimelineItem title="Phone" text={resumeData.phone} />
                    <CustomTimelineItem title="Email" text={resumeData.email} />

                    {
                        Object.keys(resumeData.socials).map(key => (
                            <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                        ))
                    }

                </CustomTimeline>
                <div className="button_container" style={{ display: 'flex' }}>
                    <CustomButton text="Download cv" icon={<GetAppIcon />} />

                </div>
            </div>
        </div>
    )
}

export default Profile
