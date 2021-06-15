export const PathDrawer = (SVGelement) => {
  let paths = SVGelement.querySelectorAll('path')
  paths.forEach((path) => {
    let pathLength = Number(path.getTotalLength()).toFixed(2)
    path.style.strokeDasharray = pathLength
    path.style.strokeDashoffset = pathLength
  })
}
