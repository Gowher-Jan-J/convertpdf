import PDFDocument from 'pdfkit'
import fs from'fs'
// const data = [
//     { name: 'Kowsi', age: 22, city: 'Erode' },
//     { name: 'Niki', age: 23, city: 'Chennai' },
//     { name: 'Abi', age: 22, city: 'Erode' },
//     { name: 'Parkavi', age: 23, city: 'Namakkal' },
//     { name: 'Bhuvi', age: 21, city: 'Bhavani' },
// ];
// const doc = new PDFDocument();
// doc.pipe(fs.createWriteStream('data.pdf'));
// const headers = ['Name', 'Age', 'City'];
// const columnWidths = [100, 50, 100];
// headers.forEach((header, index) => {
//     doc
//     .fontSize(12)
//     .font('Helvetica-Bold')
//       .text(header, index * 150, 50, { width: 150, align: 'left' });
// });
// data.forEach((row, rowIndex) => {
//     Object.keys(row).forEach((key, columnIndex) => {
//     const value = row[key];
//     doc
//         .fontSize(10)
//         .font('Helvetica')
//         .text(value.toString(), columnIndex * 150, 70 + rowIndex * 20, {
//         width: 150,
//         align: 'left',
//         });
//     });
// });

// doc.end()

const myArr = [
{
    studenName: "arshi",
    studenClass: 8,
    studenSection: "a"
},
{
    studenName: "saha",
    studenClass: 5,
    studenSection: "b"
},
{
    studenName: "hasi",
    studenClass: 7,
    studenSection: "a"
},
{
    studenName: "noor",
    studenClass: 9,
    studenSection: "a"
}
];

const doc = new PDFDocument();

for (const obj of myArr) {
doc.text(`Student Name: ${obj.studenName}`);
doc.text(`Student Class: ${obj.studenClass}`);
doc.text(`Student Section: ${obj.studenSection}`);
doc.moveDown();
}
doc.pipe(fs.createWriteStream('output.pdf'));
doc.end();

