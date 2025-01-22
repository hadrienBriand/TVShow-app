import { X } from 'react-bootstrap-icons';

interface ModaleProps {
    error: string;
    onXClick: () => void; // Nouvelle prop pour gérer le clic sur la croix
  }

export function  Modale({ error, onXClick }: ModaleProps){
return <div className="bg-black bg-opacity-60  fixed h-screen w-screen flex items-center justify-center">
   <div className="bg-white rounded-md w-96 h-48 p-4 flex items-center justify-center relative">
   <X size={30}  className='absolute top-2 right-2 cursor-pointer' onClick={onXClick}/>
    {error}
   </div>
</div>
}