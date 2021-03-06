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
	downloaded_quiz: false,
	total_possible: 0,
	results: 0,
	percent: 0,
	result_options:[
		{
			min: 0,
			max:49,
			color_class: "red",
			title: "You can do better...",
			description: "Thanks for taking our quiz! Your results below will highlight your strengths and areas for improvement. We strongly recommend downloading and sharing your results with your team to make sure you’re all aligned on next steps. We'll be in touch with you shortly to discuss the results of your assessment in more detail. If you have any questions in the meantime, feel free to reach out to us at <a href='mailto:diagnostics@houseofkaizen.com'>diagnostics@houseofkaizen.com</a>.",
			image: ""
		},
		{
			min: 50,
			max:74,
			color_class: "yellow",
			title: "You&rsquo;re on the right track!",
			description: "Thanks for taking our quiz! Your results below will highlight your strengths and areas for improvement. We strongly recommend downloading and sharing your results with your team to make sure you’re all aligned on next steps. We'll be in touch with you shortly to discuss the results of your assessment in more detail. If you have any questions in the meantime, feel free to reach out to us at <a href='mailto:diagnostics@houseofkaizen.com'>diagnostics@houseofkaizen.com</a>.",
			image: ""
		},
		{
			min: 75,
			max:100,
			color_class: "green",
			title: "Lookin&rsquo; pretty good!",
			description: "Thanks for taking our quiz! Your results below will highlight your strengths and areas for improvement. We strongly recommend downloading and sharing your results with your team to make sure you’re all aligned on next steps. We'll be in touch with you shortly to discuss the results of your assessment in more detail. If you have any questions in the meantime, feel free to reach out to us at <a href='mailto:diagnostics@houseofkaizen.com'>diagnostics@houseofkaizen.com</a>.",
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
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Existing Performance",
					description: "You skipped this question! When evaluating your existing performance marketing program, keep in mind that it should focus on key performance indicators, have a clearly defined budget requirement, and prioritize mobile based on scale, quality, and efficiency. Optimization should be based on cross-platform analyses, methodical test design, and iterative testing. Your program should report actionable analytics. Most important, you should maintain a strong client-agency relationship that is based on transparency and open dialogue!",
					image: "assets/img/icons/thumb.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Existing Performance",
					description: "You skipped this question! When evaluating your existing performance marketing program, keep in mind that it should focus on key performance indicators, have a clearly defined budget requirement, and prioritize mobile based on scale, quality, and efficiency. Optimization should be based on cross-platform analyses, methodical test design, and iterative testing. Your program should report actionable analytics. Most important, you should maintain a strong client-agency relationship that is based on transparency and open dialogue!",
					image: "assets/img/icons/thumb.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Existing Performance",
					description: "You skipped this question! When evaluating your existing performance marketing program, keep in mind that it should focus on key performance indicators, have a clearly defined budget requirement, and prioritize mobile based on scale, quality, and efficiency. Optimization should be based on cross-platform analyses, methodical test design, and iterative testing. Your program should report actionable analytics. Most important, you should maintain a strong client-agency relationship that is based on transparency and open dialogue!",
					image: "assets/img/icons/thumb.svg"
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
					question: "Has clearly defined budget requirements and sources",
					result: 0
				},
				{
					id: 3,
					question: "Prioritizes mobile customer acquisition according to opportunities of scale, quality and / or efficiency",
					result: 0
				},
				{
					id: 4,
					question: "Is optimized based on cross-platform analyses, methodical test designs and iterative testing",
					result: 0
				},
				{
					id: 5,
					question: "Depends on an adserver and attribution modeling to provide actionable reporting and measurement",
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
			header: "My Social / Content Marketing activities are:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Social / Content Marketing",
					description: "You skipped this question! If you’re interested in social and content marketing, note that your efforts should be driven by insights about your customers, explicitly supportive of your core business priorities, and strategically planned and managed. You should design your campaigns to use discoverable and shareable content. Most important, your content should be directly engaging to key stakeholders.",
					image: "assets/img/icons/eye.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Social / Content Marketing",
					description: "You skipped this question! If you’re interested in social and content marketing, note that your efforts should be driven by insights about your customers, explicitly supportive of your core business priorities, and strategically planned and managed. You should design your campaigns to use discoverable and shareable content. Most important, your content should be directly engaging to key stakeholders.",
					image: "assets/img/icons/eye.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Social / Content Marketing",
					description: "You skipped this question! If you’re interested in social and content marketing, note that your efforts should be driven by insights about your customers, explicitly supportive of your core business priorities, and strategically planned and managed. You should design your campaigns to use discoverable and shareable content. Most important, your content should be directly engaging to key stakeholders.",
					image: "assets/img/icons/eye.svg"
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
					question: "Designed explicitly to support one or more of my core business priorities…",
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
					question: "Directly engages key stakeholders, both internally and externally (e.g., the C-suite, customers, etc.)",
					result: 0
				}
			]
		},
		{
			id: 3,
			header: "My performance display program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Programmatic Display",
					description: "You skipped this question! If you’re interested in programmatic display, first make sure that you are using a platform or publisher-agnostic inventory and pricing strategy that balances reach with affinity. You should use audience targeting and segmentation that leverages multiple data sources, and you should engage in continuous publisher testing and evaluation to ensure that money always follows the best performer. Your programmatic display should take a storytelling approach to creative sequencing and optimize recency and frequency.",
					image: "assets/img/icons/computer.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Programmatic Display",
					description: "You skipped this question! If you’re interested in programmatic display, first make sure that you are using a platform or publisher-agnostic inventory and pricing strategy that balances reach with affinity. You should use audience targeting and segmentation that leverages multiple data sources, and you should engage in continuous publisher testing and evaluation to ensure that money always follows the best performer. Your programmatic display should take a storytelling approach to creative sequencing and optimize recency and frequency.",
					image: "assets/img/icons/computer.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Programmatic Display",
					description: "You skipped this question! If you’re interested in programmatic display, first make sure that you are using a platform or publisher-agnostic inventory and pricing strategy that balances reach with affinity. You should use audience targeting and segmentation that leverages multiple data sources, and you should engage in continuous publisher testing and evaluation to ensure that money always follows the best performer. Your programmatic display should take a storytelling approach to creative sequencing and optimize recency and frequency.",
					image: "assets/img/icons/computer.svg"
				}
			],
			choices: [
				{
					id: 1,
					question: "Is publisher agnostic and follows an investment strategy designed to balance reach with affinity",
					result: 0
				},
				{
					id: 2,
					question: "Leverages multiple data sources for audience targeting and segmentation",
					result: 0
				},
				{
					id: 3,
					question: "Ensure that money follows the best performer by continuously evaluating publishers against one another",
					result: 0
				},
				{
					id: 4,
					question: "Sequences creative for storytelling and balances recency and frequency",
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
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Paid Social Program",
					description: "You skipped this question! If you’re considering a paid social program, make sure it maintains a clear and consistent account and campaign structure that includes a mobile-only campaign. The campaign should display creative formats that are chosen on the basis of how well they support its objectives. Most important, the paid social program should be segmented and should target your audience using a variety of behavior metrics.",
					image: "assets/img/icons/card.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Paid Social Program",
					description: "You skipped this question! If you’re considering a paid social program, make sure it maintains a clear and consistent account and campaign structure that includes a mobile-only campaign. The campaign should display creative formats that are chosen on the basis of how well they support its objectives. Most important, the paid social program should be segmented and should target your audience using a variety of behavior metrics.",
					image: "assets/img/icons/card.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Paid Social Program",
					description: "You skipped this question! If you’re considering a paid social program, make sure it maintains a clear and consistent account and campaign structure that includes a mobile-only campaign. The campaign should display creative formats that are chosen on the basis of how well they support its objectives. Most important, the paid social program should be segmented and should target your audience using a variety of behavior metrics.",
					image: "assets/img/icons/card.svg"
				}
			],
			choices: [
				{
					id: 1,
					question: "Facilitates efficient daily management and aligns with searcher intent with a clear and consistent account and campaign structure",
					result: 0
				},
				{
					id: 2,
					question: "Employs campaigns specifically optimized for mobile users and are supported by mobile landing pages",
					result: 0
				},
				{
					id: 3,
					question: "Uses creative formats based on how aligned they are with a campaign’s objectives (i.e., lead gen, traffic volume, etc.)",
					result: 0
				},
				{
					id: 4,
					question: "Establishes behavior-driven audience targeting and segmentation supported by a variety of data sources (1st, 2nd and 3rd party)",
					result: 0
				}
			]
		},
		{
			id: 5,
			header: "My Remarketing activities:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Remarketing",
					description: "You skipped this question! If you’re considering remarketing, you should have established guidelines for defining and maintaining site visitor remarketing pools. Your remarketing should take a storytelling approach to creative sequencing, and your pools should target on the basis of behavioral and contextual targeting data. You should test platforms to incentivize publisher performance with long-term commitments.",
					image: "assets/img/icons/arrow.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Remarketing",
					description: "You skipped this question! If you’re considering remarketing, you should have established guidelines for defining and maintaining site visitor remarketing pools. Your remarketing should take a storytelling approach to creative sequencing, and your pools should target on the basis of behavioral and contextual targeting data. You should test platforms to incentivize publisher performance with long-term commitments.",
					image: "assets/img/icons/arrow.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Remarketing",
					description: "You skipped this question! If you’re considering remarketing, you should have established guidelines for defining and maintaining site visitor remarketing pools. Your remarketing should take a storytelling approach to creative sequencing, and your pools should target on the basis of behavioral and contextual targeting data. You should test platforms to incentivize publisher performance with long-term commitments.",
					image: "assets/img/icons/arrow.svg"
				}
			],
			choices: [
				{
					id: 1,
					question: "Has established guidelines for how on-site remarketing pools are defined and maintained",
					result: 0
				},
				{
					id: 2,
					question: "Takes a storytelling approach to creative sequencing",
					result: 0
				},
				{
					id: 3,
					question: "Enhances remarketing pools with behavioral and contextual targeting data",
					result: 0
				},
				{
					id: 4,
					question: "Incentivizes performance from proven publishers with longer-term commitments",
					result: 0
				}
			]
		},
		{
			id: 6,
			header: "My affiliate marketing activity has:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			total_possible: 0,
			results: 0,
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Affiliate Marketing Program",
					description: "You skipped this question! If you’re interested in affiliate marketing, be sure that your deal structures are informed by a payout strategy geared toward strong publisher relationships. You should use a recruitment strategy that balances high-volume discount publishers with more targeted niche publishers. Above all, you should have very clear brand-protection policies to ensure consistency and creative compliance. ",
					image: "assets/img/icons/person.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Affiliate Marketing Program",
					description: "You skipped this question! If you’re interested in affiliate marketing, be sure that your deal structures are informed by a payout strategy geared toward strong publisher relationships. You should use a recruitment strategy that balances high-volume discount publishers with more targeted niche publishers. Above all, you should have very clear brand-protection policies to ensure consistency and creative compliance. ",
					image: "assets/img/icons/person.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Affiliate Marketing Program",
					description: "You skipped this question! If you’re interested in affiliate marketing, be sure that your deal structures are informed by a payout strategy geared toward strong publisher relationships. You should use a recruitment strategy that balances high-volume discount publishers with more targeted niche publishers. Above all, you should have very clear brand-protection policies to ensure consistency and creative compliance. ",
					image: "assets/img/icons/person.svg"
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
			skipped: false,
			percent: 0,
			result_options:[
				{
					min: 0,
					max:49,
					color_class: "red",
					title: "Paid Search Program",
					description: "You skipped this question! If you want to participate in a paid search program, ensure that your strategy provides a clear, consistent account and campaign structure that utilizes all relevant ad formats and extensions. It is very important that your program creatively tests and optimizes for specific devices. Your campaign should include a bidding strategy that is designed to support a single performance goal and is optimized for efficiency to increase return on investment.",
					image: "assets/img/icons/glass.svg"
				},
				{
					min: 50,
					max:74,
					color_class: "yellow",
					title: "Paid Search Program",
					description: "You skipped this question! If you want to participate in a paid search program, ensure that your strategy provides a clear, consistent account and campaign structure that utilizes all relevant ad formats and extensions. It is very important that your program creatively tests and optimizes for specific devices. Your campaign should include a bidding strategy that is designed to support a single performance goal and is optimized for efficiency to increase return on investment.",
					image: "assets/img/icons/glass.svg"
				},
				{
					min: 75,
					max:100,
					color_class: "green",
					title: "Paid Search Program",
					description: "You skipped this question! If you want to participate in a paid search program, ensure that your strategy provides a clear, consistent account and campaign structure that utilizes all relevant ad formats and extensions. It is very important that your program creatively tests and optimizes for specific devices. Your campaign should include a bidding strategy that is designed to support a single performance goal and is optimized for efficiency to increase return on investment.",
					image: "assets/img/icons/glass.svg"
				}
			],
			choices: [
				{
					id: 1,
					question: "Facilitates efficient daily management and aligns with searcher intent with a clear and consistent account and campaign structure",
					result: 0
				},
				{
					id: 2,
					question: "Utilizes all relevant ad formats and extensions",
					result: 0
				},
				{
					id: 3,
					question: "Runs device-specific creative testing to inform optimizations",
					result: 0
				},
				{
					id: 4,
					question: "Has an established bidding strategy designed to support a single performance goal",
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


        saveResults()


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

		for(var i = 0; i< quiz_array.questions.length; i++){
			if(quiz_array.questions[i].id == question_number){
				quiz_array.questions[i].skipped = true;
			}
		}

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

			for(var i = 0; i< quiz_array.questions.length; i++){
				if(quiz_array.questions[i].id == question_number){
					quiz_array.questions[i].skipped = false;
				}
			}

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
				results = results + parseInt(quiz_array.questions[i].choices[j].result);

				if(quiz_array.questions[i].skipped != true){
					overall_possible = overall_possible +5;
					overall_results = overall_results + parseInt(quiz_array.questions[i].choices[j].result);
				}
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

	saveResults();
}

function displayResults(){

	var total_result_header = "";
	var total_result_description = "";
	var total_result_color_class = "";

	var total_percent = quiz_array.percent;
	if(isNaN(total_percent)){
		total_percent = 0;
	}

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


	if(isNaN(total_percent)){
		$("#total_percent_inner").html("0");
	}else{
		$("#total_percent_inner").html(parseFloat(total_percent).toFixed(0));
	}



	for(var i = 0; i<quiz_array.questions.length; i++){
		data = quiz_array.questions[i];
		resultHTML(data);

	}

	activatePDF();

}

function resultHTML(data){

	var result_header = "";
	var result_description = "";
	var result_color_class = "";
	var result_image = "";

	var result_percent = data.percent;

	var skipped = data.skipped;

	var improvement_html = "";
	var highest_html = "";

	for(var i = 0; i<data.result_options.length; i++){
		if((result_percent >= data.result_options[i].min && result_percent < data.result_options[i].max) || (result_percent == data.result_options[i].max && result_percent == 100)){
			result_header = data.result_options[i].title;
			result_description = data.result_options[i].description;
			result_image = data.result_options[i].image;
			result_color_class = data.result_options[i].color_class;
		}
	}

	for(var i = 0; i<data.choices.length; i++){

		if(data.choices[i].result <= 3){

			if(improvement_html == ""){
				improvement_html +="<p>Focus on these areas for improvement:</p><ul>"
			}
			improvement_html += "<li>"+data.choices[i].question+"</li>";

		}else{

			if(highest_html == ""){
				highest_html +="<p>You scored highest in these areas: </p><ul>"
			}
			highest_html += "<li>"+data.choices[i].question+"</li>";

		}
	}

	if(improvement_html != ""){
		improvement_html += "</ul>";
	}
	if(highest_html != ""){
		highest_html += "</ul>";
	}



	if(skipped == true){

		var html = "<div class='results_box'>"+
						"<div class='results_box_inner'>"+
							"<h4 class='uppercase text_wrapper'>"+result_header+" <span class='pull-right skipped_class'>Skipped</span></h4>"+
							'<div class="progress gray">'+
							  	'<div class="bar" style="width: 0%;"></div>'+
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
	}else{

		var html = "<div class='results_box'>"+
				"<div class='results_box_inner'>"+
					"<h4 class='uppercase text_wrapper'>"+result_header+" <span class='pull-right'> "+parseFloat(result_percent).toFixed(0)+"%</span></h4>"+
					'<div class="progress '+result_color_class+'">'+
					  	'<div class="bar" style="width: '+result_percent+'%;"></div>'+
					'</div>'+
					"<div class='row-fluid text_wrapper'>"+
						"<div class='span4 result_image'>"+
							"<img src='"+result_image+"'>"+
						"</div>"+
						"<div class='span8'>"+
							improvement_html+
							highest_html+
						"</div>"+
					"</div>"+
				"</div>"+
		   "</div>";

	}

	$("#results_area").append(html);
}





function activatePDF(){



	$("#download_button").unbind("click");
	$("#download_button").click(function(e){
		e.preventDefault();
			quiz_array.downloaded_quiz = true;
			saveResults();

			$(window).scrollTop(0);
			setTimeout(function(){

				$("#pdf_export").css("background", "white");
				$("#total_percent_wrapper").addClass("temp");
				html2canvas($("#pdf_export")).then(function(canvas) {

					var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
					var link = document.createElement('a');
				    link.download = "HOK-results.png";
				    link.href = image;
				    link.click();
					$("#pdf_export").css("background", "transparent");
					$("#total_percent_wrapper").removeClass("temp");
				});



			}, 100)

	});

}

function saveResults(){
	///send email and name somewhere...
    $.ajax({
        type: "POST",
        url: "https://zapier.com/hooks/catch/1226981/2vao5q/",
        data: quiz_array,
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
}
