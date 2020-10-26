import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input } from 'reactstrap';

class Step1 extends Component {

    handleNext = (event) => {
        //validasi
        event.preventDefault();
        const step1 = {
            "namaTempatPelayananKB": sessionStorage.getItem('nama_faskes'),
            "nomorJaringanJejaringFaskesKB": sessionStorage.getItem('no_jaringan'),
            "nomorRegisterFaskesKB": sessionStorage.getItem('no_faskes'),
            "tempatPelayananKBID": sessionStorage.getItem('nama_faskes'),
            "tahun": sessionStorage.getItem('tahun'),
            "bulan": sessionStorage.getItem('bulan'),
            "lembar": sessionStorage.getItem('lembar'),
        };
        console.log(step1, 'tes')
        this.props.handleValueStep('step1', step1)
        this.props.nextStep();
    }

    render() {

        const bulan = [" ", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][sessionStorage.getItem('bulan')]
        return (
            <>
                <container-fluid>
                    <Row>
                        <Col sm="12">
                            <h6>&nbsp; </h6>
                            <div style={{ position: 'absolute', right: '15px', marginTop: '-25px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <CardBody className="card-body-nopad mt-3">
                                <FormGroup>
                                    <Row>
                                        <Col lg="4">
                                            <Input type="text" className="text-center" value={sessionStorage.getItem('nama_faskes')} disabled />
                                            <Label className="labelHeader">Nama Faskes KB/Jaringan/Jejaring</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" value={sessionStorage.getItem('kd_prov')} disabled />
                                            <Label className="labelHeader">Kode Provinsi</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" value={sessionStorage.getItem('kd_kab')} disabled />
                                            <Label className="labelHeader">Kode Kabupaten/Kota</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" className="text-center" value={sessionStorage.getItem('no_faskes')} disabled />
                                            <Label className="labelHeader">No. Register Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" className="text-center" value={sessionStorage.getItem('no_jaringan')} disabled
                                                onInput={(e) => {
                                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3)
                                                }} />
                                            <Label className="labelHeader">No. Jaringan/Jejaring Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <div style={{ float: 'left', width: '48%', marginRight: '4%' }}>
                                                <Input type="text" id="bulan" name="bulan" className="text-center" value={bulan} disabled />
                                                {/* <Select options={bulan}
                                                    defaultValue={{ label: "Juli", value: 7 }}
                                                /> */}
                                            </div>
                                            <div style={{ float: 'left', width: '48%' }}>
                                                <Input type="text" id="tahun" name="tahun" className="text-center" value={sessionStorage.getItem('tahun')} disabled />
                                                {/* <Select options={tahun}
                                                    defaultValue={{ label: "2020", value: 2020 }}
                                                /> */}
                                            </div>
                                            <Label className="labelHeader">Bulan Lapor</Label>
                                        </Col>
                                        <Col xs="6" lg="8">
                                            &nbsp;
                                        </Col>
                                        <Col xs="3" lg="2">
                                            <Label className="labelHeaderRight mt-3">Lembar Ke</Label>
                                        </Col>
                                        <Col xs="3" lg="2">
                                            <Input className="mt-3 text-center" type="text" value={sessionStorage.getItem('lembar')} disabled />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.clickBack}>Sebelumnya</button>
                        <button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step1;