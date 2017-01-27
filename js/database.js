
	var app = angular.module("myPortfolio", ['angular-svg-round-progressbar','ngSanitize']);
	
	// socialsitesCtlr
	app.controller('socialsitesCtlr', ['$scope', function ($scope) {
		$scope.sites = [
			{title: "Facebook", url: "https://www.facebook.com/Hgsongra", icon: "icon-facebook"},
			{title: "Twitter", url: "https://twitter.com/hgsongra", icon: "icon-twitter"},
			{title: "LinkedIn", url: "https://www.linkedin.com/in/hgsongra", icon: "icon-linkedin"},
			{title: "Github", url: "https://github.com/hgsongra", icon: "icon-github"},
			{title: "Instagram", url: "https://www.instagram.com/hgsongra", icon: "icon-instagram"},
			{title: "Blog", url: "http://hgsongra.blogspot.in", icon: "icon-globe"},
		];
	}])
	// End of socialsitesCtlr

	// Photo Gallary
	app.controller("gallaryCtlr", function($scope) {
    $scope.gallary = [
			{title: "Sunset Point", place: "@Mount-Abu", img_name: "sun-set-point-abu-1.jpg", alt_text: "sun-set-point-abu-1"},
			{title: "Kullad's", place: "@Kullad's", img_name: "kullads.jpg", alt_text: "kullads"},
			{title: "Subset Point", place: "@Mount-Abu", img_name: "sun-set-point-abu.jpg", alt_text: "sun-set-point-abu"},
			{title: "Pizza Lover", place: "@Domino's", img_name: "pizza-lover.jpg", alt_text: "pizza-lover"},
			{title: "Home Town", place: "@Farm", img_name: "at-my-farm.jpg", alt_text: "my-farm"},
			{title: "Adventure", place: "@Vananchal", img_name: "adventure-vananchal.jpg", alt_text: "adventure-vananchal"},
			{title: "I love cooking", place: "@AhmedabadRoom", img_name: "i-love-cooking.jpg", alt_text: "i-love-cooking"},
			{title: "Night out with friends", place: "@NrSGHighwayAhmedabad", img_name: "night-out.jpg", alt_text: "night-out"},
		];
	});
	// End of Photo Gallary

	// Professional Skills
	app.controller("skillsCtlr", function($scope) {
    $scope.programming = [
			{name: "ruby", rate: "65%"},
			{name: "html", rate: "70%"},
			{name: "javascript", rate: "50%"},
			{name: "bootstrap/css", rate: "55%"},
		];

		$scope.frameworks = [
			{name: "Ruby on Rails", rate: "65%"},
			{name: "jquery", rate: "65%"},
			{name: "angularjs", rate: "Learning"},
			{name: "rspec & capybara", rate: "25%"},
		];

		$scope.tools = [
			{name: "Git & Bitbucket", rate: "65%"},
			{name: "Sublime Text & Notepad++", rate: "60%"},
			{name: "Apache & nginx", rate: "60%"},
			{name: "Linux & Ubuntu", rate: "60%"},
			{name: "jira & basecamp", rate: "40%"}
		];

		$scope.getStyle = function(){
      var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
      return {
        'top': $scope.isSemi ? 'auto' : '50%',
        'bottom': $scope.isSemi ? '5%' : 'auto',
        'left': '55%',
        'transform': transform,
        '-moz-transform': transform,
        '-webkit-transform': transform,
        'font-size': $scope.radius/3.5 + 'px'
      };
    };

	});
	//End of Professional Skills

	// Professional Testimonial
	app.controller("testimonialCtlr", function($scope) {
    $scope.testimonials = [
			{name: "Kushal Mistry ", pic: "km.jpg", designation: "Ruby on Rails Lead", company: "Bacancy Technology Pvt Ltd", review: "I have worked with Hitesh around 6 months. Hitesh is a calm person and he always dedicates himself towards his work. he seems to be a hard working guy, he is a quick learner and good problem solver. He has good hands on experience with Ruby on Rails. As per his experience level he has a great skill set and still he is improving day by day.  Most of the time he seeks for self-help that attitude makes him special. Having him in a team is a great choice for any achievement. I wish him best of luck for his bright future and for all of his work."},
			{name: "Kishor Karmur ", pic: "kk.jpg", designation: "Project Manager", company: "Space-O Technologies Pvt Ltd", review: "Hitesh is an enthusiast technocrat with good logical and programming skills. I never heard NO or IMPOSSIBLE from him while working on many projects. He have ability to play around new tools and technologies with minimum or no complaints."},
			{name: "Sachin Gevariya ", pic: "sg.jpg", designation: "Full Stack ROR Developer", company: "Bacancy Technology Pvt Ltd", review: "Hitesh is very talented, passionate and has good vision for his work. He has very good knowledge of Ruby on Rails. He has worked under me on many projects. Working with him is very comfortable. He is also helping me to manage team. He has very good problem solving skill. He is doing a great job. Keep it up!!"},
			{name: "Manish Bhuva ", pic: "mb.jpg", designation: "Sr. Magento Developer", company: "Space-O Technologies Pvt Ltd", review: "Mr. Hitesh Sonagra is a very detail-oriented and excellent in work. He is technical expertise in web development and programming. Very good play role in a team."},
			{name: "Mathura Narayanan", pic: "mn.jpg", designation: "Sr. SAP BI Consultant", company: "Sashtech Resources Pte Ltd", review: "Hitesh is a rich resource to any team. He is very detailed RoR technical developer who can understand the business requirments quickly and can able to develop, resolve and troubleshoot efficiently. His communication is pretty prompt and effective. Any manager would need a member like him in the team. All the best, Hitesh and looking forward to work with you on many more projects."},
			{name: "Chintan Modani", pic: "cpm.jpg", designation: "Project Manager", company: "Infostretch Corporation", review: "Hitesh is a task oriented person who has keen eye for details. As an individual and team player he is very practical, reliable and thoughtful. Powerful ambition combined with an excellent work ethic increase his likelihood of success."},
		];
	});
	//End of Professional Testimonial

	// Honor and Award
	app.controller("rewardCtlr", function($scope) {
    $scope.rewards = [
			{title: "Start Astronaut for Outstanding Performance and Contribution", pic: "img/reward/sept-2014-soi.jpg", desc: "Rewarded for outstanding performance and contribution for quarter of July - September 2014. See the official announcement <a href='http://www.spaceotechnologies.com/insights/silent-astronauts-space-o-top-the-rr-q3-awards' target='blank'><strong>Here</strong></a>", company: "Space-O Technologies Pvt Ltd", awarded_at:"September-2014", designation: "Jr. Ruby on Rails Developer", alt_text: "sept-2014-soi"},
		];
	});
	//End of Honor and Award




	// Projects
	app.controller('projectsCtrl', ['$scope', function ($scope) {
		$scope.projects = [
			{ name: "SecureInstalls.com", category: "Web Development", keyword: "secureinstall", thumbIcon: "img/portfolio/si.png", largeIcon: "img/portfolio/silogo.png", desc: "SecureInstalls.com is a community-oriented website that provides free software and programs for you to download. Our aim is to make downloading the most recent software transparent and easy, giving you a clear choice in what you install onto your PC or Mac. All SecureInstalls.com products are carefully tested to be free of viruses, spyware, or any type of malware, so you can download worry-free.<br><br>Every member in our community plays a part in helping you select the best free software. The feedback and ratings provided by community members like you help users select the software that fits their needs, while helping developers distribute their products.", org: "Space-O Technologies Pvt Ltd.", shortRole: "I was the dedicated deveoper for this project and Gaurang Bhatt and Kishor Karmur were the Project manager for this project. This was my first project in IT industry. By help of Mr Gaurang Bhatt I learned the Ruby on Rails in deap and server configurations and by Mr Kishor Karmur I learned HTML, CSS, JQuery, etc and client communication.", roles: ["Bug fixes and performance enhancements","Security fixes","Desing Integration","New features implementation","Client comminication(After certain time period)","Google Adword's Ads integration."], learnings: ["Dynamic XML file generation","ActiveAdmin cutomization","Google Adword integration","SEO Optimazation","Client comminication"], urls: [{title: "Visit Site", link: "https://www.secureinstalls.com/"}]},			
			{ name: "Tuloko Mobile App", category: "API Development & eJabberd(XMPP) chat", keyword: "tuloko", thumbIcon: "img/portfolio/tulokoapp.png", largeIcon: "img/portfolio/tuloko-logo.jpg", desc: "Tuloko is an app that helps in searching, discovering, reviewing and rating businesses and events, targeted to the black community. It is an initiative to leverage and find the black owned businesses and events. Users can chat with eachother and participate in upcoming events, users can review and rate their favourite businesses or places.", org: "Space-O Technologies Pvt Ltd.", shortRole: "We were 4 people team to delivered this nice product of client, this was the very toughest and challanging project for me, because before this project I even don't know what is API?, With great and motivational support of our project manager Mr. Chintan Modani and my two senior colleague Amit Patoliya (Android) and Sunil Vaishnav(iOS), I am able to worked on this project. I have learned lots of things from this project.", roles: ["Build API for iOS and Android App","Configured eJabberd(XMPP) server for chat","Bug fixes and enhancement in website"], learnings: ["Building API first time, So it was very big challenge for me","Learned MongoDB","Learned eJabberd(XMPP) and configuration of eJabberd.","Google Geo location API and Login with social sites."], urls: [{title: "Visit Site", link: "https://www.tuloko.com/"},{title: "Android App", link: "https://play.google.com/store/apps/details?id=com.tuloko"},{title: "iOS App", link: "https://geo.itunes.apple.com/us/app/tuloko/id990897250?mt=8&uo=6"}]},
			{ name: "EasyClaim Mobile App", category: "API Development", keyword: "easyclaim", thumbIcon: "img/portfolio/easy-claim.png", largeIcon: "img/portfolio/easy-claim.png", desc: "EasyClaim is a smartphone app that is designed to help home & property owners, field technicians, and adjusters simplify and close out total loss contents claims. Log your items into the app and export a fully complied inventory list in PDF or Excel format directly from your device.", org: "Space-O Technologies Pvt Ltd.", shortRole: "We build this product in two branch, where I was in Ahmedabad India branch, where I was building back-end and API for mobile App and another in Tomsk Russia where mobile app was develop.", roles: ["Build Restful API for iOS and Android App","Build Admin Panel"], learnings: ["Dynamic documents generation based on mobile App data submission in various formats, like PDF, Word and Excel","API security"], urls: [{title: "Visit Site", link: "http://easyclaimapp.com/"},{title: "Android App", link: "https://play.google.com/store/apps/details?id=com.ryanpeacock.easyclaim"},{title: "iOS App", link: "https://itunes.apple.com/us/app/easyclaim-total-loss-software/id1026858718?mt=8"}]},
			{ name: "MRSOOL (مرسول) Mobile App", category: "API Development", keyword: "mrsool", thumbIcon: "img/portfolio/mrsool.png", largeIcon: "img/portfolio/mrsool.png", desc: "MRSOOL is the new experience in transporting goods. Want anything from any store? MRSOOL will deliver it to your door. We have gathered all the stores, if you need anything from any store, post your order, and one of our couriers will respond to you. Why suffer traffic and waste time?", shortRole: "We develop this product for out client from Riyadh, Saudi Arabia. This app is used for daily bases for getting your needed things to your steps without going to the shop or mall, if you are on out side and have installed this app you can earn money using this app by delivering goods to your nearby places from you home.", roles: ["Build Restful API for iOS and Android App","Build Admin Panel", "Configure eJabberd(XMPP) server", "Multiple language response"], learnings: ["Deploy rails app to windows Azure server","Upload files, images to azure cloud storage"], urls: [{title: "Visit Site", link: "http://mrsool.co/"}, {title: "iOS App", link: "https://itunes.apple.com/us/app/mrsool-mrswl/id1040038773?mt=8"}]},
			{ name: "Sweargasm Mobile App", category: "API Development", keyword: "sweargasm", thumbIcon: "img/portfolio/sweargasm.png", largeIcon: "img/portfolio/sweargasm-logo.jpg", desc: "Sweargasm is the best way to send disses to your friends. Create and share your custom swearwords with a global audience, and watch your word rise to the top of the charts. Available on both Android and iPhone.", shortRole: "There was a very important and short time period challenge with us to complete the best product of client. It was a very short development duration app we developed. Our client need this product within a month to live on app store. With all dedication and team spirits of Quaternary TEAM, we made it happened and delivered the product to client before time.", roles: ["Build Restful API for iOS and Android App","Build Admin Panel"], learnings: ["Focus on achieved the target to certain time period","Team work with full dedication", "Deployment of rails app on shared CentOS server."], urls: [{title: "Visit Site", link: "http://sweargasm.com/"},{title: "Android App", link: "https://play.google.com/store/apps/details?id=com.sweargasm"},{title: "iOS App", link: "https://itunes.apple.com/us/app/sweargasm/id1038011084?mt=8"}]},
			{ name: "TradLight", category: "Web and API Development", keyword: "tradlight", thumbIcon: "img/portfolio/tradlight.png", largeIcon: "img/portfolio/tradlight.png", desc: "Tradlight is a business application which gives you all details about the business growing around your place. Tradlight is a business application which lets the business owner, managers, employees to create a custom profile page. Here they can add photos, services, deals and much more. Business can reply to review from the users and much more.", shortRole: "It's startup based company project of one of my best friends. I am helping him to set up his dream company. TradLight is the product of his startup.", roles: ["Build Restful API for iOS and Android App","Build Admin Panel"], learnings: ["Firebase notification"], urls: [{title: "Visit Site", link: "http://www.tradlight.com/"},{title: "Android App", link: "https://play.google.com/store/apps/details?id=tradlight.business"},{title: "iOS App", link: "https://itunes.apple.com/in/app/tradlight-partner/id1162708141?mt=8"}]},
			{ name: "eSebco Books", category: "Web Development", keyword: "esebco-book", thumbIcon: "img/portfolio/esebco-logo.gif", largeIcon: "img/portfolio/esebco-logo.gif", desc: "As a professional media specialist or librarian, you love to read. You love helping others learn to love reading as much as you do. But, with all of the diversions available to today's youth, it can be challenging to get the majority interested in reading. Enter eSebco.<br>eSebco uses the power of technology to give you an advantage in getting young learners interested in reading. By offering a fully immersive interactive experience as they read, you now have a secret weapon to make reading even more fun.", shortRole: "In this project we have upgrade it to Rails-3.1.12 to Rails-3.2.22, bug fixes and new feature enhancement.", roles: ["Re-write the code for rails 3.2.22","Bug fixes and features enhancement"], learnings: ["Rails Assets pipelines", "Simple captcha code security", "Sunspot Solr search engine"], urls: [{title: "Visit Site", link: "http://sebcobooks.com/"}]},
			{ name: "2B4ME", category: "Web Development", keyword: "2b4me", thumbIcon: "img/portfolio/2b4me_logo.png", largeIcon: "img/portfolio/2b4me_logo.png", desc: "2B4me True local DEALS... with a TWIST<br><br>2B4ME is local deals online vender, where user can buy the best deals and reedim them at merchant shop.", shortRole: "We build this project from scratch and integrate the responsive UI for the desktop as well as mobile devices", roles: ["Analysis of the project requirement","Integration of responsive UI"], learnings: ["Responsive UI integration", "Typus: Control panel for Ruby on Rails", "Haml: Templating engine for HTML"], urls: [{title: "Visit Site", link: "http://staging.2b4me.com/"}]},
		];
	}]);
	// End of Projects