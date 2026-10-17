export default function Photo({src,label,className=""}:{src:string;label:string;className?:string}){
  return <div role="img" aria-label={label} className={`bg-green bg-cover bg-center flex items-end justify-center text-gold/60 text-5xl font-bold ${className}`}
    style={src?{backgroundImage:`url(${src})`}:undefined}>{!src&&<span className="pb-4">{label.replace(/[^A-Za-z]/g,"").charAt(0)}</span>}</div>;
}
