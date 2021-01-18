import React from 'react'

import {Grid, Typography, TextField } from '@material-ui/core' 

import CustomButton from '../../componnents/Button/CustomButton'

import { resumeData } from '../../utils/resemeData'
import './Contact.css'

function Contact() {
    return (
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

    )
}

export default Contact
