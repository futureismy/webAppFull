import React, { useEffect, useState } from "react";
import data from "../../assets/data/news.data.json";
import "./style.scss";

const News = () => {
  const newsTabList = data;

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="news"
      style={
        width > 721 ? { marginBottom: "30px" } : { paddingBottom: "150px" }
      }
    >
      <div className="container-fluid backgroundTop px-0">
        <ul className="nav nav-tabs news__tab  " role="tablist">
          <li className="nav-item news__tab__item">
            <a
              className="news__tab__link nav-link active"
              id="dien-anh-tab"
              data-toggle="tab"
              href="#dien-anh"
              role="tab"
              aria-controls="dien-anh"
              aria-selected="true"
            >
              Điện Ảnh 24h
            </a>
          </li>
          <li className="nav-item news__tab__item">
            <a
              className="news__tab__link nav-link"
              id="review-tab"
              data-toggle="tab"
              href="#review"
              role="tab"
              aria-controls="review"
              aria-selected="false"
            >
              Review
            </a>
          </li>
          <li className="nav-item news__tab__item">
            <a
              className="news__tab__link nav-link"
              id="khuyen-mai-tab"
              data-toggle="tab"
              href="#khuyen-mai"
              role="tab"
              aria-controls="khuyen-mai"
              aria-selected="false"
            >
              Khuyễn Mãi
            </a>
          </li>
        </ul>
        <div className="tab-content" id="news-tab-content">
          {newsTabList.map((tab, index) => {
            return (
              <div
                className={
                  index === 0 ? "tab-pane fade active show" : "tab-pane fade"
                }
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
                key={tab.id}
              >
                <div className="container">
                  <div className="row">
                    {tab.newsList.map((newsItem, index1) => {
                      // console.log(newsItem.smallNewList);
                      if (!newsItem.smallNewList) {
                        return (
                          <div
                            className={`col-news news ${
                              width > 721 ? "" : "col-12"
                            }`}
                            key={`${tab.id}-${index1}`}
                          >
                            <div className="news__image">
                              <a href="#">
                                <img
                                  alt="news"
                                  src={`./images/news/${tab.nameTab}/${newsItem.image}`}
                                />
                              </a>
                            </div>
                            <a className="news__link" href="#">
                              <p className="news__link__title">
                                {newsItem.title}
                              </p>
                            </a>
                            <p className="news__description">
                              {newsItem.description}
                            </p>
                            <div className="social">
                              <div className="social-icon icon-like">
                                <img
                                  src="./images/news/icons/like.png"
                                  alt="like"
                                />
                                <span>{newsItem.like}</span>
                              </div>
                              <div className="social-icon icon-comment ">
                                <img
                                  src="./images/news/icons/comment.png"
                                  alt="comment"
                                />
                                <span>{newsItem.comment}</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div
                          className={`col-news news ${
                            width > 721 ? "" : "col-12"
                          }`}
                          key={`${tab.id}-${index1}`}
                        >
                          <div className="row">
                            {newsItem.smallNewList.map((smallNew, index2) => {
                              return (
                                <div
                                  className="col-12"
                                  key={`${tab.id}-${index1}-${index2}`}
                                >
                                  <div className="news__image">
                                    <a href="#">
                                      <img
                                        alt="news"
                                        src={`./images/news/${tab.nameTab}/${smallNew.image}`}
                                      />
                                    </a>
                                  </div>
                                  <a className="news__link" href="#">
                                    <p className="news__link__title">
                                      {smallNew.title}
                                    </p>
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="text-center mt-5 seemore">
          <a className="btn-default">XEM THÊM</a>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default News;
