export default function ButtonWrapper({ children, full, wrapperRef }: { children: React.ReactElement, full?: boolean, wrapperRef?: any }) {
  return (
    <>
      <div className={`p-1 ${full ? 'w-full' : ''}`} ref={wrapperRef}>
        {children}
      </div>
    </>
  )
}
