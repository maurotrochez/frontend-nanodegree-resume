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
            "dates": "12/02/2014",
            "description": "work to hard"
        },
        {
            "employer": "Empresa abc",
            "title": "CEO",
            "location": "Bogota",
            "dates": "12/02/2011",
            "description": "President"
        }
    ]
}

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var content = formattedWorkEmployer + formattedWorkTitle
	$(".work-entry:last").append(content);
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