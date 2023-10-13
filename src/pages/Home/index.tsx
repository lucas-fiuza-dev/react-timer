export function Home() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />
          <label htmlFor="minutesAumount">durante</label>
          <input type="Number" id="minutesAmount" />
          <span>minutos</span>
        </div>
        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>
        <button type="submit"></button>
      </form>
    </div>
  )
}
