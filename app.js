objs = [
	{
		name: "Sumit",
		age: 21,
		city: "Kolkata",
		salary: 20000
	},
	
	{
		name: "Karim",
		age: 26,
		city: "Delhi",
		salary: 35000
	},
	
	{
		name: "Azaad",
		age: 31,
		city: "Mumbai",
		salary: 30000
	},
	
	{
		name: "Shreyas",
		age: 40,
		city: "Bangalore",
		salary: 45000
	},
	
	{
		name: "Kunal",
		age: 25,
		city: "Chennai",
		salary: 51000
	}
]

function display(obj){
	let addElements="";
	
	obj.forEach(function(ob, index){
		let addRow = `<tr>
					<td>${index+1}</td>
					<td>${ob.name}</td>
					<td>${ob.age}</td>
					<td>${ob.city}</td>
					<td>${ob.salary}</td>
					<td><button onclick="updateElement(${index})">Update</button>
						<button onclick="deleteElement(${index})">Delete</button>
					</td>
				  </tr>`;
		addElements += addRow;
	});
	document.getElementsByClassName('table-body')[0].innerHTML = addElements;
}

display(objs);

function addPerson(e){
	e.preventDefault();
	
	let obj={};
	
	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	let city = document.getElementById('city').value;
	let salary = document.getElementById('sal').value;
	
	obj.name = name;
	obj.age = Number(age);
	obj.city = city;
	obj.salary = Number(salary);
	
	objs.push(obj);
	
	display(objs);
	
	document.getElementById('name').value="";
	document.getElementById('age').value="";
	document.getElementById('city').value="";
	document.getElementById('sal').value="";
	
}

function searchDisplay(){
	let searchEle = document.getElementById("input").value;
	
	let searchArray = objs.filter(function(o){
		return (
		o.name.toLowerCase().indexOf(searchEle.toLowerCase())!=-1 || o.city.toLowerCase().indexOf(searchEle.toLowerCase())!=-1);
	});
	display(searchArray);
}

function deleteElement(index){
	if (confirm("Are you sure, you want to delete?")) {
		objs.splice(index, 1);
		display(objs);
	}
}
let uindex;
function updateElement(index){
	let modal = document.getElementsByClassName('modal')[0];
	modal.style.display="block";
	document.getElementById('upname').value = objs[index].name;
	document.getElementById('upage').value = objs[index].age;
	document.getElementById('upcity').value = objs[index].city;
	document.getElementById('upsal').value = objs[index].salary;
	uindex = index;
}

function submitUpdate(e){
	e.preventDefault();
	if (e.target.className == "modal" || e.target.className == "button") {
		let modal = document.getElementsByClassName('modal')[0];
		modal.style.display="none";
	}
	let name = document.getElementById('upname').value;
	let age = document.getElementById('upage').value;
	let city = document.getElementById('upcity').value;
	let salary = document.getElementById('upsal').value;
	objs[uindex].name = name;
	objs[uindex].age = Number(age);
	objs[uindex].city = city;
	objs[uindex].salary = Number(salary);
	
	display(objs);
	
	
}