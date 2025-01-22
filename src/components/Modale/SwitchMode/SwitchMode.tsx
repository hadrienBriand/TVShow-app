import {Film} from 'react-bootstrap-icons'
export function SwitchMode(
    {mode,onBtnClick} 
    :{mode :string;
        onBtnClick:((el:string) => void)
    }
){
return <div className='flex justify-end'>
        <button className='text-white font-light text-sm flex items-center flex-col' 
        onClick={() => onBtnClick(mode)}>
        <Film size={30} color='white' className='mb-2' />
        Switch to {mode}
        </button>
    </div>
}