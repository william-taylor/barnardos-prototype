
import {Tabs, Tab} from 'material-ui/Tabs';
import React from 'react';

const names = [
    'Abbie Mcemeny',
    'Ava Blair',
    'Courtney Paul',
    'Erin Taylor',
    'Eszmeralda Horvathova',
    'Lauren Cairney',
    'Layla Forbes',
    'Liam Russell',
    'Margaret McAuslan',
    'Robbie Mullen',
    'Reegan Watt',
    'Poppy Carlin',
    'Abbie McMenemy',
    'Siobhan Innes',
    'Zoe Rogers'
];

export default props => {
    return (
        <div className='container-fixed'>
            <div className='information-heading text-center'>
                <div className="container-fixed">
                    <div className="jumbotron">
                        <h1>Information</h1>
                        <p className='information-summary'>
                            Who we are &amp; useful video's.
                        </p>
                    </div>
                </div>
            </div>
            <Tabs>
                <Tab label="Info">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h3>Who are we?</h3><hr/>
                                <p>
                                   We are a group of Barnardo’s service users with access to funding to help the young people of Renfrewshire. We are tailoring a website to assist other young people in similar situations. We are collaborating with the YMCA and Renfrewshire Council to publish this website which shall be young person friendly and offer specialised local advice trying to meet the needs of everyone. The group members have engaged with local services and met regularly to discuss and gather information which we will then be put onto our website. We are here to help young people access any opportunity to help with money and life management.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <h3>Who’s Funding Us?</h3><hr/>
                                <p>
                                    We are being sponsored by the Poverty Commission in Renfrewshire Council and Barnardo’s to create an application that can assist young people in Renfrewshire.
                                </p>
                            </div>
                            <div className='col-md-12'>
                                <h3>Special Thanks To!</h3><hr/>
                                <h4 className='pull-right'>
                                    <span className="label label-info" style={{marginLeft: '10px'}}>Individual</span>
                                </h4>
                                <h4 className='pull-right'>
                                    <span className="label label-success">Organisation</span>
                                </h4>
                                <ul className="list-group list-down">
                                    <li className="list-group-item list-group-item-success"><b>Barnardo's</b></li>
                                    <li className="list-group-item list-group-item-success"><b>Poverty Commission</b></li>
                                    <li className="list-group-item list-group-item-success"><b>Renfrewshire Council</b></li>
                                    <li className="list-group-item list-group-item-success"><b>YMCA</b></li>
                                    {
                                        names.map((name, index) => {
                                            return (
                                                <li key={index} className="list-group-item list-group-item-info">
                                                    <i>{name}</i>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab label="Videos" className='container'>
                    <div id='video-section' className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <h3>What is National Insurance?</h3><hr/>
                                <video controls width='100%' height='100%'>
                                    <source src="http://www.youngmoneyren.org/video/national-insurance.mp4" type="video/mp4" />
                                    Your browser does not support video playback, sorry.
                                </video>
                            </div>
                            <div className='col-md-12 col-lg-6'>
                                <h3>What is Income Tax?</h3><hr/>
                                <video controls width='100%' height='100%'>
                                    <source src="http://www.youngmoneyren.org/video/income-tax.mp4" type="video/mp4" />
                                    Your browser does not support video playback, sorry.
                                </video>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                                <h3>What is Universal Credit?</h3><hr/>
                                <video controls width='100%' height='100%'>
                                    <source src="http://www.youngmoneyren.org/video/universal-credit.mp4" type="video/mp4" />
                                    Your browser does not support video playback, sorry.
                                </video>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            
        </div>
    );
}