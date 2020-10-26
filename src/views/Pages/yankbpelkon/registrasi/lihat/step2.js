import React, { Component } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';
import Table2EditNoSearch from '../../../../Commons/Table/Table2EditNoSearch';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import API014 from '../../../../../services/API014';
import API015 from '../../../../../services/API015';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            modal: false,
            activeTab: 0,

            // Jenis Kunjungan
            show_jk: [
                { value: 'informed-consent', label: 'Informed Consent' },
                { value: 'tanpa-informed-consent', label: 'Tanpa Informed Consent' }
            ],
            value_jk: null,
            kd_jk: '',

            //Keluhan
            show_keluhan: [],
            dt_keluhan: [
                { value: 'pasca-persalinan', label: 'Pasca Persalinan', kd_jk: 'informed-consent' },
                { value: 'pasca-keguguran', label: 'Pasca Keguguran', kd_jk: 'informed-consent' },

                { value: 'pasca-persalinan', label: 'Pasca Persalinan', kd_jk: 'tanpa-informed-consent' },
                { value: 'pasca-keguguran', label: 'Pasca Keguguran', kd_jk: 'tanpa-informed-consent' },
                { value: 'komplikasi-berat', label: 'Komplikasi Berat', kd_jk: 'tanpa-informed-consent' },
                { value: 'kegagalan', label: 'Kegagalan', kd_jk: 'tanpa-informed-consent' }
            ],
            disKeluhan: true,
            value_keluhan: null,

            // Jenis Tindakan
            show_jt: [],
            dt_jt: [
                { value: 'pemberian-suntikan-1bulan', label: 'Pemberian Suntikan 1 bulanan', kd_jk: 'informed-consent' },
                { value: 'pemberian-suntikan-3bulan', label: 'Pemberian Suntikan 3 bulanan', kd_jk: 'informed-consent' },
                { value: 'pemasangan-implan-1batang', label: 'Pemasangan Implan 1 batang', kd_jk: 'informed-consent' },
                { value: 'pemasangan-implan-2batang', label: 'Pemasangan implan 2 batang', kd_jk: 'informed-consent' },
                { value: 'pemasangan-iud-cut3804', label: 'Pemasangan IUD Cut 3804', kd_jk: 'informed-consent' },
                { value: 'pemasangan-iud-lain', label: 'Pemasanagn IUD lain lain', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-implan-1batang', label: 'Pencabutan dan Pemasangan Implan 1 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-implan-2batang', label: 'Pencabutan dan Pemasangan implan 2 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-iud-cut3804', label: 'Pencabutan dan Pemasangan IUD Cut 3804', kd_jk: 'informed-consent' },
                { value: 'pencabutan-pemasangan-iud-lain', label: 'Pencabutan dan Pemasangan IUD lain lain ', kd_jk: 'informed-consent' },
                { value: 'operatif-tubektomi', label: 'Operatif Tubektomi', kd_jk: 'informed-consent' },
                { value: 'operatif-vasektomi', label: 'Operatif Vasektomi', kd_jk: 'informed-consent' },
                { value: 'pencabutan-implan-1batang', label: 'Pencabutan Implan 1 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-implan-2batang', label: 'Pencabutan implan 2 batang', kd_jk: 'informed-consent' },
                { value: 'pencabutan-iud-cut3804', label: 'Pencabutan IUD Cut 3804', kd_jk: 'informed-consent' },
                { value: 'pencabutan-iud-lain', label: 'Pencabutan IUD lain lain', kd_jk: 'informed-consent' },

                { value: 'pemasangan-implan-1batang', label: 'Pemasangan Implan 1 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pemasangan-implan-2batang', label: 'Pemasangan implan 2 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pemasangan-iud-cut3804', label: 'Pemasangan IUD Cut 3804', kd_jk: 'tanpa-informed-consent' },
                { value: 'pemasangan-iud-lain', label: 'Pemasanagn IUD lain lain', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-implan-1batang', label: 'Pencabutan dan Pemasangan Implan 1 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-implan-2batang', label: 'Pencabutan dan Pemasangan implan 2 batang', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-iud-cut3804', label: 'Pencabutan dan Pemasangan IUD Cut 3804', kd_jk: 'tanpa-informed-consent' },
                { value: 'pencabutan-pemasangan-iud-lain', label: 'Pencabutan dan Pemasangan IUD lain lain ', kd_jk: 'tanpa-informed-consent' },
                { value: 'operatif-tubektomi', label: 'Operatif Tubektomi', kd_jk: 'tanpa-informed-consent' },
                { value: 'operatif-vasektomi', label: 'Operatif Vasektomi', kd_jk: 'tanpa-informed-consent' }
            ],
            disJt: true,
            value_jt: '',

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
            nama: '',
            no_kki: '',
            dataPeserta: [],

            show_dataPenduduk: [],
            show_nik: null,
        }
    }

    componentDidMount() {
        this.setPesertaKB(this.props.id);
    }

    setPesertaKB(id) {
        this.setState({ blocking: true });
        this.setState({ dataKeluarga: [] });
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

    setNonBdki() {
        this.setState({ blocking: true });
        this.setState({ dataNonBdki: [] });
        API014.get('siga/reg-yan-kb/getListPesertaNonBdki')
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

    setKeluarga() {
        this.setState({ blocking: true });
        this.setState({ dataKeluarga: [] });
        API014.get('siga/reg-yan-kb/getListBdkiKeluarga')
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
                    const obj = { 'value': data.id_provinsi, 'label': data.nama };
                    newData.push(obj);
                });

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
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten };
                    newData.push(obj);
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
                    newData.push(obj);
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
                    newData.push(obj);
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
                    newData.push(obj);
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
                    newData.push(obj);
                });
                this.setState({ opt_rt: newData });
                // console.log("opt_rt" + this.state.opt_rt);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setValue = (value) => {
        this.setState(prevState => ({
            select: {
                ...prevState.select,
                value
            }
        }));
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        }, () => {

            this.setNonBdki();
            this.setProv();
            this.setKeluarga();
        })
    };

    handleClickAction = (row, action) => {
        this.setState({}, () => {
            if (action === 'pilih') {
                this.setState({
                    nama: row.nama,
                    no_kki: row.kki,
                    modal: !this.state.modal
                })
            }
        });
    }

    handleChange = (e, tab) => {
        this.setState({ activeTab: tab });
    }

    showModalBdki = e => {
        this.setState({
            bdkiModal: !this.state.bdkiModal
        })
        console.log("Masuk atau Engga : " + this.state.bdkiModal)
    }

    callData = (e) => {
        if (e.keyCode === 13) {
            this.setState({
                show_dataPenduduk: this.state.dataKeluarga.filter(item => item.nik === e.target.value)
            })
        }

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
            return mm + ' - ' + dd + ' - ' + yyyy;
        }

        const columnPeserta = [
            {
                dataField: 'no',
                text: 'No',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'tanggal',
                formatter: tglFormat,
                text: 'Tanggal',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
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
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'jenisKunjungan',
                text: 'Jenis Kunjungan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'keluhan',
                text: 'Keluhan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'jenisTindakan',
                text: 'Jenis Tindakan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'penggunaanAsuransi',
                text: 'Penggunaan Asuransi',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'sumberAlokon',
                text: 'Sumber Alokon',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'Action',
                text: '',
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
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link" onClick={() => this.handleClickAction(row, 'pilih')}> <i className="icon-checkmark" style={{ fontSize: '0.875rem' }}> </i> </Button>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <Button color="link"> <i className="icon-trash" style={{ fontSize: '0.875rem' }}> </i> </Button>
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

        return (
            <>
                <container-fluid>
                    <Row>
                        <Table2EditNoSearch
                            caption=''
                            tableHead={columnPeserta}
                            datas={this.state.dataPeserta}
                        />
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                        <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step2;