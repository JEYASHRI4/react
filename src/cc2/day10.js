import React,{useState} from 'react'
export default function Form() {
    var[name,setName]=useState("")
    var[email,setemail]=useState("")
    const[data,setdata]=useState("")
    const[phone,setphone]=useState("")
    const[passport,setpassport]=useState("")
    const[tradate,settradate]=useState("")
    const[redate,setredate]=useState("")
    const[des,setdes]=useState("")
    const[reason,setreason]=useState("")
    const submit=(e)=>{
        e.preventDefault();
        setdata(`Name:${name}  Email:${email} Phone:${phone}  Passport:${passport}
        Travel date:${tradate} Return date:${redate}  Destination:${des}  Reason:${reason}`
        );
    }
  return (
    <div>
    <form onSubmit={submit}>
    ENTER YOUR NAME:<input type='text'  value={name}onChange={(e)=>setName(e.target.value)}></input>
    <br></br>
    ENTER YOUR EMAIL-ID<input type='email' onChange={(e)=>setemail(e.target.value)}></input><br></br>
    ENTER YOUR PHONE.NO<input type='number' onChange={(e)=>setphone(e.target.value)}></input><br></br>
    ENTER YOUR PASSPORT DETAILS<input type='text'onChange={(e)=>setpassport(e.target.value)}></input><br></br>
    ENTER YOUR TRAVEL DATE<input type='date' onChange={(e)=>settradate(e.target.value)}></input><br></br>
    ENTER YOUR RETURN DATE<input type='date'onChange={(e)=>setredate(e.target.value)}></input><br></br>
    ENTER YOUR DESTINATION<input type='text' onChange={(e)=>setdes(e.target.value)}></input><br></br>
    ENTER YOUR REASON OF TRAVEL<input type='text' onChange={(e)=>setreason(e.target.value)}></input><br></br>
    <br></br>
    <input type='submit' value='Submit'></input>
    <p>{data}</p>
    </form>
    </div>
  )
}
