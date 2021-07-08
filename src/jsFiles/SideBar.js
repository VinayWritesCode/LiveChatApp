import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "../resources/stylesheets/Sidebar.css";
import "./SidebarLogic";

function SideBar() {
    return (

        <div>


            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>Live Chat</h3>
                    </div>

                    <ul class="list-unstyled components">
                        <p id="title-paragraph">Connect with your friends</p>
                        <div className="Camera">
                            <img src="https://png.pngitem.com/pimgs/s/30-306976_download-camera-icon-camera-icon-free-png-transparent.png"></img>
                        </div>
                        <li>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Chats</a>
                        
                        </li>
                    
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Status</a>
                            
                        </li>
                        <li>
                            <a href="#">Calls</a>
                        </li>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                    </ul>
                </nav>
                <div id="content">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">

                            <button type="button" id="sidebarCollapse" class="btn btn-info">
                                <i class="fas fa-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )}

export default SideBar;

