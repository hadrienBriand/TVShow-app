import {Search as SearchIcon} from "react-bootstrap-icons"

export function SearchBar ({onSubmit} :{onSubmit: (input:string) => void}){
    function submit(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
            onSubmit(e.currentTarget.value);
        }
    }
return <div className="relative"> <SearchIcon size={27} className="absolute top-1/2 -translate-y-1/2 left-2" />
<input type="search" 
onKeyUp={submit}
className='py-3 pl-10 pr-3 rounded-md w-full' placeholder='Search a tv-show' />
</div>
}