import React from 'react';
import CreatePPLKB from './views/Pages/dallap/sdm/pplkb/create';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const ChangePassword = React.lazy(() => import('./views/Pages/Login/ChangePassword'));
const Icon = React.lazy(() => import('./views/Base/Icon'));
const Table = React.lazy(() => import('./views/Base/Table'));

// YAN KB PELKON
const Pendaftaran = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/index'));
const PendaftaranDaftar = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/daftar'));
const CreateYankbpelkon = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/create/create'));
const LihatYankbpelkon = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/lihat/lihat'));
const EditYankbpelkon = React.lazy(() => import('./views/Pages/yankbpelkon/pendaftaran/edit/edit'));
const RegistrasiYAN = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/index'));
const CreateRegistrasi = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/create/create'));
const EditRegistrasi = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/edit/edit'));
const LihatRegistrasi = React.lazy(() => import('./views/Pages/yankbpelkon/registrasi/lihat/lihat'));
const MutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon'));
const CreateMutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon/create/create'));
const EditMutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon/edit/edit'));
const LihatMutasiAlokon = React.lazy(() => import('./views/Pages/yankbpelkon/mutasiAlokon/lihat/lihat'));

// Dallap Laporan
const DallapLaporan = React.lazy(() => import('./views/Pages/dallap/report/index'))
const DetailDallap = React.lazy(() => import('./views/Pages/dallap/report/detail'))
const DetailDallapProvinsi = React.lazy(() => import('./views/Pages/dallap/report/provinsi'))
const DetailDallapKabupaten = React.lazy(() => import('./views/Pages/dallap/report/kabupaten'))
const BulanTable1 = React.lazy(() => import('./views/Pages/dallap/report/bulanTable1/detail'))
const BulanTable1Provinsi = React.lazy(() => import('./views/Pages/dallap/report/bulanTable1/provinsi'))
const BulanTable1Kabupaten = React.lazy(() => import('./views/Pages/dallap/report/bulanTable1/kabupaten'))
const BulanTable2 = React.lazy(() => import('./views/Pages/dallap/report/bulanTable2/detail'))
const BulanTable2Provinsi = React.lazy(() => import('./views/Pages/dallap/report/bulanTable2/provinsi'))
const BulanTable2Kabupaten = React.lazy(() => import('./views/Pages/dallap/report/bulanTable2/kabupaten'))
const BulanTable3 = React.lazy(() => import('./views/Pages/dallap/report/bulanTable3/detail'))
const BulanTable3Provinsi = React.lazy(() => import('./views/Pages/dallap/report/bulanTable3/provinsi'))
const BulanTable3Kabupaten = React.lazy(() => import('./views/Pages/dallap/report/bulanTable3/kabupaten'))
const TahunTable2ADallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2A/detail'))
const TahunTable2AProvinsiDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2A/provinsi'))
const TahunTable2AKabupatenDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2A/kabupaten'))
const TahunTable2AKabupatenDallapDetail = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2A/detailKabupaten'))
const TahunTable2BDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2B/detail'))
const TahunTable2BProvinsiDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2B/provinsi'))
const TahunTable2BKabupatenDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2B/kabupaten'))
const TahunTable2BKabupatenDallapDetail = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2B/detailKabupaten'))
const TahunTable2CDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2C/detail'))
const TahunTable2CProvinsiDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2C/provinsi'))
const TahunTable2CKabupatenDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2C/kabupaten'))
const TahunTable2CKabupatenDallapDetail = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2C/detailKabupaten'))
const TahunTable2DDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2D/detail'))
const TahunTable2DProvinsiDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2D/provinsi'))
const TahunTable2DKabupatenDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2D/kabupaten'))
const TahunTable2DKabupatenDallapDetail = React.lazy(() => import('./views/Pages/dallap/report/tahunTable2D/detailKabupaten'))
const TahunTable3Dallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable3/detail'))
const TahunTable3ProvinsiDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable3/provinsi'))
const TahunTable3KabupatenDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable3/kabupaten'))
const TahunTable3KabupatenDallapDetail = React.lazy(() => import('./views/Pages/dallap/report/tahunTable3/detailKabupaten'))
const TahunTable4Dallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable4/detail'))
const TahunTable4ProvinsiDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable4/provinsi'))
const TahunTable4KabupatenDallap = React.lazy(() => import('./views/Pages/dallap/report/tahunTable4/kabupaten'))
const TahunTable4KabupatenDallapDetail = React.lazy(() => import('./views/Pages/dallap/report/tahunTable4/detailKabupaten'))


