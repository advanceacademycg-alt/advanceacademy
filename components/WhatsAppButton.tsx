import { waLink } from "@/lib/site";
export default function WhatsAppButton(){
  return <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110">
    <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3Zm0 23.7a10.700 10.700 0 0 1-5.500-1.500l-.4-.2-3.800 1.200 1.200-3.700-.3-.4A10.700 10.700 0 1 1 16 26.700Zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7 0a8.700 8.700 0 0 1-4.300-3.800c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.700 3.700 0 0 0-1.100 2.700c0 1.600 1.200 3.200 1.300 3.400s2.300 3.500 5.600 4.900c2.100.9 2.900.9 4 .8a3.400 3.400 0 0 0 2.200-1.600 2.700 2.700 0 0 0 .2-1.600c-.1-.1-.3-.2-.6-.4Z"/></svg></a>;
}
