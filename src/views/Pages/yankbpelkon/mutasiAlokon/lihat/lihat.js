import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
// import StepWizard from 'react-step-wizard';
import Step1 from './step1';
// import Step2 from './step2';
// import Step3 from './step3';

class LihatMutasiAlokon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
        }
    }

    clickBack = () => {
        this.props.history.push('/alokon');
        console.log('Kembali');
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
                                        <Step1
                                            kd_prov={sessionStorage.getItem('kd_prov')}
                                            kd_kab={sessionStorage.getItem('kd_kab')}
                                            nama_faskes={sessionStorage.getItem('nama_faskes')}
                                            bulan={sessionStorage.getItem('bulan')}
                                            tahun={sessionStorage.getItem('tahun')}
                                            sumber_alokon={sessionStorage.getItem('sumber_alokon')}
                                            lembar={sessionStorage.getItem('lembar')}
                                            no_faskes={sessionStorage.getItem('no_faskes')}
                                            no_jaringan={sessionStorage.getItem('no_jaringan')}

                                            id={sessionStorage.getItem('id')}

                                            menyetujui_tempat={sessionStorage.getItem('menyetujui_tempat')}
                                            menyetujui_tanggal={sessionStorage.getItem('menyetujui_tanggal')}
                                            menyetujui_nama={sessionStorage.getItem('menyetujui_nama')}
                                            menyetujui_nip={sessionStorage.getItem('menyetujui_nip')}
                                            buttonBack={this.clickBack}
                                        />
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

export default LihatMutasiAlokon;