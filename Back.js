document.addEventListener("DOMContentLoaded", function() {
    function toggleCard(buttonClass, textClass, imgClass, listClass, listItems) {
        let button = document.querySelector(buttonClass);
        let text = document.querySelector(textClass);
        let image = document.querySelector(imgClass);
        let projectList = document.querySelector(listClass);
        let isOpen = false;

        button.addEventListener("click", function() {
            if (isOpen) {
       
                text.style.display = "block";  
                image.style.display = "block";
                projectList.style.maxHeight = "0";
                setTimeout(() => projectList.innerHTML = "",); 
                button.textContent = "Learn More";
                button.style.left = "70px";
                button.style.transform = "none";
            } else {
                
                text.style.display = "none";  
                image.style.display = "none"; 
                projectList.innerHTML = `<h5>Here My Project:</h5>
                    <ol>${listItems.map(item => `<li>${item}</li>`).join("")}</ol>`;
                projectList.style.maxHeight = "500px"; 
                button.textContent = "Close";
                button.style.left = "50%";
                button.style.transform = "translateX(-50%)";
            }
            isOpen = !isOpen;
        });
    }

    toggleCard(".ButtonCard1", ".TextCard1", ".PhotoCard1", ".ProjectList1", [
        "Writing short stories",
        "Creating educational journals",
    ]);

    toggleCard(".ButtonCard2", ".TextCard2", ".PhotoCard2", ".ProjectList2", [
        "Creating character illustrations",
        "Making character PixelArt",
    ]);

    toggleCard(".ButtonCard3", ".TextCard3", ".PhotoCard3", ".ProjectList3", [
        "Building a portfolio website",
    ]);
});
