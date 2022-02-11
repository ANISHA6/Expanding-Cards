// Bring all the panel into js
const panels=document.querySelectorAll('.panel');


//forEach function take function as argument
panels.forEach((panel)=>{//with panel argument, we can also give index and arr
	//select each panel and set event listener
	//when click happens , run a function for change we want
	panel.addEventListener('click',()=>{
		//Before make active other panel, make 1st panel inactive
		removeActiveClasses();
		//classList, gives the all classes 
		panel.classList.add('active');
	});

});

function removeActiveClasses(){
	panels.forEach((panel)=>{
		panel.classList.remove('active');
	});
}