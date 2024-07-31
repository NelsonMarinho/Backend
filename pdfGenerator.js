const PDFDocument = require('pdfkit');
const fs = require('fs');

const generateReport = (meals, month, year) => {
  const doc = new PDFDocument();
  const filePath = `./reports/Report_${month}_${year}.pdf`;

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text(`Relatório de Refeições - ${month}/${year}`, { align: 'center' });

  doc.moveDown();
  doc.fontSize(14).text('Detalhamento das refeições fornecidas:', { underline: true });

  meals.forEach((meal) => {
    doc.moveDown();
    doc.text(`Data: ${meal.date}`);
    doc.text(`Almoços: ${meal.lunch}`);
    doc.text(`Jantas: ${meal.dinner}`);
    doc.text(`Lanches: ${meal.snack}`);
    doc.text(`Refrigerantes: ${meal.soda}`);
  });

  doc.end();

  return filePath;
};

module.exports = { generateReport };
