import React, { Component } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../../Commons/Table/Table2Edit';
import Table2EditNoSearch from '../../../../../Commons/Table/Table2EditNoSearch';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import API014 from '../../../../../../services/API014';
import API015 from '../../../../../../services/API015';
import FormInput from './formInput';
import Swal from 'sweetalert2';

import JenisKunjungan from '../../../../../Commons/Json/JenisKunjungan.json'
import Keluhan from '../../../../../Commons/Json/Keluhan.json'
import JenisTindakan from '../../../../../Commons/Json/JenisTindakan.json'

import DaftarPeserta from './daftarPeserta';
import ListBdki from '../../../../yankbpelkon/pendaftaran/create/listBdki';



class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            modal: false,
            activeTab: 0,

            // Jenis Kunjungan
            show_jk: JenisKunjungan,
            value_jk: null,
            kd_jk: '',

            //Keluhan
            show_keluhan: [],
            dt_keluhan: Keluhan,
            disKeluhan: true,
            value_keluhan: null,
            kd_keluhan: '',

            // Jenis Tindakan
            show_jt: [],
            dt_jt: JenisTindakan,
            disJt: true,
            value_jt: '',
            kd_jt: '',

            value_asuransi: null,
            kd_asuransi: '',
            value_alokon: null,
            kd_alokon: '',

            dataKeluarga: [],
            dataNonBdki: [],
            nestedModal: false,

            // Wilayah
            opt_prov: [], id_provinsi: '', provinsi: '',
            opt_kab: [], id_kabupaten: '', kabupaten: '', dis_kab: true,
            opt_kec: [], id_kecamatan: '', kecamatan: '', dis_kec: true,
            opt_des: [], id_des: '', desa: '', dis_des: true,
            opt_rw: [], id_rw: '', rw: '', dis_rw: true,
            opt_rt: [], id_rt: '', rt: '', dis_rt: true,

            bdkiModal: false,
            dataPeserta: [],
            show_dataPenduduk: [],
            show_dataNonBDKI: [],
            namaPeserta: '',
            kkiPeserta: '', nikPeserta: '',



            currentPage: 1,
            sizePerPage: 5,

            currentPageModal: 1,
            sizePerPageModal: 10,

            currentPageModal2: 1,
            sizePerPageModal2: 10,

            btnEdit: false,

            rowEditClick: [],
            editState: false,

            lembar: 1,

            showKasus : [
                { "value": "Komplikasi Berat", "label": "Komplikasi Berat" },
                { "value": "Kegagalan", "label": "Kegagalan" }
            ],

            value_kasus:null,
            jmlhPeserta: 0,
            pesertaModal: false,
            listBdkiModal: false,

            value_bergerak: null,
            kd_bergerak:''

        }
    }

    componentDidMount() {

    }

    setPesertaKB(id) {
        this.setState({ blocking: true });
        // this.setState({ dataKeluarga: [] });
        API014.get('siga/reg-yan-kb/getListById/' + id)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataPeserta: this.state.dataPeserta.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });

            });
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

    setDeleteKeluarga(id) {
        this.setState({ blocking: true });
        API014.delete('/siga/reg-yan-kb/deleteBdkiKeluarga/' + id)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
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
                    console.log(res);
                }
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

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
                    }
                })
        }
        else {
            this.setState({
                provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                id_provinsi: 0, id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            })
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
                    }
                })
        }
        else {
            this.setState({
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            })
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
                    }
                })
        }
        else {
            this.setState({
                kecamatan: null, desa: null, rw: null, rt: null,
                id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
                dis_des: true, dis_rw: true, dis_rt: true,
            }
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
                    }
                })
        }
        else {
            this.setState({
                desa: null, rw: null, rt: null,
                id_rw: 0, id_rt: 0,
                dis_rw: true, dis_rt: true,
            })
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
                    }
                })
        }
        else {
            this.setState({
                rw: null, rt: null, dis_rt: true, id_rw: 0, id_rt: 0,
            }
            )
        }
    }

    handleRT = (e) => {
        if (e) {
            this.setState({ rt: e, id_rt: e.value })
        }
        else {
            this.setState({ rt: null, id_rt: 0 })
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

    optionKasus = (e) => {
        this.setState({
            value_kasus: e,   
        })
    }



    optionJk = (e) => {
        if (e) {
            this.setState({
                kd_jk: e.value,
                value_jk: e,
                show_keluhan: this.state.dt_keluhan.filter(item => item.kd_jk === e.value),
                show_jt: this.state.dt_jt.filter(item => item.kd_jk === e.value),
                value_keluhan: null,
                kd_keluhan: '',
                value_jt: null,
                kd_jt: '',
                disKeluhan: false,
                disJt: true
            })
        }
        else {
            this.setState({
                value_jk: null,
                show_keluhan: [],
                show_jt: [],
                value_keluhan: null,
                kd_keluhan: '',
                value_jt: null,
                kd_jt: '',
                disKeluhan: true,
                disJt: true
            })
        }
    }

    optionKeluhan = (e) => {
        if (e) {
            this.setState({
                value_keluhan: e, kd_keluhan: e.value,
                value_jt: null, kd_jt: '',
                disJt: false
            })
        }
        else {
            this.setState({
                value_keluhan: null, kd_keluhan: '',
                value_jt: null, kd_jt: '',
                disJt: true
            })
        }
    }

    optionJt = (e) => {
        if (e) {
            this.setState({
                value_jt: e, kd_jt: e.value,
            })
        }
        else {
            this.setState({
                value_jt: null, kd_jt: '',
            })
        }
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        }, () => {

            this.setNonBdki();
            this.setProv();
            this.setKeluarga(
                sessionStorage.getItem('idProv'),
                sessionStorage.getItem('idKab'),
                sessionStorage.getItem('idKec'),
                sessionStorage.getItem('idDes'),
                sessionStorage.getItem('idRW'),
                sessionStorage.getItem('idRT')
            );
        })
    };

    handleNikChange = (e) => {
        if (e.target.name === "nikPeserta" && e.target.value.length > 16) {
            return false;
        }

        this.setState({
            nikPeserta: e.target.value
        })
    }

    handleClickKeluarga = (row, action) => {
        this.setState({}, () => {
            if (action === 'pilih') {
                this.setState({
                    namaPeserta: row.nama,
                    kkiPeserta: row.kki,
                    nikPeserta: row.nik,
                    modal: !this.state.modal
                })
            } else if (action === 'hapus') {
                const idKeluarga = row.nik
                console.log("id keluarga : ", idKeluarga)
                this.setDeleteKeluarga(idKeluarga)
                this.setKeluarga()
            }
        });
    }

    convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
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
                this.setState({
                    editState: true,
                    rowEditClick: [
                        row.nama_lengkap,
                        // new Date(row.tgl_lahir),
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
                const nikNonBdki = row.nik
                console.log("NIK Non Bdki : ", nikNonBdki)
                this.setDeleteNonBdki(nikNonBdki)
                this.setNonBdki()
            }
        });
    }

    handleClickEdit = (row) => {
        this.setState({
            btnEdit: true,
            date: row.tanggal,
            nikPeserta: row.nik,
            kkiPeserta: row.kki,
            namaPeserta: row.namaPesertaKB,
            kd_jk: row.jenisKunjungan,
            kd_keluhan: row.keluhan,
            kd_jt: row.jenisTindakan,
            kd_asuransi: row.penggunaanAsuransi,
            kd_alokon: row.sumberAlokon
        })
    }

    handleClickDelete = (row) => {
        // const noPeserta = this.state.dataPeserta.indexOf(row)
        const valuePeserta = row
        this.setState({ blocking: true });
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
                    .then(() => {
                        this.setState({
                            blocking: false,
                            dataPeserta: this.state.dataPeserta.filter(item => item !== valuePeserta)
                        });
                    })
            } else {
                this.setState({ blocking: false });
            }
        });
    }

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

    handleChange = (e, tab) => {
        this.setState({
            activeTab: tab,
            [e.target.name]: e.target.value
        });
    }

    handleAsuransi = (e) => {
        this.setState({
            value_asuransi: e, kd_asuransi: e.value
        })
    }

    handleAlokon = (e) => {
        this.setState({
            value_alokon: e, kd_alokon: e.value
        })
    }

    handleBergerak = (e) => {
        this.setState({
            value_bergerak: e, kd_bergerak: e.value
        })
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

    callData = (e) =>{
        if (e.keyCode === 13) {
            this.setState({
                show_dataPenduduk: this.state.dataPenduduk.filter(item => item.nik === e.target.value)
            })
          }
        
    }
    handlePageChange = (page, sizePerPage) => {
        this.setState({ currentPage: page, sizePerPage: sizePerPage })
    }

    handlePageChangeModal = (page, sizePerPage) => {
        this.setState({ currentPageModal: page, sizePerPageModal: sizePerPage })
    }

    handlePageChangeModal2 = (page, sizePerPage) => {
        this.setState({ currentPageModal2: page, sizePerPageModal2: sizePerPage })
    }

    addPeserta = () => {
        var newData = [
            {
                tanggal: this.state.date,
                nik: this.state.nikPeserta,
                kki: this.state.kkiPeserta,
                namaPesertaKB: this.state.namaPeserta,
                jenisKunjungan: this.state.kd_jk,
                keluhan: this.state.kd_keluhan,
                jenisTindakan: this.state.kd_jt,
                penggunaanAsuransi: this.state.kd_asuransi,
                sumberAlokon: this.state.kd_alokon
            }
        ];
        this.setState({
            dataPeserta: this.state.dataPeserta.concat(newData),
            date: '',
            nikPeserta: '',
            kkiPeserta: '',
            namaPeserta: '',
            value_jk: null,
            value_keluhan: null,
            value_jt: null,
            value_asuransi: null,
            value_alokon: null, 
            btnEdit: false
        })
    }

    handleNext = (event) => {
        //validasi
        event.preventDefault();
        const step2 = [{
            "tempatPelayananKBID": sessionStorage.getItem('id'),
            "tahun": new Date().getFullYear(),
            "bulan": new Date().getMonth(),
            "lembar": this.state.lembar,
            "nomor": 0,
            "tanggal": new Date().toISOString(),
            "kki": this.state.dataPeserta.kki,
            "nik": this.state.dataPeserta.nik,
            "namaPesertaKB": this.state.dataPeserta.namaPesertaKB,
            "informedConsent": this.state.dataPeserta.jenisKunjungan,
            "pascaPersalinanKeguguran": "string",
            "jenisTindakan": "string",
            "komplikasiKegagalan": "string",
            "penggunaanAsuransi": "string",
            "sumberAlokon": "string",
            "created": "2020-10-05T02:22:29.402Z",
            "createdBy": "string",
            "lastModified": "2020-10-05T02:22:29.402Z",
            "lastModifiedBy": "string"
        }];
        console.log(step2, 'tes')
        this.props.handleValueStep('step2', step2)
        this.props.nextStep();
    }


    simpan = () => {
        this.setState({
            jmlhPeserta: this.state.jmlhPeserta + 1,
            date: '',
            nikPeserta: '',
            kkiPeserta: '',
            namaPeserta: '',
            alamat:'',
            noHp:'',
            value_jk: null,
            value_keluhan: null,
            value_jt: null,
            value_asuransi: null,
            value_alokon: null, 
            btnEdit: false
        })
    }

    handleJumlahPeserta = () => {
        this.setState({
            pesertaModal: !this.state.pesertaModal
        })
        // alert('list tenaga');
    }

    togglePeserta = () => {
        this.setState({ pesertaModal: !this.state.pesertaModal })
    };

    handleBdki = () => {
        this.setState({
            listBdkiModal: !this.state.listBdkiModal
        })
        // alert('list tenaga');
    }

    toggleBdki = () => {
        this.setState({ listBdkiModal: !this.state.listBdkiModal })
    };

    getNIK = () => {
        this.setState({
            namaPeserta: 'Mawar Melati',
            alamat: 'Jalan Merdeka No. 81',
            noHp: '081982902500'
        })
    }

    onInputNik = (e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
        
    }

    render() {

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

        const columnPeserta = [
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
                    return { width: '70px' };
                },
            },
            {
                dataField: 'tanggal',
                formatter: tglFormat,
                text: 'Tanggal',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                align: "center",
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '130px' };
                },
            },
            {
                dataField: 'kki',
                text: 'KKI',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'namaPesertaKB',
                text: 'Nama',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'jenisKunjungan',
                text: 'Jenis Kunjungan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'keluhan',
                text: 'Keluhan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'jenisTindakan',
                text: 'Jenis Tindakan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'penggunaanAsuransi',
                text: 'Penggunaan Asuransi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'sumberAlokon',
                text: 'Sumber Alokon',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
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
                                <Button className="btn-facebook btn-brand btn-sm icon" onClick={() => this.handleClickEdit(row)}><i className="icon-checkmark"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-youtube btn-brand btn-sm icon" onClick={() => this.handleClickDelete(row)}><i className="icon-trash"> </i></Button>
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
        ];

        const columnKeluarga = [
            {
                dataField: '#',
                formatter: (cell, row, rowIndex) => {
                    console.log(this.state.currentPageModal)
                    let rowNumber = (this.state.currentPageModal - 1) * this.state.sizePerPageModal + (rowIndex + 1);
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
                dataField: 'kki',
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
                dataField: 'nama',
                text: 'Nama Lengkap',
                headerAlign: 'center',
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
                text: 'Hubungan dg KK',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
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
                dataField: 'periodeID',
                text: 'Periode',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '80px' };
                },
            },
            {
                dataField: 'kesertaanBerKBID',
                text: 'Kesertaan Ber-KB',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'metodeKontrasepsiDigunakanID',
                text: 'Metode Kontrasepsi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'jaminanKesehatanNasionalID',
                text: 'Kesertaan Asuransi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'nomorRumah',
                text: 'No. Rumah',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
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
        ];


        const columnNonBdki = [
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
        ];

        const optionAsuransi = [
            { value: 'BPJS Kesehatan', label: 'BPJS Kesehatan' },
            { value: 'Tidak Memiliki', label: 'Tidak Memiliki' },
            { value: 'Asuransi Lainnya', label: 'Asuransi Lainnya' }
        ]

        const optionAlokon = [
            { value: 'APBN', label: 'APBN' },
            { value: 'APBD', label: 'APBD' },
            { value: 'Mandiri', label: 'Mandiri' }
        ]

        const optionYanBergerak = [
            { value: 'Ya', label: 'Ya' },
            { value: 'Tidak', label: 'Tidak' },
        ]

        var curr = new Date();
        curr.setDate(curr.getDate());

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

        var curr = new Date();
        curr.setDate(curr.getDate());
        var today = curr.toISOString().substr(0,10);

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
                                            <Label className="labelForm" htmlFor="text-input">Tanggal </Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input type="date" name="date" id="exampleDate" onChange={this.handleChange} defaultValue={today}></Input>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikPeserta} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIK}>  
                                            <i className="icon-search4"></i></Button>
                                        </Col>
                                      
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Peserta KB </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaPeserta} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Alamat </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.alamat} disabled/>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">No. Handphone </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.noHp} disabled/>
                                        </Col>        
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Jenis Kunjungan</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.show_jk} onChange={this.optionJk} value={this.state.value_jk} isClearable />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Keluhan</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.show_keluhan} onChange={this.optionKeluhan} value={this.state.value_keluhan} isClearable />
                                        </Col>

                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Jenis Tindakan</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.show_jt} onChange={this.optionJt} value={this.state.value_jt} isClearable />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Kasus</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.showKasus} onChange={this.optionKasus} value={this.state.value_kasus} isClearable />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Jenis Asuransi</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={optionAsuransi} isClearable={optionAsuransi} onChange={this.handleAsuransi} value={this.state.value_asuransi} />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Sumber Alokon</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={optionAlokon} isClearable={optionAlokon} onChange={this.handleAlokon} value={this.state.value_alokon} />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm">Yan Bergerek</Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={optionYanBergerak} onChange={this.handleBergerak} value={this.state.vaLue_bergerak} isClearable={optionYanBergerak}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="6" md="6" className="my-2" align="right">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.simpan}><i className="icon-folder-plus"></i> Tambah Peserta KB</Button>
                                        </Col>
                                        <Col xs="6" md="6" className="my-2">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.handleJumlahPeserta}><i className="icon-users2"></i> Jumlah Peserta KB: <b>{this.state.jmlhPeserta}</b></Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                {/* <FormGroup>
                                    <Row>
                                        <Col xs="12" lg="4" align="right">
                                            <Collapse isOpen={!this.state.btnEdit}>
                                                <button className="btn btn-facebook" onClick={this.addPeserta}>Tambah</button>

                                            </Collapse>
                                            <Collapse isOpen={this.state.btnEdit}>
                                                <button className="btn btn-facebook" onClick={this.addPeserta}>Ubah</button>
                                            </Collapse>
                                        </Col>
                                    </Row>
                                </FormGroup> */}
                            </CardBody>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <Table2Edit
                                caption=''
                                tableHead={columnPeserta}
                                datas={this.state.dataPeserta}
                                handlePageChange={this.handlePageChange}
                            />
                        </Col>
                    </Row> */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                        <button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</button>
                    </div>
                </container-fluid>

                <Modal isOpen={this.state.bdkiModal} size="lg" style={{ padding: '10px', width: '100%' }} >
                    <FormInput bdkiModal={this.state.bdkiModal} saveBdki={this.showModalBdki} toggle={this.toggle2} rowEditClick={kirimData} editState={this.state.editState} />
                </Modal>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="lg" style={{ maxWidth: '1000px' }}>
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
                                                                            <Select options={this.state.opt_prov} onChange={this.handleProv} value={this.state.provinsi} isClearable />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="4 mb-2">
                                                                    <Row>
                                                                        <Col xs="3">
                                                                            <Label className="labelForm" htmlFor="kabupaten">Kabupaten</Label>
                                                                        </Col>
                                                                        <Col xs="9">
                                                                            <Select options={this.state.opt_kab} onChange={this.handleKab} value={this.state.kabupaten} isDisabled={this.state.dis_kab} isClearable />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="4 mb-2">
                                                                    <Row>
                                                                        <Col xs="3">
                                                                            <Label className="labelForm" htmlFor="kecamatan">Kecamatan</Label>
                                                                        </Col>
                                                                        <Col xs="9">
                                                                            <Select options={this.state.opt_kec} onChange={this.handleKec} value={this.state.kecamatan} isDisabled={this.state.dis_kec} isClearable />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="4 mb-2">
                                                                    <Row>
                                                                        <Col xs="3">
                                                                            <Label className="labelForm" htmlFor="desa">Desa/Kel</Label>
                                                                        </Col>
                                                                        <Col xs="9">
                                                                            <Select options={this.state.opt_des} onChange={this.handleDes} value={this.state.desa} isDisabled={this.state.dis_des} isClearable />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="4 mb-2">
                                                                    <Row>
                                                                        <Col xs="3">
                                                                            <Label className="labelForm" htmlFor="dusun">Dusun/RW</Label>
                                                                        </Col>
                                                                        <Col xs="9">
                                                                            <Select options={this.state.opt_rw} onChange={this.handleRW} value={this.state.rw} isDisabled={this.state.dis_rw} isClearable />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="4 mb-2">
                                                                    <Row>
                                                                        <Col xs="3">
                                                                            <Label className="labelForm" htmlFor="rt">RT</Label>
                                                                        </Col>
                                                                        <Col xs="9">
                                                                            <Select options={this.state.opt_rt} onChange={this.handleRT} value={this.state.rt} isDisabled={this.state.dis_rt} isClearable />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col md="1">
                                                            <Row>
                                                                <Col xs="6" md="12">
                                                                    <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter" onClick={this.handleDeleteWilayah}><i className="icon-trash-alt"></i>  Hapus</Button></div>
                                                                </Col>
                                                                <Col xs="6" md="12">
                                                                    <Button className="btn btn-success btnFilter" onClick={() => this.handleSearchWilayah()}><i className="icon-reload-alt"></i>  Refresh</Button>
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
                                                                handlePageChange={this.handlePageChangeModal}
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
                                <Button className="mx-1" color="primary" onClick={this.showModalBdki}>Tambah</Button>{' '}
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
                <Row>
                    <DaftarPeserta pesertaModal={this.state.pesertaModal} togglePeserta={this.togglePeserta} />  
                </Row>
                <Row>
                    <ListBdki listBdkiModal={this.state.listBdkiModal} toggleBdki={this.toggleBdki} />  
                </Row>
            </>
        )
    }
}

export default Step2;