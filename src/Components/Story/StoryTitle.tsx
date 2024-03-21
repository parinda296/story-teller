export default function StoryTitle({ title }: { title: string }) {
    return (
        <>
            <div style={{ fontFamily: "'Lobster', cursive" }} className='text-4xl lg:text-5xl font-bold text-white mb-4'>{title}</div>
        </>
    )
}
