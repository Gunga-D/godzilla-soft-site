import Link from "next/link";
import React from "react";
import './BlogCardStyle.css'
import {FetchTopicsDTO} from "../../../common/api/topic/topic";

function BlogCard({dto}: { dto: FetchTopicsDTO }) {
    const pathToTopic = `/blog/${dto.title}_${dto.id}`
    return (
        <Link href={pathToTopic} className="BlogMainListItem">
            {dto.preview_url && (
                <img
                    src={dto.preview_url}
                    alt={dto.title}
                    className="BlogMainListItemImage"
                    loading="lazy"
                />
            )}
            <div className="BlogMainListItemDescription">
                <p className="BlogMainListItemDate">
                    {new Date(dto.created_at).toLocaleString("ru-RU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <h2 className="BlogMainListItemTitle">
                    {dto.title}
                </h2>
            </div>
        </Link>
    );
}

export default BlogCard;