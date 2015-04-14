ds.Person.remove();
ds.Company.remove();

for(var i = 0; i < 10; i++){
	new ds.Company({name: "Company" + i}).save();
}

for(var i = 0; i < 1000; i++){
	var theEmployer = ds.Company.all()[Math.floor(Math.random() * (10))];
	var thePerson = new ds.Person({
		firstName: "First" + i,
		lastName: "Last" + i,
		employer: theEmployer
	});
	thePerson.save();
}