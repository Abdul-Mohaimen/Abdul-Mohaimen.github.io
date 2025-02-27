import { getDevtoArticle, getMediumArticle } from 'article-api';
import moment from 'moment';
import { Fragment, useEffect, useState } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import PropTypes from 'prop-types';
import config from '../../../gitprofile.config';

const displaySection = () => {
  if (
    typeof config.blog !== 'undefined' &&
    typeof config.blog.source !== 'undefined' &&
    typeof config.blog.username !== 'undefined' &&
    config.blog.source &&
    config.blog.username
  ) {
    return true;
  } else {
    return false;
  }
};

const Blog = ({ loading }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    if (displaySection()) {
      if (config.blog.source === 'medium') {
        getMediumArticle({
          user: config.blog.username,
        }).then((res) => {
          setArticles(res);
        });
      } else if (config.blog.source === 'dev.to') {
        getDevtoArticle({
          user: config.blog.username,
        }).then((res) => {
          setArticles(res);
        });
      }
    }
  }, []);

  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < config.blog.limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-full',
                        height: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      width: 'w-24',
                      height: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        width: 'w-32',
                        height: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderArticles = () => {
    return (
      articles &&
      articles.slice(0, config.blog.limit).map((article, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={article.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (config.googleAnalytics?.id) {
                ga.event({
                  action: 'Click Blog Post',
                  params: {
                    post: article.title,
                  },
                });
              }
            } catch (error) {
              console.error(error);
            }

            window.open(article.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={article.thumbnail}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      width: 'w-full',
                      height: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-semibold text-base-content opacity-60">
                      {article.title}
                    </h2>
                    <p className="opacity-50 text-xs">
                      {moment(article.publishedAt).fromNow()}
                    </p>
                    <p className="mt-3 text-base-content text-opacity-60 text-sm">
                      {article.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {article.categories.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50"
                          key={index2}
                        >
                          #{category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    );
  };

  return (
    <Fragment>
      {displaySection() && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="card compact shadow-sm glass">
                <div className="card-body">
                  <div className="mx-3 mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-28', height: 'h-8' })
                      ) : (
                        <span className="opacity-70">Recent Posts</span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                      {loading || !articles
                        ? renderSkeleton()
                        : renderArticles()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Blog.propTypes = {
  loading: PropTypes.bool,
};

export default Blog;
