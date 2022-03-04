export default function get(object, path) {
  return path.split('.').reduce((r, k) => r?.[k], object)
}
