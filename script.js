    // document.getElementById("first").onclick=function(){
    //     alert("first clicked");
    // }
    // document.getElementById("second").onclick=function(){
    //     alert("second clicked");
    // }
    // document.getElementById("third").onclick=function(){
    //     alert("third clicked");
    // }
    // document.getElementById("forth").setAttribute("id","fifth")
    // dom=document.getElementById("fifth").getAttribute("id");
    // console.log(dom);
    

    
    // eventPropagation
    // eventbubbling = false ,inner to outer
    // eventcapturing = true ,outer to inner


    document.getElementById("image",addEventListener('click',function(){
        console.log("clicked inside the ul");
    },false))

    // document.getElementById("second").addEventListener('click',function(e){
    //     console.log("Clicked second");
    //     e.stopPropagation();
    // },false)

    // document.getElementById("google").addEventListener('click',function(e){
    //     console.log("google clicked");
    //     e.stopPropagation();
    //     e.preventDefault();
        
    // },true)

    
    
                // some event name to know, it can see in console window
        // type, timeStamp, defaultPreveted
        // target, toElement, srcElement, currentTarget
        // clientX, clientY, screenX, screenY
        // altkey, ctrlkey, shiftkey, keycoke
    
    // document.querySelector("#image").addEventListener('click',function(e){
    //     console.log("width is = ",e.target.width);
    //     console.log("height is = ",e.target.height);
    // })



    // document.querySelector("#image").addEventListener('click',function(e){
    // //    console.log(e.target.tagName)
    //     if(e.target.tagName == 'IMG' || e.target.tagName=='A'){
    //         console.log("open ",e.target.id);
    //         let removeit =e.target.parentNode;
    //         removeit.remove();
    //     }
    //     else{
    //         console.log(e.target.tagName);
    //     }
        
    //     removeit=parentNode.removeChild(removeit);
    // },true)
    