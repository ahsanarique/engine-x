declare module 'html2pdf.js' {
    interface PdfOptions {
      margin?: number | number[];
      filename?: string;
      image?: { type: string; quality: number };
      html2canvas?: { scale: number };
      jsPDF?: { unit: string; format: string; orientation: string };
      // Add other options as needed
    }
  
    interface Pdf {
      save(): void;
      // Add other methods as needed
    }
  
    function html2pdf(): {
      from(element: HTMLElement): { set(options: PdfOptions): Pdf };
      // Add other methods as needed
    }
  
    export = html2pdf;
  }