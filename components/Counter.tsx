"use client";
import { useEffect, useRef, useState } from "react";
export default function Counter({value}:{value:string}){
  const m=value.match(/^(\d+)(.*)$/);const r=useRef<HTMLSpanElement>(null);const [n,setN]=useState(m?0:-1);
  useEffect(()=>{if(!m)return;const end=+m[1];const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
    const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();if(reduce){setN(end);return;}
      const t0=performance.now();const f=(t:number)=>{const p=Math.min((t-t0)/1200,1);setN(Math.round(end*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f);};requestAnimationFrame(f);});
    o.observe(r.current!);return()=>o.disconnect();},[]);// eslint-disable-line
  return <span ref={r}>{m?`${n}${m[2]}`:value}</span>;
}
