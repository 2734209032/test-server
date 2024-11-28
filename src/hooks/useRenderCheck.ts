export function useRenderCheck(cpName: string) {
  const render_count = useRef(0)
  render_count.current += 1
  console.log(`${cpName} render次数: ${render_count.current}`)
}
