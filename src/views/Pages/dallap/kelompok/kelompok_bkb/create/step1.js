import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CardBody, Col, Row, FormGroup, Label, Input, TabPane, TabContent, Button } from 'reactstrap';
import Select from 'react-select';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import btnBack from '../../../../../../assets/img/btnBack.png';


class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: false,
            kodePoktan:'',
            noUrutRegister:'',
            namaKelompok:'',
            lainnya:'',
            nomorSK:'',
            hidden_nomorSK: true,
            hidden_tanggal: true,
            hidden_dikeluarkanOleh: true,
            hidden_lainnya:true,

            fields: {},
            errors: {},

            optJabatan: [
                { value: 'PPLKB', label: 'PPLKB' },
                { value: 'PKB', label: 'PLKB' },
                { value: 'PPKDB', label: 'PPKDB' },
                { value: 'Sub PPKDB', label: 'Sub PPKDB' },
                { value: 'Lainnya', label: 'Lainnya' },
            ],
            setJabatan:[],

            optPengukuhan: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ],
            setPengukuhan: [],

            optDikeluarkanOleh: [
                { value: '1', label: 'Kepala Desa' },
                { value: '2', label: 'Camat' },
                { value: '3', label: 'SKPD-KB' },
                { value: '4', label: 'Bupati/Walikota' },
            ],
            setDikeluarkanOleh: [],

            optSumberDana: [
                { value: '1', label: 'APBN' },
                { value: '2', label: 'APBD' },
                { value: '3', label: 'ADD' },
                { value: '4', label: 'SWADAYA' },
                { value: '4', label: 'MITRA' },
            ],
            setSumberDana:[],

            optKeterpaduan:[
                { value: '1', label: 'Posyandu' },
                { value: '2', label: 'PAUD' },
                { value: '3', label: 'Lainnya' },
            ],
            setKeterpaduan:[]

        }
    }
    
    componentDidMount() {
        this.setState({ blocking: false });
    }

    handleChange = (event) => {
        const state = this.state
		state[event.target.name] = event.target.value
		this.setState(state);
    }

    handleBack = () => {
        Swal.fire({
            title: 'Peringatan',
            text: "Kembali ke halaman Pendaftaran?",
            icon: 'warning',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!',
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {       
                this.props.buttonBack();
            }
        });
    }

    getNoRegisPembina = () => {
        this.setState({
            namaPembina: 'Mawar Melati'
        })
    }

    handleJabatan = (e) => {
        console.log(e, 'target')
        this.setState({setJabatan:e})
        if (e) {
            if(e.value === "Lainnya"){
                this.setState({
                    setJabatan:e,
                    hidden_lainnya: false           
                })
            }
        } else {
            this.setState({
                hidden_lainnya: true,
                setJabatan:e
            })
            // }
        }
    }

    handlePengukuhan = (e) => {
        console.log(e, 'target')
        if(e){
            if(e.value === "1"){
                this.setState({
                    hidden_dikeluarkanOleh: false, hidden_nomorSK: false, hidden_tanggal: false,
                    setPengukuhan: e               
                })
            }else {
                this.setState({
                    hidden_dikeluarkanOleh: true, hidden_nomorSK: true, hidden_tanggal: true,
                    setPengukuhan: e               
                })
            }
        }
    }

    handleDikeluarkanOleh = (e) => {
        this.setState({setDikeluarkanOleh: e})
    }

    handleSumberDana = (e) => {
        this.setState({setSumberDana: e})
    }

    handleKeterpaduan = (e) => {
        this.setState({setKeterpaduan: e})
    }

    handleNext = () => {
        this.props.nextStep();
    }

    render() {

        var curr = new Date();
        curr.setDate(curr.getDate());
        var today = curr.toISOString().substr(0,10);
        return (
            <div>
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col sm="12">
                            <Row>
                                <div className="divImg"><img src={btnBack} onClick={this.handleBack} alt=""  style={{width: '28px', height: '28px', marginLeft:'15px'}}/></div>
                                <div style={{marginLeft: '15px'}}>
                                    <h6>I. 11.06.081.002.002.017</h6>
                                </div>                                
                                <div style={{position:'absolute', right: '20px', marginTop:'0px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            </Row>
                            <CardBody className="card-body-nopad">
                                <FormGroup>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="6" xs="6" >
                                            <Label>Kode Poktan</Label>
                                        </Col>
                                        <Col md="6" xs="6">
                                            <Label>No. Urut Register Kelompok</Label>
                                        </Col>
                                        <Col md="6" xs="6" >
                                            <Input type="text"
                                                name="kodePoktan" 
                                                onChange={this.handleChange}
                                                maxLength="2"
                                                style={{ marginRight: '5px', textAlign: 'left' }} 
                                                value={this.state.kodePoktan} />
                                        </Col>
                                        <Col md="6" xs="6" >
                                        <Input type="text"
                                                name="noUrutRegister" 
                                                onChange={this.handleChange}
                                                maxLength="2"
                                                style={{ marginRight: '5px', textAlign: 'left' }} 
                                                value={this.state.noUrutRegister} />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>                                               
                                        <Col md="3" xs="12" >
                                            <Label>Nama Kelompok</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="NamaKelompok" name="namaKelompok" value={this.state.namaKelompok} onChange={this.handleChange} />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3" >
                                            <Label htmlFor="text-input">No. Registrasi Pembina</Label>
                                        </Col>
                                        <Col xs="10" md="7">
                                            <Input type="text" id="input-nik" onInput={this.onInputNik} value={this.state.noRegisPembina} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="2">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNoRegisPembina}>
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Nama Pembina</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" value={this.state.namaPembina} disabled/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Jabatan Pembina</Label>
                                        </Col>
                                        <Col xs="8" md="7">
                                            <Select options={this.state.optJabatan} onChange={this.handleJabatan} value={this.state.setJabatan} isClearable placeholder="Pilih Jabatan" maxMenuHeight={140}/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Input type="text" id="lainnya" name="lainya" value={this.state.Lainnya} onChange={this.handleChange} placeholder="Lainnya.." disabled={this.state.hidden_lainnya}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">SK Pengukuhan</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optPengukuhan} onChange={this.handlePengukuhan} value={this.state.setPengukuhan} isClearable placeholder="Status Pengukuhan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="6" xs="6" >
                                            <Label>Nomor SK</Label>
                                        </Col>
                                        <Col md="6" xs="6">
                                            <Label>Tanggal</Label>
                                        </Col>
                                        <Col md="6" xs="6" >
                                            <Input type="text"
                                                name="nomorSK" 
                                                onChange={this.handleChange}
                                                style={{ marginRight: '5px', textAlign: 'left' }} 
                                                value={this.state.nomor} 
                                                disabled={this.state.hidden_nomorSK}/>
                                        </Col>
                                        <Col md="6" xs="6" >
                                            <Input style={{ marginRight: '5px' }} type="date" name="date" id="exampleDate" onChange={this.handleChange} defaultValue={today} disabled={this.state.hidden_tanggal}></Input>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Dikeluarkan Oleh</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optDikeluarkanOleh} onChange={this.handleDikeluarkanOleh} value={this.state.setDikeluarkanOleh} isClearable placeholder="Dikeluarkan Oleh :" maxMenuHeight={140} isDisabled={this.state.hidden_dikeluarkanOleh}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Sumber Dana Kegiatan</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optSumberDana} onChange={this.handleSumberDana} value={this.state.setSumberDana} isClearable placeholder="Pilih Sumber Dana Kegiatan" maxMenuHeight={140}/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Keterpaduan Kelompok</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optKeterpaduan} onChange={this.handleKeterpaduan} value={this.state.setKeterpaduan} isClearable placeholder="Pilih Keterpaduan Kelompok" maxMenuHeight={140}  isMulti/>
                                        </Col>
                                    </Row> 
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        {/* <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button> */}
                        <Button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</Button>
                    </div>
                </BlockUi>
            </div>
        )
    }
}

export default Step1;