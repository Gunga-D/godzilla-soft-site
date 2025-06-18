import "../../layout/Blog/BlogPage/BlogPageStyle.css"
import BlogCard from "../../layout/Blog/BlogCard/BlogCard"
import {topicApi} from "../../common/api/topic/api";
import SelfWrittenBlogs, {SelfWrittenBlogMetadata, SelfWrittenBlogComponent} from "./self-written-blogs";
import {FetchTopicsDTO} from "../../common/api/topic/topic";
import React from "react";

type CombinedItem =
    | { type: 'api'; data: FetchTopicsDTO }
    | { type: 'self'; component: SelfWrittenBlogComponent; metadata: SelfWrittenBlogMetadata };

export default async function TopicsPage()  {
    const apiTopics: FetchTopicsDTO[] = await topicApi.fetchTopics({
        limit: 10,
        offset: 0
    });

    const selfWrittenBlogs = SelfWrittenBlogs();

    const selfWrittenItems = selfWrittenBlogs.map(blog => ({
        type: 'self' as const,
        component: blog,
        metadata: blog.metadata
    }));

    const apiItems = apiTopics.map(topic => ({
        type: 'api' as const,
        data: topic
    }));

     const allItems: CombinedItem[] = [...selfWrittenItems, ...apiItems].sort((a, b) => {
        const dateA = a.type === 'self' ? a.metadata.created_at : a.data.created_at;
        const dateB = b.type === 'self' ? b.metadata.created_at : b.data.created_at;
        return new Date(dateB).getTime() - new Date(dateA).getTime();
    });

    if(allItems.length === 0) {
        return <div>
            <h1>Список статьей пуст</h1>
        </div>
    }

    return (
        <div className="BlogMainContainer">
            <h1 className="BlogMainTitle">Наш блог</h1>

            <div className="BlogMainListOfBlogsContainer">
                {allItems.map(item => (
                    item.type === 'self' ? (
                        <item.component key={item.metadata.id} />
                    ) : (
                        <BlogCard key={item.data.id} dto={item.data} />
                    )
                ))}
            </div>
        </div>
    );
}


