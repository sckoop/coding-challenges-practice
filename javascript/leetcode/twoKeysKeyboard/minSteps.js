// https://leetcode.com/problems/2-keys-keyboard/

export const minSteps = (n) => {
  let notepad = 'A';
  let steps = 0;
  let clipboard = '';

  while(notepad.length < n) {
    if (clipboard.length < notepad.length && (n - notepad.length) % notepad.length === 0) {
      clipboard = notepad;
    } else {
      notepad += clipboard;
    }
    steps++;
  }

  return steps;
};