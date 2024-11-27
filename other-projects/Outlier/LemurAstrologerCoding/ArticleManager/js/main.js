class ArticleManager {
    constructor(articleText) {
      this.articleText = articleText;
      this.pages = [];
      this.pageLines = [];
      this.paidPages = 0;
      this.words = 0;
    }
  
    splitIntoPages() {
      const wordsPerLine = 12;
      const linesPerPage = 20;
  
      this.words = this.articleText.trim().split(/\s+/);
      console.log(this.words.length);
      
  
      const lines = [];
      for (let i = 0; i < this.words.length; i += wordsPerLine) {
        lines.push(this.words.slice(i, i + wordsPerLine).join(" "));
      }
  
      this.pages = [];
      for (let i = 0; i < lines.length; i += linesPerPage) {
        this.pages.push(lines.slice(i, i + linesPerPage).join("\n"));
      }
    }
  
    calculatePayment() {
      this.paidPages = Math.floor(this.words.length/240);      
      if (this.paidPages < 1) {
        return 0;
      } else if (this.paidPages >= 2 && this.paidPages <= 4) {
        return 50;
      } else {
        return 100;
      }
    }

    displayPages() {
        const payment = this.calculatePayment();
        console.log(`Total Pages: ${this.pages.length}`);
        console.log(`Paid Pages: ${this.paidPages || 0}`); 
        console.log(`Payment Due: $${payment}`);
        
        this.pages.forEach((page, index) => {
          console.log(`\nPage ${index + 1}:\n${page}\n`);
        });
      }
      
      
  
    processArticle() {
      this.splitIntoPages();
      this.displayPages();
    }
  }
  
  // Example usage
  const articleText = `Replace with actual article text`; // Replace with actual article text
  const articleManager = new ArticleManager(articleText);
  articleManager.processArticle();