function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var salary = 0;
	var gender = 1;
	var multiplier = 0.013;

	
	if (question2 == "Allianz Global Investors"){
		multiplier += 0.31;
	}
	
	if (question2 == "Aviva Investors"){
		multiplier += 0.21;
	}
	
	if (question2 == "AXA Investment Managers"){
		multiplier += 0.272;
	}
	
	if (question2 == "Baillie Gifford	"){
		multiplier += 0.179;
	}
	
	if (question2 == "Baring Asset Management"){
		multiplier += 0.29;
	}
	
	if (question2 == "BlackRock"){
		multiplier += 0.28;
	}
	
	if (question2 == "Bluebay Asset Management"){
		multiplier += 0.088;
	}
	
	if (question2 == "Columbia Threadneedle Investments"){
		multiplier += 0.254;
	}
	
	if (question2 == "F and C Asset Management"){
		multiplier += 0.34;
	}
	
	if (question2 == "Fidelity International"){
		multiplier += 0.254;
	}
	
	if (question2 == "First State Investments"){
		multiplier += 0.308;
	}
	
	if (question2 == "Franklin Templeton Global Investors"){
		multiplier += 0.204;
	}
	
	if (question2 == "Hermes Fund Managers"){
		multiplier += 0.244;
	}
	
	if (question2 == "HSBC Global Asset Management"){
		multiplier += 0.39;
	}
	
	if (question2 == "Insight Investment"){
		multiplier += 0.32;
	}
	
	if (question2 == "Invesco"){
		multiplier += 0.3;
	}
	
	if (question2 == "Investec Asset Management"){
		multiplier += 0.434;
	}
	
	if (question2 == "Janus Henderson"){
		multiplier += 0.327;
	}
	
	if (question2 == "JPMorgan Asset Management"){
		multiplier += 0.22;
	}
	
	if (question2 == "Jupiter Asset Management"){
		multiplier += 0.25;
	}
	
	if (question2 == "Kames Capital"){
		multiplier += 0.403;
	}
	
	if (question2 == "Legal and General Investment Management"){
		multiplier += 0.214;
	}

	if (question2 == "Man Group"){
		multiplier += 0.275;
	}
	
	if (question2 == "Newton Investment Management"){
		multiplier += 0.20;
	}
	
	if (question2 == "Northern Trust"){
		multiplier += 0.152;
	}
	
	if (question2 == "Old Mutual Global Investors"){
		multiplier += 0.31;
	}
	
	if (question2 == "Pictet Asset Management"){
		multiplier += 0.31;
	}
	
	if (question2 == "Pimco"){
		multiplier += 0.39;
	}
	
	if (question2 == "Schroders"){
		multiplier += 0.31;
	}
	
	if (question2 == "SEI Investments"){
		multiplier += 0.22;
	}
	
	if (question2 == "SLA Aberdeen Asset Management"){
		multiplier += 0.37;
	}
	
	if (question2 == "SLA Standard Life"){
		multiplier += 0.37;
	}
	
	if (question2 == "State Street Global Advisors"){
		multiplier += 0.118;
	}
	
	if (question2 == "T Rowe Price"){
		multiplier += 0.341;
	}
	
	if (question2 == "Vanguard"){
		multiplier += 0.239;
	}
	
	if (question2 == "Wellington Management International"){
		multiplier += 0.447;
	}
	
	if (question2 == "Winton Group"){
		multiplier += 0.224;
	}
	
	if (question2 == "other asset manager"){
		multiplier += 0.285;
	}
	
	if (question1 == "Man") {
		salary += question3 * (gender - multiplier);
	}
	if (question1 == "Woman") {
		salary += question3 * (gender + multiplier);
	}

	
	
	if (question1 == "Man") {
		document.getElementById("message").innerHTML = "You would make $" + salary + " if you were a woman at " + question2 + " in the US*.";
	}
	if (question1 == "Woman") {
		document.getElementById("message").innerHTML = "You would make $" + salary + " if you were a man at " + question2 + " in the US*.";
	}
}