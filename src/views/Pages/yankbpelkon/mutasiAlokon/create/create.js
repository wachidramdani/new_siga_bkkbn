import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import StepWizard from 'react-step-wizard';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
            valueStep1 : [],
            valueStep2 : [],
            valueStep3 : [],
        }
    }

    clickBack = () => {
        this.props.history.push('/alokon');
        console.log('Kembali');
    }

    handleClickBatal = () => {
        this.props.history.push('/alokon');
        console.log('Batal');
    }

    handleValueStep = (step, value) => {
        switch (step) {
            case 'step1':
                this.setState({valueStep1: value})
                break;
            case 'step2':
                this.setState({valueStep2: value})
                break;
            default:
                break;
        }
    }

    handleSaveStep = () => {
        this.props.history.push('/alokon');
        // console.log('Data berhasil disave');
        console.log(this.state.valueStep1, 'test step 1')
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
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Register Alat Dan Obat Kontrasepsi</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange', marginTop: '5px' }} /></Col>
                                    <Col md="12">
                                        <StepWizard>
                                            <Step1
                                                open={sessionStorage.getItem('open')}
                                                kd_prov={sessionStorage.getItem('kd_prov')}
                                                kd_kab={sessionStorage.getItem('kd_kab')}
                                                nama_faskes={sessionStorage.getItem('nama_faskes')}
                                                bulan={sessionStorage.getItem('bulan')}
                                                tahun={sessionStorage.getItem('tahun')}
                                                lembar={sessionStorage.getItem('lembar')}
                                                no_faskes={sessionStorage.getItem('no_faskes')}
                                                no_jaringan={sessionStorage.getItem('no_jaringan')}
                                                buttonBack={this.clickBack}
                                                handleValueStep={this.handleValueStep}
                                            />
                                            <Step2
                                                id={sessionStorage.getItem('id')}
                                                sumber_alokon={sessionStorage.getItem('sumber_alokon')}
                                                handleValueStep={this.handleValueStep}
                                            />
                                            <Step3
                                                menyetujui_tempat={sessionStorage.getItem('menyetujui_tempat')}
                                                menyetujui_nama={sessionStorage.getItem('menyetujui_nama')}
                                                menyetujui_nip={sessionStorage.getItem('menyetujui_nip')}

                                                buttonBatal={this.handleClickBatal}
                                                handleSaveStep={this.handleSaveStep}
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

export default Create;