$(document).ready(function(){
		
	particlesJS('particles-js',
	  
	  {
	  "particles": {
	    "number": {
	      "value": 80,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#1a9645"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.2725800503471389,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 10,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      "color": "#1a9645",
	      "opacity": 0.4,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 2,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "repulse"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 182.71737276780266,
	        "line_linked": {
	          "opacity": 0.4359915105049279
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	}
	
	);
});




var quiz_array = {
	name: "",
	email: "",
	completed_quiz: false,
	total_possible: 0,
	results: 0,
	percent: 0,
	result_options:[
		{
			min: 0,
			max:49,
			color_class: "red",
			title: "Very Bad!",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: ""
		},
		{
			min: 50,
			max:74,
			color_class: "yellow",
			title: "You&rsquo;re ok...",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: ""
		},
		{
			min: 75,
			max:100,
			color_class: "green",
			title: "Lookin&rsquo; pretty good!",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: ""
		}		
	],
	questions: [
		{
			id: 1,
			header: "Overall, my existing performance marketing program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Existing Performance",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Existing Performance",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Existing Performance",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "Focuses strictly on KPIs as the definition of success",
					result: 0
				},
				{
					id: 2,
					question: "Clearly defines budget requirements and sources",
					result: 0
				},
				{
					id: 3,
					question: "Prioritizes mobile based on scale, quality, and efficiency opportunity of mobile-acquired users",
					result: 0
				},
				{
					id: 4,
					question: "Bases optimization on cross-platform analyses, methodical test design, and iterative testing",
					result: 0
				},
				{
					id: 5,
					question: "Reports actionable analytics that consistently leverage an adserver and attribution modeling",
					result: 0
				},
				{
					id: 6,
					question: "Maintains a strong agency-client relationship based on transparency and open dialogue",
					result: 0
				}
			]
		},
		{
			id: 2,
			header: "My social / content marketing is:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Social / Content Marketing",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Social / Content Marketing",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Social / Content Marketing",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "Driven by insights about my customers, my business, and the real-time marketplace",
					result: 0
				},
				{
					id: 2,
					question: "Explicitly supportive of one or more of my core business priorities",
					result: 0
				},
				{
					id: 3,
					question: "Planned and managed strategically",
					result: 0
				},
				{
					id: 4,
					question: "Designed to use both discoverable and shareable content",
					result: 0
				},
				{
					id: 5,
					question: "Directly engaging to key stakeholders (including internal stakeholders like employees and the C-suite, as well as external stakeholder like customers and regulatory groups.)",
					result: 0
				}
			]
		},
		{
			id: 3,
			header: "My programmatic display is:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Programmatic Display",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Programmatic Display",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Programmatic Display",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "A platform/publisher-agnostic inventory and pricing strategy that balances reach with affinity",
					result: 0
				},
				{
					id: 2,
					question: "Targeted toward its audience and leverages multiple data sources",
					result: 0
				},
				{
					id: 3,
					question: "Continuously evaluating publishers to make sure money is following the best performer",
					result: 0
				},
				{
					id: 4,
					question: "A story, designed with creative sequencing and optimal recency and frequency",
					result: 0
				}
			]
		},
		{
			id: 4,
			header: "My paid social program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Paid Social Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Paid Social Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Paid Social Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "Maintains a clear and consistent account and campaign structure designed for relevance and efficient daily management",
					result: 0
				},
				{
					id: 2,
					question: "Includes mobile-only campaigns that employs creative assets for users’ mobile feeds and are supported by mobile landing pages",
					result: 0
				},
				{
					id: 3,
					question: "Displays creative formats, chosen based on how well they support the campaign’s objectives",
					result: 0
				},
				{
					id: 4,
					question: "Segments and targets audience on a variety of behavior metrics",
					result: 0
				}
			]
		},
		{
			id: 5,
			header: "My remarketing:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Remarketing",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Remarketing",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Remarketing",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "Establishes guidelines for how site visitor remarketing pools are defined and maintained",
					result: 0
				},
				{
					id: 2,
					question: "Takes a storytelling approach to creative sequencing",
					result: 0
				},
				{
					id: 3,
					question: "Pools targets based on behavioral and contextual targeting data",
					result: 0
				},
				{
					id: 4,
					question: "Tests platforms to incentivize publisher performance with longer-term commitments",
					result: 0
				}
			]
		},
		{
			id: 6,
			header: "My affiliate marketing program has:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Affiliate Marketing Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Affiliate Marketing Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Affiliate Marketing Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "Deal structures informed by a payout strategy geared toward strong publisher relationships",
					result: 0
				},
				{
					id: 2,
					question: "A recruitment strategy that balances high-volume discount publishers with more targeted niche publishers",
					result: 0
				},
				{
					id: 3,
					question: "Brand protection policies to ensure consistency and creative compliance",
					result: 0
				}
			]
		},
		{
			id: 7,
			header: "My paid search program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Paid Search Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Paid Search Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Paid Search Program",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					image: ""
				}		
			],
			choices: [
				{
					id: 1,
					question: "Provides a clear and consistent account and campaign structure designed for relevance and efficient daily management",
					result: 0
				},
				{
					id: 2,
					question: "Utilizes all relevant ad formats and extensions",
					result: 0
				},
				{
					id: 3,
					question: "Creatively tests and optimizes for specific devices",
					result: 0
				},
				{
					id: 4,
					question: "Includes a bidding strategy designed to support a single performance goal",
					result: 0
				},
				{
					id: 5,
					question: "Is optimized for efficiency to increase volume and ROI",
					result: 0
				}
			]
		}
		
	]
}

