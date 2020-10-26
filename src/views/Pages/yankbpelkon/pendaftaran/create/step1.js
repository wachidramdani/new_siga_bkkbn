import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CardBody, Col, Row, FormGroup, Label, Input, TabPane, TabContent, Button } from 'reactstrap';
import Select from 'react-select';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import API013 from '../../../../../services/API013';
import btnBack from '../../../../../assets/img/btnBack.png';


class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: false,
            datas: [],
            noRegisterFaskesKb: '',
            hidden_noRegisterFaskesKb: false,
            noJaringanJejaring: '',
            noJaringanFaskesKB_RO: true,
            namaTempatKB_RO: true,
            jenisFaskesKb: [
                {value: '11', label: 'Faskes',  kd_jenisFaskesKb: '1'},
                {value: '12', label: 'Jaringan/Jejaring',  kd_jenisFaskesKb: '2'},
            ],
            select1: 0,
            show_jenisFaskesKb: [],
            hidden_jenisFaskesKb: true,
            select2: null,
            show_tingkatFaskesKb: [],
            hidden_tingkatFaskesKb: true,
            tingkatPelayanan: [
                {value: '22', label: '1. RS UMUM', kd_tingkatFaskesKb: '11'},
                {value: '23', label: '2. RS KHUSUS', kd_tingkatFaskesKb: '11'},
                {value: '21', label: '3. KLINIK UTAMA', kd_tingkatFaskesKb: '11' },
                {value: '24', label: '4. PUSKESMAS', kd_tingkatFaskesKb: '11'},
                {value: '25', label: '5. PRAKTIK DOKTER', kd_tingkatFaskesKb: '11'},
                {value: '26', label: '6. KLINIK PRATAMA', kd_tingkatFaskesKb: '11'},
                {value: '27', label: '7. RS TIPE D PRATAMA', kd_tingkatFaskesKb: '11'},
                {value: '28', label: '1. PUSTU', kd_tingkatFaskesKb: '12'},
                {value: '29', label: '2. PUSLING', kd_tingkatFaskesKb: '12'},
                {value: '30', label: '3. POSKESDES/POLINDES', kd_tingkatFaskesKb: '12'},
                {value: '31', label: '8. PRAKTEK Mandiri BIDAN (Setara Faskes)', kd_tingkatFaskesKb: '11'},
                {value: '32', label: '4. PRAKTEK Mandiri BIDAN Jejaring', kd_tingkatFaskesKb: '12'},
            ],
            select3: null,
            show_tingkatPelayanan: [],
            hidden_tingkatPelayanan: true,
            select4: null,
            statusKepemilikan : [],
            hidden_statusKepemilikan: true,
            show_kbPerusahaan: [
                { value: 1, label: 'Ya' }, 
                { value: 2, label: 'TIDAK' 
            }],
            kerjasamaBpjs: [
                { value: 1, label: 'YA' },
                { value: 2, label: 'TIDAK' }
            ],
            kerjasamaBpjsLnsgTdk: [
                { id: 1, label: 'YA' },
                { id: 2, label: 'TIDAK' }
            ],

            selKerjasamaBpjs: true,
            valKerjasamaBpjs: null,
            valPelayananRekanalisasi: null,
            selKerjasamaBpjsLsngTdk: true,
            valKerjasamaBpjsLsngTdk: null,
            activeTab: '',  
            namaTempatPelayananKB:'',
            jalan:'',

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

            nomorRegisterPKSLangsung:'',
            nomorPKSLangsung:'',
            masaBerlakuLangsung: null,
            masaBerlakuLangsungAkhir:null,

            noPksTidakLangsung:'' ,
            masaBerlakuTidakLangsung: null,
            masaBerlakuTidakLangsungAkhir: null,

            fields: {},
            errors: {}

        }
    }

    checkNoReg = (noreg) => {
        var x = 0;
        // console.log(noreg, 'moreg');
        if(this.state.datas.length > 0) {
            this.state.datas.forEach(data => {
                // console.log(data.nomorRegisterFaskesKB)
                if(noreg === data.nomorRegisterFaskesKB){
                    x++;
                }
            });
            // console.log(x, 'tes x');
            if(x > 0){
                this.setState({
                    noJaringanFaskesKB_RO: false, 
                    noJaringanJejaring: '', 
                    namaTempatKB_RO: true,
                });
                ReactDOM.findDOMNode(this.Text_noJaringanJejaring).focus();
            }else{
                Swal.fire({
                    title: 'Info',
                    icon: 'info',
                    text: 'Faskes KB induk belum terdaftar, lanjutkan jika anda ingin mendaftarkan Faskes KB Induk baru.',
                }).then((result) => {
                    Swal.close();
                        this.setState({noJaringanFaskesKB_RO: true, noJaringanJejaring: '', namaTempatKB_RO: false, namaTempatPelayananKB: '', 
                            show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '11'),
                            hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                            show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
                            hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                            kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                            valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                        });
                    // setTimeout(function () { 
                        // ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
                    // }, 0); 
                });
            }
        }else{
            Swal.fire({
                title: 'Info',
                icon: 'info',
                text: 'Faskes KB induk belum terdaftar, lanjutkan jika anda ingin mendaftarkan Faskes KB Induk baru.',
            }).then((result) => {
                Swal.close();
                    this.setState({noJaringanFaskesKB_RO: true, noJaringanJejaring: '', namaTempatKB_RO: false, namaTempatPelayananKB: '', 
                        show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '11'),
                        hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                        show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
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
        if(this.state.datas.length > 0) {
            this.state.datas.forEach(data => {
                if(this.state.noRegisterFaskesKB === data.nomorRegisterFaskesKB && noJejaring === data.nomorJaringanJejaringFaskesKB){
                    x++;
                }
            });
            if(x > 0){
                Swal.fire({
                    title: 'Peringatan',
                    icon: 'warning',
                    text: 'Jaringan Faskes KB sudah terdaftar.',
                });
            }else{
                this.setState({
                    namaTempatKB_RO: false, namaTempatPelayananKB: '',
                    show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '12'),
                    hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                    show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
                    hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                    kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                    valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
                });
                // ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
            }
        }else{
            this.setState({
                namaTempatKB_RO: false, namaTempatPelayananKB: '',
                show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '1'),
                hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
                hidden_tingkatFaskesKb: true, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
            });
            ReactDOM.findDOMNode(this.Text_namaTempatKB).focus();
        }
    }
    
    
    componentDidMount() {
        this.setState({ blocking: true });
        this.setState({ datas: [] });
        API013.get('siga/pelayanankb/getlistbylocation?provinsiId=' + sessionStorage.getItem("kd_prov") + '&kabupatenId=' + sessionStorage.getItem("kd_kab") + '&kecamatanId=0&kelurahanId=0&rwId=0&rtId=0')
        .then(res => {
            if(res.status === 200){ 
                this.setState({ datas: this.state.datas.concat(res.data) });
            }
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

    // input nomor faskes kb
    inputFaskeskb = (e) => {
        if(e.target.value){
            // e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3)
            this.setState({
                noRegisterFaskesKb: e.target.value,
                show_jenisFaskesKb: this.state.jenisFaskesKb.filter(item => item.value === '1'),
                hidden_jenisFaskesKb: false, select1: null, select2: null, select3: null, select4: null,
                show_tingkatFaskesKb: [], show_tingkatPelayanan: [], statusKepemilikan : [],
                hidden_tingkatFaskesKb: false, hidden_tingkatPelayanan: true, hidden_statusKepemilikan: true,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
            })
        }
        else{
            this.setState({
                show_jenisFaskesKb: [], select1: null, hidden_jenisFaskesKb: true, 
                show_tingkatFaskesKb: [], select2: null, hidden_tingkatFaskesKb: true,
                show_tingkatPelayanan: [], select3: null, hidden_tingkatPelayanan: true,
                select4: null, statusKepemilikan : [], hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: ''
            })
        }
    }

    handleChange = (event) => {
        const state = this.state
		state[event.target.name] = event.target.value
		this.setState(state);
    }

    // Jenis Faskes KB
    changeSel1 = (e) => {
        // console.log(e,'tes e');
        if (e) {
            if(e.kd_jenisFaskesKb === '1' || e.kd_jenisFaskesKb === '2'){
                this.setState({
                    show_tingkatPelayanan: this.state.tingkatPelayanan.filter(item => item.kd_tingkatFaskesKb === e.value),
                    hidden_tingkatPelayanan: false, select1: e, select3: null
                })
            } else {
                this.setState({
                    show_tingkatPelayanan: [], select2: e, select3: null, select4: null, hidden_statusKepemilikan: true,
                    kbPerusahaan: null, pkbrs: null, 
                })   
            }
        }
        else {
            this.setState({
                show_tingkatPelayanan: [], select2: null, hidden_tingkatPelayanan: true, select3: null, select4: null, 
                hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: '', hidden_pkbrs: true, hidden_kbPerusahaan: true,
            })
        }
    }


    // Jenis tingkat pelayan
    changeSel3 = (e) => {
        console.log(e,'tes e 3');
        if(e){
            if(e.value === '21' ){
                this.setState({
                    statusKepemilikan: [{value: '8', label: 'BUMN/BUMD'}, {value: '9', label: 'SWASTA'},{value: '10', label: 'LSOM'},],
                    select3: e,  hidden_statusKepemilikan: false,
                    jenisFKRTLId: 1, jenisFKTPId: 0, jenisJaringanId: 0, jenisJejaringId: 0
                })
            }
            else if(e.value === '22' || e.value === '23'){
                (e.value === '22') ? this.setState({jenisFKRTLId: 2}) : this.setState({jenisFKRTLId: 3})
                
                this.setState({
                    statusKepemilikan: [{value: '1', label: 'PEMERINTAH PUSAT'}, {value: '2', label: 'PEMERINTAH PROVINSI'},
                                        {value: '3', label: 'PEMKAB/PEMKOT'}, {value: '6', label: 'TNI'}, {value: '7', label: 'POLRI'},
                                        {value: '8', label: 'BUMN/BUMD'}, {value: '9', label: 'SWASTA'}, {value: '10', label: 'LSOM'},],
                    select3: e, hidden_statusKepemilikan: false, 
                    jenisFKTPId: 0, jenisJaringanId: 0, jenisJejaringId: 0
                })
            }
            else if (e.value === '24') {
                this.setState({
                    statusKepemilikan: [{value: '3', label: 'DINKES KABUPATEN/KOTA'}], select3: e, hidden_statusKepemilikan: false,
                    jenisFKRTLId: 0, jenisFKTPId: 4, jenisJaringanId: 0, jenisJejaringId: 0
                })
            }
            else if (e.value === '25'){
                this.setState({
                    statusKepemilikan: [{value: '9', label: 'SWASTA'},{value: '5', label: 'PERORANGAN'}], select3: e, hidden_statusKepemilikan: false,
                    jenisFKRTLId: 0, jenisFKTPId: 5, jenisJaringanId: 0, jenisJejaringId: 0
                })
            }
            else if (e.value === '26'){
                this.setState({
                    statusKepemilikan: [{value: '1', label: 'PEMERINTAH PUSAT'}, {value: '2', label: 'PEMERINTAH PROVINSI'}, 
                                        {value: '3', label: 'PEMKAB/PEMKOT'},{value: '6', label: 'TNI'}, {value: '7', label: 'POLRI'}, 
                                        {value: '8', label: 'BUMN/BUMD'}, {value: '9', label: 'SWASTA'}, {value: '10', label: 'LSOM'},],
                    select3: e, hidden_statusKepemilikan: false,
                    jenisFKRTLId: 0, jenisFKTPId: 6, jenisJaringanId: 0, jenisJejaringId: 0
                })
                
            }
            else if (e.value === '27'){
                this.setState({
                    statusKepemilikan: [{value: '1', label: 'PEMERINTAH PUSAT'}, {value: '2', label: 'PEMERINTAH PROVINSI'}, 
                                        {value: '3', label: 'PEMKAB/PEMKOT'},{value: '6', label: 'TNI'}, {value: '7', label: 'POLRI'}, 
                                        {value: '8', label: 'BUMN/BUMD'}, {value: '9', label: 'SWASTA'}, {value: '10', label: 'LSOM'},],
                    select3: e, hidden_statusKepemilikan: false,
                    jenisFKRTLId: 0, jenisFKTPId: 7, jenisJaringanId: 0, jenisJejaringId: 0
                })
            }
            else if (e.value === '28' || e.value === '29' || e.value === '30') {
                if(e.value === '28'){
                    this.setState({jenisJaringanId: 1})
                }else if (e.value === '29') {
                    this.setState({jenisJaringanId: 2})
                }else {
                    this.setState({jenisJaringanId: 3})
                }
                this.setState({
                    statusKepemilikan: [{value: '3', label: 'PEMKAB/PEMKOT'},{value: '1', label: 'PEMERINTAH PUSAT'}], select3: e, hidden_statusKepemilikan: false,
                    jenisFKRTLId: 0, jenisFKTPId: 0, jenisJejaringId: 0
                })
            }
            else if (e.value === '31') {
                this.setState({
                    statusKepemilikan: [{value: '9', label: 'SWASTA'}], select3: e, hidden_statusKepemilikan: false,
                    jenisFKRTLId: 0, jenisFKTPId: 0, jenisJaringanId: 0, jenisJejaringId: 5
                })
            }
        }
        else {
            this.setState({
                statusKepemilikan: [], select3: null, select4: null, hidden_statusKepemilikan: true, kbPerusahaan: null, pkbrs: null,
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, activeTab: '', hidden_pkbrs: true, hidden_kbPerusahaan: true,
                jenisFKRTLId: 0, jenisFKTPId: 0, jenisJaringanId: 0, jenisJejaringId: 0
            })
        }
    }

    changeSel4 = (e) => {
        if(e){
            if(this.state.select3.value === '21'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: '2', label: 'TIDAK' }], pkbrs: [{ value: '2', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if (this.state.select3.value === '22' || this.state.select3.value === '23'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: '2', label: 'TIDAK' }], pkbrs: [{ value: '2', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                    // selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '24'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: '2', label: 'TIDAK' }], pkbrs: [{ value: '2', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '25'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: '2', label: 'TIDAK' }], pkbrs: [{ value: '2', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '26'){
                // if(e.label === 'PEMERINTAH PUSAT' || e.label === 'PEMERINTAH PROVINSI' || e.label === 'PEMKAB/PEMKOT' || e.label === 'TNI' || e.label === 'POLRI'){
                    this.setState({
                        select4: e, 
                        // kbPerusahaan: [{ value: 'tidak', label: 'TIDAK' }], 
                        pkbrs: [{ value: '2', label: 'TIDAK' }],
                        hidden_kbPerusahaan: false,
                    })
                // }
                // else if(e.label === 'BUMN/BUMD' || e.label === 'SWASTA' || e.label === 'LSOM'){
                //     this.setState({
                //         select4: e, kbPerusahaan: [{ value: 'ya', label: 'Ya' }], pkbrs: [{ value: 'tidak', label: 'TIDAK' }],
                //         selKerjasamaBpjs: false
                //     })
                // }
            }
            else if(this.state.select3.value === '27'){
                this.setState({
                    select4: e, 
                    kbPerusahaan: [{ value: '2', label: 'TIDAK' }], 
                    // pkbrs: [{ value: 'ya', label: 'Ya' }],
                    hidden_pkbrs: false,
                })
            } 
            else if(this.state.select3.value === '28' || this.state.select3.value === '29' || this.state.select3.value === '30') {
                this.setState({
                    select4: e, kbPerusahaan: [{ value: '2', label: 'TIDAK' }], pkbrs: [{ value: '2', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
            else if(this.state.select3.value === '31'){
                this.setState({
                    select4: e, kbPerusahaan: [{ value: '2', label: 'TIDAK' }], pkbrs: [{ value: '2', label: 'TIDAK' }],
                    selKerjasamaBpjs: false
                })
            }
        }
        else {
            this.setState({
                select4: null, kbPerusahaan: null, pkbrs: null, 
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, 
                valKerjasamaBpjsLsngTdk: null, selKerjasamaBpjs: true, hidden_pkbrs: true, hidden_kbPerusahaan: true, activeTab: ''
            })
        }
    }


    option4 = (e) => {
        console.log(e, 'tes e 4')
        if(e){
            if(e.value === 1){
                this.setState({
                    kerjasamaBpjsLsngTdk: [{ value: '2', label: 'Tidak Langsung' }], selKerjasamaBpjsLsngTdk: false, valKerjasamaBpjs: e, kerjasamaBPJSKesehatanId: 1
                })
                
                // if(this.state.noJaringanJejaring){
                //     this.setState({
                //         kerjasamaBpjsLsngTdk: [{ value: '2', label: 'Tidak Langsung' }], selKerjasamaBpjsLsngTdk: false, valKerjasamaBpjs: e
                //     })
                // }
                // else if (this.state.noRegisterFaskesKb) {
                //     this.setState({
                //         kerjasamaBpjsLsngTdk: [{ value: '1', label: 'Langsung' }], selKerjasamaBpjsLsngTdk: false, valKerjasamaBpjs: e
                //     })
                // }
            }
            else if(e.value === 2) {
                this.setState({
                    kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: e, valKerjasamaBpjsLsngTdk: null, activeTab: '', kerjasamaBPJSKesehatanId: 2, 
                })
            }
        }
        else{
            this.setState({
                kerjasamaBpjsLsngTdk: [], selKerjasamaBpjsLsngTdk: true, valKerjasamaBpjs: null, valKerjasamaBpjsLsngTdk: null, activeTab: '', kerjasamaBPJSKesehatanId: 0
            })
        }
    }

    option5 = (e) => {
        this.setState({
           valPelayananRekanalisasi: e
        })
    }

    convertDate = (dt) => {
        console.log(dt, 'tes dt');
        var curr = new Date(dt);
        // curr.setDate(dt);
        return curr.toISOString();
    }

    handleValidation(){
        let state = this.state;
        let errors = {};
        let formIsValid = true;

        //Jalan
        if(!state.jalan){
           formIsValid = false;
           errors["jalan"] = "Tidak Boleh Kosong";
        }

        //Nama tempat pelayanan KB
        if(!state.namaTempatPelayananKB){
            formIsValid = false;
            errors["namaTempatPelayananKB"] = "Tidak Boleh Kosong";
         }

       this.setState({errors: errors});
       return formIsValid;
   }

    handleNext = (event) => {
        //validasi
        event.preventDefault();

        // if(this.handleValidation()){
            // console.log(sessionStorage.getItem('kd_prov')+ 'tes');
            const tpkb =  sessionStorage.getItem('depdagriProv')+sessionStorage.getItem('depdagriKab')+this.state.noRegisterFaskesKB+this.state.noJaringanJejaring
            sessionStorage.setItem('tempatPelayananKBId', tpkb)

            const step1 = {
                tempatPelayananKBId: tpkb,
                provinsiId:  parseInt(sessionStorage.getItem('kd_prov')), 
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
                kepemilikanId:  parseInt((this.state.select4) ? this.state.select4.value:''),
                kBPerusahaanId: this.state.KbPerusahaanId,
                pKBRSId: this.state.pKBRSId,

                kerjasamaBPJSKesehatanId: this.state.kerjasamaBPJSKesehatanId,
                kerjasamaBPJSKesehatanLangsungId:this.state.kerjasamaBPJSKesehatanLangsungId,

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
        this.setState({noRegisterFaskesKB: e.target.value.replace(/\D/,'')},
        ()=>{
            if(this.state.noRegisterFaskesKB.length === 3) {
                // this.checkNoReg(sessionStorage.getItem("kd_prov"), sessionStorage.getItem("kd_kab"), sessionStorage.getItem("kd_kec"), sessionStorage.getItem("kd_des"), sessionStorage.getItem("kd_rt"), sessionStorage.getItem("kd_rw"))
                // this.checkNoReg(sessionStorage.getItem("kd_prov"), sessionStorage.getItem("kd_kab"), sessionStorage.getItem("kd_kec"), 0, 0, 0)
                this.checkNoReg(this.state.noRegisterFaskesKB);
            }
        })
    }

    noJaringanJejaringChange = (e) => {
        this.setState({noJaringanJejaring: e.target.value.replace(/\D/,'')},
        ()=>{
            if(this.state.noJaringanJejaring.length === 2) {
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
                                <div className="divImg"><img src={btnBack} onClick={this.handleBack} alt=""  style={{width: '28px', height: '28px', marginLeft:'15px'}}/></div>
                                <Col md="2"></Col>
                                
                                <div style={{position:'absolute', right: '20px', marginTop:'0px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            </Row>
                            <CardBody className="card-body-nopad">
                            {/* <h6>I. Identitas </h6> */}
                                <FormGroup>
                                    <Row style={{ marginTop: '20px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>No. Register Faskes</Label>
                                        </Col>
                                        <Col md="6" xs="12" >
                                        <Input type="text" 
                                            onChange={this.noRegisterFaskesKBChange}
                                            maxLength="3"
                                            disabled={this.state.hidden_noRegisterFaskesKb}
                                            style={{ marginRight: '5px', textAlign: 'left' }} 
                                            value={this.state.noRegisterFaskesKB || ''} />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>No. Jejaring</Label>
                                        </Col>
                                        <Col md="6" xs="12" >
                                            <Input type="text" 
                                                readOnly={this.state.noJaringanFaskesKB_RO}
                                                ref={c => (this.Text_noJaringanJejaring = c)}
                                                value={this.state.noJaringanJejaring}
                                                maxLength="2"
                                                // onInput={this.JaringanJejaring}
                                                onChange={this.noJaringanJejaringChange}
                                                style={{ marginRight: '5px', textAlign: 'left' }} />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>                                               
                                        <Col md="4" xs="12" >
                                            <Label>Lokasi</Label>
                                        </Col>
                                        <Col md="6" xs="12" >
                                            <Input type="text" readOnly={this.state.namaTempatKB_RO} id="jalan" name="jalan" value={this.state.jalan} onChange={this.handleChange} />
                                            <span style={{color: "red"}}>{this.state.errors["jalan"]}</span>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>Jenis</Label>
                                        </Col>
                                        <Col md="3" xs="12" >
                                            <Select id="jenisFaskesKB" name="jenisFaskesKB" options={this.state.show_jenisFaskesKb} onChange={this.changeSel1} placeholder="Jenis Faskes KB" value={this.state.select1} isDisabled={this.state.hidden_jenisFaskesKb} isClearable />
                                        </Col>
                                        <Col md="3" xs="12">
                                            <Select id="jenisTingkatPelayanan" name="jenisTingkatPelayanan" options={this.state.show_tingkatPelayanan} onChange={this.changeSel3} placeholder="Jenis Tingkat Pelayanan" value={this.state.select3} isDisabled={this.state.hidden_tingkatPelayanan} isClearable />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md='4'>
                                            <Label>Kepemilikan</Label>
                                        </Col>
                                        <Col md="6">
                                            <Select id="statusKepemilikan" name="statusKepemilikan" options={this.state.statusKepemilikan} onChange={this.changeSel4} value={this.state.select4} isDisabled={this.state.hidden_statusKepemilikan} placeholder="Status Kepemilikan" isClearable />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>Kerjasama Dengan BPJS Kesehatan </Label>
                                        </Col>
                                        <Col md="6" xs="12" >
                                            <Select options={this.state.kerjasamaBpjs} isDisabled={this.state.selKerjasamaBpjs} value={this.state.valKerjasamaBpjs} onChange={this.option4} placeholder="Kerjasama Dengan BPJS Kesehatan" isClearable />    
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col md="4" xs="12" >
                                            <Label>Pelayanan Rekanalisasi </Label>
                                        </Col>
                                        <Col md="6" xs="12" >
                                            <Select options={this.state.kerjasamaBpjs} isDisabled={this.state.selKerjasamaBpjs} value={this.state.valPelayananRekanalisasi} onChange={this.option5} placeholder="Pelayanan Rekanalisasi" isClearable />    
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