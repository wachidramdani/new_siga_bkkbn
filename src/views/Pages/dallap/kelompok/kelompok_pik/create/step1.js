import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CardBody, Col, Row, FormGroup, Label, Input, TabPane, TabContent, Button } from 'reactstrap';
import Select from 'react-select';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import API013 from '../../../../../../services/API013';
import btnBack from '../../../../../../assets/img/btnBack.png';


class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: false,
            datas: [
                { id: '1', nomorRegisterFaskesKB: '001' },
                { id: '2', nomorRegisterFaskesKB: '002' },
                { id: '3', nomorRegisterFaskesKB: '003' }
            ],
            noRegisterFaskesKb: '',
            hidden_noRegisterFaskesKb: false,
            noJaringanJejaring: '',
            noJaringanFaskesKB_RO: true,
            namaTempatKB_RO: true,
            jenisFaskesKb: [
                { value: '11', label: 'Faskes', kd_jenisFaskesKb: '1' },
                { value: '12', label: 'Jaringan/Jejaring', kd_jenisFaskesKb: '2' },
            ],
            select1: 0,
            show_jenisFaskesKb: [],
            hidden_jenisFaskesKb: true,
            select2: null,
            show_tingkatFaskesKb: [],
            hidden_tingkatFaskesKb: true,
            select3: null,
            show_tingkatPelayanan: [],
            hidden_tingkatPelayanan: true,
            select4: null,
            statusKepemilikan: [],
            hidden_statusKepemilikan: true,

            basisPendidikan: [
                { value: '1', label: 'SMP/Sederajat' },
                { value: '2', label: 'SMA/Sederajat' },
                { value: '3', label: 'Perguruan Tinggi' },
                { value: '4', label: 'Organisasi Keagamaan' },
                { value: '5', label: 'LSM/Organisasi Kepemudaan/Organisasi Kemasyarakatan' }
            ],
            valuePendidikan: '',
            pengelola: [
                { value: '1', label: 'SKPD KB Kab/Kota' },
                { value: '2', label: 'PPLKB' },
                { value: '3', label: 'PKB/PLKB' },
                { value: '4', label: 'PPKBD' },
                { value: '5', label: 'Sub PPKBD' },
                { value: '6', label: 'Lainnya' }
            ],
            valuePengelola: '',
            valuePengelolaLainnya: 0,
            namaPengelola: '',
            kodeRegisterPengelola: '',

            selKerjasamaBpjs: true,
            valKerjasamaBpjs: null,
            valPelayananRekanalisasi: null,
            selKerjasamaBpjsLsngTdk: true,
            valKerjasamaBpjsLsngTdk: null,
            activeTab: '',
            namaTempatPelayananKB: '',
            namaKelompok: '',
            jalan: '',

            jenisTempatLayananId: 0,
            jenisLayananBergerakId: 0,

            jenisFKRTLId: 0,
            jenisFKTPId: 0,
            jenisJaringanId: 0,
            jenisJejaringId: 0,

            KbPerusahaanId: 0,
            pKBRSId: 0,

            kerjasamaBPJSKesehatanId: 0,
            kerjasamaBPJSKesehatanLangsungId: 0,

            nomorRegisterPKSLangsung: '',
            nomorPKSLangsung: '',
            masaBerlakuLangsung: null,
            masaBerlakuLangsungAkhir: null,

            noPksTidakLangsung: '',
            masaBerlakuTidakLangsung: null,
            masaBerlakuTidakLangsungAkhir: null,

            fields: {},
            errors: {}

        }
    }

    checkNoReg = (noreg) => {
        var x = 0;
        // console.log(noreg, 'moreg');
        if (this.state.datas.length > 0) {
            this.state.datas.forEach(data => {
                // console.log(data.nomorRegisterFaskesKB)
                if (noreg === data.nomorRegisterFaskesKB) {
                    x++;
                }
            });
            // console.log(x, 'tes x');
            if (x > 0) {
                this.setState({
                    noJaringanFaskesKB_RO: false,
                    noJaringanJejaring: '',
                    namaTempatKB_RO: true,
                });
                ReactDOM.findDOMNode(this.Text_noJaringanJejaring).focus();
            } else {
                Swal.fire({
                    title: 'Info',
                    icon: 'info',
                    text: 'Faskes KB induk belum terdaftar, lanjutkan jika anda ingin mendaftarkan Faskes KB Induk baru.',
                }).then((result) => {
                    Swal.close();
                    this.setState({
                        noJaringanFaskesKB_RO: true, noJaringanJejaring: '', namaTempatKB_RO: false, namaTempatPelayananKB: '',
                        show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '11'),
                        hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                        show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan: [],
                        hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                        kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null,
                        valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                    });
                    // setTimeout(function () { 
                    // ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
                    // }, 0); 
                });
            }
        } else {
            Swal.fire({
                title: 'Info',
                icon: 'info',
                text: 'Faskes KB induk belum terdaftar, lanjutkan jika anda ingin mendaftarkan Faskes KB Induk baru.',
            }).then((result) => {
                Swal.close();
                this.setState({
                    noJaringanFaskesKB_RO: true, noJaringanJejaring: '', namaTempatKB_RO: false, namaTempatPelayananKB: '',
                    show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '11'),
                    hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                    show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan: [],
                    hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                    kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null,
                    valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                });
                // setTimeout(function () { 
                ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
                // }, 0); 
            });
        }
    }

    checkNoJejaring = (noJejaring) => {
        var x = 0;
        if (this.state.datas.length > 0) {
            this.state.datas.forEach(data => {
                if (this.state.noRegisterFaskesKB === data.nomorRegisterFaskesKB && noJejaring === data.nomorJaringanJejaringFaskesKB) {
                    x++;
                }
            });
            if (x > 0) {
                Swal.fire({
                    title: 'Peringatan',
                    icon: 'warning',
                    text: 'Jaringan Faskes KB sudah terdaftar.',
                });
            } else {
                this.setState({
                    namaTempatKB_RO: false, namaTempatPelayananKB: '',
                    show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '12'),
                    hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                    show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan: [],
                    hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                    kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null,
                    valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                });
                // ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
            }
        } else {
            this.setState({
                namaTempatKB_RO: false, namaTempatPelayananKB: '',
                show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '1'),
                hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan: [],
                hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null,
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
            });
            ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
        }
    }


    componentDidMount() {
        this.setState({ blocking: false });
        // this.setState({ datas: [] });
        // API013.get('siga/pelayanankb/getlistbylocation?provinsiId=' + sessionStorage.getItem("kd_prov") + '&kabupatenId=' + sessionStorage.getItem("kd_kab") + '&kecamatanId=0&kelurahanId=0&rwId=0&rtId=0')
        // .then(res => {
        //     console.log(res.data,'tes')
        //     if(res.status === 200){ 
        //         this.setState({ datas: this.state.datas.concat(res.data) });
        //     }
        //     this.setState({ blocking: false });
        // }).catch((error) => {
        //     this.setState({ blocking: false });
        //     Swal.fire({
        //         title: 'Error',
        //         icon: 'error',
        //         text: 'Please Check Your Network Connection.',
        //     });
        // });
    }

    changePendidikan = (e) => {
        if (e) {
            this.setState({
                valuePendidikan: e
            })
        }
    }

    changePengelola = (e) => {
        if (e) {
            this.setState({
                valuePengelola: e,
                valuePengelolaLainnya: e.value
            })
            console.log("nilai e" , e)
        }
    }

    handleChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    convertDate = (dt) => {
        console.log(dt, 'tes dt');
        var curr = new Date(dt);
        // curr.setDate(dt);
        return curr.toISOString();
    }

    handleValidation() {
        let state = this.state;
        let errors = {};
        let formIsValid = true;

        //Jalan
        if (!state.jalan) {
            formIsValid = false;
            errors["jalan"] = "Tidak Boleh Kosong";
        }

        //Nama tempat pelayanan KB
        if (!state.namaTempatPelayananKB) {
            formIsValid = false;
            errors["namaTempatPelayananKB"] = "Tidak Boleh Kosong";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleNext = (event) => {
        //validasi
        event.preventDefault();

        // if(this.handleValidation()){
        // console.log(sessionStorage.getItem('kd_prov')+ 'tes');
        const tpkb = sessionStorage.getItem('depdagriProv') + sessionStorage.getItem('depdagriKab') + this.state.noRegisterFaskesKB + this.state.noJaringanJejaring
        sessionStorage.setItem('tempatPelayananKBId', tpkb)

        const step1 = {
            tempatPelayananKBId: tpkb,
            provinsiId: parseInt(sessionStorage.getItem('kd_prov')),
            kabupatenId: parseInt(sessionStorage.getItem('kd_kab')),
            kecamatanId: parseInt(sessionStorage.getItem('kd_kec')),
            kelurahanId: parseInt(sessionStorage.getItem('kd_des')),
            rwId: parseInt(sessionStorage.getItem('kd_rw')),
            rtId: parseInt(sessionStorage.getItem('kd_rt')),
            nomorRegisterFaskesKB: this.state.noRegisterFaskesKB,
            nomorJaringanJejaringFaskesKB: this.state.noJaringanJejaring,
            namaTempatPelayananKB: this.state.namaTempatPelayananKB,
            alamatJalan: this.state.jalan,

            jenisFKRTLId: this.state.jenisFKRTLId,
            jenisFKTPId: this.state.jenisFKTPId,
            jenisJaringanId: this.state.jenisJaringanId,
            jenisJejaringId: this.state.jenisJaringanId,
            jenisTempatLayananId: this.state.jenisTempatLayananId,
            jenisLayananBergerakId: this.state.jenisLayananBergerakId,
            kepemilikanId: parseInt((this.state.select4) ? this.state.select4.value : ''),
            kBPerusahaanId: this.state.KbPerusahaanId,
            pKBRSId: this.state.pKBRSId,

            kerjasamaBPJSKesehatanId: this.state.kerjasamaBPJSKesehatanId,
            kerjasamaBPJSKesehatanLangsungId: this.state.kerjasamaBPJSKesehatanLangsungId,

            nomorPKSLangsung: this.state.nomorPKSLangsung,
            masaBerlakuPKSLangsung: this.state.masaBerlakuLangsung,
            masaBerlakuPKSLangsungAkhir: this.state.masaBerlakuLangsungAkhir,
            nomorRegisterPKSLangsung: this.state.nomorRegisterPKSLangsung,

            nomorPKSTidakLangsung: this.state.noPksTidakLangsung,
            masaBerlakuPKSTidakLangsung: this.convertDate(this.state.masaBerlakuTidakLangsung),
            masaBerlakuPKSTidakLangsungAkhir: this.convertDate(this.state.masaBerlakuTidakLangsungAkhir),
        };
        console.log(step1, 'tes')
        this.props.handleValueStep('step1', step1)
        this.props.nextStep();
        //  } else{
        //     Swal.fire({  
        //         title: 'Peringatan',  
        //         icon: 'warning',  
        //         text: 'Form nya masih kosong! silahkan diisi dulu yaa :)',  
        //     });
        //  }

    }

    noRegisterFaskesKBChange = (e) => {
        this.setState({ noRegisterFaskesKB: e.target.value.replace(/\D/, '') },
            () => {
                if (this.state.noRegisterFaskesKB.length === 3) {
                    // this.checkNoReg(sessionStorage.getItem("kd_prov"), sessionStorage.getItem("kd_kab"), sessionStorage.getItem("kd_kec"), sessionStorage.getItem("kd_des"), sessionStorage.getItem("kd_rt"), sessionStorage.getItem("kd_rw"))
                    // this.checkNoReg(sessionStorage.getItem("kd_prov"), sessionStorage.getItem("kd_kab"), sessionStorage.getItem("kd_kec"), 0, 0, 0)
                    this.checkNoReg(this.state.noRegisterFaskesKB);
                }
            })
    }

    noJaringanJejaringChange = (e) => {
        this.setState({ noJaringanJejaring: e.target.value.replace(/\D/, '') },
            () => {
                if (this.state.noJaringanJejaring.length === 2) {
                    this.checkNoJejaring(this.state.noJaringanJejaring);
                }
                // else{
                //     this.setState({
                //         noJaringanJejaring: '',
                //         select1: null, show_tingkatFaskesKb: [], select2: null, hidden_tingkatFaskesKb: true,
                //         show_tingkatPelayanan: [], statusKepemilikan : [], select3: null, hidden_tingkatPelayanan: true, select4: null,
                //         hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                //         kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                //         valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                //     })
                // }
            })
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

    render() {
        var curr = new Date();
        curr.setDate(curr.getDate());
        var dateNow = curr.toISOString().substr(0, 10);

        return (
            <div>
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col sm="12">
                            <Row>
                                <div className="divImg"><img src={btnBack} onClick={this.handleBack} alt="" style={{ width: '28px', height: '28px', marginLeft: '15px' }} /></div>
                                <div style={{ marginLeft: '15px' }}>
                                    <h6>I. 11.06.081.002.002.017</h6>
                                </div>
                                <div style={{ position: 'absolute', right: '20px', marginTop: '0px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            </Row>
                            <CardBody className="card-body-nopad">
                                {/* <h6>I. Identitas </h6> */}
                                <FormGroup>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>Nama Kelompok</Label>
                                        </Col>
                                        <Col md="8" xs="12" >
                                            <Input type="text" id="NamaKelompok" name="namaKelompok" value={this.state.namaKelompok} onChange={this.handleChange} />
                                            <span style={{ color: "red" }}>{this.state.errors["namaTempatPelayananKB"]}</span>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>Alamat</Label>
                                        </Col>
                                        <Col md="8" xs="12" >
                                            <Input type="text" readOnly={this.state.namaTempatKB_RO} id="jalan" name="jalan" value={this.state.jalan} onChange={this.handleChange} />
                                            <span style={{ color: "red" }}>{this.state.errors["jalan"]}</span>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md='4'>
                                            <Label>Basis Pendidikan Masyarakat</Label>
                                        </Col>
                                        <Col md="8">
                                            <Select id="basisPendidikan" name="basisPendidikan" options={this.state.basisPendidikan} onChange={this.changePendidikan} value={this.state.valuePendidikan} placeholder="Basis Pendidikan" isClearable />
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md='4'>
                                            <Label>Pengelola</Label>
                                        </Col>
                                        <Col md="6" xs="8">
                                            <Select id="pengelola" name="pengelola" options={this.state.pengelola} onChange={this.changePengelola} value={this.state.valuePengelola} placeholder="Pengelola" isClearable isMulti />
                                        </Col>
                                        <Col md="2" xs="4">
                                            {
                                                (this.state.valuePengelolaLainnya == 6) ?
                                                    <Input type="text" id="pengelolaLainnya" name="pengelolaLainnya" value={this.state.pengelolaLainnya} onChange={this.handleChange} />
                                                    :
                                                    <Input type="text" readOnly />
                                            }
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md='4'>
                                            <Label>Nama</Label>
                                        </Col>
                                        <Col md="8">
                                            <Input type="text" id="namaPengelola" name="namaPengelola" value={this.state.namaPengelola} onChange={this.handleChange} />
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md='4'>
                                            <Label>Kode Register Pengelola</Label>
                                        </Col>
                                        <Col md="7" xs="10">
                                            <Input type="text" id="kodeRegisterPengelola" name="kodeRegisterPengelola" value={this.state.kodeRegisterPengelola} onChange={this.handleChange} />
                                        </Col>
                                        <Col md="1" xs="2" px-0 mx-0>
                                            <Button>...</Button>
                                        </Col>
                                    </Row>

                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {/* <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button> */}
                        <Button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</Button>
                    </div>
                </BlockUi>
            </div>
        )
    }
}

export default Step1;