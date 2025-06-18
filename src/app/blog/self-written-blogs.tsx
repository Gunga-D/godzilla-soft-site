import Link from "next/link";
import "../../layout/Blog/BlogPage/BlogPageStyle.css"
import React from "react";

export interface SelfWrittenBlogMetadata {
    id: string;
    title: string;
    created_at: string; // ISO date string or parsable date
    preview_url: string;
    slug: string;
}

export type SelfWrittenBlogComponent = React.FC<{}> & {
    metadata: SelfWrittenBlogMetadata;
};

export default function SelfWrittenBlogs(): SelfWrittenBlogComponent[] {
    return [
        createSelfWrittenBlog({
            id: 'self-1',
            title: 'Зеленый магазин и его подводные',
            created_at: '2025-04-09',
            preview_url: '/pirates-piracy-torrent-torrent-wallpaper-preview.jpg',
            slug: 'zelenie-magazin-ili-stoit-li-pokupat-lizenzirovanie-igri'
        }),
        createSelfWrittenBlog({
            id: 'self-2',
            title: 'Лучшие игры по мнению GODZILLA SOFT',
            created_at: '2025-04-07',
            preview_url: '/EGS_Warhammer40000SpaceMarine2_SaberInteractive_S1_2560x1440-975214651d1d1bc6c6e5779b53958840.jpeg',
            slug: 'luchshie-igri-2024-goda'
        })
    ];
}
function createSelfWrittenBlog(metadata: SelfWrittenBlogMetadata): SelfWrittenBlogComponent {
    const Component: React.FC = () => {
        return (
            <div className="BlogMainListItem">
                <Link href={`/blog/${metadata.slug}`} style={{textDecoration: "none"}}>
                    <img src={metadata.preview_url} className="BlogMainListItemImage" alt={metadata.title} />
                    <div className="BlogMainListItemDescription">
                        <p className="BlogMainListItemDate">
                            {new Date(metadata.created_at).toLocaleString("ru-RU", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <h2 className="BlogMainListItemTitle">{metadata.title}</h2>
                    </div>
                </Link>
            </div>
        );
    };

    const componentWithMetadata = Component as SelfWrittenBlogComponent;
    componentWithMetadata.metadata = metadata;
    return componentWithMetadata;
}