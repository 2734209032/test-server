import './App.scss'
import facebook1 from '@/assets/imgs/facebook-1.png'
import Instagram1 from '@/assets/imgs/Instagram-1.png'
import user_logo from '@/assets/imgs/user_logo.png'
import round_logo from '@/assets/imgs/round_logo.png'
import logo from '@/assets/imgs/logo.png'
import { UnorderedListOutline } from 'antd-mobile-icons'
import { Dropdown, DropdownRef, Ellipsis, List } from 'antd-mobile'
import jiantou from '@/assets/imgs/jantou.png'
import yun_png from '@/assets/imgs/yun_png.png'
import aixin from '@/assets/imgs/aixin.png'
import bg_logo1 from '@/assets/imgs/bg_logo1.png'
import bg_logo2 from '@/assets/imgs/bg_logo1.png'
import bg_logo3 from '@/assets/imgs/bg_logo1.png'
function App() {
  const ref = useRef<DropdownRef>(null)
  function setFont() {
    const screenWidth = document.querySelector('html')!.offsetWidth
    const baseSize = 37.5
    const pageWidth = 1720
    const fontSize = (baseSize * screenWidth) / pageWidth
    document.querySelector('html')!.style.fontSize = `${fontSize}px`
  }
  setFont()
  setTimeout(() => {
    setFont()
  }, 300)

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', setFont, false)
    window.addEventListener('resize', setFont, false)
    window.addEventListener('load', setFont, false)
    return () => {
      document.removeEventListener('DOMContentLoaded', setFont, false)
      window.removeEventListener('resize', setFont, false)
      window.removeEventListener('load', setFont, false)
    }
  }, [])

  return (
    <>
      {/* top start */}
      <div className='h-50 sm:h-60 bg-blue flex justify-between items-center px-12 lg:px-[100px] xl:px-[200px]'>
        <div className='flex'>
          <img src={facebook1} alt='' className='h-28 pr-12' />
          <img src={Instagram1} alt='' className='h-28' />
        </div>
        <div className='flex'>
          <img src={user_logo} alt='' className='h-28' />
          <span className='bg-[#707070] w-1 mx-20'></span>
          <img src={round_logo} alt='' className='h-28' />
        </div>
      </div>
      {/* logo navbar */}
      <div className='flex px-12 items-center justify-between lg:px-[100px] xl:px-[200px]'>
        <div className=' flex  items-center'>
          <img src={logo} alt='' className='h-94 sm:h-100' />
          <div className='text-[#2E3092] flex flex-col '>
            <span className='text-14'>免稅慈善機構編號</span>
            <span className='mt-5 text-14'>91-12259</span>
          </div>
        </div>
        <div className='pr-10'>
          <div className='block xl:hidden'>
            <Dropdown ref={ref} arrowIcon={<UnorderedListOutline fontSize={30} color='#1f1f1f' />}>
              <Dropdown.Item key='sorter' title=''>
                <div
                  onClick={() => {
                    ref.current?.close()
                  }}
                >
                  <List>
                    <List.Item>首頁</List.Item>
                    <List.Item>關於協會</List.Item>
                    <List.Item>最新活動</List.Item>
                    <List.Item>活動報名</List.Item>
                    <List.Item>活動花絮</List.Item>
                    <List.Item>媒體資訊</List.Item>
                    <List.Item>加入我們</List.Item>
                    <List.Item>聯絡我們</List.Item>
                  </List>
                </div>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <ul className='hidden xl:block'>
            <div className='flex'>
              <li className='mx-20'>首頁</li>
              <li className='mx-20'>關於協會</li>
              <li className='mx-20'>活動報名</li>
              <li className='mx-20'>活動花絮</li>
              <li className='mx-20'>媒體資訊</li>
              <li className='mx-20'>加入我們</li>
              <li className='ml-20'>聯絡我們</li>
            </div>
          </ul>
        </div>
      </div>
      {/* bg */}
      <div className="bg-[url('/src/assets/imgs/bg.png')] pl-30 sm:pl-80 md:pl-100 lg:pl-[150px] 3xl:pl-[500px] lg:pt-[200px] xl:pl-[200px] pt-48 w-full h-[150px] lg:h-[350px] xl:h-[450px] bg-no-repeat bg-[100%,100%]">
        <div className='w-100 leading-5 font-bold'>中國科學院青年實習計劃2024</div>
        <div className='flex items-center mt-10'>
          <div className='mr-5 w-30 h-30 rounded-40 flex justify-center items-center border-[1px] border-solid border-[#1f1f1f]'>
            <img src={jiantou} alt='' className='h-20' />
          </div>
          <span className='text-12'>了解更多</span>
        </div>
      </div>
      {/* 活动 */}
      <div className=' bg-[#F7F9FD]  relative'>
        <div className='pt-40 flex justify-between px-20 xl:px-[200px]'>
          <div>
            <span className='text-[#323594] font-bold text-[30px]'>最新</span>
            <span className='text-[#ed195e] font-bold text-[30px]'>活動</span>
          </div>
          <span className='border-[#707070] relative border-1 text-[#1f1f1f] font-bold border-solid rounded-[18px] flex justify-center items-center px-10'>
            更多活動
            <img
              src={aixin}
              alt=''
              className='absolute h-50 right-[-20px] xl:right-[-60px]  bottom-[-60px]'
            />
          </span>
        </div>
        <img src={yun_png} alt='' className='h-60 mt-10 xl:absolute ' />
        <div className='flex flex-col items-center mx-20  xl:flex-row xl:mx-[100px] 2xl:mx-[200px] justify-center'>
          <div className='shadow-custom xl:mr-20 rounded-t-[42px] mt-20 overflow-hidden'>
            <div className='w-full rounded-t-[42px] overflow-hidden'>
              <div className=" flex bg-[url('/src/assets/imgs/bg_1.png')] px-20 w-full  h-[200px] lg:h-[300px] md:h-[250px] bg-no-repeat bg-[100%,100%] xl:h-[240px]">
                <div className='pt-20 '>
                  <img src='/src/assets/imgs/banner.png' alt='' className='h-30 md:ml-20 ' />
                  <div className='w-[130px] leading-4 text-[#ffffff] text-center flex items-center mt-20 md:mt-70  h-[50px] bg-[#005b89] md:w-[176px] md:h-54 xl:mt-10'>
                    中國科學院 青年實習計劃2024
                  </div>
                  <div className='flex items-center xl:text-[16px] lg:mt-30 xl:mt-10 justify-center leading-4 text-center w-[130px] h-[50px] mt-5 bg-[#ffffff]'>
                    6 7 16 8<br /> 實習城市：北京
                  </div>
                </div>
                <div className=" flex justify-center xl:pb-30 items-center flex-1 bg-[url('/src/assets/imgs/tuzi.png')]  bg-no-repeat bg-[100%,100%]">
                  <img
                    src={bg_logo1}
                    alt=''
                    className='h-[130px] sm:h-[150px] md:h-[200px] xl:h-[150px]'
                  />
                </div>
              </div>
              {/* 文字 */}
              <h3 className=' flex items-center flex-col text-[20px] text-center pt-20 xl:pt-0  font-bold text-[#1b1b1b]'>
                <span>中國科學院青年實習計劃2024</span>
                <span className='w-[80%] mt-40 h-1 bg-[#cecece]'></span>
              </h3>
            </div>
            <div className='w-[80%] mt-20 pb-60 rounded-b-[42px] pl-20'>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>招募日期</span>
                <Ellipsis direction='middle' content='即日起至2024年5月12日(星期日)' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>實習日期</span>
                <Ellipsis direction='middle' content='2024年7月6日至8月16日(為期42天)' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>名額</span>
                <Ellipsis direction='middle' content='20名' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>對象</span>
                <div className='flex-1 '>
                  <Ellipsis
                    rows={4}
                    direction='middle'
                    content='參加者須為18-30歲的本地大專院校全日制學生；合適計劃的大學或大專院校學生可來自不同學系（詳情請見報名表）'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-custom xl:mr-20 rounded-t-[42px] mt-20 overflow-hidden'>
            <div className='w-full rounded-t-[42px] overflow-hidden'>
              <div className=" flex bg-[url('/src/assets/imgs/bg_2.png')] px-20 w-full  h-[200px] lg:h-[300px] md:h-[250px] bg-no-repeat bg-[100%,100%] xl:h-[240px]">
                <div className='pt-20'>
                  <img src='/src/assets/imgs/banner.png' alt='' className='h-30 md:ml-20 ' />
                  <div className='w-[130px] leading-4 text-[#ffffff] text-center flex items-center mt-20 md:mt-70  h-[50px] bg-[#005b89] md:w-[176px] md:h-54 xl:mt-10'>
                    中國科學院 青年實習計劃2024
                  </div>
                  <div className='flex items-center xl:text-[16px] lg:mt-30 xl:mt-10 justify-center leading-4 text-center w-[130px] h-[50px] mt-5 bg-[#ffffff]'>
                    6 7 16 8<br /> 實習城市：北京
                  </div>
                </div>
                <div className=" flex justify-center xl:pb-30 items-center flex-1 bg-[url('/src/assets/imgs/tuzi.png')]  bg-no-repeat bg-[100%,100%]">
                  <img
                    src={bg_logo2}
                    alt=''
                    className='h-[130px] sm:h-[150px] md:h-[200px] xl:h-[150px]'
                  />
                </div>
              </div>
              {/* 文字 */}
              <h3 className=' flex items-center flex-col text-[20px] text-center pt-20 xl:pt-0  font-bold text-[#1b1b1b]'>
                <span>中國科學院青年實習計劃2024</span>
                <span className='w-[80%] mt-40 h-1 bg-[#cecece]'></span>
              </h3>
            </div>
            <div className='w-[80%] mt-20 pb-60 rounded-b-[42px] pl-20'>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>招募日期</span>
                <Ellipsis direction='middle' content='即日起至2024年5月12日(星期日)' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>實習日期</span>
                <Ellipsis direction='middle' content='2024年7月6日至8月16日(為期42天)' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>名額</span>
                <Ellipsis direction='middle' content='20名' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>對象</span>
                <div className='flex-1 '>
                  <Ellipsis
                    rows={4}
                    direction='middle'
                    content='參加者須為18-30歲的本地大專院校全日制學生；合適計劃的大學或大專院校學生可來自不同學系（詳情請見報名表）'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='shadow-custom xl:mr-20 rounded-t-[42px] mt-20 overflow-hidden'>
            <div className='w-full rounded-t-[42px] overflow-hidden'>
              <div className=" flex bg-[url('/src/assets/imgs/bg_3.png')] px-20 w-full  h-[200px] lg:h-[300px] md:h-[250px] bg-no-repeat bg-[100%,100%] xl:h-[240px]">
                <div className='pt-20 '>
                  <img src='/src/assets/imgs/banner.png' alt='' className='h-30 md:ml-20 ' />
                  <div className='w-[130px] leading-4 text-[#ffffff] text-center flex items-center mt-20 md:mt-70  h-[50px] bg-[#005b89] md:w-[176px] md:h-54 xl:mt-10'>
                    中國科學院 青年實習計劃2024
                  </div>
                  <div className='flex items-center xl:text-[16px] lg:mt-30 xl:mt-10 justify-center leading-4 text-center w-[130px] h-[50px] mt-5 bg-[#ffffff]'>
                    6 7 16 8<br /> 實習城市：北京
                  </div>
                </div>
                <div className=" flex justify-center xl:pb-30 items-center flex-1 bg-[url('/src/assets/imgs/tuzi.png')]  bg-no-repeat bg-[100%,100%]">
                  <img
                    src={bg_logo3}
                    alt=''
                    className='h-[130px] sm:h-[150px] md:h-[200px] xl:h-[150px]'
                  />
                </div>
              </div>
              {/* 文字 */}
              <h3 className=' flex items-center flex-col text-[20px] text-center pt-20 xl:pt-0  font-bold text-[#1b1b1b]'>
                <span>中國科學院青年實習計劃2024</span>
                <span className='w-[80%] mt-40 h-1 bg-[#cecece]'></span>
              </h3>
            </div>
            <div className='w-[80%] mt-20 pb-60 rounded-b-[42px] pl-20'>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>招募日期</span>
                <Ellipsis direction='middle' content='即日起至2024年5月12日(星期日)' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>實習日期</span>
                <Ellipsis direction='middle' content='2024年7月6日至8月16日(為期42天)' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>名額</span>
                <Ellipsis direction='middle' content='20名' />
              </div>
              <div className='break-words flex mt-20'>
                <span className='text-[#000003] text-[18px] w-100 font-bold'>對象</span>
                <div className='flex-1 '>
                  <Ellipsis
                    rows={4}
                    direction='middle'
                    content='參加者須為18-30歲的本地大專院校全日制學生；合適計劃的大學或大專院校學生可來自不同學系（詳情請見報名表）'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
