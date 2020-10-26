import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import StepWizard from 'react-step-wizard';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

class LihatYankbpelkon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
        }
    }

    clickBack = () => {
        this.props.history.push('/pendaftaran');
    }
    
    render() {
        
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Kartu Pendaftaran Tempat Pelayanan KB</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{borderBottom:'1px solid orange', marginTop:'5px'}}/></Col>
                                    <Col md="12">
                                        <StepWizard>
                                            <Step1 
                                                buttonBack={this.clickBack}
                                                lihat = {sessionStorage.getItem('action_lihat')}
                                            />
                                            <Step2 
                                                buttonBack={this.clickBack}
                                                lihat = {sessionStorage.getItem('action_lihat')}
                                            />
                                            <Step3 
                                                buttonBack={this.clickBack}
                                                lihat = {sessionStorage.getItem('action_lihat')}
                                            />
                                            <Step4 
                                                buttonBack={this.clickBack}
                                                lihat = {sessionStorage.getItem('action_lihat')}
                                            />
                                        </StepWizard>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LihatYankbpelkon;