import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import StepWizard from 'react-step-wizard';
import Swal from 'sweetalert2';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import API013 from '../../../../../../services/API013';


class CreateYankbpelkon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: 'panel1',
            open: false,
            valueStep1 : [],
            valueStep2 : [],
            valueStep3 : [],
            valueStep4 : [],
        }
    }

    clickBack = () => {
        this.props.history.push('/kegiatan/kegiatan_bkr');
    }

    handleValueStep = (step, value) => {
        switch (step) {
            case 'step1':
                this.setState({valueStep1: value})
                break;
            case 'step2':
                this.setState({valueStep2: value})
                break;
            case 'step3':
                this.setState({valueStep3: value})
                break;
            default:
                break;
        }
    }

    handleClickBatal = () => {
        this.props.history.push('/kegiatan/kelompok_bkr');
    }

    handleSaveStep = (valueStep4) => {
        // var x= [];
        const vl1 = this.state.valueStep1;
        const vl2 = this.state.valueStep2;
        const vl3 = {tenagaPelayananKB: this.state.valueStep3}
       
        const dataValue = { ...valueStep4, ...vl1, ...vl2, ...vl3 };
        console.log(dataValue, 'tes datavalue');

        API013.post('/siga/pelayanankb/addDataPelayananKb', JSON.stringify(dataValue)).then(response => {
			if(response.status === 200) {
				Swal.fire({
                    title: 'Sukses!',
                    icon: 'success',
                    text: 'Data Berhasil di Simpan.',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.props.history.push('/kegiatan/kelompok_bkr');
			}
		})
        // console.log(this.state.valueStep1[0], 'tes step 1');
        // console.log(this.state.valueStep2[0], 'tes step 2');
        // console.log(this.state.valueStep3, 'tes step 3');
         
    }
    
    render() {
        
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Kartu Pendaftaran Kelompok Kegiatan BKR</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{borderBottom:'1px solid orange', marginTop:'5px'}}/></Col>
                                    <Col md="12">
                                        <StepWizard
                                            // nav={<Nav />}
                                            >
                                            <Step1
                                                buttonBack={this.clickBack} 
                                                handleValueStep={this.handleValueStep} 
                                                />
                                            <Step2 handleValueStep={this.handleValueStep} />
                                            <Step3 handleValueStep={this.handleValueStep} />
                                            <Step4 handleSaveStep={this.handleSaveStep} />
                                            <Step5 
                                                buttonBatal={this.handleClickBatal}
                                                handleSaveStep={this.handleSaveStep} />
                                        </StepWizard>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CreateYankbpelkon;