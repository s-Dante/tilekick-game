"use client";

export default function PlayPage() {
    return (
        <div>
            <h1>Play</h1>
            <section>
                <form>
                    <div>
                        <h1>Modo de Juego</h1>
                        <div>
                            <input type="radio" name="gameMode" value="ai" />
                            <label htmlFor="ai">AI</label>
                        </div>
                        <div>
                            <input type="radio" name="gameMode" value="local" />
                            <label htmlFor="local">Local</label>
                        </div>
                        <div>
                            <input type="radio" name="gameMode" value="online" />
                            <label htmlFor="online">Online</label>
                        </div>
                    </div>

                    <div>
                        <h1>Escenario</h1>
                        <div>
                            <input type="radio" name="gameScenario" value="grass" />
                            <label htmlFor="ai">Pasto</label>
                        </div>
                        <div>
                            <input type="radio" name="gameScenario" value="cement" />
                            <label htmlFor="local">Cemento</label>
                        </div>
                        <div>
                            <input type="radio" name="gameScenario" value="sand" />
                            <label htmlFor="online">Arena</label>
                        </div>
                    </div>

                    <div>
                        <h1>Dimension</h1>
                        <div>
                            <input type="radio" name="gameMode" value="2d" />
                            <label htmlFor="ai">2D</label>
                        </div>
                        <div>
                            <input type="radio" name="gameMode" value="3d" />
                            <label htmlFor="local">3D</label>
                        </div>
                    </div>

                    <button type="submit">Play</button>
                </form>
            </section>
        </div>
    );
}