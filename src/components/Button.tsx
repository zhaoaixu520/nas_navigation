import Image from 'next/image'

interface IButton {
  icon: string
  title: string
  onPress?: () => void
}

const Button = (props: IButton) => {
  const { icon, title, onPress } = props
  return (
    <div
      className='flex flex-row items-center bg-primary-back w-[47%] lg:w-[220px] h-[70px] px-2 rounded-xl py-4 hover hover:shadow-btn cursor-pointer'
      onClick={onPress}
    >
      <Image src={icon} alt='Nas' className='w-[38px] h-full' />
      <p className={'text-sm ml-4 text-white'}>{title}</p>
    </div>
  )
}

export default Button
