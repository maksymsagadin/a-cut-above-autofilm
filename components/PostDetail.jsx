import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
    const getContentFragment = ( index, text, obj, type ) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }
            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }
            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }
        switch (type) {
            case 'heading-one':
                return (
                    <h1 key={index} className='text-4xl font-semibold mb-4' >
                        {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                    </h1>
                );
            case 'heading-two':
                return (
                    <h2 key={index} className='text-2xl font-semibold mb-4' >
                        {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                    </h2>
                );
            case 'heading-three':
                return (
                    <h3 key={index} className='text-xl font-semibold mb-4' >
                        {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                    </h3>
                );
            case 'heading-four':
                return  (
                    <h4 key={index} className='text-md font-semibold mb-4'>
                        {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                    </h4>
                );
            case 'paragraph':
                return  (
                    <p key={index} className='my-8'>
                        {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                    </p>
                );
            case 'block-quote':
                return  (
                    <p key={index} className='text-center quote my-8'>
                        {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
                    </p>
                );
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    }

    return (
        <div className='bg-gray-200 bg-opacity-10 text-gray-200 shadow-lg rounded-lg p-2 lg:p-8 mb-8'>
            <div className='relative overflow-hidden shadow-md mb-6'>
                <img
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className='object-top h-full w-full rounded-t-lg'
                />
            </div>
            <div className='px-2 '>
                <div className='flex items-center mb-8 w-full'>
                    <div className='flex items-center lg:mb-0 w-full lg:w-auto mr-8'>
                        <img 
                            alt={post.author.name}
                            src={post.author.photo.url}
                            height='50px'
                            width='50px'
                            className='rounded-full'
                            />
                        <p className='text-lg ml-4'>{post.author.name}</p>
                    </div>
                    <div className='font-medium flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6  text-gray-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className='text-lg  whitespace-nowrap'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>
                    </div>
                </div>
                <h1 className='mb-8 text-xl font-semibold'>
                    {post.title}
                </h1>
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                    return getContentFragment(index, children, typeObj, typeObj.type)
                })}
            </div>
        </div>
    )
}

export default PostDetail