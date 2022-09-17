export function AppContainer({ children }) {
  return (
    <div className="w-full mx-auto px-[2.4rem] tablet:px-0 tablet:w-[90%] desktop:w-[80%]">
      {children}
    </div>
  )
}
