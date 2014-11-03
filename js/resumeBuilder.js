	var bio =  { "name" : "David Trochez", 
	"role" : "Web Developer",
	"contacts" : { 
		"mobile" : "31235567",
		"email" : "nt@nrs.com",
		"github" : "maurotrochez",
		"twitter" : "@abcdef",
		"location" : "Cali, CO",
		"blog" : "blogspot.com/davidmautro"

	},
	"bioPic" : "images/image.png",
	"welcomeMessage" : "Welcome to CV",
	"skills" : ["python", "js", "sql"]
	};

	bio.display = function (){
		//$("#header").append(HTMLcontactGeneric.replace("%data%", "Contacto"));
		
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
		$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

		if (bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (sk in bio.skills){
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[sk]);
				$("#skills").append(formattedSkill);
			}
			
		}
	};
	bio.display();

	var work = 
	{
		"jobs": [
		{
			"employer": "Software.sa",
			"title": "Developer",
			"location": "Cali",
			"dates": "12/02/2014 - Future",
			"description": "Pull my finger! when i get back, remind to tell you about the time i took 100 nuns to nairobi! you are as precious to me as you were to your own mother and father. i swore to them that i would protect you, and i haven't. your were only supposed to blow the bloody doors off. at this point, i'd set you up with a chimpanzee if it'd brought you back to the world! you wouldn't hit a man with no trousers on, would you? you're only supposed to blow the bloody doors off! it's not the size mate, it's how you use it. you know, your bobby dangler, giggle stick, your general-two-colonels, master of ceremonies... yeah, don't be shy, let's have a look. my lord! you're a tripod. yes, i used a machine gun. i took a viagra, got stuck in me throat, i've had a stiff neck for hours."
		},
		{
			"employer": "Empresa abc",
			"title": "CEO",
			"location": "Bogota",
			"dates": "12/02/2011 - Future",
			"description": " do i feel lucky. well do ya' punk? are you feeling lucky punk here. put that in your report!i may have found a way out of here. ever notice how sometimes you come across somebody you shouldn't have f**ked with? well, i'm that guy. this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. when a naked man's chasing a woman through an alley with a butcher knife and a hard-on, i figure he's not out collecting for the red cross. man's gotta know his limitations."
		}
		]
	}

	function displayWork()
	{
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var content = formattedWorkEmployer + formattedWorkTitle;
			$(".work-entry:last").append(content);
			var formattedHtmlWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); 
			$(".work-entry:last").append(formattedHtmlWorkDates);
			var formattedHtmlWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location); 
			$(".work-entry:last").append(formattedHtmlWorkLocation);
			var formattedHtmlWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedHtmlWorkDescription);
		}
	}
	displayWork();

	$(document).click(function(loc){
		logClicks(loc.pageX, loc.pageY);
	});


	function inName () {
		var name = $("#name").text();
		name = name.trim().split(" ");
		var finalName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() +" "+ name[1].toUpperCase();
		return finalName;
	}

	$("#main").append(internationalizeButton);

	var projects = 
	{
		"projects": [
		{
			"title": "Web page",
			"dates": "12/01/2012",
			"description": "Man's gotta know his limitations. here. put that in your report! and i may have found a way out of here. you want a guarantee, buy a toaster. you see, in this world there's two kinds of people, my friend: those with loaded guns and those who dig. you dig. well, do you have anything to say for yourself? ever notice how sometimes you come across somebody you shouldn't have f**ked with? well, i'm that guy. this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. don't p!ss down my back and tell me it's raining. this is my gun, clyde! when a naked man's chasing a woman through an alley with a butcher knife and a hard-on, i figure he's not out collecting for the red cross. dyin' ain't much of a livin', boy. what you have to ask yourself is, do i feel lucky. well do ya' punk?",
			"skills" : ["Oy", "Py", "JS"],
			"contact": 
			{
				"mobile": "123456",
				"email": "asdf@asd.com",
				"github": "maurotrochez",
				"twitter": "@abc",
				"location": "CA"	
			},
			"images": ["images/project1.png"] 
		}
		]
	}

	projects.display = function () {
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);		
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0){
				for (img in projects.projects[project].images){ 
					var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
					$(".project-entry:last").append(formattedImages);
				}
			}

		}
	}

	projects.display();

	var education = 
	{
		"schools": [
		{
			"name": "School1",
			"location": "Medellin",
			"degree": "asbc",
			"majors": ["a", "b", "c"],
			"date": "31/03/2014",
			"url": "www.usc.edu.co"
		},
		{
			"name": "School2",
			"location": "Bogota",
			"degree": "wewef",
			"majors": ["4", "5", "6", "7"],
			"date": "19/02/2016",
			"url": "www.spc.edu.co"
		}
		],
		"onlineCourse": [
		{
			"title": "MongoDB",
			"school": "MongoDB university",
			"date": "07/06/2014",
			"url": "www.mongodbuniversity.com"
		}
		]
	};
	education.display = function (){

		for (sch in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[sch].name) + HTMLschoolDegree.replace("%data%", education.schools[sch].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[sch].date));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[sch].location));

			if (education.schools[sch].majors.length > 0){
				for (mj in education.schools[sch].majors){
					$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[sch].majors[mj]));	
				}
			}
			
		}
		if(education.onlineCourse.length > 0){
			
			for (onl in education.onlineCourse){
				$("#education").append(HTMLonlineClasses);
				$(".educationOnline:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourse[onl].title) + HTMLonlineSchool.replace("%data%", education.onlineCourse[onl].school));
				$(".educationOnline:last").append(HTMLonlineDates.replace("%data%", education.onlineCourse[onl].date));
				$(".educationOnline:last").append(HTMLonlineURL.replace("%data%", education.onlineCourse[onl].url));
			}	
		}
	};
	education.display();
	$("#mapDiv").append(googleMap);

	