// // Class Kendaraan sebagai superclass
// class Kendaraan {
//   constructor(merek, model, tahun) {
//     this.merek = merek;
//     this.model = model;
//     this.tahun = tahun;
//   }

//   infoKendaraan() {
//     return `Kendaraan: ${this.merek} ${this.model}, Tahun: ${this.tahun}`;
//   }
// }

// class Mobil extends Kendaraan {
//   constructor(merek, model, tahun, kapasitasPenumpang, mesin) {
//     super(merek, model, tahun);
//     this.kapasitasPenumpang = kapasitasPenumpang;
//     this.mesin = mesin;
//   }

//   infoMobil() {
//     return `${this.infoKendaraan()}, Kapasitas Penumpang: ${this.kapasitasPenumpang}, ${this.mesin.infoMesin()}`;
//   }
// }

// class Motor extends Kendaraan {
//   constructor(merek, model, tahun, jenisMotor, mesin) {
//     super(merek, model, tahun);
//     this.jenisMotor = jenisMotor;
//     this.mesin = mesin;
//   }

//   infoMotor() {
//     return `${this.infoKendaraan()}, Jenis Motor: ${this.jenisMotor}, ${this.mesin.infoMesin()}`;
//   }
// }

// class Mesin {
//   constructor(jenis, tenagaKuda) {
//     this.jenis = jenis;
//     this.tenagaKuda = tenagaKuda;
//   }

//   infoMesin() {
//     return `Jenis Mesin: ${this.jenis}, Tenaga: ${this.tenagaKuda} HP`;
//   }
// }

// class Membership {
//   constructor(namaMember, tipeMembership) {
//     this.namaMember = namaMember;
//     this.tipeMembership = tipeMembership;
//   }

//   diskonMember() {
//     switch (this.tipeMembership) {
//       case 'Gold':
//         return 0.15;
//       case 'Silver':
//         return 0.1;
//       case 'Bronze':
//         return 0.05;
//       default:
//         return 0;
//     }
//   }

//   infoMember() {
//     return `Member: ${this.namaMember} (${this.tipeMembership})`;
//   }
// }

// class Rental {
//   constructor(kendaraan, member, lamaHari) {
//     this.kendaraan = kendaraan;
//     this.member = member;
//     this.tanggalRental = new Date();
//     this.lamaHari = lamaHari;
//   }

//   hitungTotal() {
//     let tarifHarian = 0;

//     if (this.kendaraan instanceof Mobil) {
//       tarifHarian = 100000;
//     } else if (this.kendaraan instanceof Motor) {
//       tarifHarian = 50000;
//     }

//     let totalHarga = tarifHarian * this.lamaHari;

//     let diskon = totalHarga * this.member.diskonMember();

//     totalHarga -= diskon;

//     return totalHarga;
//   }

//   infoRental() {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const tanggalRentalFormatted = this.tanggalRental.toLocaleDateString('id-ID', options);
//     return `${this.kendaraan.infoKendaraan()} ${this.member.infoMember()} Tanggal Rental: ${tanggalRentalFormatted} Lama Rental: ${this.lamaHari} hari Total Harga: Rp ${this.hitungTotal().toLocaleString('id-ID')}`;
//   }
// }

// const mesinMobil = new Mesin('Diesel', 120);
// const mesinMotor = new Mesin('Bensin', 15);

// const mobil = new Mobil('Toyota', 'Avanza', 2021, 7, mesinMobil);
// const motor = new Motor('Honda', 'Vario', 2020, 'Matic', mesinMotor);

// // Buat membership
// const member = new Membership('Siti', 'Silver');

// const rentalMobil = new Rental(mobil, member, 3);
// console.log(rentalMobil.infoRental());

// const rentalMotor = new Rental(motor, member, 2);
// console.log(rentalMotor.infoRental());

// class Barang {
//   constructor(namaBarang, harga) {
//     this.namaBarang = namaBarang;
//     this.harga = harga;
//   }

//   getInfoBarang() {
//     return `${this.namaBarang}: Rp ${new Intl.NumberFormat('id-ID').format(this.harga)}`;
//   }
// }

