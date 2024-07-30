import SearchBar from "@/app/ui/Account/baidang/tintuc/search-bar"
import News from "@/app/ui/Home/tintuc/news"

export default function MyNews() {
    return (
        <div>
            {/* <SearchBar></SearchBar> */}
            <div className="bg-white p-4 border rounded-lg">
                <News></News>
            </div>
        </div>
    );
}