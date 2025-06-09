var app = angular.module('portfolioApp', []);

app.controller('MainController', function($scope, $timeout) {
    $scope.portfolio = {
        name: "Umang Jadav",
        taglineList: [
            "Software Developer",
            "Ready to Innovate, Eager to Learn",
            "New to IT, But Ready to Lead the Way",
            "Fresh Talent, Limitless Potential",
            "Learning Fast, Developing Faster"
        ],
        contact_number: "971235579",
        github: "https://github.com/JadavUmang/",
        linkedIn: "https://www.linkedin.com/in/jadav-umang-56789123a/",
        about: "IT graduate with foundational skills in programming and tools such as Java, React, and MySQL. Completed hands-on projects and built experience in developing small applications. Seeking opportunities to further develop skills in software development and contribute to team projects.",
        projects: [
            {
                title: "Compare Everything website",
                description: "Compare Everything is a website that compares the same product across different online platforms like Amazon, Flipkart, Shopsy, etc.",
                technologies:"React JS, NodeJS, HTML, CSS.",
                link: "https://github.com/JadavUmang/compareverything"
            },
            {
                title: "Weather App",
                description: "Weather App is a application that displays city search live weather.",
                technologies:"Java, Xml,OpenWeatherApi using Retrofit.",
                link: "https://github.com/JadavUmang/Weather_App_Using_Retrofit"
            },
            {
                title: "Track Daily Route",
                description: "Track Daily Route is an application which tracks your daily routine using google map api.",
                technologies:"Java, Xml, Google map api.",
            },            
            {
                title: "IPL Single Match Dashboard App",
                description: " Displays match scores, player details, date, time, venue, and other relevant information for an IPL match. ",
                technologies:"Java, SQLite, Xml, HTML.",
                link: "https://github.com/JadavUmang/IPL-Match-Scoreboard-Design"
            }
        ],
        contact: {
            email: "jadavumang160@gmail.com"
        }
    };

    $scope.displayedTagline = "";

    let currentTaglineIndex = 0;
    let currentCharIndex = 0;

    function typeTagline() {
        const tagline = $scope.portfolio.taglineList[currentTaglineIndex];

        if (currentCharIndex <= tagline.length) {
            $scope.displayedTagline = tagline.substring(0, currentCharIndex++);
            $timeout(typeTagline, 100); // Typing speed
        } else {
            // Wait and move to next tagline
            $timeout(() => {
                currentTaglineIndex = (currentTaglineIndex + 1) % $scope.portfolio.taglineList.length;
                currentCharIndex = 0;
                typeTagline();
            }, 2000); // Delay after full line is typed
        }
    }

    typeTagline();
});
