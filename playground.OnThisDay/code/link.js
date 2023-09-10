  import console from 'console';
  
  export default function (events){
    
    // find(event)
    console.log(events)
    // const {link,title,imgurl,id,desc}=events
  if(events["originalLink"]!=undefined)
     {
      

       return String(events["originalLink"])
      

     }
  
  else{
    
  
    return "https://en.wikipedia.org/wiki/Croatia"
  }
}