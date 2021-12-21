let move = document.getElementsByClassName('move')[0]
let cursor = document.getElementsByClassName('cursor')[0]
let cursorColor = "#000000"

move.addEventListener('mousemove', function (event) {
    // console.log(event.offsetX, event.offsetY)
    cursor.setAttribute('style', 'background-color:' + cursorColor + ';top:' + event.offsetY + 'px; left:' + event.offsetX + 'px;')
})

move.addEventListener('click', function () {
    // r, g, b를 각각 랜덤하게 0~255 까지 숫자로 뽑기

    let r = Math.floor((Math.random() * 256))
    let g = Math.floor((Math.random() * 256))
    let b = Math.floor((Math.random() * 256))

    cursorColor = `rgb(${r},${g},${b})`
})