question_number = 0;

$("#start_quiz_form").validate({

    rules: {
	    name:{
		    required:true
	    },
	    email:{
		    required:true,
		    email:true
	    }
    },
	success: function(label, element){
		$(element).removeClass("form_error").siblings(".validation").show().removeClass("error").html("<i class='fa fa-check'></i>");
		
	},   
	highlight: function(element, errorClass) {
	    $(element).addClass("form_error");	
		$(element).siblings(".validation").show().addClass("error").html("<i class='fa fa-exclamation-triangle'></i>");
	},
    submitHandler: function (form) {
	    
        $("#start_quiz_form_error").html("Loading <i class='fa fa-spinner fa-spin'></i>");
		
		var full_name = $("#start_quiz_name").val();
 		var email = $("#start_quiz_email").val();
   
        var data = {
	        full_name: full_name,
	        email: email
        }; 
        
        quiz_array["name"] = full_name;
        quiz_array["email"] = email;
        
        ///send email and name somewhere.....
        /*
        $.ajax({
            type: "POST",
            url: "custom_script.php",
            data: data,
            success: function (res) {
				
				try
				{
				 	
				}
				catch(e)
				{
                 $("#start_quiz_form_error").html(e);
				} 
            }
        });
        */
                
        clearQuestions();
        nextQuestion();
         
    
        
        
        $("#start_page").fadeOut(500, function(){
	        $("#start_page").hide();
	        $("#quiz_page").fadeIn(500, function(){
		        $("#quiz_page").show();
	        });
        });

    }
});


function clearQuestions(){
	$("#question_area").empty();
	$("#question_header").empty();
	$("#question_subheader").empty();
}

function nextQuestion(){
	
	question_number++;
	
	
	
	
	var question; 
	var questions = quiz_array.questions;
	for(var i = 0; i< questions.length; i++){
			if(questions[i].id == question_number){
				question = questions[i];
			}
		}
	if(question_number <= questions.length){
		
		for(var i = 0; i< questions.length; i++){
			if(questions[i].id == question_number){
				question = questions[i];
			}
		}
		
		$("#question_header").html(question.header);
		$("#question_subheader").html(question.subheader);
		
		for(var i = 0; i< question.choices.length; i++){
			questionHTML(question.choices[i], question_number);
		}
		
		activateQuestion();
		getBottomButtons();
		

	}else{
		//finish quiz
		finishQuiz();
		
	}
}


