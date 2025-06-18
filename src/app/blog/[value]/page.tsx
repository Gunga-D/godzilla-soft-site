import './game-topic-styles.css';
import {topicApi} from "../../../common/api/topic/api";
import {Topic} from "../../../common/api/topic/topic";
import {getIdFromPath} from "../../../hooks/links";
import {toNumber} from "lodash";
import BlogPage from "../../../layout/Blog/BlogPage/BlogPage";

const emptyTopic: Topic = {
    id: 0,
    topic_content: "No content",
    title: "Empty title",
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
    preview_url: ""
}

type PageParams = Promise<{ value: string }>;

export default async function Page({ params }: { params: PageParams }) {
    const { value } = await params;
    const blogId = getIdFromPath(value);

    if (blogId === null) {
        return <div className="GameTopic">
            Статья не найдена
        </div>
    }

    const topic = await topicApi.getTopic(toNumber(blogId as string))
    return <BlogPage blog={topic}/>
}