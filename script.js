/*make a rectangle and when we move mouse on that rectangel on the left side we wna to gradually change the color of the rectangle to red and when we move mouse to the right side we want to change the color to blue.*/
let rectl=document.querySelector("#center");
rectl.addEventListener("mousemove",function(details){
 let rectanglelocation=rectl.getBoundingClientRect();
let insiderectval=details.clientX-rectanglelocation.left;
if(insiderectval<rectanglelocation.width/2){
 let redcolor=gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderectval); 
 gsap.to(rectl,{
    backgroundColor:`rgb(${redcolor},0,0)`,
    ease: Power4,
 });
}
else{
    let bluecolor=gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insiderectval);
    gsap.to(rectl,{
    backgroundColor:`rgb(0,0,${bluecolor})`,
    ease: Power4,
    });
   
}
})
rectl.addEventListener("mouseleave",function(){
   gsap.to(rectl,{
    backgroundColor: "white",
   })
})
 