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
// Langkah 3: menghitung pajak
// Langkah 4: hitung total

// Langkah 5: menampilkan hasil
document.getElementById("hasil").innerHTML=`
Subtotal: Rp ${subtotal} <br>
`
}