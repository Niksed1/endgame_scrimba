import {clsx} from 'clsx';

export default function Status({isGameWon,isGameOver}) {

    const className = clsx('status', isGameWon && 'won', isGameOver && 'lost');
    const h2 = isGameWon ? 'You win!' : isGameOver ? 'You lose!' : '\u00A0';
    const p = isGameWon ? 'Well done! 🎉' : isGameOver ? 'You lose! Better start learning Assembly 😭' : '\u00A0';
    
    console.log(className);
    return (
        <>
            <section className={className}>
                <h2>{h2}</h2>
                <p>{p}</p>
            </section>
        </>
    );
}