import { jsPDF } from 'jspdf';
import dom2CanvasData from 'library/canvas/dom2Canvas';

async function generatePDF() {
  const invoiceDOM = document.querySelectorAll('.invoice-page');
  const dataPromise: Promise<string>[] = [];
  const doc = new jsPDF();

  invoiceDOM.forEach((invoice: Element) => {
    dataPromise.push(
      dom2CanvasData(invoice as HTMLElement)
    );
  });

  const invoicePNGList = await Promise.all(dataPromise);
  for(const invoicePNG of invoicePNGList) {
    doc.addImage(invoicePNG, "PNG", 0, 0, 210, 297);
  }

  doc.save('risetron-invoice.pdf');
}

export default generatePDF;