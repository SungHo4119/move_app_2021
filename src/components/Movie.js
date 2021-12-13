import React from "react";
import PropTypes from 'prop-types'
import './Movie.css'
import {Link} from 'react-router-dom'

// state가 필요하지 않음으로 크래서형 컴포넌트를 사용할 필요가 없음
function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: {year, title, summary, poster, genres}
                }}
            >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">
                    {title}
                </h3>
                <h5 className="movie__year">
                    {year}
                </h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className="movie__genre">
                                {genre}
                            </li>
                        );
                    })}
                </ul>
                <p className="movie__summary">
                    {summary.slice(0,180)}
                </p>
            </div>
            </Link>
        </div>
    );
}

// 영화 데이터를 정의하고 관리하기 위해 사용
Movie.prototype = {
    // id: PropTypes.number.isRequired,       // /id
    title: PropTypes.string.isRequired,    // 제목
    year: PropTypes.number.isRequired,     // 년도
    summary: PropTypes.string.isRequired,  // 요약내용
    poster: PropTypes.string.isRequired,   // 이미지 주소
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;