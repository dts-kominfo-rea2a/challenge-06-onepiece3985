// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fungsinya)=>{
  const fs = require('fs');
  let tampung=[];
  let darifile=[];
  const kataKedua=(katakata)=>{
    let hasil = katakata.split(" ");
    return hasil[1];
  }
  fs.readFile(file1,"utf-8",(err,data)=>{
    darifile=JSON.parse(data);
    tampung.push(kataKedua(darifile.message));
    fs.readFile(file2,"utf-8",(err,data)=>{
      darifile=JSON.parse(data);
      tampung.push(kataKedua(darifile[0].message));
      fs.readFile(file3,"utf-8",(err,data)=>{
        darifile=JSON.parse(data);
        tampung.push(kataKedua(darifile[0].data.message));
        fungsinya(err, tampung);
      });
    });
  });
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
