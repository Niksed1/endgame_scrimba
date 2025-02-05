
import { languages } from "./languages";
export default function Chips() {
    const langs = languages.map( language => {

        const styles = {
            color: language.color,
            backgroundColor: language.backgroundColor,
            borderRadius: '2px',
            padding: '3px'
        }
        return (
            <span style= {styles}>
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