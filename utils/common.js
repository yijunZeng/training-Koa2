function formatCurrentDate(){
    const now = new Date();
    const y = now.getFullYear()
    const m = now.getMonth()
    const d = now.getDate()
    const h = now.getHours()
    const min = now.getMinutes()
    const s = now.getSeconds()
    const nowAt = `${y}-${m}-${d} ${h}:${min}:${s}`
    return nowAt;
}
module.exports = {
    formatCurrentDate
}