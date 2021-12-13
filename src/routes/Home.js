import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],

  }
  // 영화 데이터 불러오는 API 호출하여 State에 저장
  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    // 이름이 같을땐 하나로 적을수있다~
    this.setState({ movies, isLoading: false })
  }

  // 컴포넌트가 그려진 후 호출되는 함수
  componentDidMount() {
    // 영화데이터 불러오기
    this.getMovie();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )
          : (
            <div className="movies">
              {
                movies.map((movie) => {
                  // console.log(movie)
                  return <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />;
                }
                )
              }
            </div>
          )
        }
      </section>
    );
  }
}


export default Home;
