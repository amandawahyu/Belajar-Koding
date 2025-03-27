# Dunia Fantasi

## Objectives

- Mengerti Cara Menggunakan `If-Else`
- Mengerti Logika `If-Else`
- Mengerti Cara Menggunakan Operator Evaluasi `>`, `>=`, `<` dan `<=`

---

## Directions

Dunia Fantasi adalah tempat yang di dalamnya terdapat wahana-wahana untuk memacu adrenalin pengunjung.

Dunia Fantasi punya peraturan sendiri untuk memasuki kawasan nya hingga menaiki suatu wahana yang ada di dalamnya, yaitu:

1. Jika umur pengunjung kurang dari 18 tahun, maka pengunjung tidak diperbolehkan memasuki kawasan Dunia Fantasi dan tampilkan `"Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan Dunia Fantasi!"`
2. Jika uang pengunjung tidak mencapai **50000** dan tinggi nya kurang dari **166cm**, maka tampilkan `"Tinggi kamu kurang [selisih tinggi]cm dan kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat mencoba wahana rumah kaca!"`
3. Jika uang pengunjung tidak mencapai **50000** dan tinggi nya **166cm** keatas, maka tampilkan `"Kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Roller Coaster!"`
4. Jika uang pengunjung **50000** keatas dan tinggi nya kurang dari **166cm**, maka tampilkan `"Tinggi kamu kurang [selisih tinggi]cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat mencoba wahana Rumah Hantu!"`
5. Jika uang pengunjung **50000** keatas dan tinggi nya **166cm** keatas, maka tampilkan `"Yeay kamu dapat menaiki wahana favorit! Yaitu Jetski!"`

## Examples

```js
// CONTOH 1
var nama = "Richard";
var umur = 20;
var tinggi = 180;
var uang = 80000;
// maka output yang dihasilkan adalah "Yeay kamu dapat menaiki wahana favorit! Yaitu Jetski!"

// CONTOH 2
var nama = "Aji";
var umur = 23;
var tinggi = 165;
var uang = 49000;
// maka output yang dihasilkan adalah "Tinggi kamu kurang 1cm dan kamu kurang uang sebanyak 1000 untuk menaiki wahana favorit! Tapi tenang, kamu dapat mencoba wahana Rumah Kaca!"
```

Buatlah algoritma dan programnya!

**RESTRICTION**:
Hanya boleh menggunakan conditional If-Else