// YANKB Laporan
const YanKBLaporan = React.lazy(() => import('./views/Pages/yankbpelkon/report/index'))
const DetailYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/detail'))
const DetailYankbProvinsi = React.lazy(() => import('./views/Pages/yankbpelkon/report/provinsi'))
const DetailYankbKabupaten = React.lazy(() => import('./views/Pages/yankbpelkon/report/kabupaten'))
const BulanTable1YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable1/detail'))
const BulanTable1ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable1/provinsi'))
const BulanTable1KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable1/kabupaten'))
const BulanTable2YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable2/detail'))
const BulanTable2ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable2/provinsi'))
const BulanTable2KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable2/kabupaten'))
const BulanTable3YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable3/detail'))
const BulanTable3ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable3/provinsi'))
const BulanTable3KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/bulanTable3/kabupaten'))

const TahunTable2YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable2/detail'))
const TahunTable2ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable2/provinsi'))
const TahunTable2KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable2/kabupaten'))
const TahunTable3YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable3/detail'))
const TahunTable3ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable3/provinsi'))
const TahunTable3KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable3/kabupaten'))
const TahunTable4YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4/detail'))
const TahunTable4ProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4/provinsi'))
const TahunTable4KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4/kabupaten'))
const TahunTable4BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4B/detail'))
const TahunTable4BProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4B/provinsi'))
const TahunTable4BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable4B/kabupaten'))
const TahunTable5AYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5A/detail'))
const TahunTable5AProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5A/provinsi'))
const TahunTable5AKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5A/kabupaten'))
const TahunTable5BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5B/detail'))
const TahunTable5BProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5B/provinsi'))
const TahunTable5BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5B/kabupaten'))
const TahunTable5CYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5C/detail'))
const TahunTable5CProvinsiYanb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5C/provinsi'))
const TahunTable5CKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable5C/kabupaten'))
const TahunTable8AYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8A/detail'))
const TahunTable8AProvinsiYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8A/provinsi'))
const TahunTable8AKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8A/kabupaten'))
const TahunTable8BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8B/detail'))
const TahunTable8BProvinsiYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8B/provinsi'))
const TahunTable8BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable8B/kabupaten'))
const TahunTable9AYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable9A/detail'))
const TahunTable9AProvinsiYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable9A/provinsi'))
const TahunTable9AKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable9A/kabupaten'))
const TahunTable9AKabupatenYanKbDetail = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable9A/detailKabupaten'))
const TahunTable10YanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable10/detail'))
const TahunTable10ProvinsiYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable10/provinsi'))
const TahunTable10KabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable10/kabupaten'))
const TahunTable10KabupatenYanKbDetail = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable10/detailKabupaten'))
const TahunTable15AYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15A/detail'))
const TahunTable15AProvinsiYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15A/provinsi'))
const TahunTable15AKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15A/kabupaten'))
const TahunTable15AKabupatenYanKbDetail = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15A/detailKabupaten'))
const TahunTable15BYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15B/detail'))
const TahunTable15BProvinsiYankb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15B/provinsi'))
const TahunTable15BKabupatenYanKb = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15B/kabupaten'))
const TahunTable15BKabupatenYanKbDetail = React.lazy(() => import('./views/Pages/yankbpelkon/report/tahunTable15B/detailKabupaten'))


