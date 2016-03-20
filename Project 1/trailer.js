function installListeners() 
{	
	var hiddenElemClass = "hidden-element";
	document.getElementById("trailer1").onclick = function() {
		var playerVideo = document.getElementById("player-video1");

		var classes = playerVideo.className;
		var indexOfHiddenElemClass = classes.indexOf(hiddenElemClass);
		
		if(indexOfHiddenElemClass > -1)
		{
			var newClasses = classes.substr(0, indexOfHiddenElemClass) + classes.substr(indexOfHiddenElemClass + hiddenElemClass.length);
			
			playerVideo.className = newClasses;
		}
		else
		{
			playerVideo.className += " " + hiddenElemClass;
		}
	};
	
	document.getElementById("trailer2").onclick = function() {
		var playerVideo = document.getElementById("player-video2");

		var classes = playerVideo.className;
		var indexOfHiddenElemClass = classes.indexOf(hiddenElemClass);
		
		if(indexOfHiddenElemClass > -1)
		{
			var newClasses = classes.substr(0, indexOfHiddenElemClass) + classes.substr(indexOfHiddenElemClass + hiddenElemClass.length);
			
			playerVideo.className = newClasses;
		}
		else
		{
			playerVideo.className += " " + hiddenElemClass;
		}
	};
	
	document.getElementById("trailer3").onclick = function() {
		var playerVideo = document.getElementById("player-video3");

		var classes = playerVideo.className;
		var indexOfHiddenElemClass = classes.indexOf(hiddenElemClass);
		
		if(indexOfHiddenElemClass > -1)
		{
			var newClasses = classes.substr(0, indexOfHiddenElemClass) + classes.substr(indexOfHiddenElemClass + hiddenElemClass.length);
			
			playerVideo.className = newClasses;
		}
		else
		{
			playerVideo.className += " " + hiddenElemClass;
		}
	};
	
	document.getElementById("trailer4").onclick = function() {
		var playerVideo = document.getElementById("player-video4");

		var classes = playerVideo.className;
		var indexOfHiddenElemClass = classes.indexOf(hiddenElemClass);
		
		if(indexOfHiddenElemClass > -1)
		{
			var newClasses = classes.substr(0, indexOfHiddenElemClass) + classes.substr(indexOfHiddenElemClass + hiddenElemClass.length);
			
			playerVideo.className = newClasses;
		}
		else
		{
			playerVideo.className += " " + hiddenElemClass;
		}
	};
	
	document.getElementById("trailer5").onclick = function() {
		var playerVideo = document.getElementById("player-video5");

		var classes = playerVideo.className;
		var indexOfHiddenElemClass = classes.indexOf(hiddenElemClass);
		
		if(indexOfHiddenElemClass > -1)
		{
			var newClasses = classes.substr(0, indexOfHiddenElemClass) + classes.substr(indexOfHiddenElemClass + hiddenElemClass.length);
			
			playerVideo.className = newClasses;
		}
		else
		{
			playerVideo.className += " " + hiddenElemClass;
		}
	};
}
window.onload = installListeners;