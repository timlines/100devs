class ArticleManager {
    constructor(articleText, options = {}) {
        
      this.articleText = articleText;
      this.pages = [];
      this.pageLines = [];
      this.paidPages = 0;
      this.words = 0;
      this.wordsPerLine = options.wordsPerLine || 12;
      this.linesPerPage = options.linesPerPage || 20;
      // this.paymentStructure = options.paymentStructure || {
      //   0: 0,
      //   1: 30,
      //   2: 30,
      //   3: 60,
      //   4: 60,
      //   5: 100
      // },

      this.paymentStructure = options.paymentStructure || {
        0: 0,  // < 1 page pays 0
        1: 30, // less than 2 pages pays 30
        2: 60, // less than 4 pages pays 60
        3: 100 // more than 4 pages pays 100
      },
        /*




        0: pages < 1, 0, 0, 1
        1: 1-2 pages, pages >= 1 && pages < 2, 1, 2, 30,
        2: 3-4 pages, pages >= 3 && pages < 4, 60,
        3: more than 4 pages, pages > 4, 100,
        */


      
      this.debug = options.debug || false;

       // Check that the articale text is a string, the words per lines, and lines per page are numbers, and that the payment structure is an object.
       if (typeof articleText !== 'string') {
        throw new Error("Article text must be a string.");
        }
  
        if (typeof this.wordsPerLine !== 'number' || typeof this.linesPerPage !== 'number') {
          throw new Error("Words per line and lines per page must be numbers.");
        }
        if (typeof this.paymentStructure !== 'object' || Array.isArray(this.paymentStructure)) {
          throw new Error("Payment structure must be an object.");
        }

        // console.log(`Article Text: ${articleText}`);
        // console.log(`Words Per Line: ${this.wordsPerLine}`);
        // console.log(`Lines Per Page: ${this.linesPerPage}`);

 
    }

    // Debug mode can be set to true or false
    log(message) {
      if (this.debug) {
        console.debug(message);
      }
    }
  
    // Split the pages based on the criteria of word per line, and lines per page
    splitIntoPages() {

      this.words = this.articleText.trim().split(/\s+/);

      // console.log(this.words.length);
    
      const lines = [];
      for (let i = 0; i < this.words.length; i += this.wordsPerLine) {
        lines.push(this.words.slice(i, i + this.wordsPerLine).join(" "));
      }
  
      this.pages = [];
      for (let i = 0; i < lines.length; i += this.linesPerPage) {
        this.pages.push(lines.slice(i, i + this.linesPerPage).join("\n"));
      }
    }
    
    // Calculate the payment based on the number of pages submitted and the payment structure.
    calculatePayment() {
      this.paidPages = (this.words.length / (this.wordsPerLine * this.linesPerPage)); // 241 words -> 241 / (12 * 20) = 240 = 2 pages


      console.log(Object.entries(this.paymentStructure));
      
      for (const [pageCount, amount] of Object.entries(this.paymentStructure)) {
        const [min, max] = 
      }




      // less than 1 page
      if ( this.paidPages < this.paymentStructure[0][1]) { // < 1
        return this.paymentStructure[0][2];
      } 
      
      // between 1 and 2 pages
      else if ( this.paidPages < this.paymentStructure[1][1]) { // < 2
        return this.paymentStructure[1][2];
      } 
      
      // between 3 and 4 pages
      else if ( this.paidPages < this.paymentStructure[2][1]) { // < 4
        return this.paymentStructure[2][2];
      } 
      
      // more than 4 pages
      else if ( this.paidPages > this.paymentStructure[3][0]) { // > 4
        return this.paymentStructure[3][2];
      }

      // console.log(this.paymentStructure[3][1]);
      // console.log(this.paymentStructure[3][2]);



    }



    //   this.paidPages = Math.floor(this.words.length / (this.wordsPerLine * this.linesPerPage));
    
    //   if (this.paidPages < 1) {
    //     return 0;
    //   } else if (this.paidPages >= 2 && this.paidPages <= 4) {
    //     return this.paymentStructure[this.paidPages];
    //   } else {
    //     return 100;
    //   }
    // }


    // if ( this.paidPages <= Object.keys( this.paymentStructure).length -1 ){
    //   return this.paymentStructure[this.paidPages];
    // }else {
    //   return this.paymentStructure[ Object.keys( this.paymentStructure).length -1 ];
    // }
 
  



    // Display the total number of pages submitted, the amount that will be paid, and the payment due.
    displayPages() {
        const payment = this.calculatePayment();
        console.log(`Total Pages: ${this.pages.length}`);
        console.log(`Paid Pages: ${this.paidPages || 0}`); 
        console.log(`Payment Due: $${payment}`);
        
        this.pages.forEach((page, index) => {
          console.log(`\nPage ${index + 1}:\n${page}\n\n`);
        });
      }
    
    // Process the article using try and catch
    processArticle() {
      try {
        this.splitIntoPages();
        this.displayPages();
        
      } catch (error) {
        console.error('Error processing articles:', error.message);
      }

    }
  }

  
  // Example usage
  const articleText = `Replace with actual article text`; // Replace with actual article text
  const articleManager = new ArticleManager(articleText);
  articleManager.processArticle();


    // Example usage
    const articleText3Page = `In Uruk he built walls, a great rampart, and the temple of blessed Eanna for the god of the firmament Anu, and for Ishtar the goddess of love. Look at it still today: the outer wall where the cornice runs, it shines with the brilliance of copper; and the inner wall, it has no equal. Touch the threshold, it is ancient.”
–The Epic of Gilgamesh, ca. 1750 BC
*

In the middle of the fourth millennium before Christ, men and women could feed themselves and their families, much of the time, but almost nobody else. They did not yet have the wheel. They could fight, but they did not have the capacity to make war. They could not read or write, for there was no writing. Without writing, there was no history. There were stories but no literature. Art was something that people might produce on their pottery, but never for a living. There were customs but no laws. There were chiefs but no kings, tribes but no nations. The city was unknown.

And then, around that time, civilization was born: urban life, based on nutritional surplus and social organization, characterized by complexity and material culture, much of it made possible by writing. This happened in a very particular part of the world: the flood-prone, drought-wracked, frequently pestilential plain of southern Iraq, where the rivers Tigris and Euphrates meet the Persian Gulf. The plain could be fertile, very fertile, but only when people worked together to irrigate it and control the floods with channels and earthworks; this necessity, most likely, accounts for much of the early surge in social complexity that distinguished the area. Later civilizations would arise independently in two great river valleys not so far away, the Indus and the Nile, but the original organized, literate, urban culture was produced by a far crueler and more challenging environment than either of those.

The need for a single script to serve a geography using two such dissimilar languages almost interchangeably was a great spur to the development of early Mesopotamian writing.
This first civilization came to be known as Sumer. By about the year 3000 BC, a city called Uruk near the mouth of the Euphrates River, just inland of the head of the Persian Gulf, had eighty thousand residents. A thousand years later Iraq, the land along the Euphrates and its sister stream, the Tigris, would be named for this early metropolis of Uruk. Sharing the land of Sumer, about the size of Belgium, with a dozen other city-states, Uruk was not always the foremost among its rivals in the land. But for most of its existence, spanning the two millennia of the Sumerian world, Uruk was the greatest city on earth. The need for a single script to serve a geography using two such dissimilar languages almost interchangeably was a great spur to the development of early Mesopotamian writing.
This first civilization came to be known as Sumer. By about the year 3000 BC, a city called Uruk near the mouth of the Euphrates River, just inland of the head of the Persian Gulf, had eighty thousand residents. A thousand years later Iraq, the land along the Euphrates and its sister stream, the Tigris, would be named for this early metropolis of Uruk. Sharing the land of Sumer, about the size of Belgium, with a dozen other city-states, Uruk was not always the foremost among its rivals in the land. But for most of its existence, spanning the two millennia of the Sumerian world, Uruk was the greatest city on earth`; // Replace with actual article text
    const articleManager3Page = new ArticleManager(articleText3Page);
    articleManager3Page.processArticle();


  // Example usage, 9 and half Pages
  const articleText10Page = `“In Uruk he built walls, a great rampart, and the temple of blessed Eanna for the god of the firmament Anu, and for Ishtar the goddess of love. Look at it still today: the outer wall where the cornice runs, it shines with the brilliance of copper; and the inner wall, it has no equal. Touch the threshold, it is ancient.”
–The Epic of Gilgamesh, ca. 1750 BC
*

In the middle of the fourth millennium before Christ, men and women could feed themselves and their families, much of the time, but almost nobody else. They did not yet have the wheel. They could fight, but they did not have the capacity to make war. They could not read or write, for there was no writing. Without writing, there was no history. There were stories but no literature. Art was something that people might produce on their pottery, but never for a living. There were customs but no laws. There were chiefs but no kings, tribes but no nations. The city was unknown.

And then, around that time, civilization was born: urban life, based on nutritional surplus and social organization, characterized by complexity and material culture, much of it made possible by writing. This happened in a very particular part of the world: the flood-prone, drought-wracked, frequently pestilential plain of southern Iraq, where the rivers Tigris and Euphrates meet the Persian Gulf. The plain could be fertile, very fertile, but only when people worked together to irrigate it and control the floods with channels and earthworks; this necessity, most likely, accounts for much of the early surge in social complexity that distinguished the area. Later civilizations would arise independently in two great river valleys not so far away, the Indus and the Nile, but the original organized, literate, urban culture was produced by a far crueler and more challenging environment than either of those.

The need for a single script to serve a geography using two such dissimilar languages almost interchangeably was a great spur to the development of early Mesopotamian writing.
This first civilization came to be known as Sumer. By about the year 3000 BC, a city called Uruk near the mouth of the Euphrates River, just inland of the head of the Persian Gulf, had eighty thousand residents. A thousand years later Iraq, the land along the Euphrates and its sister stream, the Tigris, would be named for this early metropolis of Uruk. Sharing the land of Sumer, about the size of Belgium, with a dozen other city-states, Uruk was not always the foremost among its rivals in the land. But for most of its existence, spanning the two millennia of the Sumerian world, Uruk was the greatest city on earth.

The Sumerians invented kingship, priesthood, diplomacy, law, and war. They gave the West its founding stories: the opposition of darkness and light at the Beginning; the Flood, with its ark and dove and surviving patriarch; the tower of Babel; the distant ancestors of Odysseus and Hercules. The Sumerians established the outlines of our political, legal, and temporal structures too, with the first kings and assemblies, the first written laws, the first legal contracts, and the sexagesimal system of counting that regulates the hours and seconds of our days.

The Sumerians wrote the first epics and constructed the first monumental buildings. They invented the wheel, the sailing boat, the dome, and the arch. They were the first people to cast, rivet, and solder metals. They were the first to develop mathematics, calculating the hypotenuse of a right triangle two thousand years before Pythagoras and enabling extraordinary achievements in civil engineering. Compiling methodical lists of plants and animals, the Sumerians were the first people to apply rational order to our knowledge of the natural world.

The Sumerians wrote down almost everything they knew, much of it on disposable clay tablets that have survived the millennia. Some thirty-nine centuries after the last of the Sumerians died, another inventive and curious people, the Victorians of the nineteenth century AD, initiated a remarkable period of foreign exploration in Iraq. Thanks to this colorful and dramatic intellectual adventure, which began in the 1840s, today we can follow the course of Sumerian lawsuits, track Sumerian inventories, and study the terms of Sumerian marriages, wills, and loans. We read the overtures of Sumer’s diplomats. We follow in detail the provisioning of Sumer’s armies and the triumphs or disasters of their expeditions. We know intimately the pleadings of Sumerian students for more money from their fathers, and the pleadings of their fathers for more diligence from their sons. We track the transactions of Sumerian merchants in copper or onions. We admire the complex and perfect calculations of Sumerian engineers.

Human life on the alluvial plain of the two rivers at the birth of civilization five thousand years ago was precarious. Again and again, through the ancient stories and archaeological records that illuminate the dawn of history, plagues and pestilence swept the hot, low country. Terrifying floods killed and destroyed everything within reach of the raging waters that came every spring when the snow melted in the mountains five hundred miles and more to the north, in what is now Armenia and southeast Turkey. At Ur in Sumer’s far south, the great archaeologist Sir Leonard Woolley, digging in 1929, discovered a layer of “perfectly clean clay” more than eight feet thick separating the remains—pottery and much more—of two distinct cultures from some time before 3000 BC. A single flood, in other words, had created a temporary lake that deposited this eight-foot-thick layer. The catastrophic scale of such a deluge is almost beyond the powers of imagination. Woolley naturally surmised that it was the great flood of Genesis. Other floods have left similar records in southern Iraq. Most were smaller than Woolley’s Ur deluge. One left eleven feet of new flood soil.

Meanwhile neighbors from the higher, rougher country to the east, north, and west were greedy for the wealth of the settled plain, then as now. The invasions of barbarians from the Persian hill country, the Kurdish and Turkish mountains, and the Arabian steppe sometimes paused, but never ended. Within Sumer, Uruk and its neighboring city-states fought against each other almost constantly during the twenty-odd centuries of Sumerian civilization.

The soil of southern Iraq is a dusty, flinty accumulation of silt from the two shifting rivers that originate far to the north. In the areas where Iraq’s alluvial soil is not dry, it is marshy, especially in the south; it was more so in ancient times, when the Tigris and Euphrates were bigger. The ground is home to no minerals or ores, although bitumen seeps from the earth in places. The land contains no stones for building. Almost no tree, aside from the date palm, grows on it successfully. Trade with the far-off source-lands of raw materials—for tin and copper to alloy into bronze for weapons, for gold and silver to please the rich and the divine, for hardwood timbers for the roof beams of palaces and temples—required the pooling of resources. Organization and leadership were required to conduct commerce at scale with places as far afield as Anatolia for tin, Lebanon for cedar timbers, “Oman for copper, south-west Iran for carved stone bowls, eastern Iran for lapis lazuli, the Indus for carnelian. In Uruk he built walls, a great rampart, and the temple of blessed Eanna for the god of the firmament Anu, and for Ishtar the goddess of love. Look at it still today: the outer wall where the cornice runs, it shines with the brilliance of copper; and the inner wall, it has no equal. Touch the threshold, it is ancient.”
–The Epic of Gilgamesh, ca. 1750 BC
*

In the middle of the fourth millennium before Christ, men and women could feed themselves and their families, much of the time, but almost nobody else. They did not yet have the wheel. They could fight, but they did not have the capacity to make war. They could not read or write, for there was no writing. Without writing, there was no history. There were stories but no literature. Art was something that people might produce on their pottery, but never for a living. There were customs but no laws. There were chiefs but no kings, tribes but no nations. The city was unknown.

And then, around that time, civilization was born: urban life, based on nutritional surplus and social organization, characterized by complexity and material culture, much of it made possible by writing. This happened in a very particular part of the world: the flood-prone, drought-wracked, frequently pestilential plain of southern Iraq, where the rivers Tigris and Euphrates meet the Persian Gulf. The plain could be fertile, very fertile, but only when people worked together to irrigate it and control the floods with channels and earthworks; this necessity, most likely, accounts for much of the early surge in social complexity that distinguished the area. Later civilizations would arise independently in two great river valleys not so far away, the Indus and the Nile, but the original organized, literate, urban culture was produced by a far crueler and more challenging environment than either of those.

The need for a single script to serve a geography using two such dissimilar languages almost interchangeably was a great spur to the development of early Mesopotamian writing.
This first civilization came to be known as Sumer. By about the year 3000 BC, a city called Uruk near the mouth of the Euphrates River, just inland of the head of the Persian Gulf, had eighty thousand residents. A thousand years later Iraq, the land along the Euphrates and its sister stream, the Tigris, would be named for this early metropolis of Uruk. Sharing the land of Sumer, about the size of Belgium, with a dozen other city-states, Uruk was not always the foremost among its rivals in the land. But for most of its existence, spanning the two millennia of the Sumerian world, Uruk was the greatest city on earth.

The Sumerians invented kingship, priesthood, diplomacy, law, and war. They gave the West its founding stories: the opposition of darkness and light at the Beginning; the Flood, with its ark and dove and surviving patriarch; the tower of Babel; the distant ancestors of Odysseus and Hercules. The Sumerians established the outlines of our political, legal, and temporal structures too, with the first kings and assemblies, the first written laws, the first legal contracts, and the sexagesimal system of counting that regulates the hours and seconds of our days.

The Sumerians wrote the first epics and constructed the first monumental buildings. They invented the wheel, the sailing boat, the dome, and the arch. They were the first people to cast, rivet, and solder metals. They were the first to develop mathematics, calculating the hypotenuse of a right triangle two thousand years before Pythagoras and enabling extraordinary achievements in civil engineering. Compiling methodical lists of plants and animals, the Sumerians were the first people to apply rational order to our knowledge of the natural world.

The Sumerians wrote down almost everything they knew, much of it on disposable clay tablets that have survived the millennia. Some thirty-nine centuries after the last of the Sumerians died, another inventive and curious people, the Victorians of the nineteenth century AD, initiated a remarkable period of foreign exploration in Iraq. Thanks to this colorful and dramatic intellectual adventure, which began in the 1840s, today we can follow the course of Sumerian lawsuits, track Sumerian inventories, and study the terms of Sumerian marriages, wills, and loans. We read the overtures of Sumer’s diplomats. We follow in detail the provisioning of Sumer’s armies and the triumphs or disasters of their expeditions. We know intimately the pleadings of Sumerian students for more money from their fathers, and the pleadings of their fathers for more diligence from their sons. We track the transactions of Sumerian merchants in copper or onions. We admire the complex and perfect calculations of Sumerian engineers.

Human life on the alluvial plain of the two rivers at the birth of civilization five thousand years ago was precarious. Again and again, through the ancient stories and archaeological records that illuminate the dawn of history, plagues and pestilence swept the hot, low country. Terrifying floods killed and destroyed everything within reach of the raging waters that came every spring when the snow melted in the mountains five hundred miles and more to the north, in what is now Armenia and southeast Turkey. At Ur in Sumer’s far south, the great archaeologist Sir Leonard Woolley, digging in 1929, discovered a layer of “perfectly clean clay” more than eight feet thick separating the remains—pottery and much more—of two distinct cultures from some time before 3000 BC. A single flood, in other words, had created a temporary lake that deposited this eight-foot-thick layer. The catastrophic scale of such a deluge is almost beyond the powers of imagination. Woolley naturally surmised that it was the great flood of Genesis. Other floods have left similar records in southern Iraq. Most were smaller than Woolley’s Ur deluge. One left eleven feet of new flood soil.

Meanwhile neighbors from the higher, rougher country to the east, north, and west were greedy for the wealth of the settled plain, then as now. The invasions of barbarians from the Persian hill country, the Kurdish and Turkish mountains, and the Arabian steppe sometimes paused, but never ended. Within Sumer, Uruk and its neighboring city-states fought against each other almost constantly during the twenty-odd centuries of Sumerian civilization.

The soil of southern Iraq is a dusty, flinty accumulation of silt from the two shifting rivers that originate far to the north. In the areas where Iraq’s alluvial soil is not dry, it is marshy, especially in the south; it was more so in ancient times, when the Tigris and Euphrates were bigger. The ground is home to no minerals or ores, although bitumen seeps from the earth in places. The land contains no stones for building. Almost no tree, aside from the date palm, grows on it successfully. Trade with the far-off source-lands of raw materials—for tin and copper to alloy into bronze for weapons, for gold and silver to please the rich and the divine, for hardwood timbers for the roof beams of palaces and temples—required the pooling of resources.”`; // Replace with actual article text
  const articleManager10Page = new ArticleManager(articleText10Page);
  articleManager10Page.processArticle();


  // // Example usage
  // const articleTextErrorNonText = 12345; // Replace with actual article text
  // const articleManagerErrorNonText = new ArticleManager(articleTextErrorNonText);
  // articleManagerErrorNonText.processArticle();