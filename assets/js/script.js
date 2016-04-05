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
	questions: [
		{
			id: 1,
			header: "Overall, my existing performance marketing program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "Focuses strictly on KPIs as the definition of success",
					result: 1
				},
				{
					id: 2,
					question: "Clearly defines budget requirements and sources",
					result: 1
				},
				{
					id: 3,
					question: "Prioritizes mobile based on scale, quality, and efficiency opportunity of mobile-acquired users",
					result: 1
				},
				{
					id: 4,
					question: "Bases optimization on cross-platform analyses, methodical test design, and iterative testing",
					result: 1
				},
				{
					id: 5,
					question: "Reports actionable analytics that consistently leverage an adserver and attribution modeling",
					result: 1
				},
				{
					id: 6,
					question: "Maintains a strong agency-client relationship based on transparency and open dialogue",
					result: 1
				}
			]
		},
		{
			id: 2,
			header: "My social / content marketing is:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "Driven by insights about my customers, my business, and the real-time marketplace",
					result: 1
				},
				{
					id: 2,
					question: "Explicitly supportive of one or more of my core business priorities",
					result: 1
				},
				{
					id: 3,
					question: "Planned and managed strategically",
					result: 1
				},
				{
					id: 4,
					question: "Designed to use both discoverable and shareable content",
					result: 1
				},
				{
					id: 5,
					question: "Directly engaging to key stakeholders (including internal stakeholders like employees and the C-suite, as well as external stakeholder like customers and regulatory groups.)",
					result: 1
				}
			]
		},
		{
			id: 3,
			header: "My programmatic display is:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "A platform/publisher-agnostic inventory and pricing strategy that balances reach with affinity",
					result: 1
				},
				{
					id: 2,
					question: "Targeted toward its audience and leverages multiple data sources",
					result: 1
				},
				{
					id: 3,
					question: "Continuously evaluating publishers to make sure money is following the best performer",
					result: 1
				},
				{
					id: 4,
					question: "A story, designed with creative sequencing and optimal recency and frequency",
					result: 1
				}
			]
		},
		{
			id: 4,
			header: "My paid social program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "Maintains a clear and consistent account and campaign structure designed for relevance and efficient daily management",
					result: 1
				},
				{
					id: 2,
					question: "Includes mobile-only campaigns that employs creative assets for users’ mobile feeds and are supported by mobile landing pages",
					result: 1
				},
				{
					id: 3,
					question: "Displays creative formats, chosen based on how well they support the campaign’s objectives",
					result: 1
				},
				{
					id: 4,
					question: "Segments and targets audience on a variety of behavior metrics",
					result: 1
				}
			]
		},
		{
			id: 5,
			header: "My remarketing:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "Establishes guidelines for how site visitor remarketing pools are defined and maintained",
					result: 1
				},
				{
					id: 2,
					question: "Takes a storytelling approach to creative sequencing",
					result: 1
				},
				{
					id: 3,
					question: "Pools targets based on behavioral and contextual targeting data",
					result: 1
				},
				{
					id: 4,
					question: "Tests platforms to incentivize publisher performance with longer-term commitments",
					result: 1
				}
			]
		},
		{
			id: 6,
			header: "My affiliate marketing program has:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "Deal structures informed by a payout strategy geared toward strong publisher relationships",
					result: 1
				},
				{
					id: 2,
					question: "A recruitment strategy that balances high-volume discount publishers with more targeted niche publishers",
					result: 1
				},
				{
					id: 3,
					question: "Brand protection policies to ensure consistency and creative compliance",
					result: 1
				}
			]
		},
		{
			id: 7,
			header: "My paid search program:",
			subheader: "Please rate each item from 1 to 5. 5 is the best score and 1 is the lowest.",
			choices: [
				{
					id: 1,
					question: "Provides a clear and consistent account and campaign structure designed for relevance and efficient daily management",
					result: 1
				},
				{
					id: 2,
					question: "Utilizes all relevant ad formats and extensions",
					result: 1
				},
				{
					id: 3,
					question: "Creatively tests and optimizes for specific devices",
					result: 1
				},
				{
					id: 4,
					question: "Includes a bidding strategy designed to support a single performance goal",
					result: 1
				},
				{
					id: 5,
					question: "Is optimized for efficiency to increase volume and ROI",
					result: 1
				}
			]
		}
		
	]
}
console.log(quiz_array);

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
         
    
        
        
        $("#start_page").fadeOut(500, function(){
	        $("#start_page").hide();
	        $("#quiz_page").fadeIn(500, function(){
		        $("#quiz_page").show();
	        });
        });

    }
});


