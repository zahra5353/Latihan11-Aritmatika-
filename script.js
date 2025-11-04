function hitung() {
  // Tab to edit

  // menampung nilai harga
  let harga = Number(document.getElementById("harga").value)
  
  // menampung nilai jumlah
  let jumlah = Number(document.getElementById("jumlah").value)
  
  //. menampung nilai diskon
let diskon = Number(document.getElementById("diskon").value)

// Langkah 1: hitung subtotal
let subtotal = harga * jumlah

// Langkah 2: menghitung diskon
let potongan = subtotal * (diskon / 100 )

// Langkah 3: menghitung pajak, misal 11%
let pajak = subtotal * (11/100)

// Langkah 4: hitung total
let total = subtotal - potongan + pajak;

// langkah 5: menampilkan hasil
document.getElementById("hasil").innerHTML = `
Subtotal: Rp (${subtotal}%): -Rp ${potongan} <br>
Diskon (${diskon}%): -Rp ${potongan} <br>
Pajak (11%) : +Rp ${pajak} <br>
Total bayar : Rp ${total}
`
}