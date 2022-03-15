import React from 'react';
import moment from 'moment';
import { Box } from '@mui/material';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import { CopyBlock, dracula } from "react-code-blocks";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const PostDetail = ({ post }) => {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'rgb(200,200,255)',
      color: theme.palette.common.black,
      fontSize: 16,
      fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

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
              code_block: ({ children }) => {
                return (
                  <pre className="line-numbers language-none">
                      <CopyBlock text={children.props.content[0].text} language={'python'} showLineNumbers={false} theme={dracula} codeBlock/>
                  </pre>
                );
              },
              ul: ({ children }) => <ul className="mb-4 pl-4 list-disc" >{children}</ul>,
              ol: ({ children }) => <ol className="mb-4 pl-4 list-decimal" >{children}</ol>,
              a: ({ href, children }) => <a style={{ color:'rgba(102,98,253,255)', textDecoration: 'underline' }} href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
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
                table: ({ children }) => <TableContainer className='mt-6' component={Paper}><Table sx={{ minWidth: 350 }} aria-label="customized table">{children}</Table></TableContainer>,
                table_head: ({ children }) => <TableHead sx={{paddingY:'0px'}}>{children}</TableHead>,
                table_body: ({ children }) => <TableBody sx={{paddingY:'0px'}}>{children}</TableBody>,
                table_row: ({ children }) => <StyledTableRow sx={{paddingY:'0px'}}>{children}</StyledTableRow>,
                table_header_cell: ({ children }) => <StyledTableCell  align='center' sx={{paddingY:'0px', size:'small'}}>{children}</StyledTableCell>, 
                table_cell: ({ children }) => <StyledTableCell sx={{paddingY:'0px', size:'small'}}>{children}</StyledTableCell>,
            }}
          />
        </div>
      </div>
    </Box>
  );
};

export default PostDetail;
