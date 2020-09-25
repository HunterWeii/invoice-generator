import html2canvas from 'html2canvas';

async function dom2CanvasData( invoice: HTMLElement ) {
  const canvas = await html2canvas(invoice, { scale: 2.5 });
  return canvas.toDataURL();
}

export default dom2CanvasData;