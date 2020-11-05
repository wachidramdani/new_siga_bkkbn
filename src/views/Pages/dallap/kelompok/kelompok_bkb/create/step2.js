import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';



class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optPelatihan: [
                { value: '1', label: 'Sudah' },
                { value: '2', label: 'Belum' },
            ],
            setPelatihan:[],
            setPelatihanSekertaris:[],
            setPelatihanBendahara:[],

            kku_1:'NIK 0 =< 1 Tahun',
            kku_2:'NIK 1 =< 2 Tahun',
            kku_3:'NIK 2 =< 3 Tahun',
            kku_4:'NIK 3 =< 4 Tahun',
            kku_5:'NIK 4 =< 5 Tahun',
            kku_6:'NIK 5 =< 6 Tahun',
        }
    }

    handleNext = () => {
        this.props.nextStep();
    }

    getNIK = () => {
        this.setState({
            nama: 'Mawar Melati',
            kki:'12356-678',
        })
    }

    getNIKsekertaris = () => {
        this.setState({
            namaSekertaris: 'John Cena',
            kkiSekertaris:'6789-1011'
        })
    }

    getNIKbendahara = () => {
        this.setState({
            namaBendahara: 'Anggrek Bulan',
            kkiBendahara:'12356-678910',
        })
    }

    getNIKkku1 = () => {
        this.setState({
            namaKku1: 'Topik Hidayat',
            kkiKku1:'35676-678910',
        })
    }

    getNIKkku2 = () => {
        this.setState({
            namaKku2: 'Susi Susanti',
            kkiKku2:'8888-667788',
        })
    }

    getNIKkku3 = () => {
        this.setState({
            namaKku3: 'Bambang Pamungkas',
            kkiKku3:'35676-678910',
        })
    }

    getNIKkku4 = () => {
        this.setState({
            namaKku4: 'Rhoma Irama',
            kkiKku4:'35676-678910',
        })
    }

    getNIKkku5 = () => {
        this.setState({
            namaKku5: 'Elvi Sukaesi',
            kkiKku5:'35676-678910',
        })
    }

    getNIKkku6 = () => {
        this.setState({
            namaKku6: 'Crist John',
            kkiKku6:'35676-678910',
        })
    }

    handlePelatihan = (e) => {
        this.setState({setPelatihan: e})
    }

    handlePelatihanSekertaris = (e) => {
        this.setState({setPelatihanSekertaris: e})
    }

    handlePelatihanBendahara = (e) => {
        this.setState({setPelatihanBendahara: e})
    }


    render() {  
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
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Ketua </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nik} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIK}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kki} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.nama} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihan} value={this.state.setPelatihan} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Sekertaris </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikSekertaris} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKsekertaris}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiSekertaris} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaSekertaris} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanSekertaris} value={this.state.setPelatihanSekertaris} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Bendahara </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKbendahara}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiBendahara} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaBendahara} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="12" md="12">
                                            <Label>Kader Kelompok Umur</Label>
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">{this.state.kku_1}</Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKkku1}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKku1} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKku1} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">{this.state.kku_2}</Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKkku2}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKku2} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKku2} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">{this.state.kku_3}</Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKkku3}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKku3} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKku3} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">{this.state.kku_4}</Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKkku4}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKku4} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKku4} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">{this.state.kku_5}</Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKkku5}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKku5} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKku5} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">{this.state.kku_6}</Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKkku6}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKku6} disabled/>
                                        </Col> 
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKku6} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info"  onClick={this.handleNext}>Selanjutnya</button>
                </div>
                </container-fluid>
            </>
        )
    }
}

export default Step2;