// Элементы
const display = document.getElementById("display");
const speedPlusBtn = document.getElementById("speedPlus");
const speedMinusBtn = document.getElementById("speedMinus");
const resetBtn = document.getElementById("reset");
const body = document.body;

// Состояние таймера
let seconds = 0;
let intervalMs = 1000;
let timerId = null;

// Границы скорости
const MIN_INTERVAL = 125;
const MAX_INTERVAL = 4000;

// Форматирование mm:ss
function formatTime(totalSec) {
    const mm = Math.floor(totalSec / 60);
    const ss = totalSec % 60;
    return String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
}

// Рендерим дисплей
function render() {
    display.textContent = formatTime(seconds);
}

// Запуск / перезапуск интервала
function restartTimer() {
    if (timerId !== null) clearInterval(timerId);
    timerId = setInterval(() => {
        seconds++;
        render();
    }, intervalMs);
}

// Применить тему (класс к body)
function applyTheme(theme) {
    body.classList.remove(
        "theme-default",
        "theme-speed-plus",
        "theme-speed-minus"
    );
    if (theme === "plus") body.classList.add("theme-speed-plus");
    else if (theme === "minus") body.classList.add("theme-speed-minus");
    else body.classList.add("theme-default");
}

// Действия кнопок
speedPlusBtn.addEventListener("click", () => {
    const newInterval = Math.max(MIN_INTERVAL, Math.floor(intervalMs / 2));
    intervalMs = newInterval;
    restartTimer();
    applyTheme("plus");
});

speedMinusBtn.addEventListener("click", () => {
    const newInterval = Math.min(MAX_INTERVAL, intervalMs * 2);
    intervalMs = newInterval;
    restartTimer();
    applyTheme("minus");
});

resetBtn.addEventListener("click", () => {
    seconds = 0;
    intervalMs = 1000;
    render();
    restartTimer();
    applyTheme("default");
});

render();
applyTheme("default");
restartTimer();
