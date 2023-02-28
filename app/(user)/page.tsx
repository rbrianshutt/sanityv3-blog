import Image from 'next/image';
import { Inter } from '@next/font/google';
import './../globals.css';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import { client } from '../../lib/sanity.client';
//import {cache} from 'react'
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

const inter = Inter({ subsets: ['latin'] });

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;
export const revalidate = 60 //revalidates this page every 60 seconds 


export default async function Home() {
	if (previewData()) {
		return (
			<PreviewSuspense
				fallback={
					<div role='status'>
						<p className='text-center text-lg animate-pulse text-[#f7ab0a]'>
							Loading Preview Data...
						</p>
					</div>
				}
			>
				<PreviewBlogList query={query} />
			</PreviewSuspense>
		);
	}

	const posts = await client.fetch(query);
	
  return <BlogList posts={posts} />;
}
