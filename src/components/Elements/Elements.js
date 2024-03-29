import React from 'react';
import Typography from './Typography';

export default function Elements() {
    return (
        <div className='container'>

            <div className="container mt-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div id="home" className="container tab-pane active">
                        <Typography/>
                    </div>
                    <div id="menu1" className="container tab-pane fade">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="menu2" className="container tab-pane fade">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
