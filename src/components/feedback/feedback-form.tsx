import React, {useState, useEffect} from 'react';
import './feedback-form.css';


export default function FeedbackForm() {

    const [feedback, setFeedback] = useState({
        rating: 0,
        review: ""
    });

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const onRatingClick = (num: number) => {
        setRating(num)
    }

    const onReviewUpdate = (e) => setReview(e.target.value);
    
    const onSubmit = () => {
        try {
            if (rating === 0) {
                alert('Please Select rating')
                return
            }

            setFeedback({rating: rating, review: review})
        } catch(err) {

        }   
    }

    const ratings: any[] = [];
    for(let i = 0; i < 10; i++){
        ratings.push(
            <div
                key={i+1}
                id={i+1} 
                className={`rate ${rating === i+1 ? "rating-select" : "" }`}
                onClick={() => onRatingClick(i+1)}>
                    {i+1}
            </div>
        )
    }

    useEffect(() => {
        console.log(rating)

    }, [rating])

    return (
        <>
            <div className="card">
                <h1 className='card-title'>How would you rate your service with us?</h1>
                <div className="card-rating">
                    {
                        ratings
                    }
                </div>
                  <div className="card-input">
                    <input 
                        placeholder="Write review...." 
                        type="text" 
                        value={review}
                        onChange={(e) => onReviewUpdate(e)}
                    />
                    <button
                        onClick={() => {
                            onSubmit();
                            console.log(feedback)
                        }}
                    > 
                        Submit
                    </button>
                  </div>
            </div>
        </>
    )
}