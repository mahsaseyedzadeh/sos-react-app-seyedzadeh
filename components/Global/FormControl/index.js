
export const FormControl = ({ handler, children }) => {
  return (
    <form onSubmit={handler}>
      {children}
    </form>
  )
}
