import {Search as SearchIcon} from "react-bootstrap-icons"

export function SearchBar (
    {value,onChange,onSubmit} 
    :{  value:string,
        onChange:(value:string)=> void
        onSubmit: (input:string) => void}){
    function submit(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
            onSubmit(e.currentTarget.value);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      };
return <div className="relative"> <SearchIcon size={27} className="absolute top-1/2 -translate-y-1/2 left-2" />
<input type="search" 
value={value} 
onKeyUp={submit}
onChange={handleInputChange}
className='py-3 pl-10 pr-3 rounded-md w-full' placeholder='Search a tv-show' />
</div>
}