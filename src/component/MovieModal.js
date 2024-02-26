const MovieModal = ({id, mImg, mAge, mTitle, mTime, mRating, mYear, director, actor ,summary, closeModal}) => {

    const handleClose = () => {
        closeModal(id);
    }

    return(
        <div className="MovieModal">
            <div className="modalImg">
                <img src={mImg} />
            </div>
            <div className="modalTxt">
                <div className="modaltxtTop">
                    <p className="modalAge">
                        <img src={mAge} />
                    </p>
                    <p className="modalTitle">{mTitle}</p>
                </div>
                <div className="modaltxtBottom">
                    <p className="modalTime">{mTime}</p>
                    <p className="modalRating"><span>☆</span>{mRating}</p>
                    <p className="modalYear">{mYear}</p>
                </div>
                <div className="modaltxtInfo">
                    <p className="modalDirector">감독 : {director}</p>
                    <p className="modalActor">출연배우 : {actor}</p>
                </div>
                <div className="modalSummary">{summary}</div>
                <div className="modalCloseBtn">
                    <button onClick={handleClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}
export default MovieModal;