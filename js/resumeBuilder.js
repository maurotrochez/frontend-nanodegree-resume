var bio =  { "name" : "David Tr", 
			"role" : "Web Developer",
			"contacts" : { 
				"mobile" : "31235567",
				"email" : "nt@nrs.com",
				"github" : "maurotrochez"
			},
			"bioPic" : "images/image.png",
			"welcomeMessage" : "Welcome to CV",
			"skills" : ["python", "js", "sql"]
		};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
}

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


var projetcs = 
{
	"projects": [
		{
			"title": "Web page",
			"date": "12/01/2012",
			"description": "Hello world",
			"skills" : ["Oy", "Py", "JS"],
			"contact": 
			{
				"mobile": "123456",
				"email": "asdf@asd.com",
				"github": "maurotrochez",
				"twitter": "@abc",
				"location": "CA"	
			} 
		}
	]
}

var education = 
{
	"schools": [
		{
			"name": "school1",
			"location": "CA",
			"degree": "asbc",
			"majors": ["a", "b", "c"],
			"date": "31/03/2014",
			"url": "www.usc.edu.co"
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
}