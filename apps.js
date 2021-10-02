/*
console.log("Hello");
Odev adımları:
1. "npm init" ile package jSOn dosyaları oluştur
2.  package.json dosyasında main satırının hemen altına >"type": "module",< satırını ekle
3. axios veya hangi paketi kullanacaksan commandda bu paketi yükle
örn: "npm i axios"
4.fonksiyon parantezi içerisine hangi sayı girilirse, o sayıya karşılık gelen id ve ona tanımlanan postlar gelecektir.
*/

import getData from "./cagirbeni.js";
getData(2);