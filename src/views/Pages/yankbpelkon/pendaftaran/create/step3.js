import React, { Component } from 'react';
import { Card, CardBody, Col, Row, FormGroup, Label, Input, Button, Collapse, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';
import Table2EditNoSearch from '../../../../Commons/Table/Table2EditNoSearch';
import API015 from '../../../../../services/API015';
import API014 from '../../../../../services/API014';
import Swal from 'sweetalert2';
import FormInput from '../../registrasi/create/formInput';
import DaftarTenaga from './daftarTenaga';
import ListBdki from './listBdki';


class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            datas: [],
            dataKeluarga: [],
            dataNonBdki: [],
            modal: false,
            bdkiModal: false,
            tenagaModal: false,
            listBdkiModal: false,
            nestedModal: false,
            activeTab: 0,
            currentProfesi: [],
            currentPage: 1,
            sizePerPage: 5,
            currentPageModal2: 1,
            sizePerPageModal2: 10,
            editState: false,
            profesi: [
                { value: '1', label: 'Dokter Kebidanan dan Kandungan' },
                { value: '2', label: 'Dokter Bedah/Urologi' },
                { value: '3', label: 'Dokter Umum' },
                { value: '4', label: 'Bidan' },
                { value: '5', label: 'Perawat' },
                { value: '6', label: 'Administrasi' },
            ],
            setPelatihan:[],
            checkbox: [
                {label: 'Tubektomi', value: '11', name: ''},
                {label: 'Vasektomi', value: '12', name: ''},
                {label: 'IUD', value: '12', name: ''},
                {label: 'Implan 1/2 Batang', value: '', name: ''},
                {label: 'KIP/Konseling', value: '', name: ''},
                {label: 'R/R', value: '', name: ''},
                {label: 'Pelatihan', value: '', name: ''},
                {label: 'Sertifikat Kompetensi', value: '', name: ''},
                {label: 'Belum Terlatih', value: '', name: ''}
            ],
            show_checkbox: [],
            data_checkbox: [],
            dataPenduduk: [
                {nik: '1234567890987654', nama: 'Albertus'},
                {nik: '1987654321234567', nama: 'David'},
            ],
            show_dataPenduduk: [],
            show_nik: null,
            jmlhTenaga: 0,

            // Wilayah
            opt_prov: [], id_provinsi: '', provinsi: '',
            opt_kab: [], id_kabupaten: '', kabupaten: '', dis_kab: true,
            opt_kec: [], id_kecamatan: '', kecamatan: '', dis_kec: true,
            opt_des: [], id_des: '', desa: '', dis_des: true,
            opt_rw: [], id_rw: '', rw: '', dis_rw: true,
            opt_rt: [], id_rt: '', rt: '', dis_rt: true,
            
            //table
            tenagaPendaftaranNIK: '',
            tenagaPendaftaranNama: '',
            dokterKebidananDanKandungan: 0,
            dokterBedahUrologi: 0,
            profesiUmum: 0,
            profesiBidan: 0,
            profesiPerawat: 0,
            profesiAdministrasi: 0,
            pelatihanIUD: 0,
            pelatihanTubektomi: 0,
            pelatihanVasektomi: 0,
            pelatihanImplan1Batang: 0,
            pelatihanImplan2Batang: 0,
            pelatihanKIPKonseling: 0,
            pelatihanRR: 0
        }
    }

    //API 015 (Wilayah)
    setProv() {
        this.setState({ blocking: true });
        this.setState({ opt_prov: [] });
        var newData = [];
        API015.get('siga/location/getListProvinsi')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);

                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_provinsi, 'label': data.nama, 'kode': data.kodeDepdagri };
                    return newData.push(obj);
                });

                // const nama = res.data.map(res => res.nama_kabupaten)
                this.setState({
                    opt_prov: newData
                });
                //   }
                // console.log("nama" + nama);
                // console.log("opt_prov" + this.state.opt_prov);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setKab(id) {
        this.setState({ blocking: true });
        this.setState({ opt_kab: [] });
        var newData = [];
        API015.get('siga/location/getListKabupatenByIdProvinsi?id_provinsi=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten, 'kode': data.kodeDepdagri };
                    return newData.push(obj);
                });
                this.setState({ opt_kab: newData });
                // console.log("opt_kab" + this.state.opt_kab);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setKec(id) {
        this.setState({ blocking: true });
        this.setState({ opt_kec: [] });
        var newData = [];
        API015.get('siga/location/getListKecamatanByIdKabupaten?id_kabupaten=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kecamatan, 'label': data.nama_kecamatan };
                    return newData.push(obj);
                });
                this.setState({ opt_kec: newData });
                // console.log("opt_kec" + this.state.opt_kec);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setDes(id) {
        this.setState({ blocking: true });
        this.setState({ opt_des: [] });
        var newData = [];
        API015.get('siga/location/getListKelurahanByIdKecamatan?id_kecamatan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kelurahan, 'label': data.nama_kelurahan };
                    return newData.push(obj);
                });
                this.setState({ opt_des: newData });
                // console.log("opt_des" + this.state.opt_des);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setRW(id) {
        this.setState({ blocking: true });
        this.setState({ opt_rw: [] });
        var newData = [];
        API015.get('siga/location/getListRwByIdKelurahan?id_kelurahan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rw, 'label': data.nama_rw };
                    return newData.push(obj);
                });
                this.setState({ opt_rw: newData });
                // console.log("opt_rw" + this.state.opt_rw);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setRT(id) {
        this.setState({ blocking: true });
        this.setState({ opt_rt: [] });
        var newData = [];
        API015.get('/siga/location/getListRtByIdRw?id_rw=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rt, 'label': data.nama_rt };
                    return newData.push(obj);
                });
                this.setState({ opt_rt: newData });
                // console.log("opt_rt" + this.state.opt_rt);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    callData = (e) =>{
        if (e.keyCode === 13) {
            this.setState({
                show_dataPenduduk: this.state.dataPenduduk.filter(item => item.nik === e.target.value)
            })
          }
        
    }

    reset = () => {
        document.getElementById('input-nik').value = ''
        this.setState({
            currentProfesi: null, show_checkbox: [], show_dataPenduduk: [], nikPeserta: null, namaPeserta: ''
        })
    }

    simpan = () => {
        this.setState({
            jmlhTenaga: this.state.jmlhTenaga + 1,
            datas: [...this.state.datas,{
                tempatPelayananKBID: sessionStorage.getItem('tempatPelayananKBId'),
                nomor: 0,
                tenagaPendaftaranNIK: this.state.nikPeserta,
                tenagaPendaftaranNama: this.state.namaPeserta,
                dokterKebidananDanKandungan: this.state.dokterKebidananDanKandungan,
                dokterBedahUrologi: this.state.dokterBedahUrologi,
                profesiUmum: this.state.profesiUmum,
                profesiBidan: this.state.profesiBidan,
                profesiPerawat: this.state.profesiPerawat,
                profesiAdministrasi: this.state.profesiAdministrasi,
                pelatihanIUD: this.state.pelatihanIUD,
                pelatihanTubektomi: this.state.pelatihanTubektomi,
                pelatihanVasektomi: this.state.pelatihanVasektomi,
                pelatihanImplan1Batang: this.state.pelatihanImplan1Batang,
                pelatihanImplan2Batang: this.state.pelatihanImplan1Batang,
                pelatihanKIPKonseling: this.state.pelatihanKIPKonseling,
                pelatihanRR: this.state.pelatihanRR,
                created: "2020-10-07T03:50:44.482Z",
                createdBy: "admin",
                lastModified: "2020-10-07T03:50:44.482Z",
                lastModifiedBy: "admin",
                // tenagaPendaftaranNIK: this.state.nikPeserta, 
                // tenagaPendaftaranNama: this.state.namaPeserta, 
                dt4: this.state.currentProfesi.label,
                dt5: this.state.data_checkbox.map(item => [item, ', '])
            }],
            show_checkbox: [], nikPeserta: null, namaPeserta: '', alamat: '', noHp: '', currentProfesi: [], setPelatihan: [], data_checkbox: [],
        })
        document.getElementById('input-nik').value = ''
    }

    inputcheckbox = (e) => {
        console.log(e.target, 'cek');
        const x = (e.target.checked === true) ? 1 :0 ;
        console.log(x, 'xx');
        switch (e.target.value) {
            case 'IUD': 
                this.setState({pelatihanIUD: x})
                break;
            case 'KIP/Konseling': 
                this.setState({pelatihanKIPKonseling: x})
                break;
            case 'Implan 1/2 Batang': 
                this.setState({pelatihanImplan1Batang: x})
                break;
            case 'Vasektomi': 
                this.setState({pelatihanVasektomi: x})
                break;
            case 'R/R': 
                this.setState({pelatihanRR: x})
                break;
            case 'Tubektomi': 
                this.setState({pelatihanTubektomi: x})
                break;
            default:
                break;
        }

        if(e.target.checked === true){
            this.setState({
                data_checkbox: [...this.state.data_checkbox, e.target.value]
            })
        }
        else {
            this.setState({
                data_checkbox: this.state.data_checkbox.filter(item => item !== e.target.value)
            })
        }
    }

    handlePelatihan = (e) => {
        this.setState({setPelatihan: e})
    }

    changeProfesi = (e) => {
        this.setState({ pelatihanIUD: 0,
            pelatihanTubektomi: 0,
            pelatihanVasektomi: 0,
            pelatihanImplan1Batang: 0,
            pelatihanImplan2Batang: 0,
            pelatihanKIPKonseling: 0,
            pelatihanRR: 0
        })
        if(e){
            if(e.value === '1'){
                this.setState({
                    show_checkbox: [{label: 'Tubektomi', value: 'tubektomi', name: ''},
                    {label: 'Pelatiham', value: 'pelatihan', name: ''},{label: 'Sertifikat Kompetensi', value: 'sertifikatkompetensi', name: ''}], currentProfesi: e,
                })
            }
            else if (e.value === '2'){
                this.setState({
                    show_checkbox: [{label: 'Vasektomi', value: 'vasektomi', name: ''},{label: 'Pelatiham', value: 'pelatihan', name: ''},{label: 'Sertifikat Kompetensi', value: 'sertifikatkompetensi', name: ''}], currentProfesi: e,
                })
            }
            else if (e.value === '3'){
                this.setState({
                    show_checkbox: [
                        {label: 'IUD/Implan', value: 'iud', name: ''}, {label: 'Vasektomi', value: 'vasektomi', name: ''},
                        {label: 'KIP/Konseling', value: 'kip_konseling', name: ''}, {label: 'R/R', value: 'rr', name: ''},
                        {label: 'Pelatiham', value: 'pelatihan', name: ''},
                        {label: 'Sertifikat Kompetensi', value: 'sertifikatkompetensi', name: ''}
                        // {label: 'Implan 1/2 Batang', value: 'implan1/2batang', name: ''}, 
                    ],
                    currentProfesi: e,
                })
            }
            else if (e.value === '4'){
                this.setState({
                    show_checkbox: [
                        {label: 'IUD/Implan', value: 'iud', name: ''},
                         {label: 'KIP/Konseling', value: 'kip_konseling', name: ''}, 
                        {label: 'R/R', value: 'rr', name: ''},
                        {label: 'Pelatiham', value: 'pelatihan', name: ''},
                        {label: 'Sertifikat Kompetensi', value: 'sertifikatkompetensi', name: ''}
                        //  {label: 'Implan 1/2 Batang', value: 'implan1/2batang', name: ''},
                    ], 
                    currentProfesi: e,
                })
            }
            else if (e.value === '5'){
                this.setState({
                    show_checkbox: [
                        {label: 'KIP/Konseling', value: 'kip_konseling', name: ''}, {label: 'R/R', value: 'rr', name: ''},
                    ], 
                    currentProfesi: e,
                })
            }
            else if (e.value === '6') {
                this.setState({
                    show_checkbox: [{label: 'Belum Terlatih', value: 'belum_terlatih', name: ''},{label: 'R/R', value: 'rr', name: ''}], currentProfesi: e,
                })
            }
        }
        else {
            this.setState({
                show_checkbox: [], currentProfesi: null
            })
        }
    }

    onInputNik = (e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
        
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        }, () => {

            this.setNonBdki();
            this.setProv();
            this.setKeluarga(this.props.idProv, this.props.idKab, this.props.idKec, this.props.idDes, this.props.idRW, this.props.idRT);
        })
    };

    toggleNested = () => {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    toggleActiveTab = (param) => {
        // alert(param)
        this.setState({
            activeTab: param
        })
    }

    handleChange = (e, tab) => {
        this.setState({
            activeTab: tab,
            [e.target.name]: e.target.value
        });
    }

    handlePageChange = (page, sizePerPage) => {
        this.setState({currentPage: page, sizePerPage: sizePerPage})
    }

    handlePageChangeModal1 = (page, sizePerPage) => {
        this.setState({currentPageModal: page, sizePerPageModal: sizePerPage})
    }

    handlePageChangeModal2 = (page, sizePerPage) => {
        this.setState({currentPageModal2: page, sizePerPageModal2: sizePerPage})
    }

    showModalBdki = e => {
        this.setState({
            bdkiModal: !this.state.bdkiModal,
            editState: false
        })
    }

    toggle2 = () => {
        this.setState({
            bdkiModal: !this.state.bdkiModal
        })
    }

    toggleAdd = () => {
        this.setState({ tenagaModal: !this.state.tenagaModal })
    };

    handleJumlahTenaga = () => {
        this.setState({
            tenagaModal: !this.state.tenagaModal
        })
        // alert('list tenaga');
    }

    handleBdki = () => {
        this.setState({
            listBdkiModal: !this.state.listBdkiModal
        })
        // alert('list tenaga');
    }

    toggleBdki = () => {
        this.setState({ listBdkiModal: !this.state.listBdkiModal })
    };

    handleProv = (e) => {
        if (e) {
            this.setState({
                provinsi: e, id_provinsi: e.value, depdagriProv: e.kode,
                id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kab: false, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_provinsi) {
                        this.setKab(this.state.id_provinsi);
                        // var idProv = this.state.id_provinsi
                        // var idKab = 0
                        // var idKec = 0
                        // var idDes = 0
                        // var idRw = 0
                        // var idRt = 0
                        // this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                        // this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                id_provinsi: 0, id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            },
                // () => {
                //     if (e === null) {
                //         var idProv = 0
                //         var idKab = 0
                //         var idKec = 0
                //         var idDes = 0
                //         var idRw = 0
                //         var idRt = 0
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleKab = (e) => {
        if (e) {
            this.setState({
                kabupaten: e, id_kabupaten: e.value, depdagriKab: e.kode,
                id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: false, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kabupaten) {
                        this.setKec(this.state.id_kabupaten);
                        // var idProv = this.state.id_provinsi
                        // var idKab = this.state.id_kabupaten
                        // var idKec = 0
                        // var idDes = 0
                        // var idRw = 0
                        // var idRt = 0
                        // this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                        // this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            },
                // () => {
                //     if (e === null) {
                //         var idProv = this.state.id_provinsi
                //         var idKab = 0
                //         var idKec = 0
                //         var idDes = 0
                //         var idRw = 0
                //         var idRt = 0
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleKec = (e) => {
        if (e) {
            this.setState({
                kecamatan: e, id_kecamatan: e.value,
                id_desa: 0, id_rw: 0, id_rt: 0,
                desa: null, rw: null, rt: null,
                dis_des: false, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kecamatan) {
                        this.setDes(this.state.id_kecamatan);
                        // var idProv = this.state.id_provinsi
                        // var idKab = this.state.id_kabupaten
                        // var idKec = this.state.id_kecamatan
                        // var idDes = 0
                        // var idRw = 0
                        // var idRt = 0
                        // this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                        // this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                kecamatan: null, desa: null, rw: null, rt: null,
                id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_des: true, dis_rw: true, dis_rt: true,
            },
                // () => {
                //     if (e === null) {
                //         var idProv = this.state.id_provinsi
                //         var idKab = this.state.id_kabupaten
                //         var idKec = 0
                //         var idDes = 0
                //         var idRw = 0
                //         var idRt = 0
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleDes = (e) => {
        if (e) {
            this.setState({
                desa: e, id_des: e.value,
                id_rw: 0, id_rt: 0,
                rw: null, rt: null,
                dis_rw: false, dis_rt: true,
            },
                () => {
                    if (this.state.id_des) {
                        this.setRW(this.state.id_des);
                        // var idProv = this.state.id_provinsi
                        // var idKab = this.state.id_kabupaten
                        // var idKec = this.state.id_kecamatan
                        // var idDes = this.state.id_des
                        // var idRw = 0
                        // var idRt = 0
                        // this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                        // this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                desa: null, rw: null, rt: null,
                id_rw: 0, id_rt: 0,
                dis_rw: true, dis_rt: true,
            },
                // () => {
                //     if (e === null) {
                //         var idProv = this.state.id_provinsi
                //         var idKab = this.state.id_kabupaten
                //         var idKec = this.state.id_kecamatan
                //         var idDes = 0
                //         var idRw = 0
                //         var idRt = 0
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleRW = (e) => {
        if (e) {
            this.setState({
                rw: e, id_rw: e.value, id_rt: 0,
                rt: null, dis_rt: false,
            },
                () => {
                    if (this.state.id_rw) {
                        this.setRT(this.state.id_rw);
                        // var idProv = this.state.id_provinsi
                        // var idKab = this.state.id_kabupaten
                        // var idKec = this.state.id_kecamatan
                        // var idDes = this.state.id_des
                        // var idRw = this.state.id_rw
                        // var idRt = 0
                        // this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                        // this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                })
        }
        else {
            this.setState({
                rw: null, rt: null, dis_rt: true, id_rw: 0, id_rt: 0,
            },
                // () => {
                //     if (e === null) {
                //         var idProv = this.state.id_provinsi
                //         var idKab = this.state.id_kabupaten
                //         var idKec = this.state.id_kecamatan
                //         var idDes = this.state.id_des
                //         var idRw = 0
                //         var idRt = 0
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleRT = (e) => {
        if (e) {
            this.setState({ rt: e, id_rt: e.value },
                // () => {
                //     if (e) {
                //         var idProv = this.state.id_provinsi
                //         var idKab = this.state.id_kabupaten
                //         var idKec = this.state.id_kecamatan
                //         var idDes = this.state.id_des
                //         var idRw = this.state.id_rw
                //         var idRt = this.state.id_rt
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
        else {
            this.setState({ rt: null, id_rt: 0 },
                // () => {
                //     if (e === null) {
                //         var idProv = this.state.id_provinsi
                //         var idKab = this.state.id_kabupaten
                //         var idKec = this.state.id_kecamatan
                //         var idDes = this.state.id_des
                //         var idRw = this.state.id_rw
                //         var idRt = 0
                //         this.setKeluarga(idProv, idKab, idKec, idDes, idRw, idRt)
                //         this.setNonBdki(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    setValue = (value) => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
    };

    handleDeleteWilayah = () => {
        this.setState({
            provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
            id_provinsi: 0, id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
            dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true, datas1: [],
        })
    }

    handleSearchWilayah = () => {
        var idProv = 0
        var idKab = 0
        var idKec = 0
        var idDes = 0
        var idRW = 0
        var idRT = 0
        this.setState({
            idProv: (this.state.id_provinsi) ? idProv = this.state.id_provinsi : idProv = 0,
            idKab: (this.state.id_kabupaten) ? idKab = this.state.id_kabupaten : idKab = 0,
            idKec: (this.state.id_kecamatan) ? idKec = this.state.id_kecamatan : idKec = 0,
            idDes: (this.state.id_desa) ? idDes = this.state.id_desa : idDes = 0,
            idRW: (this.state.id_rw) ? idRW = this.state.id_rw : idRW = 0,
            idRT: (this.state.id_rt) ? idRT = this.state.id_rt : idRT = 0
        }, () => {

        });
        this.setKeluarga(idProv, idKab, idKec, idDes, idRW, idRT);
        this.setNonBdki(idProv, idKab, idKec, idDes, idRW, idRT);
    }

    setNonBdki(idProv, idKab, idKec, idDes, idRW, idRT) {
        this.setState({ blocking: true });
        this.setState({ dataNonBdki: [] });
        API014.get('siga/reg-yan-kb/getListPesertaNonBdkiByLocation?id_provinsi=' + idProv + '&id_kabupaten=' + idKab + '&id_kecamatan=' + idKec + '&id_desa=' + idDes + '&id_rw=' + idRW + '&id_rt=' + idRT)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataNonBdki: this.state.dataNonBdki.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });

            });
    }

    setKeluarga(idProv, idKab, idKec, idDes, idRW, idRT) {
        this.setState({ blocking: true });
        this.setState({ dataKeluarga: [] });
        API014('siga/reg-yan-kb/getListBdkiKeluargaByLocation?provinsiID=' + idProv + '&kabupatenID=' + idKab + '&kecamatanID=' + idKec + '&kelurahanID=' + idDes + '&rwID=' + idRW + '&rtID=' + idRT)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataKeluarga: this.state.dataKeluarga.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });     

            });
    }

    setDeleteKeluarga(id) {
        this.setState({ blocking: true });
        API014.delete('/siga/reg-yan-kb/deleteBdkiKeluarga/' + id)
            .then(res => {
                if (res.status === 200) {
                    // console.log(res);
                }
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setDeleteNonBdki(nik) {
        this.setState({ blocking: true });
        API014.delete('/siga/reg-yan-kb/deletePesertaNonBdki/' + nik)
            .then(res => {
                if (res.status === 200) {
                    // console.log(res);
                }
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    handleClickKeluarga = (row, action) => {
        this.setState({}, () => {
            if (action === 'pilih') {
                console.log(row,'row')
                this.setState({
                    namaPeserta: row.nama,
                    kkiPeserta: row.kki,
                    nikPeserta: row.nik,
                    modal: !this.state.modal
                })
            } else if (action === 'hapus') {
                this.setState({blocking: true});
                Swal.fire({
                  title: 'Hapus Peserta KB Keluarga',
                  text: "Apakah anda yakin untuk menghapus data?",
                  icon: 'warning',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Ya!',
                  confirmButtonColor: '#3085d6',
                  showCancelButton: true,
                }).then((result) => {
                  if (result.value) {
                    const idKeluarga = row.id
                    // console.log("id keluarga : ", idKeluarga)
                    this.setDeleteKeluarga(idKeluarga)
                    this.setKeluarga()        
                        Swal.fire({
                            title: 'Berhasil!',
                            icon: 'success',
                            text: 'Berhasil Menghapus.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        .then(() => {
                            this.setState({blocking: false});
                            // window.location.reload();
                        })
                  }else{
                    this.setState({blocking: false});
                  }
                });
                // const idKeluarga = row.id
                // console.log("id keluarga : ", idKeluarga)
                // this.setDeleteKeluarga(idKeluarga)
                // this.setKeluarga()
            }
        });
    }

    handleClickNonBdki = (row, action) => {
        this.setState({}, () => {
            if (action === 'pilih') {
                this.setState({
                    namaPeserta: row.nama_lengkap,
                    kkiPeserta: row.no_kki,
                    nikPeserta: row.nik,
                    modal: !this.state.modal
                })
            } else if (action === 'ubah') {
                // console.log("tanggalnya : " + row.tgl_lahir)
                this.setState({
                    editState: true,
                    rowEditClick: [
                        row.nama_lengkap,
                        // dateNow,
                        this.convert(row.tgl_lahir),
                        row.jenis_kelamin,
                        row.nik,
                        row.id_provinsi,
                        row.id_kabupaten,
                        row.id_kecamatan,
                        row.id_desa,
                        row.id_rw,
                        row.id_rt,
                        row.no_urutrmh,
                        row.pus,
                    ],
                    bdkiModal: !this.state.bdkiModal
                })
            } else if (action === 'hapus') {
                this.setState({blocking: true});
                Swal.fire({
                  title: 'Hapus Data Peserta KB Non BDKI',
                  text: "Apakah anda yakin untuk menghapus data?",
                  icon: 'warning',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Ya!',
                  confirmButtonColor: '#3085d6',
                  showCancelButton: true,
                }).then((result) => {
                  if (result.value) {
                    const nikNonBdki = row.nik
                    // console.log("NIK Non Bdki : ", nikNonBdki)
                    this.setDeleteNonBdki(nikNonBdki)
                    this.setNonBdki()                 
                        Swal.fire({
                            title: 'Berhasil!',
                            icon: 'success',
                            text: 'Berhasil Menghapus.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        .then(() => {
                            this.setState({blocking: false});
                            // window.location.reload();
                        })
                  }else{
                    this.setState({blocking: false});
                  }
                });
                // const nikNonBdki = row.nik
                // console.log("NIK Non Bdki : ", nikNonBdki)
                // this.setDeleteNonBdki(nikNonBdki)
                // this.setNonBdki()
            }
        });
    }

    convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    handleClickEdit = (row) => {
        this.setState({
            nikPeserta: row.tenagaPendaftaranNIK,
            namaPeserta: row.tenagaPendaftaranNama,
            currentProfesi: row.tenagaPendaftaranNama
        })
    }

    handleClickDelete = (row) => {
        const valuePeserta = row
        this.setState({blocking: true});
            Swal.fire({
                title: 'Delete Formula',
                text: "Are you sure to delete this formula?",
                icon: 'warning',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!',
                confirmButtonColor: '#3085d6',
                showCancelButton: true,
            }).then((result) => {
                if (result.value) {
                // API.delete()
                // .then(res => {
                //     if(res.status === 200){                    
                        Swal.fire({
                            title: 'Succes!',
                            icon: 'success',
                            text: 'Delete Succes.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.setState({
                            blocking: false,
                            datas: this.state.datas.filter(item => item !== valuePeserta)
                        });
                }else{
                this.setState({blocking: false});
                }
            });
    }
    
    handleNext = () => {
        //validasi
        const step3 = this.state.datas
        console.log(step3,'data');
        
        this.props.handleValueStep('step3', step3)
        this.props.nextStep();
    }

    getNIK = () => {
        this.setState({
            namaPeserta: 'Mawar Melati',
            alamat: 'Jalan Merdeka No. 81',
            noHp: '081982902500'
        })
    }

    render() {

        // console.log(" Data Penduduk : "+this.state.dataPenduduk)

        // const options = [
        //     { value: 'opt1', label: 'Option 1' },
        //     { value: 'opt2', label: 'Option 2' },
        //     { value: 'opt3', label: 'Option 3' },
        //     { value: 'opt4', label: 'Option 4' }
        // ]

        // const jenis_kelamin = [
        //     { value: 'laki_laki', label: 'Laki-laki' },
        //     { value: 'perempuan', label: 'Perempuan' },
        // ]
        function tglFormat(cell) {
            const today = new Date(cell)
            var dd = today.getDate();

            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }
            return dd + ' - ' + mm + ' - ' + yyyy;
        }

        const columnKeluarga = [
            {
                dataField: 'Action',
                text: 'Aksi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span className="btnInTable">
                                <Button className="btn-facebook btn-brand btn-sm icon" onClick={() => this.handleClickKeluarga(row, 'pilih')}><i className="icon-checkmark"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-youtube btn-brand btn-sm icon" onClick={() => this.handleClickKeluarga(row, 'hapus')}><i className="icon-trash"> </i></Button>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        // console.log(row)
                    },
                }
            },
            {
                dataField: 'kki',
                text: 'NOMOR KKI',
                headerAlign: 'center',
                align:'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'nama',
                text: 'NAMA LENGKAP',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'tanggalLahir',
                formatter: tglFormat,
                text: 'Tgl. Lahir',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'hubunganDenganKKID',
                text: 'HUB. DGN KK',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'pus',
                text: 'PUS',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'periodeID',
                text: 'PERIODE',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'kesertaanBerKBID',
                text: 'KESERTAAN BERKB',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'metodeKontrasepsiDigunakanID',
                text: 'METODE KONTRASEPSI',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'jaminanKesehatanNasionalID',
                text: 'KESERTAAN ASURANSI',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '200px' };
                },
            },
            {
                dataField: 'nomorRumah',
                text: 'NO. RUMAH',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
        ]

        const columnNonBdki = [
            {
                dataField: 'Action',
                text: 'Aksi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>

                            <span className="btnInTable">
                                <Button className="btn-facebook btn-brand btn-sm icon" onClick={() => this.handleClickNonBdki(row, 'pilih')}><i className="icon-checkmark"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-vimeo btn-brand btn-sm icon" onClick={() => this.handleClickNonBdki(row, 'ubah')}><i className="icon-pencil4"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-youtube btn-brand btn-sm icon" onClick={() => this.handleClickNonBdki(row, 'hapus')}><i className="icon-trash"> </i></Button>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        // console.log(row)
                    },
                }
            },
            {
                dataField: '#',
                formatter: (cell, row, rowIndex) => {
                    let rowNumber = (this.state.currentPageModal2 - 1) * this.state.sizePerPageModal2 + (rowIndex + 1);
                    return <span>{rowNumber}</span>;
                },
                text: 'No',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'no_kki',
                text: 'No KKI',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '145px' };
                },
            },
            {
                dataField: 'nama_lengkap',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'tgl_lahir',
                formatter: tglFormat,
                text: 'Tgl. Lahir',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'pus',
                text: 'PUS',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'kesertaan_asuransi',
                text: 'Kesertaan Asuransi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'kesertaan_berkb',
                text: 'Kesertaan Ber-KB',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'no_urutrmh',
                text: 'No Rumah',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
        ]


        const columns = [
            {
                dataField: '#',
                formatter: (cell, row, rowIndex) => {
                    let rowNumber = (this.state.currentPage - 1) * this.state.sizePerPage + (rowIndex + 1);
                    return <span>{rowNumber}</span>;
                },                
                text: 'No',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'tenagaPendaftaranNIK',
                text: 'NIK',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '160px' };
                },
            },
            {
                dataField: 'tenagaPendaftaranNama',
                text: 'Nama Lengkap',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'tenagaPemdaftaranAlamat',
                text: 'Alamat',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'tenagaPemdaftaranNoHp',
                text: 'No. Handphone',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Profesi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Pelatihan Teknis Pelayanan dan R/R',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'dt6',
                text: 'Aksi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span className="btnInTable">
                                <Button className="btn-facebook btn-brand btn-sm icon" onClick={() => this.handleClickEdit(row)}><i className="icon-pencil"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-youtube btn-brand btn-sm icon" onClick={() => this.handleClickDelete(row)}><i className="icon-trash"> </i></Button>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                    },
                }
            },
        ];

        const kirimData = !this.state.editState ? [] : [
            this.state.rowEditClick[0],
            this.state.rowEditClick[1],
            this.state.rowEditClick[2],
            this.state.rowEditClick[3],
            this.state.rowEditClick[4],
            this.state.rowEditClick[5],
            this.state.rowEditClick[6],
            this.state.rowEditClick[7],
            this.state.rowEditClick[8],
            this.state.rowEditClick[9],
            this.state.rowEditClick[10],
            this.state.rowEditClick[11],
        ]
        
        return (
            <div>
                <h6> III. TENAGA </h6>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <CardBody style={{ padding: '10px 0' }}>
                    <Row>
                        <Col xs="12" md="3" >
                            <Label htmlFor="text-input">Nomor Induk Kependudukan</Label>
                        </Col>
                        {/* <Col xs="8" md="4">
                            <div className="input-group">
                                <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikPeserta} onKeyDown={this.callData} name="text-input" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit"
                                        // onClick={this.toggleModal}
                                        onClick={this.getNIK}
                                        style={{ border: '1px solid #e4e7ea', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', borderLeft: 'none' }}>
                                        <i className="icon-search4"></i>
                                    </button>
                                </span>
                            </div>
                        </Col> */}
                        <Col xs="10" md="7">
                            <Input type="number" id="input-nik" onInput={this.onInputNik} value={this.state.nikPeserta} onKeyDown={this.callData} name="text-input" />
                        </Col>
                        <Col xs="2" md="2">
                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIK}
                            // onClick={this.handleBdki}
                            // onClick={this.toggleModal}
                            >
                            <i className="icon-search4"></i></Button>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="text" value={this.state.namaPeserta} disabled/>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Alamat</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="text" value={this.state.alamat} disabled/>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">No. Handphone</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="number" value={this.state.noHp} disabled/>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Profesi</Label>
                        </Col>
                        <Col  xs="12" md="9">
                            <Select options={this.state.profesi} onChange={this.changeProfesi} value={this.state.currentProfesi} isClearable placeholder="Profesi" maxMenuHeight={140}/>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Pelatihan Teknis Pelayanan & R/R</Label>
                        </Col>
                        <Col  xs="12" md="9" >
                            <Select options={this.state.checkbox} onChange={this.handlePelatihan} value={this.state.setPelatihan} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140}/>
                        </Col>
                    </Row>
                    <FormGroup className="mt-3">
                        <Row>
                            <Col xs="6" md="6"className="my-2" align="right">
                                <Button className="btn btn-facebook btnFilter" onClick={this.simpan}><i className="icon-folder-plus"></i> Tambah Tenaga</Button>
                            </Col>
                            <Col xs="6" md="6"className="my-2">
                                <Button className="btn btn-facebook btnFilter" onClick={this.handleJumlahTenaga}><i className="icon-users2"></i> Jumlah Tenaga: <b>{this.state.jmlhTenaga}</b></Button>
                            </Col>
                        </Row>
                    </FormGroup>
                          

                    {/* <FormGroup row>
                        <Col sm="12">
                            <Table2Edit
                                caption=''
                                tableHead={columns}
                                datas={this.state.datas}
                                handlePageChange={this.handlePageChange}
                            />
                        </Col>
                    </FormGroup> */}

                    <Row>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg" style={{ maxWidth: '1000px' }}>
                            <ModalHeader> <i className="icon-list-alt"> </i> Data Peserta KB</ModalHeader>
                            <ModalBody style={{ padding: '0' }}>
                                <Card>
                                    <CardBody className="card-body-nopad">
                                        <div>
                                            <AppBar position="static">
                                                <Tabs value={this.state.activeTab} onChange={this.handleChange}
                                                    aria-label="simple tabs example">
                                                    <Tab label="Keluarga" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                                                    <Tab label="Non BDKI" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                                                </Tabs>
                                            </AppBar>

                                            <Row>
                                                <Col sm="12">
                                                    <div className="namaLaporan">Filter Dan Parameter Pencarian Data</div>
                                                </Col>
                                                <Col sm="12" style={{ height: 'calc(100vh - 200px)', overflow: 'auto', padding: '0 30px' }}>
                                                    <Row className="mt-4">
                                                        <Col md="12">
                                                            <Row>
                                                                <Col md="11">
                                                                    <Row>
                                                                        <Col md="4 mb-2">
                                                                            <Row>
                                                                                <Col xs="3">
                                                                                    <Label className="labelForm" htmlFor="provinsi">Provinsi</Label>
                                                                                </Col>
                                                                                <Col xs="9">
                                                                                    <Select id="provinsi" name="provinsi" options={this.state.opt_prov} onChange={this.handleProv} value={this.state.provinsi} isClearable />
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md="4 mb-2">
                                                                            <Row>
                                                                                <Col xs="3">
                                                                                    <Label className="labelForm" htmlFor="kabupaten">Kabupaten</Label>
                                                                                </Col>
                                                                                <Col xs="9">
                                                                                    <Select id="kabupaten" name="kabupaten" options={this.state.opt_kab} onChange={this.handleKab} value={this.state.kabupaten} isDisabled={this.state.dis_kab} isClearable />
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md="4 mb-2">
                                                                            <Row>
                                                                                <Col xs="3">
                                                                                    <Label className="labelForm" htmlFor="kecamatan">Kecamatan</Label>
                                                                                </Col>
                                                                                <Col xs="9">
                                                                                    <Select id="kecamatan" name="kecamatan" options={this.state.opt_kec} onChange={this.handleKec} value={this.state.kecamatan} isDisabled={this.state.dis_kec} isClearable />
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md="4 mb-2">
                                                                            <Row>
                                                                                <Col xs="3">
                                                                                    <Label className="labelForm" htmlFor="desa">Desa/Kel</Label>
                                                                                </Col>
                                                                                <Col xs="9">
                                                                                    <Select id="desaKelurahan" name="desaKelurahan" options={this.state.opt_des} onChange={this.handleDes} value={this.state.desa} isDisabled={this.state.dis_des} isClearable />
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md="4 mb-2">
                                                                            <Row>
                                                                                <Col xs="3">
                                                                                    <Label className="labelForm" htmlFor="dusun">Dusun/RW</Label>
                                                                                </Col>
                                                                                <Col xs="9">
                                                                                    <Select id="dusunRw" name="dusunRw" options={this.state.opt_rw} onChange={this.handleRW} value={this.state.rw} isDisabled={this.state.dis_rw} isClearable />
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col md="4 mb-2">
                                                                            <Row>
                                                                                <Col xs="3">
                                                                                    <Label className="labelForm" htmlFor="rt">RT</Label>
                                                                                </Col>
                                                                                <Col xs="9">
                                                                                    <Select id="rt" name="rt" options={this.state.opt_rt} onChange={this.handleRT} value={this.state.rt} isDisabled={this.state.dis_rt} isClearable />
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="1">
                                                                    <Row>
                                                                        <Col xs="6" md="12">
                                                                            <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter" 
                                                                            onClick={this.handleDeleteWilayah}
                                                                            ><i className="icon-trash-alt"></i>  Hapus</Button></div>
                                                                        </Col>
                                                                        <Col xs="6" md="12">
                                                                            <Button className="btn btn-success btnFilter" 
                                                                            onClick={() => this.handleSearchWilayah()}
                                                                            ><i className="icon-reload-alt"></i>  Refresh</Button>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col xs="12" md="2" style={{ marginBottom: '10px' }}>
                                                                    <Label className="labelForm" htmlFor="rt">Cari Peserta</Label>
                                                                </Col>
                                                                <Col xs="10" md="4" style={{ marginBottom: '10px' }}>
                                                                    <Input type="text" />
                                                                </Col>
                                                                <Col xs="2" md="1" style={{ marginBottom: '10px' }}>
                                                                    <span style={{ background: 'paleturquoise', padding: '4px', borderRadius: '2px', cursor: 'pointer' }}>
                                                                        <Button color="link"><i className="icon-search4" style={{ fontSize: '0.875rem' }}> </i></Button>
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <div
                                                        role="tabpanel"
                                                        hidden={this.state.activeTab !== 0}
                                                        id="simple-tabpanel-0"
                                                        aria-labelledby="simple-tab-0"
                                                    >
                                                        {this.state.activeTab === 0 && (
                                                            <Row>
                                                                <Col md="12">
                                                                    <Table2EditNoSearch
                                                                        caption=''
                                                                        keyF='nik'
                                                                        tableHead={columnKeluarga}
                                                                        datas={this.state.dataKeluarga}
                                                                        handlePageChange={this.handlePageChangeModal1}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        )}
                                                    </div>

                                                    <div
                                                        role="tabpanel"
                                                        hidden={this.state.activeTab !== 1}
                                                        id="simple-tabpanel-1"
                                                        aria-labelledby="simple-tab-1"
                                                    >
                                                        {this.state.activeTab === 1 && (
                                                            <Row>
                                                                <Col md="12">
                                                                    <Table2EditNoSearch
                                                                        caption=''
                                                                        keyF='nik'
                                                                        tableHead={columnNonBdki}
                                                                        datas={this.state.dataNonBdki}
                                                                        handlePageChange={this.handlePageChangeModal2}
                                                                    />
                                                                </Col>
                                                            </Row>
                                                        )}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>
                                </Card>
                            </ModalBody>

                            <ModalFooter style={{ padding: '5px 30px' }}
                                role="tabpanel"
                                hidden={this.state.activeTab !== 1}
                                id="simple-tabpanel-1"
                                aria-labelledby="simple-tab-1">
                                {this.state.activeTab === 1 && (
                                    <Row>
                                        <Button className="mx-1" color="primary" onClick={this.showModalBdki} toggle={this.toggle2} >Tambah</Button>{' '}
                                        <Button className="mx-1" color="dark" onClick={this.toggleModal}>Tutup</Button>{' '}
                                    </Row>
                                )}
                            </ModalFooter>

                            <ModalFooter style={{ padding: '5px 30px' }}
                                role="tabpanel"
                                hidden={this.state.activeTab !== 0}
                                id="simple-tabpanel-0"
                                aria-labelledby="simple-tab-0">
                                {this.state.activeTab === 0 && (
                                    <Row>
                                        <Button className="mx-1" color="dark" onClick={this.toggleModal}>Tutup</Button>{' '}
                                    </Row>
                                )}
                            </ModalFooter>
                        </Modal>
                    </Row>
                    <Row>
                        <Modal isOpen={this.state.bdkiModal} size="lg" style={{ padding: '10px', width: '100%' }} >
                            <FormInput bdkiModal={this.state.bdkiModal} saveBdki={this.showModalBdki} toggle={this.toggle2} rowEditClick={kirimData} editState={this.state.editState} />
                        </Modal>
                    </Row>
                    <Row>
                        <DaftarTenaga tenagaModal={this.state.tenagaModal} toggleAdd={this.toggleAdd} />  
                    </Row>
                    <Row>
                        <ListBdki listBdkiModal={this.state.listBdkiModal} toggleBdki={this.toggleBdki} />  
                    </Row>
                   

                </CardBody> 
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info"  onClick={this.handleNext}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step3;