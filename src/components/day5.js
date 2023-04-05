import React from 'react'

export default function Listfunction() {
    var fruits=["apple","orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"JEYA"},{id:2,name:"RUBY"},{id:3,name:"BHUVANA"},{id:4,name:"NANDHANAA"},{id:5,name:"DHATCHU"},{id:6,name:"LAKSHMI"}]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    <TryCatch name="jeya"/>
    </div>
  )
}
 function TryCatch(props){
    try{
        if(props.name==="jeya"){
            throw new Error("INVALID USER")
        }
    }
    catch(error){
        console.log(error)
    }
    //finally{
        //document.write("ALWAYS EXCEUTED")
   // }
    return(
        <>
    <p>{props.name}</p>
        </>
    );
}


