interface Props {
  className?: string
}

const Spinner = ({ className }: Props) => (
  <div className={`h-[60vh] flex items-center justify-center ${className}`}>
    <div className="border-gray-300 size-20 animate-spin rounded-full border-8 border-t-blue-600" />
  </div>
)

export default Spinner
