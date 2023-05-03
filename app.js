import PDFDocument from 'pdfkit'
import fs from'fs'


const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Alice', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' },
  ];
  
  // Set up the PDF document
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('data.pdf'));
  
  // Define table headers
  const headers = ['Name', 'Age', 'City'];
  
  // Define column widths
  const columnWidths = [100, 50, 100];
  
  // Add table headers to PDF document
  headers.forEach((header, index) => {
    doc
      .fontSize(12)
      .font('Helvetica-Bold')
      .text(header, index * 150, 50, { width: 150, align: 'left' });
  });
  
  // Add table rows from the array of objects
  data.forEach((row, rowIndex) => {
    Object.keys(row).forEach((key, columnIndex) => {
      const value = row[key];
      doc
        .fontSize(10)
        .font('Helvetica')
        .text(value.toString(), columnIndex * 150, 70 + rowIndex * 20, {
          width: 150,
          align: 'left',
        });
    });
  });
  
  doc.end()
