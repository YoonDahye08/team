import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className='w-11/12 ml-24'>
        <Image src='/clud.png' width={5000} height={10} alt='img'/>
        <h1 className='text-3xl mt-6'>동아리 신청, 여기에서 시작하세요!</h1>
        
        <p className='mt-5 text-lg'>우리 사이트에서 신청하면 주는 혜택!</p>
        <ul className='mt-2'>
          <li>1. 동아리 방 지원!</li>
          <li>2. 동아리 활동 지원금 지급!</li>
          <li>3. 학식 제공!</li>
        </ul>
        <hr className="h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-10" />

        <p className='text-2xl'>동아리 활동 사진</p>

        <div className='ml-7'>
          <div className='flex float-left'>
            <Image src='/club1.png' width={400} height={70} alt='img' className='m-4'/>
            <Image src='/club2.png' width={400} height={70} alt='img' className='m-4'/>
            <Image src='/club3.png' width={400} height={70} alt='img' className='m-4'/>
          </div>

          <div className='flex float-left'>
            <Image src='/club4.png' width={400} height={70} alt='img' className='m-4'/>
            <Image src='/club5.png' width={400} height={70} alt='img' className='m-4'/>
            <Image src='/club6.png' width={400} height={70} alt='img' className='m-4'/>
          </div>
        </div>
      </div>
    </div>
  )
}
