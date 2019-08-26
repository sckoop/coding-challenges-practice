export const isBalanced = (string) => {
  const brackets = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  const s = string.split('')
  let stack = []

  while (s.length) {
    let a = s.pop()
    if (!brackets[a]) {
      stack.push(a)
    } else if (brackets[a] !== stack.pop()) {
      return "NO"
    }
  }

  return s.length ? "NO"  : "YES"
}