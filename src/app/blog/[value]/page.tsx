import {topicApi} from "../../../common/api/topic/api";
import {Topic} from "../../../common/api/topic/topic";
import {getIdFromPath, generatePathValue} from "../../../hooks/links";
import {toNumber} from "lodash";
import BlogPage from "../../../layout/Blog/BlogPage/BlogPage";
import {Metadata, ResolvingMetadata} from "next";

type PageParams = Promise<{ value: string }>;

export default async function Page({params}: { params: PageParams }) {
    const {value} = await params;
    const blogId = getIdFromPath(value);

    if (blogId === null) {
        return <div className="GameTopic">
            Статья не найдена
        </div>
    }

    const topic = await topicApi.getTopic(toNumber(blogId as string))
    return <BlogPage blog={topic}/>
}

export async function generateMetadata({params}: { params: PageParams }, parent: ResolvingMetadata): Promise<Metadata> {
    const {value} = await params;
    const blogId = getIdFromPath(value);

    const item = await topicApi.getTopic(Number(blogId));
    let images = [item.preview_url]

    return {
        metadataBase: new URL('https://godzillasoft.ru'),
        title: `${item.title} | GODZILLASOFT`,
        description: `Статья \`${item.title}\` на сайте цифровых товаров GODZILLA SOFT.`,
        openGraph: {
            type: "website",
            images: images,
            url: `/blog/${generatePathValue(item.title, item.id)}`,
        },
    }
}