// script.js

function submitForm() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var noTelpon = document.getElementById('noTelpon').value;
    var pesan = document.getElementById('Pesan').value;

    if (nama === '' || email === '' || noTelpon === '' || pesan === '') {
        alert('Semua kolom harus diisi!');
        return;
    }

    console.log('Data Formulir:');
    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Nomor Telepon:', noTelpon);
    console.log('Pesan:', pesan);

    document.getElementById('hubungi-kami').reset();
}
