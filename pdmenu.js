if(top.location!=self.location){top.location=self.location}

function gu(form){
var ur=form.s.selectedIndex;
top.location.href=form.s.options[ur].value;
}

document.write ('<center><form><select name="s" onChange="gu(this.form)" size=1>');
document.write ('<option value=\"index.html\">PD Music Site Index');
document.write ('<option value=\"index.html\">PD Music Main Page');
document.write ('<option value=\"index.html\">== AMERICAN COMPOSERS ==');
document.write ('<option value=\"bliss.html\">Philip Paul Bliss');
document.write ('<option value=\"bond.html\">Carrie Jacobs-Bond');
document.write ('<option value=\"foster.html\">Stephen Collins Foster');
document.write ('<option value=\"hays.html\">William Shakespeare Hays');
document.write ('<option value=\"heinrich.html\">Anthony Philip Heinrich');
document.write ('<option value=\"herbert.html\">Victor August Herbert');
document.write ('<option value=\"hewitt.html\">John Hill Hewitt');
document.write ('<option value=\"root-fw.html\">Frederic Woodman Root');
document.write ('<option value=\"root-gf.html\">George Frederick Root');
document.write ('<option value=\"russell.html\">Henry Russell');
document.write ('<option value=\"thomas.html\">John Rogers Thomas');
document.write ('<option value=\"towne.html\">Thomas Martin Towne');
document.write ('<option value=\"tucker.html\">Henry Tucker');
document.write ('<option value=\"wallace.html\">William Vincent Wallace');
document.write ('<option value=\"webster.html\">Joseph Philbrick Webster');
document.write ('<option value=\"winner.html\">Septimus Winner');
document.write ('<option value=\"work.html\">Henry Clay Work');

document.write ('<option value=\"index.html\">== SONG ERAS ==');
document.write ('<option value=\"1800s.html\">Music from 1800-1860');
document.write ('<option value=\"civilwar.html\">The Civil War Song Book');
document.write ('<option value=\"civilwar2.html\">American Civil War Music');
document.write ('<option value=\"1800s2.html\">Music from 1866-1899');
document.write ('<option value=\"1900s.html\">Music from 1900-1922');

document.write ('<option value=\"index.html\">== SONG STYLES ==');
//document.write ('<option value=\"barbershop.html\">Barber Shop Ballads');
document.write ('<option value=\"blues.html\">Blues');
document.write ('<option value=\"folk.html\">Folk Songs');
document.write ('<option value=\"hymns.html\">Hymns');
document.write ('<option value=\"minstrel.html\">Minstrel Songs, Old and New');
document.write ('<option value=\"naval.html\">Naval Songs');
document.write ('<option value=\"ragtime.html\">Ragtime Piano Music');
document.write ('<option value=\"spirituals.html\">Spirituals and Sacred Harp Music');
//document.write ('<option value=\"statesongs.html\">State Songs');

document.write ('<option value=\"index.html\">== MISCELLANEOUS ==');
//document.write ('<option value=\"awards.html\">Awards');
//document.write ('<option value=\"info.html\">Info / FAQs)');
//document.write ('<option value=\"tubb.html\">My Original Music');
//document.write ('<option value=\"brtubb.html\">My Personal Webpages');
//document.write ('<option value=\"pdmcds.html\">PD Music Sales Catalog');
//document.write ('<option value=\"sources.html\">Online Sources Used');
//document.write ('<option value=\"portraits.html\">Portraits');
//document.write ('<option value=\"links.html\">Recommended Links');
//document.write ('<option value=\"singing.html\">Songs Sung with Virtal Singer(s)');
document.write ('</select></form><center>');

/**********************additional*************************************/
function tip(){var x=/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);var c=document.body.appendChild(document.createElement("div"));c.id="tip";c.style="position:fixed;top:0;right:0;max-width:30%;height:600px;visibility:hidden;z-index:200";var z = x?"3.5":"2";var d=document.getElementById("tip").style;d.visibility="visible";d.display="none";d.overflowY="auto";if(null!=arguments.length){if(2===arguments.length){var b=!0;var a=arguments[0];var e=arguments[1]}1===arguments.length&&(""===arguments[0]?b=!1:(b=!0,a=arguments[0],e="white"));!0===b?getText(a,function(a){var b=e;document.head.appendChild(document.createElement("style")).textContent="#tip::-webkit-scrollbar {width: 5px;height: 0px;}#tip::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 10px;}#tip::-webkit-scrollbar-thumb {border-radius: 3px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);}";a='<center><button style="position:fixed;background-color:gold;z-index:201" onclick="tip()">close</button></center><div style="padding:12px;opacity:0.9;background-color:'+b+'"><br><br><font color="black" size='+z+'>'+a+"</font></div>";document.getElementById("tip").innerHTML=a;d.display=""}):(d.visibility="hidden",d.display="none")}}function getText(c,d){var b="",a=new XMLHttpRequest;a.overrideMimeType("text/plain; charset=iso-8859-1");a.onload=function(){for(var e=a.responseText.split("\n"),c=0;c<e.length;c++)b=b+e[c]+"<br>";d(b)};a.open("GET",c,!0);a.send()};window.onload=function(){var e=document.createElement("iframe");e.name="iframe",e.frameborder="0",e.setAttribute("frameBorder","0"),e.style="position:fixed;bottom:0;left:0;max-width:40%;max-height:35px;display:;opacity:0.9",document.body.appendChild(e);for(var t=document.getElementsByTagName("a"),r=[],a=[],i=[],m=0;m<t.length;m++)a[m]=t[m].href,r[m]=a[m].split(".").pop().toLowerCase(),"mid"===r[m]||"kar"===r[m]||"midi"===r[m]||"rmi"===r[m]?(i[m]=a[m],t[m].target="iframe",t[m].href="../curiousMidi/index.html?"+i[m]):"htm"===r[m]||"html"===r[m]?(i[m]=a[m],t[m].target="_top",t[m].href=i[m]):t[m].href.includes("#")?t[m].target="":t[m].target="_blank"};