// Sumber Daya Manusia
const PPLKB = React.lazy(() => import('./views/Pages/dallap/sdm/pplkb'));
const PKB = React.lazy(() => import('./views/Pages/dallap/sdm/pkb/index'));
const CreatePKB = React.lazy(() => import('./views/Pages/dallap/sdm/pkb/create'));
const PPKBD = React.lazy(() => import('./views/Pages/dallap/sdm/ppkbd/index'));
const CreatePPKBD = React.lazy(() => import('./views/Pages/dallap/sdm/ppkbd/create'));
const SubPPKBD = React.lazy(() => import('./views/Pages/dallap/sdm/subPpkbd'));
const KelompokKB = React.lazy(() => import('./views/Pages/dallap/sdm/kelompokKb'));
const PUSDAK = React.lazy(() => import('./views/Pages/dallap/sdm/pusdak'));

// Sarana
const BPKB = React.lazy(() => import('./views/Pages/dallap/sarana/bpkb'));
const PendaftaranMPC = React.lazy(() => import('./views/Pages/dallap/sarana/mpc'));
const PendaftaranMUPEN = React.lazy(() => import('./views/Pages/dallap/sarana/mupen'));
const Penyuluhan = React.lazy(() => import('./views/Pages/dallap/sarana/penyuluhan'));
const RegistrasiMPC = React.lazy(() => import('./views/Pages/dallap/sarana/rog-mpc'));
const RegistrasiMUPEN = React.lazy(() => import('./views/Pages/dallap/sarana/rog-mupen'));

// Sarana
const KelompokBKB = React.lazy(() => import('./views/Pages/dallap/kelompok/kelompok_bkb'));
const RegisterBKB = React.lazy(() => import('./views/Pages/dallap/kelompok/register_bkb'));

// Administrasi
const Umfaskes = React.lazy(() => import('./views/Pages/administrasi/Umfaskes'));

