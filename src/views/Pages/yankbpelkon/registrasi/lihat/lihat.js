import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
// import StepWizard from 'react-step-wizard';
import Step1 from './step1';

class LihatRegistrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    handleClickFinish = () => {
        this.props.history.push('/register');
        console.log('Masuk Registrasi');
    }

    changeDate = date => this.setState({ date })

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Lihat Data Pelayanan KB</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange', marginTop: '5px' }} /></Col>
                                    <Col md="12">
                                        {/* <StepWizard> */}
                                            <Step1
                                                finishButton={this.handleClickFinish}
                                                kd_prov={sessionStorage.getItem('kd_prov')}
                                                kd_kab={sessionStorage.getItem('kd_kab')}
                                                nama_faskes={sessionStorage.getItem('nama_faskes')}
                                                bulan={sessionStorage.getItem('bulan')}
                                                tahun={sessionStorage.getItem('tahun')}
                                                lembar={sessionStorage.getItem('lembar')}
                                                no_faskes={sessionStorage.getItem('no_faskes')}
                                                no_jaringan={sessionStorage.getItem('no_jaringan')}
                                                
                                                id={sessionStorage.getItem('id')}
                                                
                                                menyetujui_tempat={sessionStorage.getItem('menyetujui_tempat')}
                                                menyetujui_tanggal={sessionStorage.getItem('menyetujui_tanggal')}
                                                menyetujui_nama={sessionStorage.getItem('menyetujui_nama')}
                                                menyetujui_nip={sessionStorage.getItem('menyetujui_nip')}
                                            />
                                            {/* <Step2
                                                id={sessionStorage.getItem('id')}
                                            /> */}
                                            {/* <Step3
                                                finishButton={this.handleClickFinish}
                                                menyetujui_tempat={sessionStorage.getItem('menyetujui_tempat')}
                                                menyetujui_tanggal={sessionStorage.getItem('menyetujui_tanggal')}
                                                menyetujui_nama={sessionStorage.getItem('menyetujui_nama')}
                                                menyetujui_nip={sessionStorage.getItem('menyetujui_nip')}
                                            /> */}
                                        {/* </StepWizard> */}
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

export default LihatRegistrasi;