//ABOUT SECTION CODE (PAGE-2) 
var tablinks = document.getElementsByClassName("tab-links");//REFERENCE OF SKILLS,EXP,EDU.
var tabcontents = document.getElementsByClassName("tab-contents");//REFERENCE OF CONTENTS FOR SKILLS,EXP,EDU.

function opentab(tabname) //EVENTLISTNER CALLBACK FUNCTION
{

    for (tablink of tablinks)//SO EVERYTIME WHEN WE CLICK ,THIS LOOP REMOVES BY DEFAULT PRESENT RED LINE (I.E ACTIVE-LINK) FROM SKLLS BOTOM. 
     {
        tablink.classList.remove("active-link");


    }
    for (tabcontent of tabcontents)//SIMILARLY IT WILL REMOVE BY DEFAULT ACTIVE CONTENT BELOW SKILLS (I.E ACTIVE-TAB)
     {
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");// THEN THIS ADD A RED LINE BELOW (SKILLS/EXP/EDU) ALSO THIS SAYS- ADD ACTIVE-LINK CLASS TO TABNAME (I.E SKILLS/EXP/EDU).
    document.getElementById(tabname).classList.add("active-tab");// THEN THIS IS TAKING A NEW REFERENCE FOR THE CONTENT WHICH WILL DISPLAY ON CLICKING AS THIS ADDS A CLASS IF IT IS NOT PRESNT. 


}