//page latihan
const rekapitulasiDataKeluarga = React.lazy(() => import('./views/Pages/rekapitulasi/rekapitulasiDataKeluarga'));




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/beranda', exact: true, name: 'Beranda', component: Dashboard},
    // { path: '/beranda', name: 'Beranda', component: Dashboard },
    { path: '/chpass', name: 'Ubah Kata Sandi', component: ChangePassword },
    { path: '/icon', name: 'Icon', component: Icon },
    { path: '/table', name: 'Sample Table', component: Table },

    //YAN KB / PELKON
    { path: '/pendaftaran', exact: true, name: 'Pendaftaran Tempat Pelayanan KB', component: Pendaftaran },
    { path: '/pendaftaran/daftar', name: 'Daftar Tempat Pelayanan KB', component: PendaftaranDaftar },
    { path: '/pendaftaran/create', name: 'Tambah', component: CreateYankbpelkon },
    { path: '/pendaftaran/lihat', name: 'lihat', component: LihatYankbpelkon },
    { path: '/pendaftaran/edit', name: 'edit', component: EditYankbpelkon },
    { path: '/register', exact: true, name: 'Register Pelayanan KB', component: RegistrasiYAN },
    { path: '/register/create', name: 'Tambah', component: CreateRegistrasi },
    { path: '/register/edit', name: 'Edit', component: EditRegistrasi },
    { path: '/register/lihat', name: 'Lihat', component: LihatRegistrasi },
    { path: '/alokon', exact: true, name: 'Mutasi Alokon', component: MutasiAlokon },
    { path: '/alokon/create', name: 'Tambah', component: CreateMutasiAlokon },
    { path: '/alokon/edit', name: 'Edit', component: EditMutasiAlokon },
    { path: '/alokon/lihat', name: 'Lihat', component: LihatMutasiAlokon },

    //Sumber Daya Manusia
    { path: '/sdm', exact: true, name: 'Sumber Daya Manusia', component: PPLKB },
    { path: '/sdm/pplkb', exact: true, name: 'Pendaftaran PPLKB', component: PPLKB },
    { path: '/sdm/pplkb/create', name: 'Tambah', component: CreatePPLKB },
    { path: '/sdm/pkb', exact: true, name: 'Pendaftaran PKB/PLKB', component: PKB },
    { path: '/sdm/pkb/create', name: 'Tambah', component: CreatePKB },
    { path: '/sdm/ppkbd', exact: true, name: 'Pendaftaran PPKBD', component: PPKBD },
    { path: '/sdm/ppkbd/create', name: 'Tambah', component: CreatePPKBD },
    { path: '/sdm/subPpkbd', name: 'Pendaftaran Sub PPKBD', component: SubPPKBD },
    { path: '/sdm/kelompokKb', name: 'Pendaftaran Kelompok KB', component: KelompokKB },
    { path: '/sdm/pusdak', name: 'Register PUSDAK', component: PUSDAK },

    //Sarana
    { path: '/sarana', exact: true, name: 'SARANA', component: BPKB },
    { path: '/sarana/bpkb', name: 'Pendaftaran BP KB', component: BPKB },
    { path: '/sarana/penyuluhan', name: 'Register Kegiatan Penyuluhan', component: Penyuluhan },
    { path: '/sarana/mupen', name: 'Pendaftaran MUPEN', component: PendaftaranMUPEN },
    { path: '/sarana/mpc', name: 'Pendaftaran MPC', component: PendaftaranMPC },
    { path: '/sarana/rog-mupen', name: 'Register Operasional Gerak MUPEN', component: RegistrasiMUPEN },
    { path: '/sarana/rog-mpc', name: 'Register Operasional Gerak MPC', component: RegistrasiMPC },

    //Kelompok Kegiatan
    { path: '/kegiatan', exact: true, name: 'Kelompok Kegiatan', component: KelompokBKB },
    { path: '/kegiatan/kelompok_bkb', name: 'Kelompok BKB', component: KelompokBKB },
    { path: '/kegiatan/register_bkb', name: 'Register Kegiatan BKB', component: RegisterBKB },

    //Report
    { path: '/lap/dallap', exact: true, name: 'Laporan Dallap', component: DallapLaporan },
    { path: '/lap/DetailDallap', exact: true, name: 'Detail Laporan Dallap', component: DetailDallap },
    { path: '/lap/DetailDallap/provinsi', exact: true, name: 'Detail Laporan Provinsi', component: DetailDallapProvinsi },
    { path: '/lap/DetailDallap/kabupaten', exact: true, name: 'Detail Laporan Kabupaten', component: DetailDallapKabupaten },

    //DallapReport
    { path: '/lap/DetailDallap/table1', exact: true, name: 'Wilayah institusi KB di lapangan', component: BulanTable1 },
    { path: '/lap/DetailDallap/table1/provinsi', exact: true, name: '', component: BulanTable1Provinsi },
    { path: '/lap/DetailDallap/table1/kabupaten', exact: true, name: '', component: BulanTable1Kabupaten },
    { path: '/lap/DetailDallap/table2', exact: true, name: 'Frekuensi Operasional Mupen Provinsi', component: BulanTable2 },
    { path: '/lap/DetailDallap/table2/provinsi', exact: true, name: '', component: BulanTable2Provinsi },
    { path: '/lap/DetailDallap/table2/kabupaten', exact: true, name: '', component: BulanTable2Kabupaten },
    { path: '/lap/DetailDallap/table3', exact: true, name: 'Frekuensi Operasional Mupen Kab/Kota', component: BulanTable3 },
    { path: '/lap/DetailDallap/table3/provinsi', exact: true, name: '', component: BulanTable3Provinsi },
    { path: '/lap/DetailDallap/table3/kabupaten', exact: true, name: '', component: BulanTable3Kabupaten },
    { path: '/lap/DetailDallap/tahun/table2A', exact: true, name: 'PENYULUH KKBPK (PKB)', component: TahunTable2ADallap },
    { path: '/table2ADallap/provinsi', exact: true, name: 'Detail Laporan Dallap / PENYULUHAN (PKB)', component: TahunTable2AProvinsiDallap },
    { path: '/table2ADallap/kabupaten', exact: true, name: 'Detail Laporan Dallap / PENYULUHAN (PKB)', component: TahunTable2AKabupatenDallap },
    { path: '/table2ADallap/detailKabupaten', exact: true, name: 'Detail Laporan Dallap / PENYULUHAN (PKB)', component: TahunTable2AKabupatenDallapDetail },
    { path: '/lap/DetailDallap/tahun/table2B', exact: true, name: 'Pelatihan Yang Pernah Diikuti Dan Perlengkapan Penyuluhan KKBPK (PKB)', component: TahunTable2BDallap },
    { path: '/table2BDallap/provinsi', exact: true, name: 'Detail Laporan Dallap / Pelatihan Yang Pernah Diikuti Dan Perlengkapan Penyuluhan KKBPK (PKB)', component: TahunTable2BProvinsiDallap },
    { path: '/table2BDallap/kabupaten', exact: true, name: 'Detail Laporan Dallap / Pelatihan Yang Pernah Diikuti Dan Perlengkapan Penyuluhan KKBPK (PKB)', component: TahunTable2BKabupatenDallap },
    { path: '/table2BDallap/detailKabupaten', exact: true, name: 'Detail Laporan Dallap / Pelatihan Yang Pernah Diikuti Dan Perlengkapan Penyuluhan KKBPK (PKB)', component: TahunTable2BKabupatenDallapDetail },
    { path: '/lap/DetailDallap/tahun/table2C', exact: true, name: 'Petugas Lapangan KKBPK (PLKB)', component: TahunTable2CDallap },
    { path: '/table2CDallap/provinsi', exact: true, name: 'Detail Laporan Dallap / Petugas Lapangan KKBPK (PLKB)', component: TahunTable2CProvinsiDallap },
    { path: '/table2CDallap/kabupaten', exact: true, name: 'Detail Laporan Dallap / Petugas Lapangan KKBPK (PLKB)', component: TahunTable2CKabupatenDallap },
    { path: '/table2CDallap/detailKabupaten', exact: true, name: 'Detail Laporan Dallap / Petugas Lapangan KKBPK (PLKB)', component: TahunTable2CKabupatenDallapDetail },
    { path: '/lap/DetailDallap/tahun/table2D', exact: true, name: 'Pelatihan Yang Pernah Diikuti Dan Perlengkapan Petugas Lapangan Kkbpk (Plkb)', component: TahunTable2DDallap },
    { path: '/table2DDallap/provinsi', exact: true, name: 'Detail Laporan Dallap / Pelatihan Yang Pernah Diikuti Dan Perlengkapan Petugas Lapangan Kkbpk (Plkb)', component: TahunTable2DProvinsiDallap },
    { path: '/table2DDallap/kabupaten', exact: true, name: 'Detail Laporan Dallap / Pelatihan Yang Pernah Diikuti Dan Perlengkapan Petugas Lapangan Kkbpk (Plkb)', component: TahunTable2DKabupatenDallap },
    { path: '/table2DDallap/detailKabupaten', exact: true, name: 'Detail Laporan Dallap / Pelatihan Yang Pernah Diikuti Dan Perlengkapan Petugas Lapangan Kkbpk (Plkb)', component: TahunTable2DKabupatenDallapDetail },
    { path: '/lap/DetailDallap/tahun/table3', exact: true, name: 'Pembantu Pembina Keluarga Berencana Desa (Ppkbd)', component: TahunTable3Dallap },
    { path: '/table3Dallap/provinsi', exact: true, name: 'Detail Laporan Dallap / Pembantu Pembina Keluarga Berencana Desa (Ppkbd)', component: TahunTable3ProvinsiDallap },
    { path: '/table3Dallap/kabupaten', exact: true, name: 'Detail Laporan Dallap / Pembantu Pembina Keluarga Berencana Desa (Ppkbd)', component: TahunTable3KabupatenDallap },
    { path: '/table3Dallap/detailKabupaten', exact: true, name: 'Detail Laporan Dallap / Pembantu Pembina Keluarga Berencana Desa (Ppkbd)', component: TahunTable3KabupatenDallapDetail },
    { path: '/lap/DetailDallap/tahun/table4', exact: true, name: 'SUB Pembantu Pembina Keluarga Berencana Desa (SUB Ppkbd)', component: TahunTable4Dallap },
    { path: '/table4Dallap/provinsi', exact: true, name: 'Detail Laporan Dallap / SUB Pembantu Pembina Keluarga Berencana Desa (SUB Ppkbd)', component: TahunTable4ProvinsiDallap },
    { path: '/table4Dallap/kabupaten', exact: true, name: 'Detail Laporan Dallap / SUB Pembantu Pembina Keluarga Berencana Desa (SUB Ppkbd)', component: TahunTable4KabupatenDallap },
    { path: '/table4Dallap/detailKabupaten', exact: true, name: 'Detail Laporan Dallap / SUB Pembantu Pembina Keluarga Berencana Desa (SUB Ppkbd)', component: TahunTable4KabupatenDallapDetail },    
    //YankbReport
    { path: '/lap/DetailYankb/table1', exact: true, name: 'Cakupan tempat pelayanan KB', component: BulanTable1YanKb },
    { path: '/lap/DetailYankb/table1/provinsi', exact: true, name: '', component: BulanTable1ProvinsiYanb },
    { path: '/lap/DetailYankb/table1/kabupaten', exact: true, name: '', component: BulanTable1KabupatenYanKb },
    { path: '/lap/DetailYankb/bulan/table2', exact: true, name: 'Hasil Pelayanan KB Baru Dan Daftar Ulang', component: BulanTable2YanKb },
    { path: '/lap/DetailYankb/bulan/table2/provinsi', exact: true, name: '', component: BulanTable2ProvinsiYanb },
    { path: '/lap/DetailYankb/bulan/table2/kabupaten', exact: true, name: '', component: BulanTable2KabupatenYanKb },
    { path: '/lap/DetailYankb/bulan/table3', exact: true, name: 'Pencapaian Peserta KB Baru Berdasarkan Metode Kontrasepsi', component: BulanTable3YanKb },
    { path: '/lap/DetailYankb/bulan/table3/provinsi', exact: true, name: '', component: BulanTable3ProvinsiYanb },
    { path: '/lap/DetailYankb/bulan/table3/kabupaten', exact: true, name: '', component: BulanTable3KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table2', exact: true, name: 'Tempat pelayanan KB Pemerintah', component: TahunTable2YanKb },
    { path: '/lap/DetailYankb/tahun/table2/provinsi', exact: true, name: '', component: TahunTable2ProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table2/kabupaten', exact: true, name: '', component: TahunTable2KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table3', exact: true, name: 'Tempat pelayanan KB Swasta', component: TahunTable3YanKb },
    { path: '/lap/DetailYankb/tahun/table3/provinsi', exact: true, name: '', component: TahunTable3ProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table3/kabupaten', exact: true, name: '', component: TahunTable3KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table4', exact: true, name: 'Tempat pelayanan KB Pemerintah Berdasarkan Kepemilikan', component: TahunTable4YanKb },
    { path: '/lap/DetailYankb/tahun/table4/provinsi', exact: true, name: '', component: TahunTable4ProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table4/kabupaten', exact: true, name: '', component: TahunTable4KabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table4B', exact: true, name: 'Tempat pelayanan KB Swasta Berdasarkan Kepemilikan', component: TahunTable4BYanKb },
    { path: '/lap/DetailYankb/tahun/table4B/provinsi', exact: true, name: '', component: TahunTable4BProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table4B/kabupaten', exact: true, name: '', component: TahunTable4BKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table5A', exact: true, name: 'Tempat pelayanan KB Swasta Berdasarkan Kepemilikan', component: TahunTable5AYanKb },
    { path: '/lap/DetailYankb/tahun/table5A/provinsi', exact: true, name: '', component: TahunTable5AProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table5A/kabupaten', exact: true, name: '', component: TahunTable5AKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table5B', exact: true, name: 'YANKB Laporan Tempat Pelayanan KB Pemerintah Berdasarkan Status Kerjasama Dengan BPJS Kesehatan', component: TahunTable5BYanKb },
    { path: '/lap/DetailYankb/tahun/table5B/provinsi', exact: true, name: '', component: TahunTable5BProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table5B/kabupaten', exact: true, name: '', component: TahunTable5BKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table5C', exact: true, name: 'YANKB Laporan Tempat Pelayanan KB Pemerintah Berdasarkan Status Kerjasama Dengan BPJS Kesehatan', component: TahunTable5CYanKb },
    { path: '/lap/DetailYankb/tahun/table5C/provinsi', exact: true, name: '', component: TahunTable5CProvinsiYanb },
    { path: '/lap/DetailYankb/tahun/table5C/kabupaten', exact: true, name: '', component: TahunTable5CKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table8A', exact: true, name: 'Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB', component: TahunTable8AYanKb },
    { path: '/table8A/provinsi', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB', component: TahunTable8AProvinsiYankb },
    { path: '/table8A/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Klasifikasi Pelayanan KB', component: TahunTable8AKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table8B', exact: true, name: 'Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB', component: TahunTable8BYanKb },
    { path: '/table8B/provinsi', exact: true, name: 'Detail Laporan YAN KB / Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB', component: TahunTable8BProvinsiYankb },
    { path: '/table8B/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Faskes KB Berdasarkan Status Kerjasama Dengan BPJS Kesehatan Dan Klasifikasi KB', component: TahunTable8BKabupatenYanKb },
    { path: '/lap/DetailYankb/tahun/table9A', exact: true, name: 'Sarana Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB', component: TahunTable9AYanKb },
    { path: '/table9A/provinsi', exact: true, name: 'Detail Laporan YAN KB / Sarana Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB', component: TahunTable9AProvinsiYankb },
    { path: '/table9A/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Sarana Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB', component: TahunTable9AKabupatenYanKb },
    { path: '/table9A/detailKabupaten', exact: true, name: 'Detail Laporan YAN KB / Sarana Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB', component: TahunTable9AKabupatenYanKbDetail },
    { path: '/lap/DetailYankb/tahun/table10', exact: true, name: 'Tenaga Pada Tempat Pelayanan KB', component: TahunTable10YanKb },
    { path: '/table10/provinsi', exact: true, name: 'Detail Laporan YAN KB / Tenaga Pada Tempat Pelayanan KB', component: TahunTable10ProvinsiYankb },
    { path: '/table10/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Tenaga Pada Tempat Pelayanan KB', component: TahunTable10KabupatenYanKb },
    { path: '/table10/detailKabupaten', exact: true, name: 'Detail Laporan YAN KB / Tenaga Pada Tempat Pelayanan KB', component: TahunTable10KabupatenYanKbDetail },
    { path: '/lap/DetailYankb/tahun/table15A', exact: true, name: 'Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Miskin', component: TahunTable15AYanKb },
    { path: '/table15A/provinsi', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Miskin', component: TahunTable15AProvinsiYankb },
    { path: '/table15A/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Miskin', component: TahunTable15AKabupatenYanKb },
    { path: '/table15A/detailKabupaten', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Miskin', component: TahunTable15AKabupatenYanKbDetail },
    { path: '/lap/DetailYankb/tahun/table15B', exact: true, name: 'Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan, Dan Kepulauan', component: TahunTable15BYanKb },
    { path: '/table15B/provinsi', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan, Dan Kepulauan', component: TahunTable15BProvinsiYankb },
    { path: '/table15B/kabupaten', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan, Dan Kepulauan', component: TahunTable15BKabupatenYanKb },
    { path: '/table15B/detailKabupaten', exact: true, name: 'Detail Laporan YAN KB / Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan, Dan Kepulauan', component: TahunTable15BKabupatenYanKbDetail },

    { path: '/lap/yankb', exact: true, name: 'Laporan YAN KB', component: YanKBLaporan },
    { path: '/lap/DetailYankb', exact: true, name: 'Detail Laporan YAN KB', component: DetailYankb },
    { path: '/lap/DetailYankb/provinsi', exact: true, name: 'Laporan YAN KB Provinsi', component: DetailYankbProvinsi },
    { path: '/lap/DetailYankb/kabupaten', exact: true, name: 'Laporan YAN KB Kabupaten', component: DetailYankbKabupaten },


    //Administrasi
    { path: '/adm/umfaskes', exact: true, name: 'User Manajemen Faskes', component: Umfaskes },

    //page latihan
    { path: '/form/rekapitulasi', exact: true, name: 'Rekapitulasi Data Keluarga', component: rekapitulasiDataKeluarga },
];

export default routes;