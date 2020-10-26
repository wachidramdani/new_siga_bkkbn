import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import TableEditCell from '../../../Commons/Table/TableReport';
import { Row,Col,Card,CardBody } from 'reactstrap';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

class CommonReport extends Component {	
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        // this.CellFormatter = this.CellFormatter.bind(this);
        // this.goBack = this.goBack.bind(this); // i think you are missing this

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            tableHead: [],
            datas: props.datas,
            fontSize: 8
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    // CellFormatter(cell, row) {
    // return (<div><Link to={`${this.props.Link}${row.provinsi}`}>{row.provinsi}</Link></div>);
    // }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(10);
    
        const title = this.props.title

        const headers = this.props.header
    
        const data = this.state.datas.map(
                this.props.excelData
            );

        if(this.props.fontSize){
            this.setState = {fontSize: this.props.fontSize}
        }else{
            this.setSstate = {fontSize: 8}
        }

        const styles = {
            overflow: 'linebreak',
            font: 'arial',
            fontSize: this.state.fontSize,
            // cellPadding: 4,
            lineWidth: 1,
            overflowColumns: 'linebreak'
        };
        
        let content = {
        startY: 50,
        head: headers,
        body: data,
        styles: styles
        };
        
    
        doc.text(title, this.props.marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")

        window.location.reload(); 
    }

    handleSelect(key) {
        console.log('selected' + key);
        this.setState({ key: key });
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
}

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    componentDidMount() {
        this.setHead();
        this.setBody();
    }
    
    setHead() {
        var headerColumns = this.props.column
        this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
    }

    setBody() {
        this.setState({blocking: true});
        // this.setState({ datas: [] });
    }

    render() {
        const footerData = [
            this.props.footerData
		];

        function refreshPage(){ 
            window.location.reload(); 
        }

        return (
            
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-filter4"></i> {this.props.namaLaporan} </div>
                                    </Col>
                                    <Col xs="12" md="12" className='text-right'>
                                        {/* <Link className="btn btn-primary">PDF</Link>&nbsp; */}
                                        <button className="btn btn-primary" onClick={() => this.exportPDF()}>Generate PDF</button>&nbsp;
                                        <div className="btn btn-primary">Excel</div>&nbsp;
                                        <div className="btn btn-success" onClick={ refreshPage }>Refresh <i className="fa fa-refresh"></i></div>&nbsp;
                                    </Col>
                                </Row>
                                    <div md="12" xs="12">&nbsp;</div>
                                    <Row>
                                        <Col md="12" xs="12">
                                        <TableEditCell 
                                            tableHead={ this.state.tableHead }
                                            datas={ this.state.datas }
                                            footerData={footerData}
                                        />
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Col xs="4">
                                        {this.props.back}
                                    </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
	}
}

export default CommonReport;