//const hargaBeli = document.getElementById("good_price").value;

// const hargaBarang = () => { 
//     const goodsPrice = document.getElementById("goods_price").value;
//     document.getElementById("text_goods_price").innerHTML = goodsPrice;
// }

const fobTotal = () => {
    // all values
    const hargaBeli  = document.getElementById('goods_price').value;
    const biayaOngkir  = document.getElementById('delivery_cost').value;
    const asuransi  = document.getElementById('insurance_cost').value;
    const kurs = 15000;
    const tarifBM = 0.075;
    const tarifPPN = 0.1;

    //Nilai Pabean
    // const np = (hargaBeli + biayaOngkir + asuransi) * kurs; //wrong
    // const np = (hargaBeli * kurs) + (biayaOngkir * kurs) + (asuransi * kurs); //correct
    const np = hargaBeli * kurs + biayaOngkir * kurs + asuransi * kurs; //correct
    // const np = hargaBeli + biayaOngkir + asuransi * kurs; //wrong

    //Bea Masuk
    const bm = tarifBM * np;

    //Nilai Import
    const ni = np + bm;

    //PPN
    const ppn = tarifPPN * ni;

    //total
    const total =  Math.ceil(bm + ppn);

    // put in text
    document.getElementById("text_goods_price").innerHTML = `USD ${hargaBeli}`;
    document.getElementById("text_delivery_cost").innerHTML = `USD ${biayaOngkir}`;
    document.getElementById("text_insurance_cost").innerHTML = `USD ${asuransi}`;
    document.getElementById("text_nilai_pabean").innerHTML = `Rp ${np}`;
    document.getElementById("text_bea_masuk").innerHTML = `Rp ${bm}`;
    document.getElementById("text_nilai_import").innerHTML = `Rp ${ni}`;
    document.getElementById("text_ppn").innerHTML = `Rp ${ppn}`;
    document.getElementById("text_total").innerHTML = `Rp ${total}`;
}

