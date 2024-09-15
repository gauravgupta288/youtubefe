import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex justify-between">
        <div className="pt-2 pl-2">
            <b>YouTube</b>
        </div>
        <div>
            <SearchBar></SearchBar>
        </div>
        <div className="pr-10 pt-2">
            <b>Sign In</b>
        </div>
    </div>
}