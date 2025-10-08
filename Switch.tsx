
import React from 'react';
export default function Switch({ checked, onChange }:{checked:boolean,onChange:(v:boolean)=>void}){
  return (
    <button onClick={()=>onChange(!checked)}
      className={`h-6 w-11 rounded-full relative transition ${checked?'bg-emerald-500':'bg-slate-300'}`}>
      <span className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full transition ${checked?'translate-x-5':''}`}/>
    </button>
  )
}
