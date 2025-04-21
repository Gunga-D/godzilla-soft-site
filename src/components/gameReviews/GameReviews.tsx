"use client"

import { useEffect, useState } from "react";
import "./GameReviewsStyle.css"
import { FetchReviewsData, ReviewDTO } from "../../common/api/item-reviews/types";
import { itemReviewsApi } from "../../common/api/item-reviews/api";

type GameReviewsProps = {
    itemID: number;
};

export const GameReviews = (props: GameReviewsProps) => {
    const [data, setData] = useState<FetchReviewsData | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const data = await itemReviewsApi.fetchReviews(props.itemID)
            setData(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    const [reviewText, setReviewText] = useState<string | undefined>(undefined);
    const [rating, setRating] = useState<number>(5); 
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    const sumbitReview = () => {
        const postReview = async() => {
            await itemReviewsApi.postReview(props.itemID, rating, reviewText)
            location.reload();
        }
        postReview()
    }

    return (
        <div style={{
            padding: '8px',
            marginTop: '25px',
        }}>
            <h3 className="GameReviewsTitle">Комментарии</h3>
            <p className="GameReviewsSubtitle"><span className="GameReviewsMark">{data?.score?.toFixed(1)||'???'}/5.0 {[...Array(data?.score?Math.round(data.score):0)].map((_, i) => <img key={i} src="/review-star.svg" style={{color: 'white'}}></img>)}</span></p>
            <div className="GameReviewPostReviewContainer">
                <p className="GameReviewPostReviewTitle">Оставить комментарий</p>
                <textarea placeholder="До 3000 символов" className="GameReviewPostReviewTextArea" onChange={(e) => setReviewText(e.target.value)}></textarea>
                <div className="GameReviewPostReviewFooter">
                    <button className="GameReviewPostReviewSendBtn" onClick={sumbitReview}>Отправить</button>
                    <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                            key={star}
                            className={`GameReviewPostReviewStar ${(hoverRating || rating) >= star ? 'filled' : ''}`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            >
                            ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="GameReviewsContainer">
                {data?.reviews?.map((review, idx) => (
                    <div key={idx} className='GameReview'>
                        <span className="GameReviewAvatar">🥸</span>
                        <div className="GameReviewHeader">
                            <div className="GameReviewHeaderDateCommented">{review.created_at}</div>
                            <div className="GameReviewHeaderUsernameCommented">Аноним</div>
                        </div>
                        <div className="GameReviewAsideHeader">
                            {[...Array(review.score)].map((_, i) => <img key={i} src="/review-star.svg" style={{color: 'white'}}></img>)}
                        </div>
                        <div className="GameReviewBody">
                            {review.comment}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}