// class Keranjang {
//   constructor() {
//     this.daftarBarang = [];
//   }

//   tambahBarang(barang) {
//     this.daftarBarang.push(barang);
//   }

//   totalHarga() {
//     return this.daftarBarang.reduce((total, barang) => total + barang.harga, 0);
//   }

//   getDaftarBarang() {
//     return this.daftarBarang.map((barang) => barang.getInfoBarang()).join('\n');
//   }
// }

// class Membership {
//   constructor(namaMember, tipeMembership) {
//     this.namaMember = namaMember;
//     this.tipeMembership = tipeMembership;
//   }

//   diskonMember() {
//     if (this.tipeMembership === 'Gold') {
//       return 0.2;
//     } else if (this.tipeMembership === 'Silver') {
//       return 0.1;
//     } else if (this.tipeMembership === 'Bronze') {
//       return 0.05;
//     } else {
//       return 0;
//     }
//   }

//   getInfoMember() {
//     return `${this.namaMember} (${this.tipeMembership})`;
//   }
// }

// class Transaksi {
//   constructor(keranjang, member) {
//     this.keranjang = keranjang;
//     this.member = member;
//   }

//   hitungTotalAkhir() {
//     const totalHarga = this.keranjang.totalHarga();
//     const diskon = totalHarga * this.member.diskonMember();
//     const totalAkhir = totalHarga - diskon;
//     return totalAkhir;
//   }

//   printStruk() {
//     const totalAkhir = this.hitungTotalAkhir();
//     console.log(`Member: ${this.member.getInfoMember()}`);
//     console.log(`Daftar Barang:\n${this.keranjang.getDaftarBarang()}`);
//     console.log(`Total Akhir: Rp ${new Intl.NumberFormat('id-ID').format(totalAkhir)}`);
//   }
// }

// const sepatu = new Barang('Sepatu', 500000);
// const tas = new Barang('Tas', 300000);

// const keranjang = new Keranjang();
// keranjang.tambahBarang(sepatu);
// keranjang.tambahBarang(tas);

// const member = new Membership('Budi', 'Gold');

// const transaksi = new Transaksi(keranjang, member);

// transaksi.printStruk();

// Class Dompet
class Dompet {
  constructor(saldoAwal = 500000) {
    this.saldo = saldoAwal;
  }

  topUp(nominal) {
    this.saldo += nominal;
    console.log(`Top-up Rp ${new Intl.NumberFormat('id-ID').format(nominal)} berhasil!`);
  }

  bayar(nominal) {
    if (this.saldo >= nominal) {
      this.saldo -= nominal;
      console.log(`Pembayaran Rp ${new Intl.NumberFormat('id-ID').format(nominal)} berhasil!`);
    } else {
      console.log('Saldo tidak mencukupi!');
    }
  }

  cekSaldo() {
    console.log(`Saldo saat ini: Rp ${new Intl.NumberFormat('id-ID').format(this.saldo)},00`);
  }
}

class Transaksi {
  constructor(dompet, nominal, jenisTransaksi) {
    this.dompet = dompet;
    this.nominal = nominal;
    this.jenisTransaksi = jenisTransaksi;
    this.tanggalTransaksi = new Date();
  }

  infoTransaksi() {
    const tanggal = this.tanggalTransaksi.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const waktu = this.tanggalTransaksi.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log(`${this.jenisTransaksi} Rp ${new Intl.NumberFormat('id-ID').format(this.nominal)} pada ${tanggal} pukul ${waktu}`);
  }
}

class DompetPremium extends Dompet {
  topUp(nominal) {
    const bonus = nominal * 0.05;
    super.topUp(nominal + bonus);
    console.log(`Bonus Rp ${new Intl.NumberFormat('id-ID').format(bonus)} diterima!`);
  }
}

const dompet = new DompetPremium();
dompet.cekSaldo();

dompet.topUp(100000);
dompet.cekSaldo();

dompet.bayar(200000);
dompet.cekSaldo();

const transaksiPembayaran = new Transaksi(dompet, 200000, 'Pembayaran');
transaksiPembayaran.infoTransaksi();
