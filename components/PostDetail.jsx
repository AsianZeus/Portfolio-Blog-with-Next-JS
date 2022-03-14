import React from 'react';
import moment from 'moment';
import { Box } from '@mui/material';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';

const PostDetail = ({ post }) => {

  return (
    <Box sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'black',
      }}
    >
      <div className="object-top bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-regal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
  
          <RichText
            content={post.content.raw}
            renderers={{
              h1: ({ children }) => <h1 className="text-4xl font-semibold mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-semibold mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-semibold mb-4">{children}</h3>,
              h4: ({ children }) => <h4 className="text-xl font-semibold mb-4">{children}</h4>,
              h5: ({ children }) => <h5 className="text-lg font-semibold mb-4">{children}</h5>,
              h6: ({ children }) => <h6 className="text-base font-semibold mb-4">{children}</h6>,
              p: ({ children }) => <p className="mb-8 break-words">{children}</p>,
              blockquote: ({ children }) => <blockquote>{children}</blockquote>,
              ul: ({ children }) => <ul className="mb-4 pl-4 list-disc" >{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 pl-4 list-decimal" >{children}</ol>,
              a: ({ href, children }) => <a style={{ fontStyle: 'italic', textDecoration: 'underline' }} href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
              img: ({  src, altText, height, width }) => 
              <center>
                <Image
                unoptimized
                  className="object-top mb-4 rounded-t-lg lg:rounded-lg"
                  alt={altText}
                  height={height}
                  width={width}
                  src={src}
                /></center>,
              table: ({ children }) => <table className="table-auto border-2 border-black">{children}</table>,
              thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
              tbody: ({ children }) => <tbody>{children}</tbody>,
              tr: ({ children }) => <tr>{children}</tr>,
              th: ({ children }) => <th className="p-2 bg-gray-200">{children}</th>,
              td: ({ children }) => <td className="p-2 border-2 border-black">{children}</td>,
              table_cell: ({ children }) => <td className="p-2 border-2 border-black">{children}</td>,
              embed: ({ children }) => <div className="mb-4">{children}</div>,
            }}
          />
        </div>
      </div>
    </Box>
  );
};

export default PostDetail;
