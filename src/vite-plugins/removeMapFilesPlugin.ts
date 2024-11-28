import { readdir, unlink } from 'fs/promises'
import { resolve } from 'path'

export default function removeMapFilesPlugin() {
  return {
    name: 'remove-map-files',
    apply: 'build',
    // 这个钩子是在构建完成后执行
    async closeBundle() {
      const distDir = resolve(process.cwd(), 'dist/assets')
      try {
        const files = await readdir(distDir)
        const mapFiles = files.filter(file => file.endsWith('.map'))
        await Promise.all(mapFiles.map(file => unlink(resolve(distDir, file))))

        console.log('Removed .map files from dist directory')
      } catch (err) {
        console.error('Error removing .map files:', err)
      }
    }
  }
}