function previousQuestion(){
	
	question_number--;

	var question; 
	var questions = quiz_array.questions;
	for(var i = 0; i< questions.length; i++){
		if(questions[i].id == question_number){
			question = questions[i];
		}
	}
	if(question_number > 0){
		
		for(var i = 0; i< questions.length; i++){
			if(questions[i].id == question_number){
				question = questions[i];
			}
		}
		
		$("#question_header").html(question.header);
		$("#question_subheader").html(question.subheader);
		
		for(var i = 0; i< question.choices.length; i++){
			questionHTML(question.choices[i], question_number);
		}
		
		activateQuestion();
		getBottomButtons();
		

	}
}

function getBottomButtons(){
	
	$("#progress_text_area").html("Question "+question_number+" of "+quiz_array.questions.length);
	
	var percent = (parseInt(question_number)/parseInt(quiz_array.questions.length))*100;
	$("#quiz_progress_bar .bar").css("width", percent+"%");
	
	
	switch(parseInt(question_number)){
		case 1:
		
			var html = "<a href='#' class='skip_button'>Skip</a> <a href='#' class='next_button'>Next</a>";
		
		break;
		
		default:
			var html = "<a href='#' class='previous_button'>Previous</a> <a href='#' class='skip_button'>Skip</a> <a href='#' class='next_button'>Next</a>";
		
		break;
		
		case quiz_array.questions.length:
			var html = "<a href='#' class='previous_button'>Previous</a> <a href='#' class='skip_button'>Skip</a> <a href='#' class='next_button'>Finish</a>";
		break;
	}
	
	$("#buttons_area").html(html);
	$("#quiz_error").empty();
	
	
	activateButtons()
	
	
}

function activateButtons(){
	
	$(".skip_button").unbind("click");
	$(".skip_button").click(function(e){
		e.preventDefault();
		
		$("#quiz_page").fadeOut(500, function(){
	        clearQuestions();
	        nextQuestion();
	      // finishQuiz();
	        $("#quiz_page").fadeIn(500)
        });
		
	});
	
	
	$(".next_button").unbind("click");
	$(".next_button").click(function(e){
		e.preventDefault();
		
		var found = false;
		
		$(".question_item").each(function(){
			if($(this).attr("data-result") == 0){
				found = true;
			}
		});
		
		if(found != true){
			$("#quiz_page").fadeOut(500, function(){
		        clearQuestions();
		        nextQuestion();
		        $("#quiz_page").fadeIn(500)
	        });
		}else{
			$("#quiz_error").html("Please rate each item to continue.");
		}
		
		
	});
	
	$(".previous_button").unbind("click");
	$(".previous_button").click(function(e){
		e.preventDefault();
		
		$("#quiz_page").fadeOut(500, function(){
	        clearQuestions();
	        previousQuestion();
	        $("#quiz_page").fadeIn(500)
        });
		
	});
	
	
	
	
}

function questionHTML(data, question_id){
	
	
	var choices_html = "";
	var choice_result = data.result;
	
	
	for(var i = 1; i<6; i++){
		var selected = "";
		if(choice_result == i){
			selected = "selected";
		}
		choices_html += "<a href='#' class='question_choice_item "+selected+"' data-question_id='"+question_id+"' data-id='"+data.id+"' data-value='"+i+"'>"+
							"<div class='question_choice_item_inner'>"+
								i+
							"</div>"
						"</a>";
	}
	
	var html = "<div class='question_item' data-question_id='"+question_id+"' data-id='"+data.id+"' data-result='"+choice_result+"'>"+
					"<div class='question_header'>"+
						"<div class='question_header_inner'>"+
							data.question+
						"</div>"+
					"</div>"+
					"<div class='question_choices'>"+
						choices_html+
					"</div>"+
					
			   "</div>";
	
	$("#question_area").append(html);
}

function activateQuestion(){
	
	$(".question_choice_item").unbind("click");
	$(".question_choice_item").click(function(e){
		
		e.preventDefault();
		var button = this;
		var question_id = $(button).data("question_id");
		var choice_id = $(button).data("id");
		var choice_result = $(button).data("value");
		
		$(".question_choice_item").each(function(){
			if($(this).data("question_id") == question_id && $(this).data("id") == choice_id){
				$(this).removeClass("selected");
			}
		});
		
		$(".question_item").each(function(){
			if($(this).data("question_id") == question_id && $(this).data("id") == choice_id){
				$(this).attr("data-result", choice_result);
			}
		});
		
		for(var i = 0; i< quiz_array.questions.length; i++){
			if(quiz_array.questions[i].id == question_id){
				for(var j = 0; j< quiz_array.questions[i].choices.length; j++){
					if(quiz_array.questions[i].choices[j].id == choice_id){
						quiz_array.questions[i].choices[j].result = choice_result;
					}
				}

			}
		}
		$(button).addClass("selected");
		
	});

}


