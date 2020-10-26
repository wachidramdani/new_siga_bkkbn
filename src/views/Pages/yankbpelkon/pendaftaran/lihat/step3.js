import React, { Component } from 'react';
import { CardBody, Col, FormGroup } from 'reactstrap';
// import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';
import API013 from '../../../../../services/API013';

class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            datas: [],
            data: '',
            profesi: [
                { value: 'dokterKebidananDanKandungan', label: 'Dokter Kebidanan dan Kandungan' },
                { value: 'dokterBedahUrologi', label: 'Dokter Bedah/Urologi' },
                { value: 'profesiUmum', label: 'Dokter Umum' },
                { value: 'profesiBidan', label: 'Bidan' },
                { value: 'profesiPerawat', label: 'Perawat' },
                { value: 'profesiAdministrasi', label: 'Administrasi' },
            ],
            checkbox: [
                {label: 'Tubektomi', value: 'pelatihanTubektomi', name: ''},
                {label: 'Vasektomi', value: 'pelatihanVasektomi', name: ''},
                {label: 'IUD', value: 'pelatihanIUD', name: ''},
                {label: 'Implan 1 Batang', value: 'pelatihanImplan1Batang', name: ''},
                {label: 'Implan 2 Batang', value: 'pelatihanImplan2Batang', name: ''},
                {label: 'KIP/Konseling', value: 'pelatihanKIPKonseling', name: ''},
                {label: 'R/R', value: 'pelatihanRR', name: ''},
            ],
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        var data = JSON.parse(this.props.lihat)
        if (data) {
            API013.get('siga/pelayanankb/getTenagaKbByTempatId?tempatPelayananKBId=' + data.tempatPelayananKBId)
            .then(res => {
                console.log('tenaga', res)
                var profesi = this.state.profesi
                var checkbox = this.state.checkbox
                for (let index = 0; index < res.data.length; index++) {

                    for (let a = 0; a < profesi.length; a++) {
                        if(res.data[index][profesi[a].value] === 1){
                            var showprofesi = profesi[a].label
                        }
                        
                    }

                    var showCheckbox = '' ;
                    for (let i = 0; i < checkbox.length; i++) {
                        if(res.data[index][checkbox[i].value] === 1 ){
                            showCheckbox += [checkbox[i].label, ' ']

                        }
                        
                    }

                    this.setState({
                        datas: [...this.state.datas,
                            {
                                dt1: res.data[index].nomor,
                                dt2: res.data[index].tenagaPendaftaranNIK,
                                dt3: res.data[index].tenagaPendaftaranNama,
                                dt4: showprofesi,
                                dt5: showCheckbox
                            }
                        ]
                    })
                    
                }
                
                }
            )
        }
        else {
            this.props.buttonBack();
        }

        
    }

    handlePageChange = (page, sizePerPage) => {
        this.setState({currentPage: page, sizePerPage: sizePerPage})
    }

    render() {

        const columns = [
            {
                dataField: 'dt1',
                text: 'No',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'NIK',
                align: 'center',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Nama Lengkap',
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
        ];
        
        return (
            <div>
                <h6> III. TENAGA </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <CardBody style={{ padding: '10px 0' }}>
                    <FormGroup row>
                        <Col sm="12">
                            <Table2Edit
                                caption=''
                                tableHead={columns}
                                datas={this.state.datas}
                                handlePageChange={this.handlePageChange}
                            />
                        </Col>
                    </FormGroup>

                </CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step3;