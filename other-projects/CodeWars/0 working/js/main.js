class ArticleManager {
  constructor(articleText, options = {}) {
      if (typeof articleText !== 'string') {
          throw new Error("Article text must be a string.");
      }

      const { wordsPerLine = 12, linesPerPage = 20, paymentStructure = {} } = options;

      if (typeof wordsPerLine !== 'number' || typeof linesPerPage !== 'number') {
          throw new Error("Words per line and lines per page must be numbers.");
      }
      if (typeof paymentStructure !== 'object' || Array.isArray(paymentStructure)) {
          throw new Error("Payment structure must be an object.");
      }

      this.articleText = articleText.trim();
      this.wordsPerLine = wordsPerLine;
      this.linesPerPage = linesPerPage;
      this.paymentStructure = paymentStructure;
      this.pages = [];
      this.debug = options.debug || false;
  }

  log(message) {
      if (this.debug) {
          console.debug(message);
      }
  }

  *splitWords() {
      const words = this.articleText.split(/\s+/);
      for (let i = 0; i < words.length; i++) {
          yield words[i];
      }
  }

  splitIntoPages() {
      const lines = [];
      let line = [];
      let wordCount = 0;

      for (const word of this.splitWords()) {
          wordCount++;
          line.push(word);
          if (line.length === this.wordsPerLine) {
              lines.push(line.join(" "));
              line = [];
          }
      }

      if (line.length > 0) {
          lines.push(line.join(" "));
      }

      this.pages = [];
      let page = [];
      for (let i = 0; i < lines.length; i++) {
          page.push(lines[i]);
          if (page.length === this.linesPerPage) {
              this.pages.push(page.join("\n"));
              page = [];
          }
      }

      if (page.length > 0) {
          this.pages.push(page.join("\n"));
      }

      this.log(`Processed ${wordCount} words into ${this.pages.length} pages.`);
  }

  calculatePayment() {
      const totalPages = this.pages.length;
      let payment = 0;

      for (const [pageCount, amount] of Object.entries(this.paymentStructure)) {
          const [min, max] = pageCount.split("-").map(Number);
          if (totalPages >= min && (max === undefined || totalPages <= max)) {
              payment = amount;
              break;
          }
      }

      this.log(`Calculated payment: $${payment} for ${totalPages} pages.`);
      return payment;
  }

  displayPages() {
      const payment = this.calculatePayment();

      console.log(`Total Pages: ${this.pages.length}`);
      console.log(`Payment Due: $${payment}\n`);

      this.pages.forEach((page, index) => {
          console.log(`Page ${index + 1}:\n${page}\n`);
      });
  }

  processArticle() {
      try {
          this.splitIntoPages();
          this.displayPages();
      } catch (error) {
          console.error("Error processing article:", error.message);
      }
  }
}

// Example Usage
const articleText = `Lorem ipsum dolor sit amet...` // Replace with actual article content
const options = {
  wordsPerLine: 12,
  linesPerPage: 20,
  paymentStructure: {
      "0-0": 0,
      "1-2": 30,
      "3-4": 60,
      "5-": 100
  },
  debug: true
};

const articleManager = new ArticleManager(articleText, options);
articleManager.processArticle();
