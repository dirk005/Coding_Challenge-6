// Question 3: Write a function that converts HEX to RGB.
//   Then Make that function autodect the formats so that if you enter HEX color format it returns
//   RGB and if you enter RGB color format 
//   it returns HEX. 
//   Bonus: Release this tool as a npm package.

  const convertHexColor = () => {  
      let color = document.getElementById("hexColorInput").value;    
      R = hexToR(color);
      G = hexToG(color);
      B = hexToB(color);
      //document.getElementById("displayRGB").innerHTML = `rgb(${R},${G},${B})`; 
       document.getElementById("rColor").value = R;
      document.getElementById("gColor").value = G;
      document.getElementById("bColor").value = B;
      colorDisplay = document.querySelector(".displayColor");
       document.getElementById("displayColor").style.backgroundColor = `#${color}`;
  }

  //get color red
  const hexToR = (h) => {
    return parseInt((cutHex(h)).substring(0,2),16)
  }
  //get color green
  const hexToG = (h) => {
    return parseInt((cutHex(h)).substring(2,4),16)
  }
  //get color blue
  const hexToB =(h) => {
    return parseInt((cutHex(h)).substring(4,6),16)
  }
  //check if color has # in front and return string
  const  cutHex = (h) => {
    return (h.charAt(0)=="#") ? h.substring(1,7):h
  }

  const rgbToHex = () => {
     R = document.getElementById("rColor").value;
     G = document.getElementById("gColor").value;
     B = document.getElementById("bColor").value;
    if (R >255 || G >255 || B > 255){
      alert ('Value cant be more than 255')
    }else{
      hex = toHex(R)+toHex(G)+toHex(B);    
       document.getElementById("hexColorInput").value = hex;
       colorDisplay = document.querySelector(".displayColor");
       document.getElementById("displayColor").style.backgroundColor = `rgb(${R},${G},${B}`;
    }
  }

  const  toHex = (n) => {
    n = parseInt(n,10);
    
    if (isNaN(n)) { 
        return "00";
    } else {
       n = Math.max(0,Math.min(n,255));
      return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);;
    }
}
 
const hexConvert = document.getElementById("getRGB");
const rgbConvert = document.getElementById("getHEX");
 colorDisplay = document.querySelector(".displayColor");

hexConvert.addEventListener("click", convertHexColor);
rgbConvert.addEventListener("click", rgbToHex);


  