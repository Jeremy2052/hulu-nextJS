
function HeaderItem({title,Icon}) {
  return (
    <div className=' group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
      <Icon className='group-hover:animate-bounce h-8 mb-1 '/>
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
    </div>
  )
}

export default HeaderItem
