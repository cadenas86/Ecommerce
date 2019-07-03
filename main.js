function openmenu()
{
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
    document.getElementById("slider").style.width="65%";
    document.getElementById("slider").style.marginLeft="35%";
}

function closemenu()
{
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
    document.getElementById("slider").style.width="100%";
    document.getElementById("slider").style.marginLeft="0";
}