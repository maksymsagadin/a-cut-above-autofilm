const SectionHeadline = ({ children, title, id}) => {
    return (
        <section id={id} className='w-full h-full my-4 lg:my-8 relative'>
            <div className='flex flex-col justify-center px-4 lg:px-8'>
                <div className='pb-4 lg:pb-8'>
                    <p className='text-4xl px-2 pb-2 lg:px-10 lg:py-4 font-bold border-b-4 border-yellow-400'>
                        {title}
                    </p>
                </div>
                {children}
            </div>
        </section>
    )
}

export default SectionHeadline