import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../resources/stylesheets/Sidebar.css";
import "./SidebarLogic";
import Camera from './Camera';
import Home from './Home';
import Status from './Status';
import  CameraIcon from "../resources/images/Cameraicon.png";
import { NavLink, BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

function SideBar() {
    
    return (

        <div>
            <div className="wrapper">
                <BrowserRouter>
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Live Chat</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p id="title-paragraph">Connect with your friends</p>
                        
                        <div className="Camera">
                            
                            <NavLink to="/Camera">
                           <img src={CameraIcon} alt=""></img>
                            </NavLink>
                        </div>
                        
                        <li>
                            <NavLink to="/">Chats</NavLink>
                        
                        </li>
                    
                        <li>
                                <NavLink to="/Status">Status</NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/Calls">Calls</NavLink>
                        </li>
                        <li>
                             <NavLink to="/Profile">Profile</NavLink>
                        </li>
                    </ul>
                    <h6 id="Copyright">Copyright © 2021 VinayWritesCode</h6>
                </nav>
                <div className="Content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Camera" component={Camera} />
                            <Route exact path="/Status" component={Status} />
                        <Redirect to="/" />
                    </Switch>
                        
                 </div>
                </BrowserRouter>
                <div id="content">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">

                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                                <div className="Menu">
                                    Swipe 
                                </div>
                            </button>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )}

export default SideBar;

