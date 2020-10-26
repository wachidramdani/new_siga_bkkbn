import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/title-login2.png'
import sygnet from '../../assets/img/brand/icon_small.png'
import Swal from 'sweetalert2';
import 'react-block-ui/style.css';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: localStorage.getItem('username')
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    Swal.fire({
      title: 'Peringatan',
      text: "Apakah anda yakin akan keluar dari aplikasi?",
      icon: 'warning',
      cancelButtonText: 'Batal!',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya!',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        localStorage.clear();
        this.props.history.push('/login');
      }
    });
  }

  handleChangePassword(e) {
    e.preventDefault();
    this.props.history.push('/chpass');
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    // const dataUser = JSON.parse(localStorage.getItem('data'));
    // const usavatar = (dataUser) ? dataUser.avatar : '';
    // const usname = (dataUser) ? dataUser.name.split(' ')[0] : '';

    return (
        <React.Fragment>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <Link to={'/'}>
            <AppNavbarBrand tag={'div'}
              full={{ src: logo, width: 120, height: 40, alt: 'Logo' }}
              minimized={{ src: sygnet, width: 30, height: 30, alt: 'Logo' }}
            />
          </Link>
          <AppSidebarToggler className="d-md-down-none" display="lg" />

          <Nav className="d-md-down-none" navbar>
            {/* <NavItem className="px-3">
              <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/users" className="nav-link">Users</Link>
            </NavItem> */}
          </Nav>
          <Nav className="ml-auto" navbar>
            {/* <NavItem className="d-md-down-none">
              <NavLink to="#" className="nav-link"><i className="icon-bell3"></i><Badge pill color="danger">5</Badge></NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav direction="down">
              <DropdownToggle nav>
                <img src={ '../../assets/img/avatars/avatar.png' } className="img-avatar" alt="avatar" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header tag="div" className="text-center"><strong><span className="name-bar">{this.state.username}</span></strong></DropdownItem>
                <DropdownItem onClick={this.handleChangePassword}><i className="icon-key"></i> Ubah Kata Sandi</DropdownItem>
                <DropdownItem onClick={this.handleSubmit}><i className="icon-exit"></i> Keluar</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <AppAsideToggler className="d-md-down-none" />
          <AppAsideToggler className="d-lg-none" mobile /> */}
        </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withRouter(DefaultHeader);
