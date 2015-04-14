
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var saveButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock
	
// eventHandlers// @lock

	saveButton.click = function saveButton_click (event)// @startlock
	{// @endlock
		sources.allPeople.save({
			onSuccess: function(e){
				alert("Employer updated");	
			}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//load the company choices list followed by the people list
		sources.allCompanies.all({
			onSuccess: function(e){
				console.log ("on allCompanies loaded")
				//load all people
				sources.allPeople.all({
					onSuccess: function(event){
						console.log('on allPeople loaded')
					}
				});
			}
		});
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("saveButton", "click", saveButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
