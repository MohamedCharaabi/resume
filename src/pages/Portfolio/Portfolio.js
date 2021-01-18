import React, { useState } from 'react'
import { Grid, DialogContent, icon, Dialog, Grow, Typography, DialogTitle, Tab, Tabs, Card, CardActionArea, CardMedia, CardContent, DialogActions } from '@material-ui/core'

import { resumeData } from '../../utils/resemeData'

import './Portfolio.css'

function Portfolio() {

    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);



    return (
        <Grid container spacing={1} className="section pb_45 pt_45">
            {/* Title */}
            <Grid item className="section_title  " >
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs value={tabValue}
                    indicatorColor="white"
                    className='customTabs'
                    onChange={(event, newValue) => setTabValue(newValue)}>

                    <Tab label='All' value='All' className={tabValue == 'All' ? "customTabs_itemActive" : "customTabs_item"} />

                    {[...new Set(resumeData.projects.map((item) => item.tag))].map(
                        (tag) => (
                            <Tab label={tag} value={tag}
                                color="black" className={tabValue == tag ? "customTabs_itemActive" : "customTabs_item"}
                            />

                        ))}
                </Tabs>
            </Grid>

            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {resumeData.projects.map(project => (
                        <>
                            {tabValue == project.tag || tabValue == 'All' ?

                                <Grid item xs={12} sm={6} md={4} >
                                    <Grow in timeout={1000}>
                                        <Card className="customCard" onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' image={project.image} title={project.title} />
                                                <CardContent>
                                                    <Typography className="customCard_title">{project.title}</Typography>
                                                    <Typography variant='body2' className="customCard_caption">{project.caption}</Typography>

                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Grow>
                                </Grid>
                                : null
                            }

                        </>

                    ))}
                </Grid>
            </Grid>

            {/* Dialog */}
            <Dialog 
            fullWidth
            open={projectDialog} 
            onClose={() => setProjectDialog(false)}
             className="projectDialog">
                <DialogTitle onClose={() => setProjectDialog(false)} className="projectDialog_title">
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt="" className="projectDialog_image" />
                <DialogContent>
                    <Typography className="projectDialog_description" > {projectDialog.description}</Typography>
                </DialogContent>
                <DialogActions className="projectDialog_actions">
                    {/* ? : if links exist */}
                    {projectDialog?.links?.map((link) => (
                        <a href={link.link} target='_blank'
                            className="projectDialog_icons"
                        > {link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>


        </Grid>
    )
}

export default Portfolio
