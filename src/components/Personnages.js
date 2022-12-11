import Personne from './Personne.js'

function Personnages() {
    const personnages = [
        {actor:"Leonardo DiCaprio", role:"Jack Dawson"},
        {actor:"Kate Winslet", role:"Rose DeWitt Bukater"},
        {actor:"Billy Zane", role:"Caledon 'Cal' Hockley"}
    ];

    return (
        <div>
            <Personne data={personnages} />
        </div>
    );
}

export default Personnages;
