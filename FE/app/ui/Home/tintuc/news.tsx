import Pagination from "@/app/ui/Master/Pagination"
import Card from "@/app/ui/Home/tintuc/Card"

const News = ({isSetting=false}:{
    isSetting? : boolean
}) => {

    return (
        <div className="rounded-lg">
            <Card isSetting={isSetting}></Card>
            <Card isSetting={isSetting}></Card>
            <Card isSetting={isSetting}></Card>
            <Card isSetting={isSetting}></Card>
            <Card isSetting={isSetting}></Card>
            <Pagination className='w-full flex justify-end mt-4' total={100}/>
        </div>
    );
}

export default News;
