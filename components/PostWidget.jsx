import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services' 

const PostWidget = ({ categories, slug }) => {

    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
          getSimilarPosts(categories, slug).then((result) => {
            setRelatedPosts(result);
          });
        } else {
          getRecentPosts().then((result) => {
            setRelatedPosts(result);
          });
        }
      }, [slug]);

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-2xl mb-8 font-semibold border-b pb-4 tracking-wider font-didact text-center">
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map((post, index) => (
                <div key={post.title} className="flex items-center w-full mb-4 transition duration-500 hover:scale-105">
                    <div className="w-16 flex-none">
                      <a href={`/post/${post.slug}`}>
                        <img alt={post.title} height="60px" width="60px" src={post.featuredImage.url}
                                className="align-middle rounded-full" /> </a>
                    </div>
                    <div className="flex-grow ml-4 font-ubuntu text-lg tracking-wide">
                        <p className="text-gray-500 font-xs">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
