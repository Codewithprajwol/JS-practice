document.querySelector("body").addEventListener("mousemove",function(dets){
  function prajwol(){
    document.querySelector("#ball").style.top=`${dets.clientY}px`;
    document.querySelector("#ball").style.left=`${dets.clientX}px`;

  }  
window.requestAnimationFrame(prajwol);
})

document.querySelector("body").addEventListener("click",function(){
    document.querySelector("h1").style.marginLeft="-100%";
    document.querySelector("h5").style.marginLeft="-100%";
    document.querySelector("#ball").style.opacity="0";
    document.querySelector("#ball").style.scale="0";
    function showImage() {
        // Create a new image element
        const img = document.createElement("img");
        img.src = "basketball.jpg"; // Replace "path_to_your_image.jpg" with the actual path to your image
    
        // Append the image to the body or any other desired element
        document.body.appendChild(img);
    }

    showImage();
    // Call the showImage function after a delay to ensure that the animation completes
    //   // Adjust the delay (in milliseconds) as needed
    

})
