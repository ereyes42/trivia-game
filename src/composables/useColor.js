const useColor = () => {
  const colors = [
    'bg-emerald-200',
    'bg-yellow-100',
    'bg-purple-300',
    'bg-teal-200',
  ]
  const getColor = (index) => colors[index % colors.length]
  return { getColor }
}

export default useColor
