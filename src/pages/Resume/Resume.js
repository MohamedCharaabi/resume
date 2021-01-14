import { Grid, Icon, Paper, Typography, TextField } from '@material-ui/core'
import React from 'react'

import CustomTimeline, { CustomTimelineSeparator } from '../../componnents/Timeline/Timeline'

import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School';
import CustomButton from '../../componnents/Button/CustomButton'

import { resumeData } from '../../utils/resemeData'
import './Resume.css'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineContent from '@material-ui/lab/TimelineContent'


function Resume() {
    return (
        <>

            {/*  About me */}
            <Grid container className="section pb_45 pt_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid itemm xs={12}>
                    <Typography variant="body2" className="aboutme_text">{resumeData["about"]}</Typography>
                </Grid>

            </Grid>

            {/* Education & experience */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline" >
                        {/* Expeience */}
                        <Grid item sm={12} md={6} >
                            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <TimelineSeparator className="separator_padding">
                                            <TimelineDot variant="outlined" className="timeline_dot" />

                                            <TimelineConnector />

                                        </TimelineSeparator>

                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{experience.title}</Typography>
                                            <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6} >
                            <CustomTimeline title="Education History" icon={<SchoolIcon />}>
                                {resumeData.educations.map((education) => (
                                    <TimelineItem>
                                        <TimelineSeparator className="separator_padding">
                                            <TimelineDot variant="outlined" className="timeline_dot" />

                                            <TimelineConnector />

                                        </TimelineSeparator>

                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{education.title}</Typography>
                                            <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text">Services</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify="space-around">
                        {resumeData.services.map(service => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="service">

                                    <Icon className="service_icon" >{service.icon}</Icon>
                                    <Typography className="service_title" variant='h6'>{service.title}</Typography>
                                    <Typography className="service_description" variant='body2'>{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container

                justify="space-between"
                className="section graybg pb_45 p_50">

                <Grid item xs={12}>
                    <Grid container justify="space-between" spacing={3}>
                        {resumeData.skills.map(skill => (
                            <Grid item xs={12} sm={6} md={3} >
                                <Paper elevation={0} className="skill">
                                    <Typography variant="h6" className="skill_title">
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map(elm => (
                                        <Typography variant="body2" className="skill_decription">
                                            <TimelineDot variant={"outlined"} className="timeline_dot" />
                                            {elm}
                                        </Typography>

                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>



            </Grid>

            {/* Contact */}
            <Grid container className="section pb_45 pt_45" spacing={5}>
                {/* Contact form     */}
                <Grid item xs={12} lg={7}>
                    <Grid item className="section_title mb_30" >
                        <span></span>
                        <h6 className="section_title_text">Contact Form</h6>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} spacing={2}>
                                <TextField fullWidth name='name' label="Name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='email' label="Email" />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField fullWidth name='message' label="Message" multiline rows={4} />
                            </Grid>

                            <Grid item xs={12}>
                                <CustomButton text='Submit' />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30" >
                            <span></span>
                            <h6 className="section_title_text">Contact Information</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="contact_info_item">
                                        <span>Adress: </span>{resumeData.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contact_info_item">
                                        <span>Phone: </span>{resumeData.phone}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography className="contact_info_item">
                                        <span>Email: </span>{resumeData.email}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>


        </>
    )
}

export default Resume
