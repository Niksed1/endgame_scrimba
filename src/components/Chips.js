
import { languages } from "./languages";
import {clsx} from 'clsx';
export default function Chips({wrongGuessCount}) {
    console.log("chips: ", wrongGuessCount)

    const langs = languages.map((language, index) => {
        const className = clsx(index < wrongGuessCount ? 'lost' : '')
        const styles = {
            color: language.color,
            backgroundColor: language.backgroundColor,
            borderRadius: '2px',
            padding: '3px'
        }
        
        return (
            <span style={styles} className={className}>
                {language.name}
            </span>
        )
        
})

    return (
        <section className="Chips">
            {langs}
        </section>
    );
}