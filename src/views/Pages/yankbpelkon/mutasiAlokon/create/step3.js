import React, { Component } from 'react';
import { CardBody, Row, Button, Col, Label, Input } from 'reactstrap';

class Step3 extends Component {
    constructor(props) {
        super(props);

        var today = new Date(),
            date = ("0" + today.getDate()).slice(-2) + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();

        this.state = {
            tempat: '',
            tanggal: date,
            namaPimpinan: '',
            nipPimpinan: ''

        }
    }

    formatDate = (date) => {
        var d = new Date(date),
            day = '' + d.getDate(),
            month = '' + (d.getMonth() + 1),
            year = d.getFullYear();

        if (day.length < 2)
            day = '0' + day;
        if (month.length < 2)
            month = '0' + month;

        return [day, month, year].join('-');
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    handleSave = () => {
        // console.log()
        // var newData = {
        //     menyetujuiTempat: this.state.tempat,
        //     menyetujuiTanggal: this.state.tanggal,
        //     menyetujuiNama: this.state.namaPimpinan,
        //     menyetujuiNip: this.state.nipPimpinan
        // };
        // this.props.handleClickSave(newData);
        this.props.handleSaveStep();
    }

    render() {

        // const bulan = [" ", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][this.props.bulan]
        // const ndate = this.props.menyetujui_tanggal;
        var date = this.formatDate();

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
                            <Input type="text" className="text-center" value={this.props.menyetujui_tempat} disabled />
                        </Col>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Tanggal</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="date" name="date" id="exampleDate" className="text-center" defaultValue={date} />
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
                            <Input type="text" className="text-center" value={this.props.menyetujui_nama} disabled />
                        </Col>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">NIP</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="number" maxLength="18" onInput={this.maxLengthCheck} className="text-center" value={this.props.menyetujui_nip} disabled />
                        </Col>
                    </Row>
                </CardBody>
                {/* Keterangan Kode:<br/>
                (1) Penerimaan<br/>
                (2) Pengeluaran untuk Pelayanan KB<br/>
                (3) Pengeluaran FKTP untuk distribusi alokon ke jaringan atau jejaring<br/>
                (4) Rusak<br/>
                (5) Kadaluarsa */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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