import emitter from '@/utils/event'
import { useNavigate } from 'react-router-dom'
export const usePermissions = () => {
  const navigate = useNavigate()
  useEffect(() => {
    emitter.on('401', () => {
      // 401 为401错误，需要跳转到登录页
      console.log('401 跳转登录页')
      navigate('/')
    })
  }, [])
}
