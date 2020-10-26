import React, { Component } from 'react';
import {CardBody, Col, Row, FormGroup, Label, Input, TabPane, TabContent, Button } from 'reactstrap';
import Select from 'react-select';
import API015 from '../../../../../services/API015';

class Step1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab: '',
            datas: [],
            kodeProv: '',
            namaProv: '',
            kodeKab: '',
            namaKab: '',
            kodeKec: '',
            namaKec: '',
            kodeKel: '',
            namaKel: '',
            namaRw: '',
            namaRt: '',
            jenisTempatLayanan: [
                { id: 1, label: 'Statis' },
                { id: 2, label: 'Bergerak' },
            ],
            tingkatFaskes: [
                { value: 'jenisFKRTLId', label: 'FKRTL' },
                { value: 'jenisFKTPId', label: 'FKTP' },
                { value: 'jenisJaringanId', label: 'JARINGAN' },
                { value: 'jenisJejaringId', label: 'JEJARING' },
            ],
            select1: [
                { id: 1, label: 'Klinik Utama' },
                { id: 2, label: 'RS Umum' },
                { id: 3, label: 'RS Khusus' },
                { id: 4, label: 'Puskesmas' },
                { id: 5, label: 'Praktik Dokter' },
                { id: 6, label: 'Klinik Pratama' },
                { id: 7, label: 'RS Tipe D Pratama'},
            ],
            select2: [
                { id: 1, label: 'PUSTU' },
                { id: 2, label: 'PUSLING' },
                { id: 3, label: 'POSKESDES/POLINDES' },
                { id: 4, label: 'Praktik Dokter' },
                { id: 5, label: 'Praktik Bdan' },
            ],
            kepemilikan: [
                { id: 1, label: 'Kemenkes Pusat' }, 
                { id: 2, label: 'Dinkes Provinsi' }, 
                { id: 3, label: 'Dinkes Kab/Kota' }, 
                { id: 4, label: 'BKKBN' }, 
                { id: 5, label: 'SKPD KB Kab/Kota' }, 
                { id: 6, label: 'TNI' }, 
                { id: 7, label: 'POLRI' }, 
                { id: 8, label: 'BUMN/BUMD' }, 
                { id: 9, label: 'Swasta' }, 
                { id: 10, label: 'LSOM' } 
            ],
            kbPerusahaan: [
                { id: 1, label: 'YA' },
                { id: 2, label: 'TIDAK' }, 
            ],
            pkbrs: [
                { id: 1, label: 'YA' },
                { id: 2, label: 'TIDAK' },
            ],
            kerjasamaBpjs: [
                { id: 1, label: 'YA' },
                { id: 2, label: 'TIDAK' }
            ],
            kerjasamaBpjsLnsgTdk: [
                { id: 1, label: 'YA' },
                { id: 2, label: 'TIDAK' }
            ],
            showKbPerusahaan: [],
            showPkbrs: [],
            showJenisTempatLayanan: [],
            showTingkatFaskes: [],
            showSel: [],
            showKepemilikan: [],
            showKerjasamaBpjs: [],
            showKerjasamaBpjsLnsgTdk: [],
            nomorPKSLangsung: '',
            nomorPKSTidakLangsung: '',
            masaBerlakuPKSLangsung: '',
            masaBerlakuPKSLangsungAkhir: '',
            masaBerlakuPKSTidakLangsung: '',
            masaBerlakuPKSTidakLangsungAkhir: '',
            nomorRegisterPKSLangsung: ''
        }
    }

    
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        var  data = JSON.parse(this.props.lihat)
        if (data) {
            this.setState({
                datas: data
            })
    
            console.log('data', data)
            var sel = []
            if(data.jenisFKRTLId !== 0 || data.jenisFKTPId !==0){
                sel = this.state.select1
            } else {
                sel = this.state.select2
            }
            for (let x = 0; x < this.state.tingkatFaskes.length; x++) {
                if (data[this.state.tingkatFaskes[x].value] !== 0) {
                    var masaBerlakuPKSLangsung = (data.masaBerlakuPKSLangsung) ? masaBerlakuPKSLangsung =  new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long", day: "2-digit" }).format(Date.parse(data.masaBerlakuPKSLangsung)) : masaBerlakuPKSLangsung= ''
                    var masaBerlakuPKSTidakLangsung = (data.masaBerlakuPKSTidakLangsung) ? masaBerlakuPKSTidakLangsung =  new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long", day: "2-digit" }).format(Date.parse(data.masaBerlakuPKSTidakLangsung)) : masaBerlakuPKSTidakLangsung= ''
                    var masaBerlakuPKSLangsungAkhir = (data.masaBerlakuPKSLangsungAkhir) ? masaBerlakuPKSLangsungAkhir =  new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long", day: "2-digit" }).format(Date.parse(data.masaBerlakuPKSLangsungAkhir)) : masaBerlakuPKSLangsungAkhir= ''
                    var masaBerlakuPKSTidakLangsungAkhir= (data.masaBerlakuPKSTidakLangsungAkhir) ? masaBerlakuPKSTidakLangsungAkhir =  new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "long", day: "2-digit" }).format(Date.parse(data.masaBerlakuPKSTidakLangsungAkhir)) : masaBerlakuPKSTidakLangsungAkhir= ''
                    this.setState({
                        showJenisTempatLayanan: this.state.jenisTempatLayanan.filter(item => item.id === data.jenisTempatLayananId),
                        showTingkatFaskes: this.state.tingkatFaskes.filter(item => item.value === this.state.tingkatFaskes[x].value),
                        showSel: sel.filter(item => item.id === data[this.state.tingkatFaskes[x].value] ),
                        showKbPerusahaan: this.state.kbPerusahaan.filter(item => item.id === data.kBPerusahaanId),
                        showPkbrs: this.state.pkbrs.filter(item => item.id === data.pKBRSId),
                        showKepemilikan: this.state.kepemilikan.filter(item => item.id === data.kepemilikanId),
                        showKerjasamaBpjs: this.state.kerjasamaBpjs.filter(item => item.id === data.kerjasamaBPJSKesehatanId),
                        showKerjasamaBpjsLnsgTdk: this.state.kerjasamaBpjsLnsgTdk.filter(item => item.id === data.kerjasamaBPJSKesehatanLangsungId),
                        nomorPKSLangsung: data.nomorPKSLangsung,
                        nomorPKSTidakLangsung: data.nomorPKSTidakLangsung,
                        masaBerlakuPKSLangsung: masaBerlakuPKSLangsung,
                        masaBerlakuPKSTidakLangsung: masaBerlakuPKSTidakLangsung,
                        masaBerlakuPKSLangsungAkhir: masaBerlakuPKSLangsungAkhir,
                        masaBerlakuPKSTidakLangsungAkhir: masaBerlakuPKSTidakLangsungAkhir,
                        nomorRegisterPKSLangsung: data.nomorRegisterPKSLangsung,
                        activeTab: (data.kerjasamaBPJSKesehatanLangsungId).toString()
                    })
                }
                
            }

            API015.get('/siga/location/getListRtByIdRw?id_rw=' + data.rwId)
            .then(res=> {
                let dat = res.data.filter(item => item.rtID === data.rtId.toString())
                // let dat = res.data.filter(item => item.rtID === data.rtId.toString())
                console.log(res.data,'tes dat');
                this.setState({
                    kodeProv: dat.map(item => item.kodeProvinsi),
                    namaProv: dat.map(item => item.namaProvinsi),
                    kodeKab : dat.map(item => item.kodeKabupaten),
                    namaKab : dat.map(item => item.namaKabupaten),
                    kodeKec : dat.map(item => item.kodeKecamatan),
                    namaKec : dat.map(item => item.namaKecamatan),
                    kodeKel : dat.map(item => item.kodeKelurahan),
                    namaKel : dat.map(item => item.namaKelurahan),
                    namaRw  : dat.map(item => item.namaRW),
                    namaRt  : dat.map(item => item.nama_rt)
                })
    
            })
        }
        else {
            this.props.buttonBack();
        }


    }

    render(){
        console.log('get data', this.state.showKepemilikan)
        return(
            <div>
                <Row>
                    <Col sm="12">
                        <Row>
                            <Col md="3"></Col>
                            
                            <Col md="6" style={{ textAlign: 'center' }}>
                            <CardBody>
                                <h6>KARTU PENDAFTARAN TEMPAT PELAYANAN KB</h6>
                                <Row>
                                    <Col md="3" xs="6" style={{ textAlign: 'center' }} >
                                        <Row>
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" value={this.state.datas.kodeProvinsi} disabled/>
                                        </Row>
                                        <Row >
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>Kode Provinsi</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" value={this.state.datas.kodeKabupaten} disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>Kode Kabupaten/Kota</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input type="number" style={{ marginRight: '5px', textAlign: 'center' }} id="text-input" name="text-input" value={this.state.datas.nomorRegisterFaskesKB} disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>No. Register Faskes KB</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3" xs="6">
                                        <Row>
                                            <Input type="number" style={{ marginRight: '5px', textAlign: 'center' }} id="text-input" name="text-input" value={this.state.datas.nomorJaringanJejaringFaskesKB} disabled/>
                                        </Row>
                                        <Row>
                                            <Col md="12" style={{ textAlign: 'center' }}>
                                                <Label>No. Jaringan/Jejaring Faskes KB</Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                        <CardBody className="card-body-nopad">
                        <h6>I. Identitas </h6>
                        <div style={{position:'absolute', right: '20px', marginTop:'-30px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <FormGroup>
                                <Row>
                                    <Col md="4">
                                        <Label className="labelForm">1. Nama Tempat Pelayan KB</Label>
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" id="text-input" name="text-input" value={this.state.datas.namaTempatPelayananKB} disabled />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <Label style={{ marginTop: '10px' }} className="labelForm">2. Alamat</Label>
                                        <Row>
                                            <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                                <Label className="labelForm">a. Jalan :</Label>
                                            </Col>
                                            <Col md="4" style={{ paddingTop: '10px' }}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.datas.alamatJalan} disabled />
                                            </Col>
                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                <Row>
                                                    <Col md="3" xs="4"><Label className="labelForm">RT</Label></Col>
                                                    <Col md="9" xs="8"><Input type="read-only" id="text-input" name="text-input" value={this.state.namaRt} disabled /></Col>
                                                </Row>
                                            </Col>
                                            <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                                <Row>
                                                    <Col md="3" xs="4"><Label className="labelForm">RW</Label></Col>
                                                    <Col md="9" xs="8"><Input type="read-only" id="text-input" name="text-input" value={this.state.namaRw} disabled /></Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>b. Desa/Kelurahan :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="read-only" id="text-input" name="text-input" value={this.state.namaKel} disabled />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.kodeKel} disabled />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>c. Kecamatan :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.namaKec} disabled />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.kodeKec} disabled />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>d. Kabupaten :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.namaKab} disabled />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.kodeKab} disabled />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4" style={{marginTop:'10px'}}>
                                                <Label>e. Provinsi :</Label>
                                            </Col>
                                            <Col md="7" xs="9" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.namaProv} disabled />
                                            </Col>
                                            <Col md="1" xs="3" style={{marginTop:'10px'}}>
                                                <Input type="text" id="text-input" name="text-input" value={this.state.kodeProv} disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row style={{ paddingTop: '20px' }}>
                                    <Col md="4" style={{ paddingTop: '10px' }}>
                                        <Label>3. Jenis</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Jenis Faskes KB" options={this.state.jenisTempatLayanan} value={this.state.showJenisTempatLayanan} isDisabled isClearable />
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Jenis Tingkat Faskes KB" options={this.state.tingkatFaskes} value={this.state.showTingkatFaskes} isDisabled isClearable />
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Jenis Tingkat Pelayanan" options={[...this.state.select1, ...this.state.select2]} value={this.state.showSel} isDisabled isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md='4' style={{ paddingTop: '10px' }}>
                                        <Label>4. Kepemilikan</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select placeholder="Status Kepemilikan" options={this.state.Kepemilikan} value={this.state.showKepemilikan} isDisabled isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md='4' style={{ paddingTop: '10px' }}>
                                        <Label>5. Apakah faskes KB termasuk pada:</Label>
                                    </Col>
                                    <Col md="1" style={{ paddingTop: '10px' }}>
                                        <Label>KB Perusahaan</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.kbPerusahaan} value={this.state.showKbPerusahaan} isDisabled isClearable />
                                    </Col>
                                    <Col md="1" style={{ paddingTop: '10px' }}>
                                        <Label>PKBRS</Label>
                                    </Col>
                                    <Col md="2" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.pkbrs} value={this.state.showPkbrs} isDisabled isClearable />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '15px' }}>
                                    <Col md="4" xs="12" style={{ paddingTop: '10px' }}>
                                        <Label>6. Kerjasama Dengan BPJS Kesehatan </Label>
                                        <Label style={{ paddingLeft: '10px'}}>(pilih Ya atau Tidak, jika Ya, maka pilih Langsung atau Tidak Langsung, selanjutnya isi No. PKS, masa berlaku PKS dan no. registernya pada BPJS Kesehatan)</Label>
                                    </Col>
                                    <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.kerjasamaBpjs} value={this.state.showKerjasamaBpjs} isDisabled isClearable />    
                                    </Col>
                                    <Col md="2" xs="6" style={{ paddingTop: '10px' }}>
                                        <Select options={this.state.kerjasamaBpjsLnsgTdk} value={this.state.showKerjasamaBpjsLnsgTdk} isDisabled isClearable />    
                                    </Col>
                                </Row>

                                <TabContent style={{ border: 'none' }} activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Row style={{ marginTop: '5px' }}>
                                            <Col md="4"></Col>
                                            <Col md="4">
                                                <Label>Langsung</Label>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. PKS : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.nomorPKSLangsung} disabled />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Awal : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.masaBerlakuPKSLangsung} disabled />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Akhir : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.masaBerlakuPKSLangsungAkhir} disabled />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. Register : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.nomorRegisterPKSLangsung} disabled />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row style={{ marginTop: '5px' }}>
                                            <Col md="4"></Col>
                                            <Col md="4">
                                                <Label>Tidak Langsung</Label>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>No. PKS : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.nomorPKSTidakLangsung} disabled />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Awal : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.masaBerlakuPKSTidakLangsung} disabled />
                                                    </Col>
                                                </Row>
                                                <Row style={{ marginTop: '15px' }}>
                                                    <Col md="4">
                                                        <Label>Masa Berlaku Akhir : </Label>
                                                    </Col>
                                                    <Col md="6">
                                                        <Input type="text" id="text-input" name="text-input" value={this.state.masaBerlakuPKSTidakLangsungAkhir} disabled />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>

                            </FormGroup>
                        </CardBody>
                    </Col>
                </Row>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                    <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                </div>
            </div>
        )
    }
}

export default Step1;