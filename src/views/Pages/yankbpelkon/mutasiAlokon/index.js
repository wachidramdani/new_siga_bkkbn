import React, { Component } from 'react';
import { Card, CardBody, Col, Form, Label, Row, Button, Collapse, Fade } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../Commons/Table/Table2Edit';
import API012 from '../../../../services/API012';
import API013 from '../../../../services/API013';
import API015 from '../../../../services/API015';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class MutasiAlokon extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.handleClickIcon = this.handleClickIcon.bind(this);
        this.setDetail = this.setDetail.bind(this);

        this.state = {
            blocking: true,
            open: false,
            status: 'Closed',
            collapse: true,
            fadeIn: true,
            datas: [],
            datas2: [],
            detailDatas2: [],
            currentPage: 1,
            sizePerPage: 5,
            currentPage2: 1,
            sizePerPage2: 5,

            // Wilayah show API
            opt_prov: [],
            id_provinsi: '',
            provinsi: '',
            opt_kab: [],
            id_kabupaten: '',
            kabupaten: '',
            dis_kab: true,
            opt_kec: [],
            id_kecamatan: '',
            kecamatan: '',
            dis_kec: true,
            opt_des: [],
            id_des: '',
            desa: '',
            dis_des: true,
            opt_rw: [],
            id_rw: '',
            rw: '',
            dis_rw: true,
            opt_rt: [],
            id_rt: '',
            rt: '',
            dis_rt: true,
            depdagriProv: '',
            depdagriKab: '',

            pdfModal: false
        };
    }

    componentDidMount() {
        // this.setBody();
        this.setProv();
    }

    handlePageChange = (page, sizePerPage) => {
        // console.log(page, "page")
        // console.log(sizePerPage, "sizePerPage")
        this.setState({ currentPage: page, sizePerPage: sizePerPage })
    }

    handlePageChange2 = (page, sizePerPage) => {
        this.setState({ currentPage2: page, sizePerPage2: sizePerPage })
    }

    //API 012
    setDetail = (id) => {
        this.setState({ blocking: true });
        this.setState({ datas2: [] });
        API012.get('siga/reg-mut-alo/getMutasialokonByTempatPelayananKBID/' + id)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ datas2: this.state.datas2.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });
                // Swal.fire({
                //     title: 'Error',
                //     icon: 'error',
                //     text: 'Please Check Your Network Connection.',
                // });
            });
    }

    //API 013
    setBody(idProv, idKab, idKec, idKel, idRW, idRT) {
        this.setState({ blocking: true });
        this.setState({ datas: [] });
        API013.get('siga/pelayanankb/getlistbylocation?provinsiId=' + idProv + '&kabupatenId=' + idKab + '&kecamatanId=' + idKec + '&kelurahanId=' + idKel + '&rwId=' + idRW + '&rtId=' + idRT)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ datas: this.state.datas.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Please Check Your Network Connection.',
                });
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
                res.data.forEach(data => {
                    const obj = { 'value': data.id_provinsi, 'label': data.nama, 'kode': data.kodeDepdagri };
                    newData.push(obj);
                });
                // res.data.map(function (data, idx) {
                //     const obj = { 'value': data.id_provinsi, 'label': data.nama, 'kode': data.kodeDepdagri };
                //     newData.push(obj);
                // });

                // const nama = res.data.map(res => res.nama_kabupaten)
                this.setState({ opt_prov: newData });
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
                res.data.forEach(data => {
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten, 'kode': data.kodeDepdagri };
                    newData.push(obj);
                });
                // res.data.map(function (data, idx) {
                //     const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten, 'kode': data.kodeDepdagri };
                //     newData.push(obj);
                // });
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
                res.data.forEach(data => {
                    const obj = { 'value': data.id_kecamatan, 'label': data.nama_kecamatan };
                    newData.push(obj);
                });
                // res.data.map(function (data, idx) {
                //     const obj = { 'value': data.id_kecamatan, 'label': data.nama_kecamatan };
                //     newData.push(obj);
                // });
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
                res.data.forEach(data => {
                    const obj = { 'value': data.id_kelurahan, 'label': data.nama_kelurahan };
                    newData.push(obj);
                });
                // res.data.map(function (data, idx) {
                //     const obj = { 'value': data.id_kelurahan, 'label': data.nama_kelurahan };
                //     newData.push(obj);
                // });
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
                res.data.forEach(data => {
                    const obj = { 'value': data.id_rw, 'label': data.nama_rw };
                    newData.push(obj);
                });
                // res.data.map(function (data, idx) {
                //     const obj = { 'value': data.id_rw, 'label': data.nama_rw };
                //     newData.push(obj);
                // });
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
                res.data.forEach(data => {
                    const obj = { 'value': data.id_rt, 'label': data.nama_rt };
                    newData.push(obj);
                });
                // res.data.map(function (data, idx) {
                //     const obj = { 'value': data.id_rt, 'label': data.nama_rt };
                //     newData.push(obj);
                // });
                this.setState({ opt_rt: newData });
                console.log("opt_rt" + this.state.opt_rt);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    // toggle = (e, row, action) => {
    //     e.preventDefault();
    //     this.setState({}, () => {
    //         if (action === 'lihat') {
    //             this.setState({ open: !this.state.open })
    //             this.setBody2(row.tempatPelayananKBID);
    //         }
    //         else if (action === 'download') {
    //             this.setState({
    //                 pdfModal: !this.state.pdfModal
    //             })
    //         }
    //     });
    // }

    clickBack = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleClickIcon = (e, row, action) => {
        e.preventDefault();
        this.setState({}, () => {
            if (action === 'lihat') {
                this.setState({
                    open: !this.state.open,
                    detailDatas2: [
                        row.namaTempatPelayananKB,
                        row.kodeProvinsi,
                        row.kodeKabupaten,
                        row.nomorRegisterFaskesKB,
                        row.nomorJaringanJejaringFaskesKB,
                        row.sumberAlokon,
                        row.menyetujuiTempat,
                        row.menyetujuiPimpinanNama,
                        row.menyetujuiPimpinanNIP
                    ]
                })
                this.setDetail(row.tempatPelayananKBId);
            }
            else if (action === 'download') {
                this.setState({
                    pdfModal: !this.state.pdfModal
                })
            }
        });
    }

    handleClickAction = (row, action) => {
        this.props.history.push('/alokon/' + action);
        sessionStorage.setItem('id', row.tempatPelayananKBID);
        sessionStorage.setItem('nama_faskes', this.state.detailDatas2[0]);
        sessionStorage.setItem('kd_prov', this.state.detailDatas2[1]);
        sessionStorage.setItem('kd_kab', this.state.detailDatas2[2]);
        sessionStorage.setItem('bulan', row.bulan);
        sessionStorage.setItem('tahun', row.tahun);
        sessionStorage.setItem('sumber_alokon', row.sumberAlokon);
        sessionStorage.setItem('no_faskes', this.state.detailDatas2[3]);
        sessionStorage.setItem('no_jaringan', this.state.detailDatas2[4] ? this.state.detailDatas2[4] : '-');
        sessionStorage.setItem('lembar', row.nomorLembar);
        sessionStorage.setItem('menyetujui_tempat', row.menyetujuiTempat);
        sessionStorage.setItem('menyetujui_tanggal', row.menyetujuiTanggal);
        sessionStorage.setItem('menyetujui_nama', row.menyetujuiPimpinanNama);
        sessionStorage.setItem('menyetujui_nip', row.menyetujuiPimpinanNIP);

        //Location
        sessionStorage.setItem('idProv', this.state.id_provinsi ? this.state.id_provinsi : 0)
        sessionStorage.setItem('idKab', this.state.id_kabupaten ? this.state.id_kabupaten : 0)
        sessionStorage.setItem('idKec', this.state.id_kecamatan ? this.state.id_kecamatan : 0)
        sessionStorage.setItem('idDes', this.state.id_des ? this.state.id_des : 0)
        sessionStorage.setItem('idRW', this.state.id_rw ? this.state.id_rw : 0)
        sessionStorage.setItem('idRT', this.state.id_rt ? this.state.id_rt : 0)
        // console.log('Masuk ' + action);
    }

    handleCreate = (row) => {
        this.props.history.push('/alokon/create');
        sessionStorage.setItem('id', row.tempatPelayananKBID);
        sessionStorage.setItem('nama_faskes', this.state.detailDatas2[0]);
        sessionStorage.setItem('kd_prov', this.state.detailDatas2[1]);
        sessionStorage.setItem('kd_kab', this.state.detailDatas2[2]);
        sessionStorage.setItem('bulan', row.bulan);
        sessionStorage.setItem('tahun', row.tahun);
        sessionStorage.setItem('sumber_alokon', row.sumberAlokon);
        sessionStorage.setItem('no_faskes', this.state.detailDatas2[3]);
        sessionStorage.setItem('no_jaringan', this.state.detailDatas2[4] ? this.state.detailDatas2[4] : '-');
        sessionStorage.setItem('lembar', row.nomorLembar);
        sessionStorage.setItem('sumber_alokon', this.state.detailDatas2[5]);
        sessionStorage.setItem('menyetujui_tempat', this.state.detailDatas2[6]);
        sessionStorage.setItem('menyetujui_nama', this.state.detailDatas2[7]);
        sessionStorage.setItem('menyetujui_nip', this.state.detailDatas2[8]);
        sessionStorage.setItem('open', this.state.open);
        // console.log('Masuk create')
    }

    closeModal = () => {
        this.setState({
            pdfModal: false
        })
    }

    setValue = (value) => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
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
                        // this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                //         this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                        // this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                //         this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                        // this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                //         this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                        // this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                //         this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                        // this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
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
                //         this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleRT = (e) => {
        if (e) {
            this.setState({ rt: e, id_rt: e.value },
                () => {
                    if (e) {
                        // var idProv = this.state.id_provinsi
                        // var idKab = this.state.id_kabupaten
                        // var idKec = this.state.id_kecamatan
                        // var idDes = this.state.id_des
                        // var idRw = this.state.id_rw
                        // var idRt = this.state.id_rt
                        // this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                    }
                }
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
                //         this.setBody(idProv, idKab, idKec, idDes, idRw, idRt)
                //     }
                // }
            )
        }
    }

    handleSearchWilayahToTable = (id) => {
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
        this.setBody(idProv, idKab, idKec, idDes, idRW, idRT);
        // console.log(idProv, idKab, idKec, idDes, idRW, idRT)
    }

    handleDeleteWilayah = () => {
        this.setState({
            provinsi: null,
            kabupaten: null,
            kecamatan: null,
            desa: null,
            rw: null,
            rt: null,
            id_provinsi: 0,
            id_kabupaten: 0,
            id_kecamatan: 0,
            id_desa: 0,
            id_rw: 0,
            id_rt: 0,
            dis_kab: true,
            dis_kec: true,
            dis_des: true,
            dis_rw: true,
            dis_rt: true,
        })
    }

    render() {

        const columns = [
            {
                dataField: '#',
                text: 'No',
                headerAlign: 'center',
                align: 'center',
                formatter: (cell, row, rowIndex) => {
                    // console.log(this.state.currentPage, 'this.state.currentPage')
                    let rowNumber = (this.state.currentPage - 1) * this.state.sizePerPage + (rowIndex + 1);
                    return <span>{rowNumber}</span>;
                },
                headerStyle: (colum, colIndex) => {
                    return { width: '80px' };
                },
            },
            {
                dataField: 'kodeProvinsi',
                text: 'Kode Provinsi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'kodeKabupaten',
                text: 'Kode Kabupaten',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'nomorRegisterFaskesKB',
                text: 'Nomor Registrasi Faskes',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'nomorJaringanJejaringFaskesKB',
                text: 'Nomor Jejaring',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'namaTempatPelayananKB',
                text: 'Nama Tempat Pelayanan KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '220px' };
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
                    return { width: '120px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span className="btnInTable">
                                <Button className="btn-facebook btn-brand btn-sm icon" onClick={(e) => this.handleClickIcon(e, row, 'download')}><i className="icon-download4"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-stack-overflow btn-brand btn-sm icon" onClick={(e) => this.handleClickIcon(e, row, 'lihat')}><i className="icon-search4"> </i></Button>
                            </span>
                        </div>
                    );
                }
            }
        ];

        function monthFormatter(cell, row) {
            let bulan;
            let month = cell;
            switch (month) {
                case 1: bulan = "Januari"; break;
                case 2: bulan = "Februari"; break;
                case 3: bulan = "Maret"; break;
                case 4: bulan = "April"; break;
                case 5: bulan = "Mei"; break;
                case 6: bulan = "Juni"; break;
                case 7: bulan = "Juli"; break;
                case 8: bulan = "Agustus"; break;
                case 9: bulan = "September"; break;
                case 10: bulan = "Oktober"; break;
                case 11: bulan = "November"; break;
                case 12: bulan = "Desember"; break;
                default: bulan = "-";
            }
            return bulan + " " + row.tahun;
        }

        function sumberAlokonFormatter(cell, row) {
            let id_sumberAlokon;
            let sumber_alokon = cell;
            switch (sumber_alokon) {
                case 1: id_sumberAlokon = "APBN"; break;
                case 2: id_sumberAlokon = "APBD"; break;
                case 3: id_sumberAlokon = "MANDIRI"; break;
                default: id_sumberAlokon = 0;
            }
            return id_sumberAlokon;
        }

        const columns2 = [
            {
                dataField: '#',
                text: 'No',
                headerAlign: 'center',
                align: 'center',
                formatter: (cell, row, rowIndex) => {
                    let rowNumber = (this.state.currentPage2 - 1) * this.state.sizePerPage2 + (rowIndex + 1);
                    return <span>{rowNumber}</span>;
                },
                headerStyle: (colum, colIndex) => {
                    return { width: '80px' };
                },
            },
            {
                dataField: 'tempatPelayananKBID',
                text: 'No. Tempat YAN KB',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                // dataField: '#',
                formatter: () => {
                    let nama = (this.state.detailDatas2[0]);
                    return <span>{nama}</span>;
                },
                dataField: 'namaTempatPelayananKB',
                text: 'Nama Tempat YAN KB',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'sumberAlokon',
                formatter: sumberAlokonFormatter,
                text: 'Sumber Alokon',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '140px' };
                },
            },
            {
                dataField: 'bulan',
                formatter: monthFormatter,
                text: 'Tahun Bulan Lapor',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'nomorLembar',
                text: 'Lembar Ke',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'dt6',
                text: '',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span className="btnInTable">
                                <Button className="btn-facebook btn-brand btn-sm icon" onClick={(e) => this.handleClickIcon(e, row, 'download')}><i className="icon-download4"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-stack-overflow btn-brand btn-sm icon" onClick={() => this.handleClickAction(row, 'lihat')}><i className="icon-search4"> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-xing btn-brand btn-sm icon" onClick={() => this.handleClickAction(row, 'edit')}><i className="icon-pencil"> </i></Button>
                            </span>
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
                        console.log(row)
                        //   this.setState({modalTitle: row.plant})
                        //   this.toggleModal();
                    },
                }
            },
        ];

        const rowEvents = {
            onClick: (e, row) => {
                // console.log("ini e" + e);
                // console.log("ini row" + row);
            }
        }

        return (
            <div className="animated fadeIn">
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col xs="12" md="12">
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col md="12">
                                            <div className="titleFilter"><i className="icon-filter4"></i> Filter Data</div>
                                        </Col>
                                    </Row>
                                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
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
                                                                <Label className="labelForm" htmlFor="kabupaten">Kab/Kota</Label>
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
                                                        <div style={{ height: '54px' }}> <Button className="btn btn-danger btnFilter" onClick={() => this.handleDeleteWilayah(this.state.provinsi)}><i className="icon-trash-alt"></i> Hapus</Button></div>
                                                    </Col>
                                                    <Col xs="6" md="12">
                                                        <Button className="btn btn-success btnFilter " onClick={() => this.handleSearchWilayahToTable(this.state.provinsi)}><i className="icon-reload-alt"></i> Refresh</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>

                                    <Row>
                                        <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange' }} /></Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <div className="titleFilter"><i className="icon-clipboard3"></i> Mutasi Alokon</div>
                                        </Col>
                                        <Col md="12">
                                            <Fade in={this.state.open}>
                                                <Button className="btn btn-info btn-add" onClick={this.handleCreate}> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button>
                                            </Fade>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="12">
                                            <Collapse isOpen={this.state.open}>
                                                <Col md="12" className="card-body-nopad">
                                                    <Table2Edit
                                                        caption=''
                                                        tableHead={columns2}
                                                        datas={this.state.datas2}
                                                        handlePageChange={this.handlePageChange}
                                                    />

                                                    <Fade in={this.state.open}>
                                                        <Button className="btn btn-warning" onClick={this.clickBack}>Sebelumnya</Button>
                                                    </Fade>
                                                </Col>
                                            </Collapse>
                                        </Col>

                                        <Col md="12">
                                            <Collapse isOpen={!this.state.open}>
                                                <Col md="12" className="card-body-nopad">
                                                    <Table2Edit
                                                        caption=''
                                                        tableHead={columns}
                                                        datas={this.state.datas}
                                                        rowEvents={rowEvents}
                                                        handlePageChange={this.handlePageChange}
                                                    />
                                                </Col>
                                            </Collapse>
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </BlockUi>
            </div>
        );
    }
}

export default MutasiAlokon;