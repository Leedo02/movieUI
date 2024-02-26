import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieItem = ({id, mImg, mAge, mTitle, mTime, mRating, mYear, director, actor, summary}) => {

    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    };
    const closeModal = () => {
        setIsModal(false);
    };

    return(
        <li className="MovieItem">
            <div className="mImg">
                <img src={mImg} />
                <div className="modalShowBtn">
                    <button onClick={showModal}>상세보기</button>
                </div>
            </div>
            <div className="mTxt">
                <div className="txtTop">
                    <p className="mAge">
                        <img src={mAge} />
                    </p>
                    <p className="mTitle">{mTitle}</p>
                </div>
                <div className="txtBottom">
                    <p className="mTime">{mTime}</p>
                    <p className="mRating">
                        <span>☆</span>
                        {mRating}
                    </p>
                </div>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                <MovieModal
                    id={id}
                    mImg={mImg}
                    mAge={mAge}
                    mTitle={mTitle}
                    mTime={mTime}
                    mRating={mRating}
                    mYear={mYear}
                    director={director}
                    actor={actor}
                    summary={summary}
                    closeModal={closeModal}
                />
            </div>
        </li>
    );
}
export default MovieItem;