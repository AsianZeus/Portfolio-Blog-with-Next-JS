import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import Typography from "@mui/material/Typography";
import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-regal-blue shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">

    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>

    <Typography
            className="transition duration-700 font-semibold cursor-pointer hover:text-regal-green"
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '1.5rem',
              textAlign: "center",
              paddingX: '0.5rem',
              marginBottom: '0.8rem',
              color: "white",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              '@media (min-width:600px)': {
                fontSize: '1.8rem',
              },
            }}
          >
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </Typography>

    <div className="block lg:flex text-center items-center justify-center mb-6 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-300 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-regal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <Typography
            paragraph
            sx={{
              fontFamily: 'Montserrat',
              fontSize: '1.1rem',
              textAlign: "center",
              color: "white",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
      {post.excerpt}
    </Typography>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-regal-green text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
