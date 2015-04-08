var itemsArray = ['check emails', 'drop kids at school', 'go to gym'];
var displayItems = document.getElementById('todoDiv');

function printItems() 
{	
	displayItems.innerHTML = '';
	
	for (var i = 0; i <= itemsArray.length - 1; i++) 
	{
		displayItems.innerHTML += i+1 + " " + itemsArray[i] + "<br/>";
	}
}

function addFunc() {
	var itemToAdd = prompt("Add an item", "e.g., pick up milk");
	itemsArray.push(itemToAdd);
	printItems();
}

function removeFunc() {
	var itemToRemove = prompt("Which item # have you completed", "for e.g., 1,3.. etc");
	itemsArray.splice(itemToRemove-1, 1);
	printItems();
}

printItems();