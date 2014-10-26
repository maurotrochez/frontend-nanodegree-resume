var name = "David"

var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
$("#main").append(bio);
var work = {};
work.position = "Cali";
work.employer = "Nada";
work.yearsWorked = "2";
work.city = "Cali";

// var education = {};
// education["name"] = "San Pedro";
// education["years"] = "5";

// $("#header").append(work["position"]);
// $("#header").append(education.name);
var education = {"schools":[
								{
									"name":"san Pedro",
									"city":"Cali",
									"majors":"nada"
								},
								{
									"name":"usc",
									"city":"Cali",
									"majors":"asdf"
								}
							]
				};