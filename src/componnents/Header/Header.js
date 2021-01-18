import React from 'react'

import {
    Button, Form, FormControl, Nav, Navbar, NavDropdown
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeRounded, SchoolRounded, Telegram } from "@material-ui/icons";
import { Link, NavLink, withRouter } from 'react-router-dom'

import CustomButton from '../Button/CustomButton'
import { resumeData } from '../../utils/resemeData'

import './Header.css'

function Header(props) {
    const pathName = props?.location?.pathname;
    return (

        <Navbar sticky="top" className="header" expand="lg">
            <Nav.Link as={NavLink} to="/" className="header_navlink">
                <Navbar.Brand href="#home" className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/* Resume */}
                    <Nav.Link
                        as={NavLink}
                        to="/"
                        className={pathName == "/" ? "header_link_active" : "header_link"}>
                        Resume
                </Nav.Link>
                    {/* portfolio */}
                    <Nav.Link
                        as={NavLink}
                        to="/portfolio"
                        className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
                        Portfolio
                </Nav.Link>
                {/* Contact */}
                <Nav.Link
                        as={NavLink}
                        to="/contact"
                        className={pathName == "/contact" ? "header_link_active" : "header_link"}>
                        Contact
                </Nav.Link>
                </Nav>

                <div className="header_right">
                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target="_blank"> {resumeData.socials[key].icon}</a>
                    ))}

                    <CustomButton text='Hire Me' icon={<Telegram />} />
                </div>

            </Navbar.Collapse>

        </Navbar>

    );
}

export default withRouter(Header);
