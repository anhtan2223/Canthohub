import Card from "@ui/Home/tintuc/Card"
import {newsPostSeeding} from "@data"

const RelatedNews = () => {

    return (
        <div className="rounded-lg">
            <p className="font-bold text-lg">Tin Tức Liên Quan</p>
            <Card post={newsPostSeeding} ></Card>
            <Card post={newsPostSeeding} ></Card>
            <Card post={newsPostSeeding} ></Card>
        </div>
    );
}

export default RelatedNews;
