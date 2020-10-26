import React, { Component } from 'react';
import { CardBody, Row, Col, Label, Input, Button } from 'reactstrap';

class Step3 extends Component {

    constructor(props) {
        var curr = new Date();
        curr.setDate(curr.getDate());
        var date = curr.toISOString().substr(0, 10);

        super(props);
        this.state = {
            date: date
        }
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    handleSave = () => {
        var today = new Date(this.state.date).toISOString()
        const step3 = {
            "menyetujuiTempat": sessionStorage.getItem('menyetujui_tempat'),
            "menyetujuiTanggal": today,
            "menyetujuiPimpinanNama": sessionStorage.getItem('menyetujui_nama'),
            "menyetujuiPimpinanNIP": sessionStorage.getItem('menyetujui_nip'),
            "created": today,
            "createdBy": "Operatorpk.117304"
        };
        console.log(step3, 'tes')
        // this.props.handleValueStep('step3', step3)
        this.props.handleSaveStep(step3);
    }

    render() {

        return (
            <div>
                <h6>&nbsp; </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <CardBody className="card-body-nopad mt-3">
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Tempat</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="text" className="text-center" value={sessionStorage.getItem('menyetujui_tempat')} disabled />
                        </Col>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Tanggal</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="date" name="date" id="exampleDate" className="text-center" defaultValue={this.state.date} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="12">
                            <Label className="labelForm" htmlFor="text-input">Pimpinan Faskes KB/Jaringan/Jejaring,</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="text" className="text-center" value={sessionStorage.getItem('menyetujui_nama')} disabled />
                        </Col>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">NIP</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="number" maxLength="18" onInput={this.maxLengthCheck} className="text-center" value={sessionStorage.getItem('menyetujui_nip')} disabled />
                        </Col>
                    </Row>
                </CardBody>
                {/* Keterangan Kode:<br/>
                (1) Penerimaan<br/>
                (2) Pengeluaran untuk Pelayanan KB<br/>
                (3) Pengeluaran FKTP untuk distribusi alokon ke jaringan atau jejaring<br/>
                (4) Rusak<br/>
                (5) Kadaluarsa */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</Button>
                    <div>
                        <Button className="btn btn-danger" onClick={this.props.buttonBatal} style={{ marginRight: '10px' }}><i className="icon-x"></i> Batal</Button>
                        <Button className="btn btn-success" onClick={this.handleSave}><i className="icon-floppy-disk"></i> Simpan</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step3;