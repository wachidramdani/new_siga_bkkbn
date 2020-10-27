import React, {Component} from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography, withStyles } from '@material-ui/core';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import Swal from 'sweetalert2';
import { Rtif } from '../../Utils/Rtif';
// import corner from '../../../assets/img/corner.png';
// import corner_bot from '../../../assets/img/corner_bot.png';
import API011 from '../../../services/API011';
import API012 from '../../../services/API012';
import API013 from '../../../services/API013';
import API014 from '../../../services/API014';
import API015 from '../../../services/API015';
import Copyright from '../../Base/Global/Copyright';

const styles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url('/assets/img/bg3.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 7),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#ef012d',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: '14px',
        fontWeight: 'bold',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                email: "",
                password: "",
                remember_me: false
            },
            errors: {},
            blocking: false,
            user:[
                {user:'kabupaten', password:'kabupaten', level:'kabupaten'},
                {user:'kecamatan', password:'kecamatan', level:'Lhoong'}
            ],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = true;
        }

        // if(typeof fields["email"] !== "undefined"){
        //     let lastAtPos = fields["email"].lastIndexOf('@');
        //     let lastDotPos = fields["email"].lastIndexOf('.');

        //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        //       formIsValid = false;
        //       errors["email"] = true;
        //     }
        // }  
        
        //Password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = true;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleChange(e, field){         
        let fields = this.state.fields;
        const errors = this.state.errors;
        switch (field) {
            case 'remember_me':
                fields[field] = e.target.checked;   
                break;
            case 'email':
                fields[field] = e.target.value;
                errors["email"] = false;
                this.setState({errors: errors});   
                break;
            case 'password':
                fields[field] = e.target.value;
                errors["password"] = false;
                this.setState({errors: errors});   
                break;
            default:
                fields[field] = e.target.value;
                break;
        }
        this.setState({fields});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({blocking: true});

        if(this.handleValidation()){
            localStorage.clear();
            const username = this.state.fields.email
            const password = this.state.fields.password
            let level = ''
            if (username && password) {
                var x = 0
                this.state.user.forEach(row => {
                    if(username === row.user && password === row.password){
                        level = row.level
                        x++;
                    }
                });
                if (x > 0) {
                    Swal.fire({
                        title: 'Sukses!',
                        icon: 'success',
                        text: 'Login Berhasil.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .then(() => {
                        localStorage.setItem('token', username + password);
                        localStorage.setItem('level', level);
                        localStorage.setItem('username', username);
                        this.props.history.push('/dashboard');
                    })
                } else {
                    Swal.fire({  
                        title: 'Peringatan',  
                        icon: 'warning',
                        text: 'ID atau password anda salah!',  
                    });
                    this.setState({blocking: false});
                }
            } else {
                Swal.fire({  
                    title: 'Peringatan',  
                    icon: 'warning',
                    text: 'Masukkan ID dan password anda.',  
                });
                this.setState({blocking: false});
            }

            // const form = {
            //     username: this.state.fields.email,
            //     password: this.state.fields.password,
            //     idAplikasi: 2
            // }
        //     this.setState({blocking: false});
        //     const uname = 'clientId';
        //     const ps = 'secret';
        //     API011.post('auth/signin?', form, {
        //         auth: {
        //             username: uname,
        //             password: ps
        //         }
        //     })
        //     .then(res => {
        //         // console.log(res)
        //         this.setState({blocking: false});
        //         if(res.data.accessToken.length > 0){                    
        //             Swal.fire({
        //                 title: 'Sukses!',
        //                 icon: 'success',
        //                 text: 'Login Berhasil.',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //             .then(() => {
        //                 API011.defaults.headers['Authorization'] = "Bearer "+res.data.accessToken;
        //                 API012.defaults.headers['Authorization'] = "Bearer "+res.data.accessToken;
        //                 API013.defaults.headers['Authorization'] = "Bearer "+res.data.accessToken;
        //                 API014.defaults.headers['Authorization'] = "Bearer "+res.data.accessToken;
        //                 API015.defaults.headers['Authorization'] = "Bearer "+res.data.accessToken;
        //                 localStorage.setItem('token', res.data.accessToken);
        //                 localStorage.setItem('refreshToken', res.data.refreshToken);
        //                 localStorage.setItem('jti', res.data.jti);
        //                 localStorage.setItem('username', res.data.username);
        //                 localStorage.setItem('data', JSON.stringify(res.data.authorities));                    
        //                 this.props.history.push('/dashboard');
        //             })
        //             // console.log(res);                    
        //         }else{
        //             Swal.fire({  
        //                 title: 'Peringatan',  
        //                 icon: 'warning',  
        //                 text: 'ID anda belum terdaftar.',  
        //             });
        //         }
        //     }).catch((error) => {
        //         if(error && error.response && error.response.status === 401){
        //             Swal.fire({  
        //                 title: 'Peringatan',  
        //                 icon: 'warning',  
        //                 text: 'Terdapat kesalahan ID atau password.',  
        //             });
        //         }else{
        //             Swal.fire({  
        //                 title: 'Error',  
        //                 icon: 'error',  
        //                 text: 'Silakan cek koneksi jaringan internet anda.',  
        //             });
        //         }
        //         // console.log(error.response);            
        //         this.setState({blocking: false});
        //     });
        // }else{
        //     Swal.fire({  
        //         title: 'Peringatan',  
        //         icon: 'warning',
        //         text: 'Masukkan ID dan password anda.',  
        //     });
        //     this.setState({blocking: false});
        }
    }

    render() {
        const { classes } = this.props;
        const { fields } = this.state;
        return (
            <BlockUi tag="div" blocking={this.state.blocking} message="Please wait">
                <Grid container component="main" className={classes.root}>
                <CssBaseline />
                    <Grid item xs={false} sm={4} md={8} className={classes.image} />
                    {/* <Grid style={{borderLeft: '4px solid #2369AF', background: 'url(../../../assets/img/bg_login.png)'}} item xs={12} sm={8} md={4} component={Paper} elevation={6} square> */}
                    <Grid style={{borderLeft: '4px solid #2369AF'}} item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            {/* <img src={corner} alt=""  style={{position: 'absolute',top: '0',marginLeft: '-102px', width: '250px'}}/>
                            <img src={corner_bot} alt=""  style={{position: 'absolute',bottom: '0', right: '0', width: '250px'}}/> */}
                            <div className='col-md-12' style={{textAlign:'center', marginBottom:'15px'}}>
                                <img src='../../../assets/img/title-login2.png' alt="login" />
                            </div>
                            <Typography className={classes.title}>
                                SIGA - <span style={{fontWeight: 'normal'}}>Sistem Informasi Keluarga</span>
                            </Typography>
                            <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                                <TextField
                                    onChange={(e) => this.handleChange(e, 'email')}
                                    value={fields["email"]}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="ID Pengguna"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={this.state.errors["email"]}
                                />
                                <Rtif boolean={this.state.errors["email"]}>
                                    <div className='error_input'><i className="icon-cancel-circle2"></i></div>
                                </Rtif>
                                <TextField
                                    onChange={(e) => this.handleChange(e, 'password')}
                                    value={fields["password"]}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Kata Sandi"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={this.state.errors["password"]}
                                />
                                <Rtif boolean={this.state.errors["password"]}>
                                    <div className='error_input'><i className="icon-cancel-circle2"></i></div>
                                </Rtif>
                                <FormControlLabel className="fs12"
                                    control={<Checkbox onChange={(e) => this.handleChange(e, 'remember_me')} value={fields["remember_me"]} name="remember_me" color="primary"/>}
                                    label={<Typography className="smallCheck">Ingatkan Saya</Typography>}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    // color="primary"
                                    className={classes.submit}
                                    style={{backgroundColor:"#2369AF",fontFamily:"Poppins-Regular", fontSize:"12px", color:"white", padding:"13px"}}
                                >
                                MASUK
                                </Button>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </BlockUi>
        )
    }
}

export default  withStyles(styles, { withTheme: true})(Login); 