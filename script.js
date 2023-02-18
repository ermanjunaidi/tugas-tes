function tambah() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = angka1 + angka2;
    document.getElementById("hasil").innerHTML = `Hasil penjumlahan: ${hasil.toFixed(2)}`;
}

function kurang() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = angka1 - angka2;
    document.getElementById("hasil").innerHTML = `Hasil pengurangan: ${hasil.toFixed(2)}`;
}
function kali() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = angka1 * angka2;
    document.getElementById("hasil").innerHTML = `Hasil perkalian: ${hasil.toFixed(2)}`;
}

function bagi() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    if (angka2 == 0) {
        document.getElementById("hasil").innerHTML = `Tidak dapat melakukan operasi pembagian dengan nol.`;
    } else {
        let hasil = angka1 / angka2;
        document.getElementById("hasil").innerHTML = `Hasil pembagian: ${hasil.toFixed(2)}`;
    }
}