function finishQuiz(){
	$("#quiz_page").remove();
	
	getResults();
	displayResults();
	
	$("#results_page").fadeIn(500, function(){
		
        $("#results_page").show();
    });
    
    
}

function getResults(){
	
	quiz_array.completed_quiz = true;
	
	var overall_possible = 0;
	var overall_results = 0;
	
	for(var i = 0; i<quiz_array.questions.length; i++){
		
		
		var total_possible = 0;
		var results = 0;
		
		for(var j = 0; j<quiz_array.questions[i].choices.length; j++){
			total_possible = total_possible + 5;
			overall_possible = overall_possible +5;
			results = results + parseInt(quiz_array.questions[i].choices[j].result);
			overall_results = overall_results + parseInt(quiz_array.questions[i].choices[j].result);
		}
		
		var percent = (results/total_possible)*100;
		quiz_array.questions[i].total_possible = total_possible;
		quiz_array.questions[i].results = results;
		quiz_array.questions[i].percent = percent;

	}
	
	overall_percent = (overall_results/overall_possible)*100;
	quiz_array.total_possible = overall_possible;
	quiz_array.results = overall_results;
	quiz_array.percent = overall_percent;
}

function displayResults(){

	var total_result_header = "";
	var total_result_description = "";
	var total_result_color_class = "";
	
	var total_percent = quiz_array.percent;
	
	for(var i = 0; i<quiz_array.result_options.length; i++){
		if((total_percent >= quiz_array.result_options[i].min && total_percent < quiz_array.result_options[i].max) || (total_percent == quiz_array.result_options[i].max && total_percent == 100)){
			total_result_header = quiz_array.result_options[i].title;
			total_result_description = quiz_array.result_options[i].description;
			total_result_color_class = quiz_array.result_options[i].color_class;
		}
	}
	
	$("#results_header").html(total_result_header);
	$("#results_description").html(total_result_description);
	$("#total_percent_border").addClass(total_result_color_class);
	$("#total_percent_inner").html(parseFloat(total_percent).toFixed(0));
	
	
	
	for(var i = 0; i<quiz_array.questions.length; i++){
		data = quiz_array.questions[i];
		resultHTML(data);
		
	}
	
	$("#share_email_button").attr("href", "mailto:?subject=Subject of email&body=I scored a "+parseFloat(total_percent).toFixed(0)+" percent on this quiz.  Add more copy. Here is the link: http://www.website.com.");
	
}

function resultHTML(data){
	
	var result_header = "";
	var result_description = "";
	var result_color_class = "";
	var result_image = "";
	
	var result_percent = data.percent;
	
	for(var i = 0; i<data.result_options.length; i++){
		if((result_percent >= data.result_options[i].min && result_percent < data.result_options[i].max) || (result_percent == data.result_options[i].max && result_percent == 100)){
			result_header = data.result_options[i].title;
			result_description = data.result_options[i].description;
			result_image = data.result_options[i].image;
			result_color_class = data.result_options[i].color_class;
		}
	}
	
	var html = "<div class='results_box'>"+
					"<div class='results_box_inner'>"+
						"<h4 class='uppercase text_wrapper'>"+result_header+" <span class='pull-right'> "+parseFloat(result_percent).toFixed(0)+"%</span></h4>"+
						'<div class="progress '+result_color_class+'">'+
						  	'<div class="bar" style="width: '+result_percent+'%;"></div>'+
						'</div>'+
						"<div class='row-fluid text_wrapper'>"+
							"<div class='span4'>"+
								"<img src='"+result_image+"'>"+
							"</div>"+
							"<div class='span8'>"+
								result_description+
							"</div>"+
						"</div>"+
					"</div>"+
			   "</div>";
	
	$("#results_area").append(html);
}
