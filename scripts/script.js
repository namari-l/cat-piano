//! const cats = ['1','2','3','4','5','6','7','8','9','0']

//!const keys = document.querySelectorAll(.'key')

//!keys.forEach(key => {
  //!key.addEventListener('click', () => playNote(key))
//!
//!document.addEventListener('keydown', e => {
  //!const key = e.key
//!  const catsIndex = cats.indexOf(key)

//!  if (catsIndex > -1) playnote(cats[catsIndex])
//!})

//!function playNote(key) {
//!  const noteAudio = document.getElementById(key.dataset.note)
//!  noteAudio.currentTime = 0
//!  noteAudio.play()
//!  key.classList.add('active')
//!  noteAudio.addEventListener('ended', () => {
//!    key.classList.remove('active')
//!  })
//!}
