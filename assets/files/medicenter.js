/* Functions in page */
window.onload = function() {
    //Select the button and include click event in menu
    document.querySelector(".menuMobile").addEventListener("click", function(){

        if(document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector(".menu nav ul").style.display = 'none';
        
        } else { //Condition in IF for show other function in page
        
            document.querySelector(".menu nav ul").style.display = 'flex';
        
        }
    })
}