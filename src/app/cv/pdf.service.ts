import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Injectable({
  providedIn: 'root'
})
export class PdfService {
  loader = false;
  constructor() { }

  async captureScreen(data: HTMLElement) {
    this.loader = true;
    const pdf = await this.shared(data);
    this.loader = false;
    window.open(pdf.output('bloburl' as any, { filename: 'cv.pdf' }), '_blank');
  }

  async downloadPDF(data: HTMLElement) {
    this.loader = true;
    const pdf = await this.shared(data);
    this.loader = false;
    pdf.save('cv.pdf'); // Generated PDF
  }

  async shared(data: HTMLElement) {
    const canvas = await html2canvas(data, { scale: 1.7, scrollX: -8.5});
    // Few necessary setting options
    const imgWidth =  210;
    const pageHeight =  297 + 2.5;
    // const imgHeight = canvas.height * imgWidth / canvas.width;

    const contentDataURL: string = canvas.toDataURL('image/JPEG', 0.95);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'A4',
      compress: true
    });

    pdf.setProperties({
      title: 'CV Mourabit mohamed',
      subject: 'CV',
      author: 'Mourabit mohamed',
      keywords: 'developpeur, full stack, angular, asp, asp core, laravel, html, js , css',
      creator: 'Mourabit mohamed'
    });

    pdf.addImage(contentDataURL, 'JPEG', 0, 0, imgWidth, pageHeight, '', 'SLOW' as any, 0);

    return pdf;
  }

}
