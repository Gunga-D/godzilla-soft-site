import './BlogPageStyle.css'
import {Topic} from "../../../common/api/topic/topic";
import ReactMarkdown from "react-markdown";

type BlogsPageProps = {
    blog: Topic;
};

const BlogPage = ({ blog }: BlogsPageProps) => {
    return <div className="GameTopic">
        <div className="GameTopicTitle">
            {blog.title}
        </div>
        <ReactMarkdown>
            {blog.topic_content}
        </ReactMarkdown>
    </div>
};


export default BlogPage;