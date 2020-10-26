import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8000/',
    baseURL: 'http://dev2.multisoft.co.id:10012/',
    // baseURL:'http://mutasi-alokon-bkkbn.apps.tkp.platform.lintasarta.net/',
    headers: {
        // Authorization: localStorage.getItem('token') !== 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
        // Authorization: 'Basic ' +btoa(username + ':' + password),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'application/json',
    },
    responseType: 'json'
});