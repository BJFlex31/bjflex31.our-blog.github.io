import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-9 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li className="update"><span>Nouveaux articles disponible</span></li>
                                <li>Powershell - Forcé un réseau privé ou public</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;