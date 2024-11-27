class ArticleManager {
    constructor(articleText, options = {}) {
        
      this.articleText = articleText;
      this.pages = [];
      this.pageLines = [];
      this.paidPages = 0;
      this.words = 0;
      this.wordsPerLine = options.wordsPerLine || 12;
      this.linesPerPage = options.wordsPerLine || 20;
      this.paymentStructure = options.paymentStructure || {
        0: 0,
        1: 30,
        2: 30,
        3: 30,
        4: 60,
        5: 100
      },
      this.debug = options.debug || false;

       // error check
       if (typeof articleText !== 'string') {
        throw new Error("Article text must be a string.");
        }
  
        if (typeof this.wordsPerLine != 'number' || typeof this.linesPerPage != 'number') {
          throw new Error("Words per line and lines per page must be numbers.");
        }
        if (typeof this.paymentStructure != 'object' || Array.isArray(this.paymentStructure)) {
          throw new Error("Payment structure must be an object.");
        }

 
    }

    log(message) {
      if (this.debug) {
        console.debug(message);
      }
    }
  
    splitIntoPages() {

      
      this.words = this.articleText.trim().split(/\s+/);
    
      
  
      const lines = [];
      for (let i = 0; i < this.words.length; i += this.wordsPerLine) {
        lines.push(this.words.slice(i, i + this.wordsPerLine).join(" "));
      }
  
      this.pages = [];
      for (let i = 0; i < lines.length; i += this.linesPerPage) {
        this.pages.push(lines.slice(i, i + this.linesPerPage).join("\n"));
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


    // Example usage
    // const articleTextErrorNonText = 12345; // Replace with actual article text
    // const articleManagerErrorNonText = new ArticleManager(articleTextErrorNonText);
    // articleManagerErrorNonText.processArticle();