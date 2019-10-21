/* Creating the Navigation bar */
function createNav() {

    const navItems = ['About', 'Features', 'Pricing', 'Testimonials', 'Download'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Download') {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><button><p>${navItem}</p></button></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }
        else if (navItem == 'About') {
            li.innerHTML += `<a href="#top"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }
        else {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }

    }

}

createNav();

/* Creating the Content Sections */
function createSec() {

    const sectionNames = ['About', 'App', 'Features', 'Pricing', 'Download', 'Testimonials'];

    const content = document.getElementById('content');

    for (let sectionName of sectionNames) {
        section = document.createElement("section");
        section.className = "content box";
        section.id = `content-${sectionName.toLowerCase()}`;
        content.appendChild(section);
    }

}

createSec();

/* Creating the About Section */
function createAbout() {
    const aboutText = document.createElement('div');
    const about = document.getElementById('content-about');
    aboutText.id = "aboutText";
    aboutText.innerHTML = "<p>CompareStays is the ultimate app for your weekend getaways, business and holiday trips.</br></br>Pay less for more by comparing holiday providers as well as host reviews across sites!</p>"
    about.appendChild(aboutText);
}

createAbout();

/* Creating the Features Section */
function createFeat() {

    const featureCards = [
        {
            feature: "Feature1",
            description: "Description1"
        },
        {
            feature: "Feature2",
            description: "Description2"
        },
        {
            feature: "Feature3",
            description: "Description3"
        },
        {
            feature: "Feature4",
            description: "Description4"
        },
        {
            feature: "Feature5",
            description: "Description5"
        },
        {
            feature: "Feature6",
            description: "Description6"
        }
    ];

    const features = document.getElementById('content-features');

    for (let featureCard of featureCards) {
        feature = document.createElement("div");
        feature.className = "card box";
        feature.innerHTML = `<img src="${featureCard}.jpg" alt="picture of ${featureCard.feature}"><p>${featureCard.feature}</p><p>${featureCard.description}</p>`
        features.appendChild(feature);
    }
}

createFeat();

/* Creating the Testimony Section */
function createTest() {
    const quoteBox = document.createElement('div');
    const testSection = document.getElementById('content-testimonials');
    quoteBox.id = "quoteBox";
    testSection.appendChild(quoteBox);

    const testimonials = [
        {
            quote: "Best holiday bookings app ever! Found the best bargain for an apartment rated 5 Stars and was more expensive on Boo-king.com than on AirRnR!",
            source: "Head of NewIndustryBuzzword - Fony"
        },
        {
            quote: "These days I couldn't imagine how our business would function, if we never had invested in CompareStays! Not only did we increase passngers on flights but fully book our hotels.",
            source: "Richard Handsome - Virgin Pacific"
        },
        {
            quote: "5 Stars all the way! They should create a Michelin Star system just for this app!",
            source: "Another happy customer - Somewhere over the Rainbow"
        }
    ];

    function getRandomTest() {
        let randomNumber = Math.floor(Math.random()*testimonials.length);
        return(testimonials[randomNumber]);
    }

    function printTest() {
        let test = getRandomTest();
        let htmlString = "";

        htmlString += `<p class='quote'>"${test.quote}"</p><br>`;
        htmlString += `<p class='source'>${test.source}`;
        htmlString += "</p>";

        document.getElementById("quoteBox").innerHTML = htmlString;
    }

    printTest();

    let timer;

    function myTimer() {
        timer = setInterval(printTest, 4500);
    }

    myTimer();
}

createTest();