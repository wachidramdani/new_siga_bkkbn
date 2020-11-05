import React, { Component } from 'react';
import { Card, CardBody, Col, Label, Row, Button } from 'reactstrap';

import Select from 'react-select';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import location from '../../../../../assets/img/kelompok_bkr1.PNG';
import registration2 from '../../../../../assets/img/kelompok_bkr2.PNG';

class KelompokBKR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            blocking: false,
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
            selectedOptionKecamatan: [],
            selectedOptionKelurahan: [],
            selectedOptionRW: [],
            selectedOptionRT: [],
            jmlFaskes: '-',
            jmlTenaga: '-',
            disabledKecamatan: false
        };
    }

    componentDidMount = () => {
        const level = localStorage.getItem('level')
        if (level === 'kabupaten'){
            // console.log('cek a')
            this.setState({disabledKecamatan: false})
        }else {
            // console.log('cek b')
            this.setState({disabledKecamatan: true, selectedOptionKecamatan:[{value: '1', label: 'Lhoong'}]})
        }
    }

    onChangeKecamatan = (selectedOptions) => {
        this.setState({ 
            selectedOptionKecamatan: selectedOptions,
            jmlFaskes: selectedOptions ? 28 : '-',
            jmlTenaga: selectedOptions ? 75 : '-'
        });
    }

    onChangeKelurahan = (selectedOptions) => {
        this.setState({ 
            selectedOptionKelurahan: selectedOptions,
            jmlFaskes: selectedOptions ? 10 : '-',
            jmlTenaga: selectedOptions ? 35 : '-'
        });
    }

    onChangeRW = (selectedOptions) => {
        this.setState({ 
            selectedOptionRW: selectedOptions,
            jmlFaskes: selectedOptions ? 5 : '-',
            jmlTenaga: selectedOptions ? 15 : '-'
        });
    }

    onChangeRT = (selectedOptions) => {
        this.setState({ 
            selectedOptionRT: selectedOptions,
            jmlFaskes: selectedOptions ? 3 : '-',
            jmlTenaga: selectedOptions ? 5 : '-'
        });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
        sessionStorage.setItem('kd_prov', 1);
        sessionStorage.setItem('depdagriProv', '11');
        sessionStorage.setItem('kd_kab', 1);
        sessionStorage.setItem('depdagriKab', '06');
        sessionStorage.setItem('kd_kec', 4234);
        sessionStorage.setItem('kd_des', 44045);
        sessionStorage.setItem('kd_rw', 301830);
        sessionStorage.setItem('kd_rt', 1097672);
        sessionStorage.setItem('rt', '001');
        sessionStorage.setItem('rw', '004');
        sessionStorage.setItem('desa', 'MEUNASAH KRUENG KALA');
        sessionStorage.setItem('kecamatan', 'LHOONG');
        sessionStorage.setItem('kabupaten', 'Aceh Besar');
        sessionStorage.setItem('provinsi', 'ACEH');
        this.props.history.push('/kegiatan/kelompok_bkr/create');
    }

    handleSeacrh = () => {
        this.props.history.push('/kegiatan/kelompok_bkr/daftar');
    }

    render() {
        const opt_Kecamatan = [
            {value: '1', label: 'Lhoong'},
            {value: '2', label: 'Lhoknga'},
            {value: '3', label: 'Indrapuri'},
            {value: '4', label: 'Seulimeum'},
            {value: '5', label: 'Montasik'},
            {value: '6', label: 'Sukamakmur'},
            {value: '7', label: 'Darul Imarah'},
            {value: '8', label: 'Peukan Bada'}
        ]

        const opt_Kelurahan = [
            {value: '1', label: 'Meunasah Kreung Kala'},
            {value: '2', label: 'Jantang'},
            {value: '3', label: 'Baroh Kreung Kala'},
            {value: '4', label: 'Tunong Kreung Kala'},
            {value: '5', label: 'Birek'},
            {value: '6', label: 'Kareung'},
            {value: '7', label: 'Paroy'},
            {value: '8', label: 'Teungoh Blang Mee'}
        ]

        const opt_RW = [
            {value: '1', label: 'Lada'},
            {value: '2', label: 'Tumpe'},
            {value: '3', label: 'Keude'},
            {value: '4', label: 'Ateuk Cot'},
            {value: '5', label: 'Bak Kulu'},
            {value: '6', label: 'Bineh Blang'},
            {value: '7', label: 'Jurong'},
            {value: '8', label: 'Teungoh'}
        ]

        const opt_RT = [
            {value: '1', label: '001'},
            {value: '2', label: '002'},
            {value: '3', label: '003'},
            {value: '4', label: '004'},
            {value: '5', label: '005'},
            {value: '6', label: '006'},
            {value: '7', label: '007'},
            {value: '8', label: '008'}
        ]

        return (
            <div className="animated fadeIn">
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col xs="12" md="7">
                            <Card>
                                <CardBody>
                                    <div className="divTitle">
                                        <span className="spanTitle">&#8226; Pendaftaran POKTAN Bina Keluarga Remaja (BKR) </span>
                                    </div>
                                    <Row>
                                        <Col md="12">
                                            <Row>
                                                <Col xs="5" md="4 mb-2" style={{paddingRight:'20px'}}>
                                                    <img src={location} alt=""  style={{width: '100%', height: '120px'}}/>
                                                </Col>
                                                <Col xs="7" md="8 mb-2" style={{paddingLeft:'0'}}>
                                                    <Row>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="provinsi"><b>Provinsi</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh</Label>
                                                        </Col>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kab/Kota</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh Besar</Label>
                                                        </Col>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kode</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">11.06</Label>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col xs="4" md="3">
                                            <Label className="labelForm" htmlFor="kabupaten"><b>Kecamatan</b></Label>
                                        </Col>
                                        <Col xs="8" md="9">
                                            <Select options={opt_Kecamatan} value={this.state.selectedOptionKecamatan} onChange={this.onChangeKecamatan} placeholder="Cari" isClearable maxMenuHeight={140} isDisabled={this.state.disabledKecamatan} />
                                        </Col>
                                        <Col xs="4" md="3">
                                            <Label className="labelForm" htmlFor="kabupaten"><b>Desa/Kel</b></Label>
                                        </Col>
                                        <Col xs="8" md="9">
                                            <Select options={opt_Kelurahan} value={this.state.selectedOptionKelurahan} onChange={this.onChangeKelurahan} placeholder="Cari" isClearable maxMenuHeight={140} />
                                        </Col>
                                        <Col xs="4" md="3">
                                            <Label className="labelForm" htmlFor="kabupaten"><b>Dusun/RW</b></Label>
                                        </Col>
                                        <Col xs="8" md="9">
                                            <Select options={opt_RW} value={this.state.selectedOptionRW} onChange={this.onChangeRW} placeholder="Cari" isClearable maxMenuHeight={140} />
                                        </Col>
                                        <Col xs="4" md="3">
                                            <Label className="labelForm" htmlFor="kabupaten"><b>RT</b></Label>
                                        </Col>
                                        <Col xs="8" md="9">
                                            <Select options={opt_RT} value={this.state.selectedOptionRT} onChange={this.onChangeRT} placeholder="Cari" isClearable maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col xs="6">
                                            {/* <Label className="labelForm" htmlFor="provinsi"><b>Jumlah Faskes</b> 15</Label> */}
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'22px', fontWeight: 'bold'}}>{this.state.jmlFaskes}</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Jumlah Kelompok</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="6">
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'22px', fontWeight: 'bold'}}>{this.state.jmlTenaga}</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Jumlah kegiatan</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col md="12">
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn42" onClick={this.handleClickOpen}><i className="icon-file-plus"></i> Tambah Data Kelompok</Button>
                                                </Col>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn42" onClick={this.handleSeacrh}><i className="icon-search4"></i> Lihat Data Kelompok</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="5" className="d-none d-sm-block" style={{borderLeft:"1px dashed #C8E2FF", height: "calc(100vh - 120px)", backgroundImage: `url(${registration2})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center', backgroundSize: 'contain'}}></Col>
                    </Row>
                </BlockUi>
            </div >
        );
    }
}

export default KelompokBKR;
