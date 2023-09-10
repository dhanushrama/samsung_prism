import http from 'http';
import console from 'console';
import remoteDB from "./lib/remoteDB.js";
import createUserData from "./lib/services/restDB.js";
// import window from 'window';
// import {fs} from 'fs';
// import window from 'window';
// import {child_process} from './childprocess';
// const { spawn } = require('child_process');
// import child_process from 'child_process';
// import express from 'express'
// import XMLHttpRequest from 'xmlH';

             

              // httpGetAsync(url)
  var op=[]
//    export default function open_link(events){
    
//     // find(event)
//     const {link,title,imgurl,id,desc}=events
//   if(link !=undefined)
//      {
      

//        return String(link)
      

//      }
  
//   else{
    
  
//     return "https://en.wikipedia.org/wiki/Croatia"
//   }
// }

export  function read_desc(event){
  if(event!=undefined)
     {
      //  const {a}=event
      // const a=event["desc"]

       return String(event.desc)
      // return a
      // window.open("https://www.w3schools.com",);


     }
  
  else{
    return "description is not available"
  }
}
              

export default function find(inputdate) {
  const {dateTimeExpression} = inputdate
  
  var month,day
  
  
  
  var url = "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/"
  

  if(dateTimeExpression.date){
    month = dateTimeExpression.date.month
    day = dateTimeExpression.date.day    
  }
//   var opt={
//     format:"json",
//     query:{
//       type:  "type"
//     }
//   };
  
// var p="https://getpantry.cloud/apiv1/pantry/f206ecfc-c23a-4f66-9d00-5691f58350c5"
// var l=http.getUrl(p,opt)
  
  var url1 = url.concat(month,"/",day)
  var options = {}

  options["language"] = "en"
  options["type"] = "events"
  
  if(typeof(month)!="undefined"){
    options["MM"]=String(month)
  }

  if(typeof(day)!="undefined"){
    options["DD"]=String(day)
  }

  var ret=[]
  // var events=[]
  
  var res = []
  // var ans = {}

  try{
    res = http.getUrl(url1,{query: options})
    ret = JSON.parse(res)
    ret = ret.events

  var ct=0,ct1=0,num=0
  for(var i=0;i<ret.length;i++){
    for(var j=0;j<ret[i].pages.length;j++){
      if(typeof ret[i].pages[j].originalimage != "undefined"){
        // console.log(ret[i].pages[j].originalimage.source)
        // bool = true
        ct1++
      }
      if(typeof ret[i].pages[j].extract != "undefined"){
          // console.log(i)
          // bool = true
          ct1++
        }
      if(typeof ret[i].pages[j].content_urls != "undefined"){
          // console.log(i)
          // bool = true
          ct1++
        }

      if(ct1==3){
        num=j
        break
      }
    }

    if(typeof ret[i].text !="undefined"){
      ct1++
    }
    if(ct1==4){
      // console.log(i)
    var ans={}
    ans["id"]=i
    var title = ret[i].text
    ans["title"] = String(title)
    var imgUrl = ret[i].pages[num].originalimage.source
    // tmp1 = {"imgUrl": String(imgUrl)}
    // ans.push(tmp1)
    ans["imgUrl"] = String(imgUrl)
    var desc = ret[i].pages[num].extract
    ans["desc"] = String(desc)
    var originalLink = ret[i].pages[num].content_urls.desktop.page
    ans["originalLink"] = String(originalLink)
    // ans["database"]=
    op[i]=ans
    ct++
    }

    if(ct==10){
      break
    }

    ct1=0
    num=0

  }

  
  }
  catch(err){
    console.log("ERROR: "+err)
  }

  // fs.writeFile('Output.txt', op, (err) => {
          
  //       // In case of a error throw err.
  //       if (err) throw err;
  //   })
  
// var jsonfile=JSON.stringify(op)
try{
createUserData(1,op)
}
catch(err){
  console.log(err)
}
    return op
  


}